'use client';

import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SuenamiCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* インタビューセクション */}
        <div className="interview-section">
          <div className="interview-header">
            <h1>Interview</h1>
            <h2>インタビュー</h2>
          </div>
        </div>

        {/* インタビューコンテンツ */}
        <div className="interview-content-wrapper">
          <div className="interview-content">
            <h3>スエナミ工業株式会社/営業 兼 開発 横山智一様 ✖️ STAR UP/稲元 海翔</h3>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-[#37B7C4]/20 to-[#37B7C4]/10 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-[#37B7C4]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            <hr />
            
            <h3 className="section-title">ARCHAIVE導入前の課題</h3>
            <hr />

            <div className="mb-8">
              <p className="interview-question">ー(稲元)： 本日はお忙しい中、ありがとうございます。早速ですが、ArchAIveを導入される前、どのような課題をお持ちでしたか？</p>
              <p>(横山様、以下敬省略)： 一番は、見積もり業務の複雑さと属人化ですね。図面が多く、一度に100枚〜150枚もの依頼がくることも珍しくありませんでした。見積もりは私の「感覚と経験」に大きく依存しており、新入社員への教育や、私が不在時の対応が困難でした。<br />
              手作業での見積もり算出には時間がかかり、迅速な対応ができませんでした。AIによる見積もりも最終的には人のチェックが必要で、その精度と信頼性の向上を求めていました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入の経緯と決め手</h3>
            <hr />

            <div className="mb-8">
              <p className="interview-question">ー(稲元)： そのような課題をお持ちの中、弊社を選んでいただいた決め手は何だったのでしょうか？</p>
              <p>(横山)： 決め手はいくつかあります。他社が「できない」と回答する中で、STAR UPさんが「可能かもしれない」と向き合ってくれたことです。私たちの独自の算出方法に、AIがどこまで近づけるかという「可能性」を感じたことが大きかったです。<br />
              また、開発の柔軟性とレスポンスの速さも大きな決め手でした。顧客の声をすぐに聞き入れ、システムに反映するスピード感が評価できました。</p>
            </div>

            <div className="mb-8">
              <p className="interview-question">(稲元)： 弊社のスピード感を評価いただけて嬉しいです。</p>
              <p>(横山)： はい。STAR UPさんの開発チームがユーザーからのフィードバックを元に月2回の頻繁なアップデートを実施していると伺い、その開発体制にも安心感を覚えました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入後の効果</h3>
            <hr />

            <div className="mb-8">
              <p className="interview-question">ー(稲元)： 実際に導入されてみて、どのような効果を実感されていますか？</p>
              <p>(横山)： まずは、複雑な見積もり業務をAIがサポートしてくれることです。特に、図面をアップロードするだけで、過去の履歴やトラブル情報と紐付けてAIが対話しながら見積もりを算出する「コパイロット」のような機能に期待しています。多数の図面を一括で処理し、概算見積もりをCSVで出力できる機能は、私たちの業務を効率化してくれています。<br />
              また、既存のExcelデータや独自の計算ロジックをAIに学習させ、材料費、加工賃、外注費などを含んだ市場価格ベースの見積もりを自動算出できる機能も期待しています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">STAR UPへの今後の期待</h3>
            <hr />

            <div className="mb-8">
              <p className="interview-question">ー(稲元)： 横山様、長期的な視点でのご期待はいかがでしょうか？私たちが目指しているのは、見積もりだけでなく、工程管理、生産管理、原価計算、販売管理、顧客管理といった業務全体をサポートするモジュール型システムです。業務を一貫してシステム上で管理することで、より深い部分での効率化を実現できると考えています。</p>
              <p>(横山)：それは素晴らしいですね。まさに私たちが求めていた未来です。STAR UPさんの迅速な対応力と開発力があれば、それが実現できると信じています。</p>
            </div>

            <div className="mb-8">
              <p className="interview-question">(稲元)： ありがとうございます。私たちは一社一社のローカルなデータに深く入り込み、その会社独自の業務サポートを実現することを目指しています。今後もスエナミ工業様の課題に寄り添い、共に成長していければ幸いです。本日は貴重なお話をありがとうございました。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className="company-info">
              <h3>スエナミ工業株式会社</h3>
              <p><strong>代表取締役：</strong>末次明</p>
              <p><strong>所在地：</strong>岐阜県関市側島286番地</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .interview-section {
          background-color: #37B7C4;
          padding: 60px 20px 40px;
          text-align: center;
        }

        .interview-header h1 {
          font-size: 48px;
          color: white;
          margin: 0;
        }

        .interview-header h2 {
          font-size: 24px;
          color: white;
          margin: 0;
        }

        .interview-content-wrapper {
          background-color: #37B7C4;
          margin: 0;
          padding: 40px 20px;
        }

        .interview-content {
          background-color: white;
          padding: 40px;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .interview-content h3 {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 10px;
          text-align: center;
        }

        .interview-content hr {
          border: none;
          border-top: 1px solid #333;
          margin: 20px 0;
        }

        .interview-content img {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .interview-content p {
          font-size: 16px;
          color: #333;
          margin: 10px 0;
        }

        .interview-question {
          color: #37B7C4;
          margin-top: 20px;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin: 60px 0 10px;
        }

        .company-info {
          margin-top: 60px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }

        .company-info h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .company-info p {
          margin: 5px 0;
        }

        .company-info a {
          color: #37B7C4;
          text-decoration: none;
        }

        .company-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}