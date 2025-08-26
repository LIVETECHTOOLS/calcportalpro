/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://calcportalpro.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*'],
      },
    ],
    additionalSitemaps: [
      'https://calcportalpro.com/sitemap.xml',
    ],
  },
};
