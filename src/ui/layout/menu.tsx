"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeTags, locales, type Locale } from "@/i18n/config";
import Logo from "./Logo";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { locale: Locale; nav: Dictionary["nav"] };

/** Same page in another language: /en/projects/oikia -> /uk/projects/oikia */
const switchLocalePath = (pathname: string, target: Locale) => {
  const parts = pathname.split("/");
  parts[1] = target;
  return parts.join("/") || `/${target}`;
};

export default function Menu({ locale, nav }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() ?? `/${locale}`;

  const home = `/${locale}`;
  const navItems = [
    { label: nav.home, href: home },
    { label: nav.howIWork, href: `${home}#how-i-work` },
    { label: nav.skills, href: `${home}#skills` },
    { label: nav.projects, href: `${home}/projects` },
    { label: nav.contact, href: `${home}#contact` },
  ];

  // Close on click outside and on Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (open && menuRef.current && burgerRef.current && !menuRef.current.contains(target) && !burgerRef.current.contains(target)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="px-[16px] py-[18px] z-[50] flex justify-between items-center gap-[20px] sticky top-0 w-full max-w-[1400px] mx-auto">
      <Logo locale={locale} label={nav.home} />

      <div className="flex items-center gap-[20px]">
      {/* Language switcher */}
      <nav aria-label={nav.language} className="flex gap-[8px] text-[14px] font-[family-name:var(--font-jetBrains)] z-[60]">
        {locales.map((l) => (
          <Link
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={localeTags[l].hreflang}
            aria-current={l === locale ? "true" : undefined}
            className={l === locale ? "text-white font-bold" : "text-white/60 hover:text-white"}
          >
            {localeTags[l].label}
          </Link>
        ))}
      </nav>

      {/* Burger */}
      <button
        ref={burgerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? nav.closeMenu : nav.menu}
        aria-expanded={open}
        aria-controls="site-menu"
        className="cursor-pointer relative w-[32px] h-[24px] flex flex-col justify-between z-[60]"
      >
        <span className={`h-[2px] w-full bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-[11px]" : ""}`} />
        <span className={`h-[2px] w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`h-[2px] w-full bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[11px]" : ""}`} />
      </button>

      </div>

      {/* Menu */}
      <nav
        id="site-menu"
        ref={menuRef}
        aria-hidden={!open}
        inert={!open}
        className={`
          fixed top-0 right-0 h-screen min-w-[300px] w-[40vw]
          font-[family-name:var(--font-jetBrains)]
          text-[20px] md:text-[24px] lg:text-[28px]
          flex flex-col gap-[24px]
          px-[32px] py-[80px]
          backdrop-blur-lg
          bg-[linear-gradient(135deg,rgba(14,51,39,0.92)_0%,rgba(4,20,15,0.96)_100%)] border-l border-line
          transform transition-transform transition-opacity duration-500 ease-out
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">
            {"< "}
            {item.label}
            {" />"}
          </Link>
        ))}
      </nav>
    </header>
  );
}
