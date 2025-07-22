import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GitRead AI CV to README Generator',
  description: 'Learn how GitRead protects your privacy when using our AI-powered CV to README generator. We prioritize data security and user privacy in all our services.',
  keywords: [
    'GitRead privacy policy',
    'data protection',
    'CV privacy',
    'AI tool privacy',
    'user data security',
    'GDPR compliance',
    'privacy rights',
    'data handling',
    'secure CV processing',
    'privacy terms'
  ],
  openGraph: {
    title: 'Privacy Policy - GitRead',
    description: 'Learn how GitRead protects your privacy and handles your data securely when transforming CVs into GitHub READMEs.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitRead Privacy Policy - Your data security is our priority',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - GitRead',
    description: 'Learn how GitRead protects your privacy and handles your data securely.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};