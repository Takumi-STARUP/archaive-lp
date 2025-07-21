import './globals.css';

export const metadata = {
  title: 'ARCHAIVE LP Root',
  description: 'ARCHAIVE LP root layout',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}