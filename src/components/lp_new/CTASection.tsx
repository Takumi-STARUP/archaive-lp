'use client';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#37B7C4] to-[#2a9aa5]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-white">
          {/* メインメッセージ */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            データに埋もれた可能性を、<br />
            競争力に変える時が来ました
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            ARCHAIVEと共に、貴社の「知の資産」を築き上げ、<br />
            ものづくりの未来を創造しませんか？
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-[#37B7C4] hover:bg-gray-50 px-10 py-4 text-xl font-bold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              DX専門家に相談する
              <span className="ml-2 text-[#f54848] font-bold">（無料）</span>
            </Button>
            
            <Button 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#37B7C4] bg-transparent px-10 py-4 text-xl font-semibold rounded-lg transition-all duration-200"
            >
              サービス詳細資料をダウンロード
            </Button>
          </div>

          {/* 追加情報 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="mb-2">
                <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 10 10 3.35 0 6.31-1.65 8.12-4.19l-2.6-1.53A6.95 6.95 0 0112 19z"/>
                </svg>
              </div>
              <div className="font-semibold mb-2">最短30分でご相談</div>
              <div className="text-sm opacity-80">お忙しい方も安心の短時間相談</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="mb-2">
                <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
              </div>
              <div className="font-semibold mb-2">相談料完全無料</div>
              <div className="text-sm opacity-80">導入前のご相談は一切費用がかかりません</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="mb-2">
                <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <div className="font-semibold mb-2">貴社専用の提案</div>
              <div className="text-sm opacity-80">業界・規模に合わせたオーダーメイド提案</div>
            </div>
          </div>

          {/* お問い合わせの流れ */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8">相談から導入までの流れ</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <div className="font-semibold mb-2">お問い合わせ</div>
                <div className="text-sm opacity-80">フォームより簡単登録</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <div className="font-semibold mb-2">ヒアリング</div>
                <div className="text-sm opacity-80">現状課題を詳しくお聞かせください</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <div className="font-semibold mb-2">提案・デモ</div>
                <div className="text-sm opacity-80">貴社に最適なソリューションをご提案</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <div className="font-semibold mb-2">導入開始</div>
                <div className="text-sm opacity-80">専任チームが導入をサポート</div>
              </div>
            </div>
          </div>

          {/* 最終メッセージ */}
          <div className="mt-12">
            <p className="text-lg opacity-90">
              ものづくりの未来は、データの活用から始まります。<br />
              <span className="font-bold text-xl">今すぐ、その第一歩を踏み出しませんか？</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}