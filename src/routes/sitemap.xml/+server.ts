// https://scottspence.com/posts/make-a-sitemap-with-sveltekit
import { allHrefs, languageCodes } from '$lib/data';
import type { RequestHandler } from './$types';

const fallbackSite = 'https://filekit.co'

export const GET = (({ url }) => {
  const site = url?.origin || fallbackSite
  const options: ResponseInit = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
  }
  const urls = getAllUrls(site);
  const body = sitemap(urls);
  return new Response(body, options);
}) satisfies RequestHandler;


const getAllUrls = (site: string) => {
  const urls: string[] = [];

  // 기본 언어 코드로 생성하는 URL
  for (const href of allHrefs) {
    const url = href ? `${site}/${href}` : site;
    urls.push(url);
  }

  // 각 언어 코드로 생성하는 URL
  for (const lang of languageCodes) {
    for (const href of allHrefs) {
      const url = href ? `${site}/${lang}/${href}` : `${site}/${lang}`;
      urls.push(url);
    }
  }
  return urls
}

const sitemap = (urls: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
  ${urls.map((url: string) => `
  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}  
  </urlset>`;