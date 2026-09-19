import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Page not found — Valeriia Petropavlovska',
  robots: { index: false },
};

// Returned for URLs that match no route at all (the root layout lives under /[locale]).
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-[16px] text-center">
          <h1 className="text-[38px] font-bold">Page not found</h1>
          <p className="opacity-80">This page does not exist or was moved.</p>
          <Link href="/en" className="underline">Back to home</Link>
        </main>
      </body>
    </html>
  );
}
