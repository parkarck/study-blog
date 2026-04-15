import Link from 'next/link';
import { getAllCategories, getAllPosts } from '@/lib/markdown';
import { getTotoroGifs } from '@/lib/totoroGifs';
import HeroTotoro from './components/HeroTotoro';

export default function Home() {
  const categories = getAllCategories();
  const recentPosts = getAllPosts(15);
  const totalPosts = categories.reduce((s, c) => s + c.count, 0);
  const totoro = getTotoroGifs();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <HeroTotoro initial={totoro.initial} all={totoro.all} />
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
