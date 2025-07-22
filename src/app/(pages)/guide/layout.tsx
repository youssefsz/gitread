import type { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';

export const metadata: Metadata = pageMetadata;

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}