import { getAllCategories, getAllPosts } from '@/lib/markdown';
import { getTotoroGifs } from '@/lib/totoroGifs';
import HeroTotoro from './components/HeroTotoro';
import HomePostList from './components/HomePostList';

export default function Home() {
  const categories = getAllCategories();
  const allPostsIndex = getAllPosts().map(p => ({
    slug: p.slug,
    categorySlug: p.categorySlug,
    category: p.category,
    title: p.title,
    date: p.date,
  }));
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
        <HomePostList posts={allPostsIndex} />
      </section>
    </>
  );
}
