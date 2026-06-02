import Image from "next/image";

const brands = [
  { src: "/assets/brands/mcdonalds.png", alt: "McDonald's" },
  { src: "/assets/brands/dominos.svg", alt: "Domino's" },
  { src: "/assets/brands/vapiano.svg", alt: "Vapiano" },
  { src: "/assets/brands/losteria.png", alt: "L'Osteria" },
];

export function BigBrands() {
  return (
    <section className="bg-ink py-[clamp(72px,9vw,128px)] text-white">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="mb-12 max-w-[760px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-forest before:h-[1.5px] before:w-[18px] before:bg-forest before:content-['']">
            Same tech as big brands
          </span>
          <h2 className="mt-3.5 mb-[18px] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06] text-white">
            Die Technik der großen Ketten — jetzt für Ihr Restaurant.
          </h2>
          <p className="text-[19px] leading-[1.5] text-white/[0.74]" style={{ textWrap: "pretty" }}>
            McDonald&apos;s, Domino&apos;s, Vapiano: alle haben eigene Apps und eigene
            Bestellseiten. Sie behalten ihre Gäste und ihre Marge. Lokanti gibt
            Ihnen denselben Stack — als einzelnes Restaurant.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2.5">
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className="flex h-[84px] items-center justify-center rounded-[14px] border border-white/10 bg-white px-5 py-4 transition-transform duration-200 hover:-translate-y-0.5 max-md:h-16"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
          <div className="relative flex h-[84px] items-center justify-center rounded-[14px] border border-forest bg-forest px-5 py-4 font-[family-name:var(--font-display)] text-[17px] font-[900] text-white shadow-[0_10px_30px_-8px_rgba(11,175,102,0.5)] max-md:h-16 max-md:text-sm">
            Ihr Restaurant
            <span className="absolute top-2.5 right-3 text-sm">✦</span>
          </div>
        </div>

        <div className="mt-[18px] font-mono text-[11px] tracking-[0.14em] text-white/50">
          + JETZT AUCH SIE — OHNE TECH-TEAM, OHNE PROVISION.
        </div>
      </div>
    </section>
  );
}
