import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upload CV - AI-Powered README Generator | GitRead',
  description: 'Upload your CV or resume and transform it into a stunning GitHub README with AI in seconds. Drag & drop your PDF file and get a professional, customizable markdown README instantly.',
  keywords: [
    'upload CV',
    'CV upload tool',
    'resume upload',
    'PDF upload',
    'CV to README converter',
    'AI resume parser',
    'GitHub README generator',
    'PDF to markdown converter',
    'professional portfolio generator',
    'developer tools',
    'resume enhancement',
    'GitHub profile optimization',
    'drag and drop CV',
    'instant README creation',
    'github readme profile generator',
    'github profile generator',
    'readme profile maker',
    'github bio generator',
    'github about me generator'
  ],
  openGraph: {
    title: 'Upload Your CV - GitRead AI README Generator',
    description: 'Upload your CV or resume and let AI create a comprehensive, professional GitHub README file that showcases your skills perfectly. Simple drag & drop interface.',
    type: 'website',
    url: '/upload',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitRead CV Upload - Transform your resume into a professional GitHub README with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upload Your CV - GitRead AI README Generator',
    description: 'Upload your CV and let AI create a comprehensive, professional GitHub README file instantly. Easy drag & drop interface.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/upload',
  },
};