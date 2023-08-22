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
