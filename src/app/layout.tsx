import './globals.css';
import '@/styles/lp1-animations.css';

export const metadata = {
  title: 'ARCHAIVE LP',
  description: 'ARCHAIVE - 製造業向けAIナレッジ検索システム',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}