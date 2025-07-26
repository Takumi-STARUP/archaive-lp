"use client";

import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-lg bg-[#181A1B] rounded-3xl shadow-2xl p-10 border border-[#37B7C4]/30 text-center">
        <h1 className="text-3xl font-extrabold text-[#37B7C4] mb-6 drop-shadow">送信ありがとうございました</h1>
        <p className="text-lg mb-8 text-white">担当者よりご連絡いたします。<br />ご入力いただいたメールアドレス宛に自動返信メールをお送りしています。</p>
        <div className="flex flex-col gap-4">
          <Link href="/" className="w-full py-4 bg-[#37B7C4] text-white font-bold text-lg rounded-xl shadow hover:scale-105 transition">トップページへ</Link>
          <Link href="/lp3" className="w-full py-4 bg-white text-[#37B7C4] font-bold text-lg rounded-xl shadow hover:scale-105 transition">LP3トップへ戻る</Link>
        </div>
      </div>
    </main>
  );
}