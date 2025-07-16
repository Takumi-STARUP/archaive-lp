import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "../globals.css";

const mplus = M_PLUS_Rounded_1c({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
});

export const metadata: Metadata = {
  title: "ARCHAIVE AIデータ活用クラウド | LP2",
  description: "ARCHAIVE AIデータ活用クラウドの未来的なランディングページ（案②）",
};

export default function LP2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${mplus.variable} antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen`}
        style={{ fontFamily: 'var(--font-mplus-rounded), "M PLUS Rounded 1c", Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
