import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import '../globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ARCHAIVE - 分断されたデータと暗黙知を繋ぎ、ものづくりの「資産」を築く",
  description: "製造業のためのAI開発基盤。図面起点で分断されたデータを繋ぎ、会社の「知の資産」を未来へ引き継ぐ。",
  keywords: "ARCHAIVE,製造業,AI,図面検索,データ管理,DX,伴走型開発",
  openGraph: {
    title: "ARCHAIVE - 製造業のためのAI開発基盤",
    description: "分断されたデータと暗黙知を繋ぎ、ものづくりの「資産」を築く",
    type: "website",
  },
};

export default function LPNewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={notoSansJP.variable}>
      {children}
    </div>
  );
}