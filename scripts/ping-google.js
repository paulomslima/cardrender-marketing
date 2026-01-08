#!/usr/bin/env node
// Ping Google/Bing sitemaps to notify search engines after deployment.
// Usage:
//  PING_SEARCH_ENGINES=true SITE_URL=https://cardrender.com npm run notify:search-engines
// In CI/CD, set PING_SEARCH_ENGINES=true or CI=true to enable automatic pinging.

const SITE_URL = process.env.SITE_URL || process.env.SITE || 'https://cardrender.com';
const sitemapUrl = `${SITE_URL.replace(/\/$/, '')}/sitemap.xml`;
const shouldPing = process.env.PING_SEARCH_ENGINES === 'true' || process.env.CI === 'true' || process.env.FORCE_PING === 'true';

if (!shouldPing) {
  console.log('Skipping search-engine ping. Set PING_SEARCH_ENGINES=true to enable.');
  process.exit(0);
}

async function ping(url) {
  try {
    const res = await fetch(url, { method: 'GET' });
    console.log(`Pinged ${url} -> ${res.status} ${res.statusText}`);
    return res.ok;
  } catch (err) {
    console.error(`Failed to ping ${url}:`, err);
    return false;
  }
}

(async () => {
  console.log('Notifying search engines with sitemap:', sitemapUrl);
  const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  const bingUrl = `https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(sitemapUrl)}`;

  const googleOk = await ping(googleUrl);
  const bingOk = await ping(bingUrl);

  if (googleOk || bingOk) {
    console.log('Search engine notification complete.');
    process.exit(0);
  }
  console.error('Search engine notification failed for all endpoints.');
  process.exit(1);
})();
