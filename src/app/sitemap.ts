import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gitread.com'
  const currentDate = new Date()
  
  // Define the main routes of the application with enhanced SEO metadata
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
      lastModified: currentDate,
    },
    {
      path: '/(pages)/home',
      priority: 1.0,
      changeFrequency: 'daily' as const,
      lastModified: currentDate,
    },
    {
      path: '/(pages)/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
      lastModified: currentDate,
    },
    {
      path: '/(pages)/privacy',
      priority: 0.6,
      changeFrequency: 'yearly' as const,
      lastModified: currentDate,
    },
    {
      path: '/(pages)/terms',
      priority: 0.6,
      changeFrequency: 'yearly' as const,
      lastModified: currentDate,
    },
  ].map((route) => ({
    url: `${baseUrl}${route.path.replace('/(pages)', '')}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return routes
}