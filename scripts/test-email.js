#!/usr/bin/env node

/**
 * メール送信機能のテストスクリプト
 * 使い方: node scripts/test-email.js
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const testData = {
  companyName: 'テスト株式会社',
  name: 'テスト太郎',
  department: '開発部',
  position: 'エンジニア',
  email: '',  // ユーザーが入力
  phone: '03-1234-5678',
  employeeCount: '10-50人',
  purpose: 'デモ・トライアル',
  message: 'これはテストメッセージです。\nメール送信機能の動作確認を行っています。',
  privacyPolicy: true
};

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function sendTestRequest(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  console.log('\n📧 フォーム送信テストを開始します...');
  console.log('送信先URL:', `${baseUrl}/api/contact`);
  console.log('送信データ:', JSON.stringify(data, null, 2));
  
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    const headers = {};
    response.headers.forEach((value, key) => {
      if (key.startsWith('x-ratelimit')) {
        headers[key] = value;
      }
    });
    
    console.log('\n📬 レスポンス:');
    console.log('ステータス:', response.status);
    console.log('ボディ:', JSON.stringify(result, null, 2));
    
    if (Object.keys(headers).length > 0) {
      console.log('レート制限情報:', headers);
    }
    
    if (response.ok) {
      console.log('\n✅ テスト成功！メールが送信されました。');
      console.log('以下を確認してください:');
      console.log('1. 管理者メール（ADMIN_EMAIL）の受信ボックス');
      console.log('2. テストメール（入力したアドレス）の受信ボックス');
      console.log('3. Slack通知（設定している場合）');
    } else {
      console.log('\n❌ エラーが発生しました:', result.error);
      if (response.status === 429) {
        console.log('レート制限に達しています。しばらく待ってから再試行してください。');
      }
    }
  } catch (error) {
    console.error('\n❌ リクエストエラー:', error.message);
    console.log('\nサーバーが起動していることを確認してください:');
    console.log('npm run dev');
  }
}

async function main() {
  console.log('=================================');
  console.log('   メール送信機能テストツール   ');
  console.log('=================================\n');
  
  console.log('環境変数の確認:');
  console.log('- RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ 設定済み' : '❌ 未設定');
  console.log('- ADMIN_EMAIL:', process.env.ADMIN_EMAIL || '未設定');
  console.log('- FROM_EMAIL:', process.env.FROM_EMAIL || '未設定（デフォルト使用）');
  console.log('- SLACK_WEBHOOK_URL:', process.env.SLACK_WEBHOOK_URL ? '✅ 設定済み' : '未設定');
  
  console.log('\n注意: 環境変数が設定されていない場合は、');
  console.log('.env.localファイルを作成し、必要な値を設定してください。\n');
  
  const email = await askQuestion('テスト用メールアドレスを入力してください: ');
  
  if (!email) {
    console.log('メールアドレスが入力されませんでした。');
    rl.close();
    return;
  }
  
  testData.email = email;
  
  const confirm = await askQuestion(`\n${email} にテストメールを送信します。よろしいですか？ (y/n): `);
  
  if (confirm.toLowerCase() === 'y') {
    await sendTestRequest(testData);
  } else {
    console.log('テストをキャンセルしました。');
  }
  
  rl.close();
}

// Node.js環境でfetchを使えるようにする
if (typeof fetch === 'undefined') {
  global.fetch = require('node-fetch');
}

main().catch(console.error);