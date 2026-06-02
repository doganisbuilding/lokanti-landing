"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-white/8 bg-[rgba(10,10,10,0.92)] backdrop-blur-[12px] backdrop-saturate-[140%]"
          : "border-rule-soft bg-[rgba(251,252,251,0.84)] backdrop-blur-[12px] backdrop-saturate-[140%]"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-7 py-4 max-md:gap-3 max-md:px-5">
        <a href="/" aria-label="Lokanti" className="flex items-center">
          <Image
            src="/assets/lokanti-logo.svg"
            alt="Lokanti"
            width={123}
            height={34}
            className={`h-[34px] w-auto ${scrolled ? "hidden" : "block"}`}
            priority
          />
          <Image
            src="/assets/lokanti-logo-white.svg"
            alt="Lokanti"
            width={123}
            height={34}
            className={`h-[34px] w-auto ${scrolled ? "block" : "hidden"}`}
            priority
          />
        </a>

        <div className="ml-6 flex items-center gap-[26px] max-lg:hidden">
          {[
            { label: "Kunden", href: "/#kunde" },
            { label: "Produkt", href: "/#produkt" },
            { label: "FAQ", href: "/#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors duration-150 ${
                scrolled
                  ? "text-white/66 hover:text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-[18px] max-md:hidden">
          <a
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[999px] bg-forest px-4 py-2.5 font-[family-name:var(--font-display)] text-sm font-bold text-white shadow-[var(--shadow-elev)] transition-all duration-150 ease-in-out hover:-translate-y-px hover:bg-forest-2"
          >
            Rückruf anfordern
          </a>
        </div>
      </div>
    </nav>
  );
}
