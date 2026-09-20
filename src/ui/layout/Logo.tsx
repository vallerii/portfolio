import Link from "next/link";
import type { Locale } from "@/i18n/config";

type Props = { locale: Locale; label: string };

/** Monogram that always links back to the home page of the current language. */
export default function Logo({ locale, label }: Props) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={label}
      className="group flex items-center gap-[12px] shrink-0"
    >
      <span className="relative flex items-center justify-center w-[42px] h-[42px] rounded-[12px] border border-line group-hover:border-accent transition-colors">
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" fill="none">
          {/* V */}
          <path d="M4 8 L11 24 L18 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          {/* P */}
          <path d="M21 24 V8 h4.5a4.5 4.5 0 0 1 0 9H21" className="text-accent" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="hidden sm:block font-[family-name:var(--font-jetBrains)] text-[13px] uppercase tracking-[0.22em] text-ink/80 group-hover:text-ink transition-colors">
        Valeriia P.
      </span>
    </Link>
  );
}
