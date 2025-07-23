import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About GitRead - Meet the Creator Behind the AI CV to README Generator',
  description: 'Learn about GitRead and its creator Youssef Dhibi. Discover how this AI-powered tool transforms CVs into beautiful GitHub READMEs, helping developers showcase their skills professionally.',
  keywords: [
    'GitRead creator',
    'Youssef Dhibi',
    'AI CV converter',
    'GitHub README generator',
    'developer tools',
    'CV to markdown',
    'about GitRead',
    'resume parser',
    'portfolio generator',
    'developer productivity tools',
    'github readme profile generator',
    'github profile generator',
    'readme profile maker',
    'github bio generator'
  ],
  openGraph: {
    title: 'About GitRead - AI-Powered CV to README Generator',
    description: 'Meet Youssef Dhibi, the creator of GitRead. Learn how this innovative AI tool helps developers transform their CVs into stunning GitHub READMEs.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About GitRead - Meet the creator behind the AI-powered CV to README generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GitRead - AI-Powered CV to README Generator',
    description: 'Meet the creator behind GitRead and learn how this AI tool transforms CVs into beautiful GitHub READMEs.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/about',
  },
};