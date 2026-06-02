import { Phone } from "lucide-react";
import { HeroDemo } from "./HeroDemo";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-0 py-16 pb-24 max-lg:py-14 max-lg:pb-[72px] max-md:py-10 max-md:pb-16"
      style={{
        background:
          "radial-gradient(1100px 600px at 50% -10%, var(--color-mint-3) 0%, transparent 60%), var(--color-paper)",
      }}
    >
      <div className="mx-auto max-w-[940px] px-7 text-center">
        <h1 className="mx-auto mb-6 text-[clamp(48px,6.2vw,84px)] font-[900] leading-[1.0] tracking-[-0.03em] text-ink max-md:text-[42px] max-md:leading-[1.05]">
          Mehr Bestellungen.{" "}
          <br />
          <span className="relative inline-block text-sage">
            Weniger Aufwand.
            <span className="absolute left-0 right-0 -bottom-1.5 -z-10 h-1.5 rounded bg-mint" />
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[620px] text-[21px] leading-[1.45] text-ink-soft max-md:text-[17px] max-md:px-1">
          Wir bringen Ihr Restaurant online — mit eigener Bestellseite und
          Drucker in der Küche. Bestellungen kommen automatisch rein. Sie
          kochen, wie immer — nur für mehr Gäste.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 max-md:flex-col max-md:gap-2.5">
          <a
            href="tel:+4915128991909"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[999px] bg-forest px-[22px] py-3.5 font-[family-name:var(--font-display)] text-[15px] font-bold text-white shadow-[var(--shadow-elev)] transition-all duration-150 hover:-translate-y-px hover:bg-forest-2"
          >
            <Phone className="h-4 w-4" />
            +49 1512 8991909
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[999px] border-[1.5px] border-ink bg-transparent px-[22px] py-3.5 font-[family-name:var(--font-display)] text-[15px] font-bold text-ink transition-all duration-150 hover:-translate-y-px hover:bg-ink hover:text-white"
          >
            Rückruf anfordern →
          </a>
        </div>

        <div className="mt-[26px] flex flex-wrap items-center justify-center gap-6 font-mono text-[13px] tracking-[0.04em] text-ink-mute max-md:mt-[22px] max-md:flex-col max-md:gap-2 max-md:px-2 max-md:text-xs">
          {["Setup in 7 Tagen", "Keine Provision pro Bestellung", "Keine technischen Kenntnisse nötig"].map(
            (text) => (
              <span key={text} className="inline-flex items-center gap-1.5">
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sage text-[9px] font-bold text-white">
                  ✓
                </span>
                {text}
              </span>
            )
          )}
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}
