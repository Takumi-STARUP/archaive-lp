"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const [form, setForm] = useState<{
    lastName: string;
    firstName: string;
    company: string;
    department: string;
    position: string;
    email: string;
    tel: string;
    inquiry: string[];
  }>({
    lastName: "",
    firstName: "",
    company: "",
    department: "",
    position: "",
    email: "",
    tel: "",
    inquiry: [],
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      inquiry: checked
        ? [...prev.inquiry, value]
        : prev.inquiry.filter((v) => v !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/lp3/thanks");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fa] flex flex-col items-center py-12 px-2">
      {/* 薄い英字背景 */}
      <div className="relative w-full max-w-3xl mx-auto">
        <span className="absolute left-1/2 top-[-3rem] md:top-[-5rem] -translate-x-1/2 text-[5rem] md:text-[8rem] font-extrabold text-black/5 select-none pointer-events-none tracking-widest z-0">CONTACT</span>
        <h1 className="relative z-10 text-2xl md:text-3xl font-bold text-center mt-24 mb-8">お問い合わせ</h1>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8 md:p-12 mx-auto">
        <p className="text-center text-gray-700 mb-8">チャット接客や、チャットを通じたコミュニケーションについての資料を配布しております。<br />興味のある項目にチェックを入れてご請求ください。</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-right text-sm text-pink-500 mb-2">* マークは必須です。</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-bold text-gray-700">姓<span className="text-pink-500">*</span></label>
              <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">名<span className="text-pink-500">*</span></label>
              <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-bold text-gray-700">会社・組織名</label>
              <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">部署名</label>
              <input type="text" name="department" value={form.department} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">役職</label>
              <input type="text" name="position" value={form.position} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-bold text-gray-700">メールアドレス<span className="text-pink-500">*</span></label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" placeholder="フリーメールはご利用いただけませんのでご了承ください。" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-bold text-gray-700">電話番号</label>
              <input type="tel" name="tel" value={form.tel} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#37B7C4] outline-none" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-bold text-gray-700">お問い合わせについて<span className="text-pink-500">*</span></label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="inquiry" value="日社導入を検討中" checked={form.inquiry.includes("日社導入を検討中")} onChange={handleCheckbox} className="accent-[#37B7C4]" />
                日社導入を検討中
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="inquiry" value="クライアントへの提案を検討中" checked={form.inquiry.includes("クライアントへの提案を検討中")} onChange={handleCheckbox} className="accent-[#37B7C4]" />
                クライアントへの提案を検討中
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="inquiry" value="その他" checked={form.inquiry.includes("その他")} onChange={handleCheckbox} className="accent-[#37B7C4]" />
                その他（要望欄に詳細をご記載ください）
              </label>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full py-4 bg-[#37B7C4] text-white font-bold text-lg rounded-lg hover:scale-105 transition disabled:opacity-60 mt-4">
            {loading ? "送信中..." : "送信する"}
          </button>
        </form>
      </div>
    </main>
  );
}