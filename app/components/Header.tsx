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

          <button
            className={`category-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="카테고리 메뉴"
            aria-expanded={menuOpen}
          >
            <span>Categories</span>
            <span className="category-toggle-count">{categories.length}</span>
            <span className="category-toggle-caret" aria-hidden="true">▾</span>
          </button>
        </div>
      </div>

      <div className={`category-dropdown${menuOpen ? ' open' : ''}`}>
        <div className="container">
          <div className="category-dropdown-grid">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                href={`/${encodeURIComponent(cat.slug)}`}
                className={`dropdown-link${isActive(cat.slug) ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="dropdown-link-name">{cat.name}</span>
                <span className="dropdown-link-count">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
