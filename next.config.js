/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable strict mode for better debugging and consistency
  reactStrictMode: true,
  // ✅ Static export
  output: 'export',

  // ✅ Performance & security
  compress: true,
  poweredByHeader: false,

  // ✅ App Router settings (for Next.js 14+ and 15+)
  experimental: {
    // Keep lucide-react optimization
    optimizePackageImports: ["lucide-react"],
    // Disable automatic server actions enforcement for non-action files
    serverActions: {
      allowedOrigins: ["*"],
      bodySizeLimit: "2mb",
    },
    // Avoid "must be async" for normal exported functions in /lib
    typedRoutes: true,
  },

  // ✅ Image optimization settings
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "randomuser.me",
      "calcportalpro.com", // ✅ allow your own CDN/website
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Security & SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // --- Security ---
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // --- SEO & Caching ---
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Static asset caching
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Fonts caching
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ✅ Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }

    // Prevent fs module issues in client bundles
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
};

export default nextConfig;
