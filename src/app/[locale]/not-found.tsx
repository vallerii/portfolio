import Link from 'next/link';
import { getDictionary } from '@/i18n/dictionaries';

// Rendered inside the locale layout when notFound() is called (e.g. unknown project slug).
// not-found has no access to params, so it shows the default-locale copy.
export default function NotFound() {
  const dict = getDictionary('en');
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-[16px] text-center">
      <h1 className="text-[38px] font-bold">{dict.notFound.title}</h1>
      <p className="opacity-80">{dict.notFound.text}</p>
      <Link href="/en" className="underline">{dict.notFound.back}</Link>
    </main>
  );
}
