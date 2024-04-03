/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
  // ...other options
};
