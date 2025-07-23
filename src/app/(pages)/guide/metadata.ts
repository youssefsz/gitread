import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Step-by-Step Guide | GitRead',
  description: 'Learn how to transform your CV into a professional GitHub README profile with our comprehensive step-by-step guide. Upload, edit, and publish your GitHub profile in minutes.',
  keywords: ['GitHub README', 'CV to GitHub README', 'profile README', 'GitHub profile', 'markdown guide', 'github readme profile generator', 'github profile generator', 'readme profile maker', 'github readme generator'],
  openGraph: {
    title: 'Step-by-Step Guide | GitRead',
    description: 'Learn how to transform your CV into a professional GitHub README profile with our comprehensive step-by-step guide.',
    url: 'https://gitread.com/guide',
    siteName: 'GitRead',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitRead - Transform Your CV into a GitHub README',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Step-by-Step Guide | GitRead',
    description: 'Learn how to transform your CV into a professional GitHub README profile with our comprehensive step-by-step guide.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://gitread.com/guide',
  },
};