"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
const navItems = [
  { label: "introduction", href: "/" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "#contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Закрытие по клику вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        open &&
        menuRef.current &&
        burgerRef.current &&
        !menuRef.current.contains(target) &&
        !burgerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="px-[16px] py-[20px] w-full z-[50] flex justify-end items-start sticky top-0 relative">
      {/* Burger */}
      <button
        ref={burgerRef}
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer relative w-[32px] h-[24px] flex flex-col justify-between z-[60]"
      >
        <span
          className={`h-[2px] w-full bg-white transition-transform duration-300 ${
            open ? "rotate-45 translate-y-[11px]" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-[11px]" : ""
          }`}
        />
      </button>

      {/* Menu */}
      <nav
        ref={menuRef}
        className={`
          absolute top-0 right-0 h-screen min-w-[300px] w-[40vw]
          font-[family-name:var(--font-jetBrains)]
          text-[28px]
          flex flex-col gap-[24px]
          px-[32px] py-[80px]
          backdrop-blur-lg
          brightness-90
          transform
          transition-transform transition-opacity
          duration-500 ease-out
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="hover:opacity-70 transition-opacity"
          >
            {"< "}
            {item.label}
            {" /"}
            {" >"}
          </Link>
        ))}
      </nav>
    </header>
  );
}

