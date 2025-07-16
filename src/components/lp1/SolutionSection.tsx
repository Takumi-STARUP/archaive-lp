import Icon from '@/components/ui/Icon';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          <Icon type="ai" size={56} />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-[#37B7C4] text-center">その課題、業界初の「チャット式見積AI」が解決します。</h2>
        <div className="w-full max-w-2xl bg-gradient-to-r from-[#37B7C4]/10 to-white rounded-xl shadow p-8 mt-4 flex flex-col items-center">
          <p className="text-lg text-gray-700 text-center mb-2">
            ARCHAIVEのAIエージェントが、<br />見積もり業務の属人化・非効率・ミスを根本から解決。
          </p>
          <div className="mt-4 flex justify-center">
            <img src="/images/archaive-logo.png" alt="ARCHAIVEロゴ" className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
} 