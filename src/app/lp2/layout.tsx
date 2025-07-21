import type { Metadata } from "next";
import "../globals.css";

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
    <main
      className="antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {children}
    </main>
  );
}
