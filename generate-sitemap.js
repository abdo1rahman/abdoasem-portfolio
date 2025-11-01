// generate-sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

// ✅ Change this to your deployed domain
const SITE_URL = 'https://yourdomain.com';

const routes = [
  '/',           // homepage
];

async function generateSitemap() {
  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  const stream = new SitemapStream({ hostname: SITE_URL });
  const writeStream = createWriteStream(sitemapPath);

  stream.pipe(writeStream);

  routes.forEach((url) => {
    stream.write({
      url,
      changefreq: 'weekly',
      priority: url === '/' ? 1.0 : 0.8,
    });
  });

  stream.end();
  await streamToPromise(stream);

}

generateSitemap().catch(console.error);
