import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gitread.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}