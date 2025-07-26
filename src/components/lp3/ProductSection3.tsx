'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const features = [
  {
    icon: 'doc',
    title: 'AI類似図面検索',
    description: '「こんな感じ」という曖昧な指示でも、AIが過去の類似図面を瞬時に発見。',
    metrics: '過去図面との照合精度98%',
  },
  {
    icon: 'doc',
    title: 'AI-OCRによる全文検索',
    description: '紙図面やPDF内の文字も全てテキスト化。どんな情報も見逃しません。',
    metrics: '文字認識精度99.5%',
  },
  {
    icon: 'doc',
    title: '関連ドキュメントの一元管理',
    description: '図面、仕様書、過去の見積書などを自動で紐付け、一元管理。',
    metrics: '100万件以上のドキュメント管理',
  },
  {
    icon: 'diff',
    title: '差分検出',
    description: '新旧2つの図面の違いをAIが一瞬で検出し、変更点の見落としを防ぎます。',
    metrics: '変更点検出精度99%',
  },
];

export default function ProductSection3() {
  return (
    <section id="product3" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">TECHNOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            革命を支える、
            <span className="block text-[#37B7C4]">盤石なデータ活用基盤</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            この革命的な見積もり自動化は、ARCHAIVEの強力なデータ活用基盤があるからこそ実現できます。
          </p>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* 機能グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="bg-gray-50 border-2 border-gray-300 p-8 h-full group-hover:border-[#37B7C4] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center group-hover:bg-[#37B7C4] transition-colors duration-300">
                    <Icon type={feature.icon as IconType} size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-black mb-3 group-hover:text-[#37B7C4] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="text-sm text-[#37B7C4] font-bold">
                      {feature.metrics}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ダッシュボード表示 */}
        <div className="bg-black border-2 border-[#37B7C4] p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">統合管理ダッシュボード</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'AI類似図面検索', value: '10,000+', desc: '登録図面数' },
              { label: 'OCR精度', value: '99.5%', desc: '文字認識率' },
              { label: 'ドキュメント', value: '100万+', desc: '一元管理件数' },
              { label: '差分検出', value: '99%', desc: '変更点検出精度' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gray-900 border border-[#37B7C4] p-6 text-center">
                <div className="text-2xl font-bold text-[#37B7C4] mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 