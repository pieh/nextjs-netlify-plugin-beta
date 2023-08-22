module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: `https://nextjs-basepath-rewrite-issue-docs.netlify.app/:path*`,
      },
    ];
  },
};
