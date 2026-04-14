'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { MarkdownCategory } from '@/lib/markdown';

interface HeaderProps {
  categories: MarkdownCategory[];
}

export default function Header({ categories }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (slug: string) => pathname?.startsWith(`/${encodeURIComponent(slug)}`);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <span className="logo-totoro">🌳</span>
            <span>CK Study</span>
          </Link>

          <nav className="site-nav" aria-label="카테고리 네비게이션">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                href={`/${encodeURIComponent(cat.slug)}`}
                className={`nav-link${isActive(cat.slug) ? ' active' : ''}`}
              >
                <span className="nav-icon">{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="메뉴 토글"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <div className="mobile-nav-inner">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/${encodeURIComponent(cat.slug)}`}
              className={`nav-link${isActive(cat.slug) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-icon">{cat.icon}</span>
              <span>{cat.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
