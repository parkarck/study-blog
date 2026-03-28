import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllCategories, getPostsByCategory, getPostBySlug, getCategoryDisplayName, getCategoryIcon } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: { category: string; slug: string };
}

// Return raw (unencoded) slugs — Next.js handles URL encoding internally
export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of getAllCategories()) {
    for (const post of getPostsByCategory(cat.slug)) {
      params.push({ category: cat.slug, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.category, params.slug);
  return { title: post ? `${post.title} · CK Study Notes` : 'Not Found' };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.category, params.slug);
  if (!post) notFound();

  const catName = getCategoryDisplayName(params.category);
  const catIcon = getCategoryIcon(params.category);

  return (
    <>
      <div className="post-header">
        <Link href={`/${encodeURIComponent(params.category)}`} className="back-link">
          ← {catIcon} {catName}
        </Link>
        <h1>{post.title}</h1>
        <div className="post-meta">
          {post.date && (
            <span className="post-meta-item">📅 {post.date}</span>
          )}
          <Link href={`/${encodeURIComponent(params.category)}`} className="post-cat-tag">
            {catIcon} {catName}
          </Link>
          {post.sourceUrl && (
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="post-source-link"
            >
              🔗 출처 보기
            </a>
          )}
        </div>
      </div>

      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </>
  );
}
