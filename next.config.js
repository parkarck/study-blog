/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['react-markdown', 'remark-gfm', 'remark-parse', 'unified', 'bail', 'is-plain-obj', 'trough', 'vfile', 'vfile-message', 'unist-util-stringify-position'],
}

module.exports = nextConfig
