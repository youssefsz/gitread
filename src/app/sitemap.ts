import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gitread.com'
  
  // Define the main routes of the application
  const routes = [
    '',
    '/(pages)/home',
    '/(pages)/about',
    '/(pages)/contact',
    '/(pages)/privacy',
    '/(pages)/terms',
  ].map((route) => ({
    url: `${baseUrl}${route.replace('/(pages)', '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/(pages)/home' ? 1 : 0.8,
  }))

  return routes
}