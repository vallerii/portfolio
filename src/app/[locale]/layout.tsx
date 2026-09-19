import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Menu from '@/ui/layout/menu';
import Footer from '@/ui/layout/footer';
import { hasLocale, localeTags, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { SITE_URL } from '@/lib/site';

const jetBrains = JetBrains_Mono({ variable: '--font-jetBrains', subsets: ['latin', 'cyrillic'] });
const space = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });
const inter = Inter({ variable: '--font-inter', subsets: ['latin', 'cyrillic'] });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.homeTitle, template: '%s' },
    description: dict.meta.homeDescription,
    applicationName: dict.hero.name,
    authors: [{ name: dict.hero.name }],
    openGraph: {
      type: 'website',
      siteName: dict.hero.name,
      locale: localeTags[locale].og,
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${jetBrains.variable} ${space.variable} ${inter.variable} antialiased`}>
        <Menu locale={locale} nav={dict.nav} />
        {children}
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
