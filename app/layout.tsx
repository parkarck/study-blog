import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import './globals.css';
import Header from './components/Header';
import { getAllCategories } from '@/lib/markdown';

export const metadata: Metadata = {
  title: {
    default: 'CK Study Notes - 프로그래밍 & AI 공부 노트',
    template: '%s · CK Study Notes',
  },
  description: '프로그래밍, AI, LLM, 보안, 서버 등 다양한 기술 주제의 공부 노트를 정리한 블로그입니다.',
  openGraph: {
    title: 'CK Study Notes',
    description: '프로그래밍, AI, LLM, 보안, 서버 등 다양한 기술 주제의 공부 노트',
    url: 'https://iamlazyck.kr',
    siteName: 'CK Study Notes',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-adsense-account': 'ca-pub-9926984776851936',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getAllCategories();

  return (
    <html lang="ko">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9926984776851936"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div className="page-wrapper">
          <Header categories={categories} />
          <main>
            <div className="container">{children}</div>
          </main>
          <footer className="site-footer">
            <div className="container">
              <div className="footer-links">
                <Link href="/about">소개</Link>
                <Link href="/privacy">개인정보처리방침</Link>
                <Link href="/terms">이용약관</Link>
              </div>
              <div className="footer-copy">
                <span className="footer-totoro">🌳</span>
                토토로와 함께하는 공부 노트 · CK Study Notes
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
