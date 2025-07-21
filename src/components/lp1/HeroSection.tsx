'use client';

import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#e6f7fa] via-white to-[#f0f7fa] font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <div className="mb-4 flex justify-center md:justify-start">
            <Icon type="ai" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#37B7C4] leading-tight">
            見積もり作成3分へ。AIが、あなたの会社の利益を最大化する。
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            業界初の「チャット式見積AIエージェント」搭載。図面をアップするだけで、面倒な見積もり業務から解放されます。
          </p>
          <Button as="a" href="/lp1/apply" size="lg" className="mb-4">
            無料でその実力をデモ体験
          </Button>
        </div>
        {/* Right: UIデモアニメーション風ビジュアル + ダミー画像 */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <div className="relative w-full max-w-md h-[180px] md:h-[260px] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
            <img src="/images/Group 18.png" alt="LP1 UIデモダミー画像" className="w-full h-full object-cover" />
            {/* アニメーション例: チャットバブル */}
            <div className="absolute bottom-4 left-4 animate-fade-in-up bg-white rounded-lg shadow px-4 py-2 text-sm text-gray-700 border border-blue-100">
              AI: 「図面をアップロードしてください」
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s 0.5s both;
        }
      `}</style>
    </section>
  );
} 