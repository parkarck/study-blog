import fs from 'fs';
import path from 'path';

export interface TotoroGifs {
  initial: string;
  all: string[];
}

const DEFAULT = '/totoro/totoro-default.gif';

export function getTotoroGifs(): TotoroGifs {
  const dir = path.join(process.cwd(), 'public', 'totoro');
  if (!fs.existsSync(dir)) return { initial: DEFAULT, all: [DEFAULT] };

  const all = fs.readdirSync(dir)
    .filter(f => /\.gif$/i.test(f))
    .map(f => `/totoro/${f}`)
    .sort();

  if (all.length === 0) return { initial: DEFAULT, all: [DEFAULT] };

  const initial = all.find(g => g.includes('default')) ?? all[0];
  return { initial, all };
}
