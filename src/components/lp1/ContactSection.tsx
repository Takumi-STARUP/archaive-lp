import Button from '@/components/ui/Button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-[#e6f7fa] via-white to-[#f0f7fa]">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#37B7C4]">
          競合が見積もりを作っている間に、あなたの会社は次の受注を決めている。
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          まずは30分のオンラインデモで、その実力と未来の働き方を体験してください。
        </p>
        <Button as="a" href="/lp1/apply" size="lg" className="mb-4">
          無料でその実力をデモ体験
        </Button>
        <div className="text-sm text-gray-500 mt-2">かんたん入力30秒 / 無理な勧誘は一切ありません</div>
      </div>
    </section>
  );
} 