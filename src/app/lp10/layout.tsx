import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ARCHAIVE - ビジネスの未来を再定義する | レトロモダンソリューション',
  description: '最先端のAI技術とレトロモダンなデザインで、企業のデジタル変革を加速。ARCHAIVEの革新的なソリューションで次世代のビジネスを実現します。',
  keywords: 'AI自動化, ビジネス変革, レトロモダン, デジタルトランスフォーメーション, クラウドソリューション',
};

export default function LP10Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}