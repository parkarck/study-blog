'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

interface PostIndexItem {
  slug: string;
  categorySlug: string;
  category: string;
  title: string;
  date: string;
}

const PAGE_SIZE = 15;

export default function HomePostList({ posts }: { posts: PostIndexItem[] }) {
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(p => p.title.toLowerCase().includes(q));
  }, [posts, query]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(v => Math.min(v + PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <>
      <div className="search-box">
        <input
          type="search"
          className="search-input"
          placeholder="제목으로 검색…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="포스트 제목 검색"
        />
        {query && (
          <span className="search-count">{filtered.length}개 결과</span>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="post-list-empty">일치하는 글이 없어요.</p>
      ) : (
        <div className="post-list">
          {shown.map(post => (
            <div key={`${post.categorySlug}-${post.slug}`} className="post-item">
              <span className="post-date">{post.date}</span>
              <Link
                href={`/${encodeURIComponent(post.categorySlug)}`}
                className="post-cat-tag"
              >
                {post.category}
              </Link>
              <Link
                href={`/${encodeURIComponent(post.categorySlug)}/${encodeURIComponent(post.slug)}`}
                className="post-title-link"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      )}

      {hasMore && <div ref={sentinelRef} className="post-list-end" aria-hidden />}
    </>
  );
}
