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
    default: "GitRead - CV to README Generator",
    template: "%s | GitRead"
  },
  description: "Transform your CV into a beautiful GitHub README with AI. Upload your PDF CV and get a professional, customizable README file instantly.",
  keywords: ["CV", "README", "GitHub", "AI", "generator", "portfolio", "developer", "markdown", "resume", "professional profile"],
  authors: [{ name: "GitRead" }],
  creator: "GitRead",
  publisher: "GitRead",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    title: "GitRead - CV to README Generator",
    description: "Transform your CV into a beautiful GitHub README with AI. Upload your PDF CV and get a professional, customizable README file instantly.",
    siteName: "GitRead",
    images: [
      {
        url: "/gitread-logo.svg",
        width: 1200,
        height: 630,
        alt: "GitRead - CV to README Generator",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitRead - CV to README Generator',
    description: 'Transform your CV into a beautiful GitHub README with AI',
    images: ['/gitread-logo.svg'],
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicons/site.webmanifest",
      },
    ],
  },
  other: {
    'theme-color': '#3B82F6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization structured data for SEO
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GitRead",
    "url": process.env.NEXT_PUBLIC_APP_URL || "https://gitread.com",
    "logo": `${process.env.NEXT_PUBLIC_APP_URL || "https://gitread.com"}/gitread-logo.svg`,
    "description": "Transform your CV into a beautiful GitHub README with AI. Upload your PDF CV and get a professional, customizable README file instantly.",
    "sameAs": [
      "https://github.com/gitread",
      // Add other social media links if available
    ]
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
