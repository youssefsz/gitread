import { ReactNode } from 'react';
export { metadata } from './metadata';

interface TermsLayoutProps {
  children: ReactNode;
}

export default function TermsLayout({ children }: TermsLayoutProps) {
  return <>{children}</>;
}