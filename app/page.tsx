import Link from 'next/link';
import { getAllCategories, getAllPosts } from '@/lib/markdown';

export default function Home() {
  const categories = getAllCategories();
  const recentPosts = getAllPosts(15);
  const totalPosts = categories.reduce((s, c) => s + c.count, 0);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-dog">🐶</div>
          <div className="hero-text">
            <h1>CK Study Notes</h1>
            <p>Notion에서 뽑은 공부 노트를 한 곳에서 봐요</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">{totalPosts}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-num">{categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <p className="section-title">Categories</p>
        <div className="category-grid">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/${encodeURIComponent(cat.slug)}`}
              className="category-card"
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
              <span className="category-count">{cat.count} posts</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <p className="section-title">Recent Posts</p>
        <div className="post-list">
          {recentPosts.map(post => (
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
      </section>
    </>
  );
}
