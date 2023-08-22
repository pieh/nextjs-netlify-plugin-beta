if (!process.env.NEXT_REWRITE_DOCS_URL) {
  throw new Error('NEXT_REWRITE_DOCS_URL environment variable is not defined');
}

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: `${process.env.NEXT_REWRITE_DOCS_URL}/:path*`,
      },
    ];
  },
};
