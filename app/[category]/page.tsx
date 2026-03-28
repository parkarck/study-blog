import Link from 'next/link';
import { getAllCategories, getPostsByCategory, getCategoryDisplayName, getCategoryIcon } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: { category: string };
}

// Return raw (unencoded) slugs — Next.js handles URL encoding internally
export async function generateStaticParams() {
  return getAllCategories().map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const name = getCategoryDisplayName(params.category);
  return { title: `${name} · CK Study Notes` };
}

export default function CategoryPage({ params }: Props) {
  const slug = params.category;
  const posts = getPostsByCategory(slug);

  if (posts.length === 0) notFound();

  const name = getCategoryDisplayName(slug);
  const icon = getCategoryIcon(slug);

  return (
    <>
      <div className="category-header">
        <Link href="/" className="back-link">← 홈으로</Link>
        <div className="category-header-title">
          <span className="category-header-icon">{icon}</span>
          <h1>{name}</h1>
        </div>
        <p className="category-header-count">{posts.length}개의 글</p>
      </div>

      <div className="post-cards">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/${encodeURIComponent(slug)}/${encodeURIComponent(post.slug)}`}
            className="post-card"
          >
            <div className="post-card-title">{post.title}</div>
            <div className="post-card-meta">
              <span className="post-card-date">{post.date}</span>
              {post.sourceUrl && (
                <span className="post-card-source">🔗 출처 있음</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
