import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - GitRead AI CV to README Generator',
  description: 'Read the terms of service for GitRead, the AI-powered CV to README generator. Understand your rights and responsibilities when using our platform.',
  keywords: [
    'GitRead terms of service',
    'terms and conditions',
    'user agreement',
    'service terms',
    'AI tool terms',
    'CV generator terms',
    'usage policy',
    'legal terms',
    'service agreement',
    'platform rules'
  ],
  openGraph: {
    title: 'Terms of Service - GitRead',
    description: 'Read the terms of service for GitRead AI-powered CV to README generator. Understand your rights and responsibilities.',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'GitRead Terms of Service - Clear terms for our AI CV generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - GitRead',
    description: 'Read the terms of service for GitRead AI-powered CV to README generator.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};