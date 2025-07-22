import { ReactNode } from 'react';
export { metadata } from './metadata';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <>{children}</>;
}