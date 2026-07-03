import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lobang Meal Map',
  description: 'Find affordable meals near you. Under $3.50, $5, $8 and $10.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="font-sans text-stone-900">{children}</body></html>;
}
