import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gitread.youssef.tn'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/guide', '/about', '/privacy', '/terms', '/upload'],
        disallow: [
          '/api/*',
          '/uploads/*',
          '/_next/*',
          '/admin/*',
          '*.json',
          '/tmp/*'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/guide', '/about', '/privacy', '/terms', '/upload'],
        disallow: [
          '/api/*',
          '/uploads/*',
          '/admin/*'
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/guide', '/about', '/privacy', '/terms', '/upload'],
        disallow: [
          '/api/*',
          '/uploads/*',
          '/admin/*'
        ],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}