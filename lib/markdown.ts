import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Short ASCII slug from filename — stable, URL-safe, no Korean in URL
function makePostSlug(filename: string): string {
  return crypto.createHash('sha256').update(filename, 'utf8').digest('hex').slice(0, 12);
}

// Notion exports include duplicate title/category/source lines in the body.
// Strip them so the page header doesn't repeat.
function cleanContent(raw: string): string {
  const lines = raw.split('\n');
  const result: string[] = [];
  let i = 0;

  // Skip leading blank lines
  while (i < lines.length && lines[i].trim() === '') i++;

  // Remove leading H1 (# Title)
  if (i < lines.length && /^#\s/.test(lines[i])) i++;

  // Remove Notion metadata lines: **Category:**, **Source:**, blank lines, and a trailing ---
  while (i < lines.length) {
    const l = lines[i].trim();
    if (l === '' || /^\*\*Category:\*\*/.test(l) || /^\*\*Source:\*\*/.test(l)) {
      i++;
      continue;
    }
    if (l === '---') {
      i++;
      break; // stop stripping after the first hr
    }
    break; // hit real content, stop stripping
  }

  // Skip another leading H1 if it immediately follows (second duplicate title)
  while (i < lines.length && lines[i].trim() === '') i++;
  if (i < lines.length && /^#\s/.test(lines[i])) i++;

  // Collect the rest
  for (; i < lines.length; i++) result.push(lines[i]);

  return result.join('\n').replace(/^\n+/, '');
}

// Korean folder → ASCII URL slug
const FOLDER_TO_URL_SLUG: Record<string, string> = {
  '엔지니어링': 'engineering',
  '주식': 'stocks',
  '한국it': 'korean-it',
};
const URL_SLUG_TO_FOLDER: Record<string, string> = Object.fromEntries(
  Object.entries(FOLDER_TO_URL_SLUG).map(([k, v]) => [v, k])
);

function folderToUrlSlug(folderName: string): string {
  return FOLDER_TO_URL_SLUG[folderName] ?? folderName;
}
function urlSlugToFolder(urlSlug: string): string {
  return URL_SLUG_TO_FOLDER[urlSlug] ?? urlSlug;
}

const CATEGORY_ICONS: Record<string, string> = {
  agent: '🤖', ai: '🧠', claude: '🟣', fde: '⚡', general: '📝',
  llm: '🔤', openclaw: '🦾', programming: '💻', security: '🔒',
  server: '🖥️', '엔지니어링': '🔧', '주식': '📈', '한국it': '🇰🇷',
};
const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  agent: 'Agent', ai: 'AI', claude: 'Claude', fde: 'FDE', general: 'General',
  llm: 'LLM', openclaw: 'OpenClaw', programming: 'Programming',
  security: 'Security', server: 'Server',
  '엔지니어링': '엔지니어링', '주식': '주식', '한국it': '한국 IT',
};

export function getCategoryDisplayName(slugOrFolder: string): string {
  const folder = urlSlugToFolder(slugOrFolder);
  return CATEGORY_DISPLAY_NAMES[folder] ??
    folder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
export function getCategoryIcon(slugOrFolder: string): string {
  const folder = urlSlugToFolder(slugOrFolder);
  return CATEGORY_ICONS[folder] ?? '📄';
}

export interface MarkdownPost {
  slug: string;       // SHA-256 hash slug (ASCII, used in URL)
  filename: string;   // raw filename without .md (for display/lookup)
  title: string;
  category: string;
  categorySlug: string; // ASCII URL slug
  date: string;
  sourceUrl?: string;
  content: string;
}

export interface MarkdownCategory {
  name: string;
  slug: string;   // ASCII URL slug
  count: number;
  icon: string;
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
        slug: folderToUrlSlug(d.name),
        count,
        icon: getCategoryIcon(d.name),
      };
    })
    .filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(categoryUrlSlug: string): MarkdownPost[] {
  const folderName = urlSlugToFolder(categoryUrlSlug);
  const dir = path.join(CONTENT_DIR, folderName);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== '_index.md')
    .map(filename => {
      const rawName = filename.replace(/\.md$/, '');
      const { data, content } = matter(fs.readFileSync(path.join(dir, filename), 'utf-8'));
      return {
        slug: makePostSlug(rawName),
        filename: rawName,
        title: data.title || rawName,
        category: data.category || getCategoryDisplayName(folderName),
        categorySlug: categoryUrlSlug,
        date: data.date ? String(data.date) : '',
        sourceUrl: data.source_url,
        content: cleanContent(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(categoryUrlSlug: string, hashSlug: string): MarkdownPost | null {
  const folderName = urlSlugToFolder(categoryUrlSlug);
  const dir = path.join(CONTENT_DIR, folderName);
  if (!fs.existsSync(dir)) return null;

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');
  for (const filename of files) {
    const rawName = filename.replace(/\.md$/, '');
    if (makePostSlug(rawName) !== hashSlug) continue;

    const { data, content } = matter(fs.readFileSync(path.join(dir, filename), 'utf-8'));
    return {
      slug: hashSlug,
      filename: rawName,
      title: data.title || rawName,
      category: data.category || getCategoryDisplayName(folderName),
      categorySlug: categoryUrlSlug,
      date: data.date ? String(data.date) : '',
      sourceUrl: data.source_url,
      content: cleanContent(content),
    };
  }
  return null;
}

export function getAllPosts(limit?: number): MarkdownPost[] {
  const all = getAllCategories().flatMap(cat => getPostsByCategory(cat.slug));
  all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? all.slice(0, limit) : all;
}
