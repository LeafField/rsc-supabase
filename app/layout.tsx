import './globals.css';
import NavBar from './compornents/nav-bar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
