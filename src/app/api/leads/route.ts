import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // クエリパラメータ
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status') || undefined;
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';
    
    const skip = (page - 1) * limit;
    
    // 検索条件
    const where = status ? { status } : {};
    
    // データ取得
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),
      prisma.lead.count({ where }),
    ]);
    
    return NextResponse.json({
      data: leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('リード取得エラー:', error);
    return NextResponse.json(
      { error: 'リード情報の取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { error: 'IDが指定されていません' },
        { status: 400 }
      );
    }
    
    const lead = await prisma.lead.update({
      where: { id },
      data: updateData,
    });
    
    return NextResponse.json(lead);
  } catch (error) {
    console.error('リード更新エラー:', error);
    return NextResponse.json(
      { error: 'リード情報の更新に失敗しました' },
      { status: 500 }
    );
  }
}