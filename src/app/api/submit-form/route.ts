import { NextRequest, NextResponse } from 'next/server';

// このエンドポイントは /api/contact にリダイレクトします
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // formType が指定されていない場合は 'apply' をデフォルトとする
    const dataToSend = {
      ...body,
      formType: body.formType || 'apply'
    };
    
    // /api/contact エンドポイントにリクエストを転送
    const baseUrl = request.nextUrl.origin;
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    
    const result = await response.json();
    
    return NextResponse.json(result, { status: response.status });
    
  } catch (error) {
    console.error('API処理エラー:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'サーバーエラーが発生しました' 
      },
      { status: 500 }
    );
  }
}