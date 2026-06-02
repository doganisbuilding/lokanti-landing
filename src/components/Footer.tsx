import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ink pb-9 pt-12 text-sm text-white/60">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-7 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-7 max-md:px-5">
        {/* Brand */}
        <div>
          <a href="/" aria-label="Lokanti">
            <Image
              src="/assets/lokanti-logo-white.svg"
              alt="Lokanti"
              width={113}
              height={32}
              className="h-8 w-auto"
            />
          </a>
          <p className="mt-3 max-w-[280px] text-[13px] leading-[1.5] text-white/50">
            Wir bringen Restaurants in Deutschland online — mit eigener
            Bestellseite, Backoffice und Drucker. Ohne Provision.
          </p>
        </div>

        {/* Produkt */}
        <div>
          <h5 className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.04em] text-white">
            Produkt
          </h5>
          <ul className="flex flex-col gap-2">
            <li><a href="/#produkt" className="transition-colors hover:text-white">Bausteine</a></li>
            <li><a href="/#kunde" className="transition-colors hover:text-white">Kunden</a></li>
            <li><a href="/#faq" className="transition-colors hover:text-white">FAQ</a></li>
            <li><a href="/#kontakt" className="transition-colors hover:text-white">Rückruf</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h5 className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.04em] text-white">
            Kontakt
          </h5>
          <ul className="flex flex-col gap-2">
            <li><a href="tel:+4915128991909" className="transition-colors hover:text-white">+49 1512 8991909</a></li>
            <li><a href="mailto:hallo@lokanti.de" className="transition-colors hover:text-white">hallo@lokanti.de</a></li>
            <li>Leinefelde, DE</li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h5 className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.04em] text-white">
            Rechtliches
          </h5>
          <ul className="flex flex-col gap-2">
            <li><a href="/impressum" className="transition-colors hover:text-white">Impressum</a></li>
            <li><a href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-white/10 px-7 pt-6 font-mono text-xs tracking-[0.04em] text-white/40 max-md:px-5">
        <span>© 2026 Lokanti — Mit ♥ in Thüringen</span>
        <span>v1.0 · DESIGN PREVIEW</span>
      </div>
    </footer>
  );
}
