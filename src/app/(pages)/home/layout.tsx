import { ReactNode } from 'react';
export { metadata } from './metadata';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>;
}