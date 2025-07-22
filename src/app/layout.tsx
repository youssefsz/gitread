import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://gitread.com'),
  title: {
    default: "GitRead - AI-Powered CV to README Generator | Transform Your Resume",
    template: "%s | GitRead - Professional README Generator"
  },
  description: "Transform your CV into a stunning GitHub README with AI in seconds. Upload your PDF resume and get a professional, customizable markdown README file. Perfect for developers, designers, and professionals.",
  keywords: [
    "CV to README", "GitHub README generator", "AI resume converter", "PDF to markdown", 
    "professional portfolio", "developer tools", "resume to README", "GitHub profile", 
    "markdown generator", "CV parser", "AI-powered tools", "developer portfolio", 
    "README template", "GitHub optimization", "career tools", "tech resume"
  ],
  authors: [{ name: "GitRead", url: "https://gitread.com" }],
  creator: "GitRead",
  publisher: "GitRead",
  category: "Technology",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    title: "GitRead - AI-Powered CV to README Generator",
    description: "Transform your CV into a stunning GitHub README with AI in seconds. Upload your PDF resume and get a professional, customizable markdown README file instantly.",
    siteName: "GitRead",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GitRead - AI-Powered CV to README Generator - Transform your resume into a professional GitHub README",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gitread',
    creator: '@gitread',
    title: 'GitRead - AI-Powered CV to README Generator',
    description: 'Transform your CV into a stunning GitHub README with AI in seconds. Perfect for developers and professionals.',
    images: {
      url: '/og-image.svg',
      alt: 'GitRead - AI-Powered CV to README Generator',
    },
  },
  alternates: {
    canonical: "./",
    languages: {
      'en-US': '/',
      'x-default': '/',
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicons/site.webmanifest",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  other: {
    'theme-color': '#3B82F6',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced structured data for SEO (2025 best practices)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://gitread.com";
  
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "GitRead",
    "alternateName": "GitRead AI",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/gitread-logo.svg`,
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}/og-image.svg`,
      "width": 1200,
      "height": 630
    },
    "description": "Transform your CV into a stunning GitHub README with AI in seconds. Upload your PDF resume and get a professional, customizable markdown README file instantly.",
    "foundingDate": "2024",
    "slogan": "Transform Your CV into Professional README",
    "knowsAbout": [
      "Artificial Intelligence",
      "Resume Processing",
      "GitHub README Generation",
      "Markdown Conversion",
      "CV Parsing",
      "Developer Tools"
    ],
    "sameAs": [
      "https://github.com/youssefsz/gitread"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "GitRead",
    "description": "AI-Powered CV to README Generator",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${baseUrl}/#webapp`,
    "name": "GitRead - CV to README Generator",
    "description": "Transform your CV into a stunning GitHub README with AI in seconds",
    "url": baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "AI-powered CV parsing",
      "Instant README generation",
      "Professional markdown formatting",
      "Customizable templates",
      "PDF upload support"
    ],
    "screenshot": {
      "@type": "ImageObject",
      "url": `${baseUrl}/og-image.svg`
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={webApplicationJsonLd} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
