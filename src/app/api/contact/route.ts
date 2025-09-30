import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormLimiter } from '@/lib/rate-limit';
import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // レート制限チェック
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    if (!contactFormLimiter.isAllowed(clientIp)) {
      const resetTime = contactFormLimiter.getResetTime(clientIp);
      const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
      
      return NextResponse.json(
        { 
          error: 'リクエストが多すぎます。しばらく待ってから再度お試しください。',
          retryAfter 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(resetTime).toISOString(),
            'Retry-After': retryAfter.toString()
          }
        }
      );
    }

    const body = await request.json();
    
    // 1. バリデーション
    const { companyName, name, department, position, email, phone, employeeCount, purpose, message, formType } = body;
    
    if (!companyName || !name || !email || !phone || !employeeCount || !purpose) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }
    
    // 2. データベース保存
    let lead;
    try {
      lead = await prisma.lead.create({
        data: {
          companyName,
          name,
          department: department || null,
          position: position || null,
          email,
          phone,
          employeeCount,
          purpose,
          message: message || null,
          formType: formType || 'apply',
        },
      });
      console.log('リード情報をDBに保存:', lead.id);
    } catch (dbError) {
      console.error('データベース保存エラー:', dbError);
      // DBエラーでもメール送信は続行
    }
    
    // 3. 管理者への通知メール送信
    const adminEmails = process.env.ADMIN_EMAIL?.split(',').map(email => email.trim()) || [];
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    let adminEmailSent = false;

    if (adminEmails.length > 0 && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: adminEmails,
          subject: `【新規お問い合わせ】${formType === 'demo' ? 'デモ申込' : formType === 'download' ? '資料DL' : 'お問い合わせ'} - ${companyName} - ${name}様`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
                <h2 style="color: #2563eb; margin-bottom: 20px;">新規お問い合わせがありました</h2>
                
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                  <h3 style="margin-top: 0; color: #495057;">お客様情報</h3>
                  ${lead ? `<p style="margin: 5px 0; font-size: 12px; color: #6c757d;">ID: ${lead.id}</p>` : ''}
                  <p style="margin: 5px 0;"><strong>フォーム種別:</strong> <span style="background: ${formType === 'demo' ? '#f97316' : formType === 'download' ? '#10b981' : '#6b7280'}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px;">${formType === 'demo' ? 'デモ申込' : formType === 'download' ? '資料DL' : 'お問い合わせ'}</span></p>
                  <p style="margin: 5px 0;"><strong>会社名:</strong> ${companyName}</p>
                  <p style="margin: 5px 0;"><strong>お名前:</strong> ${name}様</p>
                  ${department ? `<p style="margin: 5px 0;"><strong>部署:</strong> ${department}</p>` : ''}
                  ${position ? `<p style="margin: 5px 0;"><strong>役職:</strong> ${position}</p>` : ''}
                  <p style="margin: 5px 0;"><strong>メールアドレス:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p style="margin: 5px 0;"><strong>電話番号:</strong> ${phone}</p>
                  <p style="margin: 5px 0;"><strong>従業員数:</strong> ${employeeCount}</p>
                  <p style="margin: 5px 0;"><strong>お問い合わせ目的:</strong> ${purpose}</p>
                </div>
                
                ${message ? `
                <div style="background-color: #fff; padding: 15px; border-left: 3px solid #2563eb; margin-bottom: 20px;">
                  <h3 style="margin-top: 0; color: #495057;">メッセージ</h3>
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                ` : ''}
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #6c757d;">
                  <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
                </div>
              </div>
            </div>
          `
        });
        adminEmailSent = true;
        
        // メール送信ログを保存
        if (lead) {
          await prisma.emailLog.create({
            data: {
              leadId: lead.id,
              type: 'admin_notification',
              recipient: adminEmails.join(','),
              subject: `【新規お問い合わせ】${formType === 'demo' ? 'デモ申込' : formType === 'download' ? '資料DL' : 'お問い合わせ'} - ${companyName} - ${name}様`,
              content: '管理者への通知メール',
              status: 'sent',
            },
          }).catch(console.error);
        }
      } catch (emailError) {
        console.error('管理者へのメール送信エラー:', emailError);
        
        // エラーログを保存
        if (lead) {
          await prisma.emailLog.create({
            data: {
              leadId: lead.id,
              type: 'admin_notification',
              recipient: adminEmails.join(','),
              subject: `【新規お問い合わせ】${formType === 'demo' ? 'デモ申込' : formType === 'download' ? '資料DL' : 'お問い合わせ'} - ${companyName} - ${name}様`,
              content: '管理者への通知メール',
              status: 'failed',
              error: emailError instanceof Error ? emailError.message : String(emailError),
            },
          }).catch(console.error);
        }
      }
    }
    
    // 4. お客様への自動返信メール（コメントアウト）
    /*
    let customerEmailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: '【ARCHAIVE】お問い合わせありがとうございます',
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #2563eb; font-size: 28px; margin: 0;">ARCHAIVE</h1>
                  <p style="color: #6b7280; margin: 5px 0;">Document Management System</p>
                </div>
                
                <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 20px 0;">拝啓 ${name}様</p>
                  
                  <p style="margin: 0 0 20px 0;">この度は<strong>ARCHAIVE</strong>にお問い合わせいただき、誠にありがとうございます。</p>
                  
                  <p style="margin: 0 0 20px 0;">以下の内容でお問い合わせを承りました。</p>
                  
                  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
                    <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 16px;">お問い合わせ内容</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280; width: 30%;">会社名</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${companyName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280;">お名前</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${name}様</td>
                      </tr>
                      ${department ? `
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280;">部署</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${department}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280;">メールアドレス</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280;">電話番号</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; color: #6b7280;">従業員数</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${employeeCount}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; ${message ? 'border-bottom: 1px solid #e5e5e5;' : ''} color: #6b7280;">お問い合わせ目的</td>
                        <td style="padding: 8px 0; ${message ? 'border-bottom: 1px solid #e5e5e5;' : ''}">${purpose}</td>
                      </tr>
                      ${message ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">メッセージ</td>
                        <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>
                  
                  <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
                    <p style="margin: 0; color: #92400e;"><strong>今後の流れ</strong></p>
                    <p style="margin: 10px 0 0 0; color: #92400e;">担当者より<strong>2営業日以内</strong>にご連絡させていただきます。</p>
                    <p style="margin: 5px 0 0 0; color: #92400e;">今しばらくお待ちください。</p>
                  </div>
                  
                  <p style="margin: 20px 0 0 0;">ご不明な点がございましたら、このメールにご返信いただくか、下記までお問い合わせください。</p>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0; color: #6b7280; font-size: 14px;">敬具</p>
                    <p style="margin: 10px 0 0 0; font-weight: bold;">ARCHAIVE サポートチーム</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                  <p style="margin: 0; color: #6b7280; font-size: 12px;">© 2024 ARCHAIVE. All rights reserved.</p>
                  <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                    <a href="https://archaive.jp" style="color: #2563eb; text-decoration: none;">archaive.jp</a>
                  </p>
                </div>
              </div>
            </div>
          `
        });
        customerEmailSent = true;
        
        // メール送信ログを保存
        if (lead) {
          await prisma.emailLog.create({
            data: {
              leadId: lead.id,
              type: 'customer_confirmation',
              recipient: email,
              subject: '【ARCHAIVE】お問い合わせありがとうございます',
              content: 'お客様への自動返信メール',
              status: 'sent',
            },
          }).catch(console.error);
        }
      } catch (emailError) {
        console.error('自動返信メール送信エラー:', emailError);
        
        // エラーログを保存
        if (lead) {
          await prisma.emailLog.create({
            data: {
              leadId: lead.id,
              type: 'customer_confirmation',
              recipient: email,
              subject: '【ARCHAIVE】お問い合わせありがとうございます',
              content: 'お客様への自動返信メール',
              status: 'failed',
              error: emailError instanceof Error ? emailError.message : String(emailError),
            },
          }).catch(console.error);
        }
      }
    }
    */
    
    // 5. Slack通知（コメントアウト）
    /*
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🎯 新規お問い合わせ`,
            blocks: [
              {
                type: 'header',
                text: {
                  type: 'plain_text',
                  text: '新規お問い合わせ 📬',
                  emoji: true
                }
              },
              {
                type: 'section',
                fields: [
                  {
                    type: 'mrkdwn',
                    text: `*会社名:*\n${companyName}`
                  },
                  {
                    type: 'mrkdwn',
                    text: `*お名前:*\n${name}様`
                  },
                  {
                    type: 'mrkdwn',
                    text: `*メール:*\n${email}`
                  },
                  {
                    type: 'mrkdwn',
                    text: `*電話:*\n${phone}`
                  },
                  {
                    type: 'mrkdwn',
                    text: `*従業員数:*\n${employeeCount}`
                  },
                  {
                    type: 'mrkdwn',
                    text: `*目的:*\n${purpose}`
                  },
                  ...(lead ? [{
                    type: 'mrkdwn',
                    text: `*ID:*\n${lead.id}`
                  }] : [])
                ]
              },
              ...(message ? [
                {
                  type: 'section',
                  text: {
                    type: 'mrkdwn',
                    text: `*メッセージ:*\n${message}`
                  }
                }
              ] : [])
            ]
          })
        });
      } catch (slackError) {
        console.error('Slack通知エラー:', slackError);
      }
    }
    */
    
    // 6. CRM連携（将来的に実装）
    // TODO: HubSpot/Salesforce等のCRM連携
    
    // レート制限情報をヘッダーに追加
    const remaining = contactFormLimiter.getRemainingRequests(clientIp);
    const resetTime = contactFormLimiter.getResetTime(clientIp);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました',
        leadId: lead?.id,
        emailsSent: {
          admin: adminEmailSent,
          customer: false // 自動返信は無効化
        }
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': new Date(resetTime).toISOString()
        }
      }
    );
    
  } catch (error) {
    console.error('フォーム送信エラー:', error);
    
    // エラーログをSentryやDatadogに送信
    // Sentry.captureException(error);
    
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}