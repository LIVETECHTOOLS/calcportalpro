/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://calcportalpro.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  
  // Exclude sensitive and unnecessary pages
  exclude: [
    '/admin/*', 
    '/api/*', 
    '/_next/*', 
    '/private/*',
    '/temp/*',
    '/404',
    '/500'
  ],
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/*', 
          '/api/*', 
          '/_next/*',
          '/private/*',
          '/temp/*'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/*', '/api/*'],
        crawlDelay: 1,
      },
    ],
    
    // Additional sitemaps
    additionalSitemaps: [
      'https://calcportalpro.com/sitemap.xml',
      'https://calcportalpro.com/sitemap-0.xml',
    ],
    
    // Host directive
    host: 'https://calcportalpro.com',
  },
  
  // Sitemap configuration
  sitemapSize: 5000,
  
  // Transform function for custom URLs
  transform: async (config, path) => {
    // Set priorities for different page types
    let priority = 0.7;
    let changefreq = 'weekly';
    
    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Calculator pages get high priority
    if (path.startsWith('/calculators/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Blog pages get medium priority
    if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    // Legal pages get lower priority
    if (['/privacy', '/terms', '/disclaimer'].includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://calcportalpro.com${path}`,
          hreflang: 'en',
        },
      ],
    };
  },
  
  // Additional options
  outDir: 'public',
  trailingSlash: false,
  sourceDir: 'app',
};
