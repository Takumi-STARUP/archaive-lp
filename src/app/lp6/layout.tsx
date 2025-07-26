import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ARCHAIVE 見積もり3分AI | LP6",
  description: "ARCHAIVEチャット式見積AIで見積もり業務を革命的に効率化（案6）",
};

export default function LP6Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="antialiased bg-white min-h-screen"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {children}
    </main>
  );
}
