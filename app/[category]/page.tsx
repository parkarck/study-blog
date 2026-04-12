import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCategories, getPostsByCategory, getCategoryDisplayName, getCategoryIcon } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ category: string }>;
}

// Return raw (unencoded) slugs — Next.js handles URL encoding internally
export async function generateStaticParams() {
  return getAllCategories().map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = getCategoryDisplayName(category);
  const posts = getPostsByCategory(category);
  const description = `${name} 카테고리의 ${posts.length}개 공부 노트 - CK Study Notes`;

  return {
    title: name,
    description,
    openGraph: {
      title: `${name} - CK Study Notes`,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) notFound();

  const name = getCategoryDisplayName(category);
  const icon = getCategoryIcon(category);

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
            href={`/${encodeURIComponent(category)}/${encodeURIComponent(post.slug)}`}
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
