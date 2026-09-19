import Link from 'next/link';
import { breadcrumbJsonLd, jsonLd, type Crumb } from '@/lib/site';

type Props = { items: Crumb[]; label: string };

/** Visible breadcrumbs + BreadcrumbList JSON-LD. The last item is the current page. */
export default function Breadcrumbs({ items, label }: Props) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd(items))} />
      <nav aria-label={label} className="w-full max-w-[1232px] mx-auto px-[16px] relative z-[5]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-white/60">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-white/90">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-white">{item.name}</Link>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
