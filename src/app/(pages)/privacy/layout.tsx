import { ReactNode } from 'react';
export { metadata } from './metadata';

interface PrivacyLayoutProps {
  children: ReactNode;
}

export default function PrivacyLayout({ children }: PrivacyLayoutProps) {
  return <>{children}</>;
}