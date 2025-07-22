import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - AI-Powered CV to README Generator',
  description: 'Transform your CV into a stunning GitHub README with AI in seconds. Upload your PDF resume and get a professional, customizable markdown README file instantly.',
  keywords: [
    'CV to README converter',
    'AI resume parser',
    'GitHub README generator',
    'PDF to markdown',
    'professional portfolio generator',
    'developer tools',
    'resume enhancement',
    'GitHub profile optimization'
  ],
  openGraph: {
    title: 'GitRead - Transform Your CV into Professional README',
    description: 'Upload your CV and let AI create a comprehensive, professional GitHub README file that showcases your skills perfectly.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitRead CV to README Generator - Transform your resume into a professional GitHub README',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitRead - Transform Your CV into Professional README',
    description: 'Upload your CV and let AI create a comprehensive, professional GitHub README file instantly.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/home',
  },
};