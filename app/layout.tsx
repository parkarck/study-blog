import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import { getAllCategories } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'CK Study Notes',
  description: 'Notion notes turned into a clean study blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getAllCategories();

  return (
    <html lang="ko">
      <body>
        <div className="page-wrapper">
          <Header categories={categories} />
          <main>
            <div className="container">{children}</div>
          </main>
          <footer className="site-footer">
            <div className="container">
              <span className="footer-dog">🐶</span>
              시츄와 함께하는 공부 노트 · CK Study Notes
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
