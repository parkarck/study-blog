import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface MarkdownPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  sourceUrl?: string;
  content: string;
}

export interface MarkdownCategory {
  name: string;
  slug: string;
  count: number;
  icon: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  agent: '🤖',
  ai: '🧠',
  claude: '🟣',
  fde: '⚡',
  general: '📝',
  llm: '🔤',
  openclaw: '🦾',
  programming: '💻',
  security: '🔒',
  server: '🖥️',
  '엔지니어링': '🔧',
  '주식': '📈',
  '한국it': '🇰🇷',
};

const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  agent: 'Agent',
  ai: 'AI',
  claude: 'Claude',
  fde: 'FDE',
  general: 'General',
  llm: 'LLM',
  openclaw: 'OpenClaw',
  programming: 'Programming',
  security: 'Security',
  server: 'Server',
  '엔지니어링': '엔지니어링',
  '주식': '주식',
  '한국it': '한국 IT',
};

export function getCategoryDisplayName(slug: string): string {
  return CATEGORY_DISPLAY_NAMES[slug] ??
    slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function getCategoryIcon(slug: string): string {
  return CATEGORY_ICONS[slug] ?? '📄';
}

export function getAllCategories(): MarkdownCategory[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const dir = path.join(CONTENT_DIR, d.name);
      const count = fs.readdirSync(dir)
        .filter(f => f.endsWith('.md') && f !== '_index.md').length;
      return {
        name: getCategoryDisplayName(d.name),
        slug: d.name,
        count,
        icon: getCategoryIcon(d.name),
      };
    })
    .filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(categorySlug: string): MarkdownPost[] {
  const dir = path.join(CONTENT_DIR, categorySlug);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== '_index.md')
    .map(filename => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, filename), 'utf-8'));
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || filename.replace(/\.md$/, ''),
        category: data.category || getCategoryDisplayName(categorySlug),
        categorySlug,
        date: data.date ? String(data.date) : '',
        sourceUrl: data.source_url,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(categorySlug: string, slug: string): MarkdownPost | null {
  const filePath = path.join(CONTENT_DIR, categorySlug, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'));
  return {
    slug,
    title: data.title || slug,
    category: data.category || getCategoryDisplayName(categorySlug),
    categorySlug,
    date: data.date ? String(data.date) : '',
    sourceUrl: data.source_url,
    content,
  };
}

export function getAllPosts(limit?: number): MarkdownPost[] {
  const all = getAllCategories().flatMap(cat => getPostsByCategory(cat.slug));
  all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? all.slice(0, limit) : all;
}
