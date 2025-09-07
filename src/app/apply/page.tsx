'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LPNewApply() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    employeeCount: '',
    purpose: '',
    message: '',
    privacyPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
    alert('お申し込みを受け付けました。担当者より連絡させていただきます。');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#37B7C4]">ARCHAIVE</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-[#37B7C4] transition-colors">
                機能
              </Link>
              <Link href="/#case" className="text-gray-600 hover:text-[#37B7C4] transition-colors">
                導入事例
              </Link>
              <Link href="/#process" className="text-gray-600 hover:text-[#37B7C4] transition-colors">
                導入プロセス
              </Link>
              <Link href="/" className="bg-[#37B7C4] text-white px-6 py-2 rounded-lg hover:bg-[#2a9aa5] transition-colors">
                トップへ戻る
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* ページヘッダー - 画面端まで伸ばす */}
        <div className="bg-[#37B7C4] text-white py-16 px-4 shadow-lg">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              無料トライアルお申し込み
            </h1>
            <p className="text-white/90 text-lg">
              無料でARCHAIVEをお試ししていただけます。<br />
              導入のご相談も承ります！
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl py-12">
          {/* フォーム */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* 会社名 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                会社名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="例 | 株式会社〇〇"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 氏名 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                氏名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="例 | 山田太郎"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 部署 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                部署
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="例 | 図面管理部"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
              />
            </div>

            {/* 役職 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                役職
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="例 | 部長"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="例 | example@starup01.jp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 電話番号 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                電話番号
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="例 | 03-1234-5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 従業員数 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                従業員数
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="1-5">1名以上 - 5名以下</option>
                  <option value="6-20">6名以上 - 20名以下</option>
                  <option value="21-50">21名以上 - 50名以下</option>
                  <option value="51-100">51名以上 - 100名以下</option>
                  <option value="101+">101名以上</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 無料トライアルの目的 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                無料トライアルの目的
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="知見を深める">ご自身の知見を深めるため</option>
                  <option value="仕様を知る">仕様を知るため</option>
                  <option value="課題解決">課題解決に向けた情報収集のため</option>
                  <option value="比較検討">他社サービスと比較検討するため</option>
                  <option value="興味">興味があったため</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ご質問・ご要望 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                ご質問・ご要望
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="その他お問い合わせ内容がございましたらご記入ください"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent resize-none"
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="mb-8">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 w-5 h-5 text-[#37B7C4] border-gray-300 rounded focus:ring-[#37B7C4]"
                  required
                />
                <span className="text-sm text-gray-700">
                  <Link href="/privacy-policy" className="text-[#37B7C4] hover:underline">
                    プライバシーポリシー
                  </Link>
                  を確認しました。
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full bg-[#37B7C4] hover:bg-[#2a9aa5] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              送信する
            </button>
          </form>

          {/* 補足情報 */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              お急ぎの方は、お電話でもお問い合わせいただけます。<br />
              <span className="font-semibold">TEL: 03-XXXX-XXXX</span>（平日 9:00-18:00）
            </p>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#37B7C4]">ARCHAIVE</h3>
              <p className="text-gray-400 text-sm">
                製造業のための<br />
                AI図面検索プラットフォーム
              </p>
            </div>
            
            {/* 製品 */}
            <div>
              <h4 className="font-semibold mb-4">製品</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#features" className="hover:text-white transition-colors">機能一覧</Link></li>
                <li><Link href="/#case" className="hover:text-white transition-colors">導入事例</Link></li>
                <li><Link href="/#process" className="hover:text-white transition-colors">導入プロセス</Link></li>
                <li><Link href="/apply" className="hover:text-white transition-colors">無料トライアル</Link></li>
              </ul>
            </div>
            
            {/* サポート */}
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入ガイド</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">資料請求</a></li>
              </ul>
            </div>
            
            {/* お問い合わせ */}
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>TEL: 03-XXXX-XXXX</li>
                <li>Email: info@archaive.co.jp</li>
                <li>営業時間: 平日 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2024 ARCHAIVE. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
                <Link href="/terms" className="hover:text-white transition-colors">利用規約</Link>
                <Link href="/legal" className="hover:text-white transition-colors">特定商取引法</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}