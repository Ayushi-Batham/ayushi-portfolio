import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ayushi Batham | Full Stack Software Engineer',
  description: 'Portfolio of Ayushi Batham — Full Stack Software Engineer specializing in Java, Spring Boot, Angular, React and TypeScript.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
