import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-paper-2 py-[clamp(72px,9vw,128px)]" id="kunde">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        {/* Section head */}
        <div className="mb-14 max-w-[760px] max-md:mb-9">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-forest before:h-[1.5px] before:w-[18px] before:bg-forest before:content-['']">
            Aus der Praxis
          </span>
          <h2 className="mt-3.5 mb-[18px] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06]">
            Seit Memo online ist, wächst sein Geschäft messbar.
          </h2>
          <p className="text-[19px] leading-[1.5] text-ink-soft" style={{ textWrap: "pretty" }}>
            Wir haben Memo Grill komplett digitalisiert — eigene Webseite,
            Bestellsystem, Backoffice und Küchen-Drucker. Das Ergebnis: mehr
            Bestellungen, neue Gäste aus der Region, weniger Aufwand im Alltag.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[1.05fr_0.95fr] items-stretch gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Photo card */}
          <div className="relative flex min-h-[520px] items-end overflow-hidden rounded-[22px] bg-forest p-7 text-white max-md:min-h-[320px]">
            <Image
              src="/assets/memo-grill.jpg"
              alt="Metin Ateş und sein Team im Memo Grill"
              fill
              className="object-cover z-0"
              sizes="(max-width: 1080px) 100vw, 55vw"
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(10,60,38,0)] via-transparent to-[rgba(7,30,20,0.78)]" style={{ backgroundPosition: "0 35%" }} />
            <div className="relative z-[2]">
              <div className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                Memo Grill
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.08em] opacity-80">
                LEINEFELDE · SEIT 2006
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="flex flex-col gap-6 rounded-[22px] bg-white p-12 px-11 shadow-[var(--shadow-card)] max-md:p-7 max-md:px-6">
            <div className="font-[family-name:var(--font-display)] text-[clamp(24px,2.4vw,32px)] font-bold leading-[1.15] tracking-[-0.018em] text-ink max-md:text-[21px]">
              <span className="mr-0.5 align-[-16px] font-[family-name:var(--font-display)] text-[56px] leading-none text-sage max-md:text-[44px] max-md:align-[-12px]">
                &ldquo;
              </span>
              Lokanti hat unser Restaurant ins Internet gebracht. Heute kommen
              Bestellungen einfach rein — und Gäste, die uns vorher nie gefunden
              hätten.&rdquo;
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sage to-forest font-[family-name:var(--font-display)] text-base font-bold text-white">
                MA
              </div>
              <div>
                <div className="text-[15px] font-semibold text-ink">Metin Ateş</div>
                <div className="text-[13px] text-ink-mute">Inhaber · Memo Grill Leinefelde</div>
              </div>
              <a
                href="https://memo-grill-leinefelde.de"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 rounded-[999px] bg-mint-3 px-3 py-2 font-mono text-[11px] tracking-[0.04em] text-forest transition-colors hover:bg-mint-2 max-lg:ml-0"
              >
                memo-grill-leinefelde.de
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-5 border-t border-rule-soft pt-6 max-md:grid-cols-1 max-md:gap-3.5">
              {[
                { val: "+42%", lbl: "Umsatz Mo–Do nach 90 Tagen" },
                { val: "14 Tage", lbl: "vom Anruf bis live" },
                { val: "~30%", lbl: "neue Gäste online" },
              ].map((stat) => (
                <div key={stat.val} className="max-md:flex max-md:items-baseline max-md:gap-3.5">
                  <div className="font-[family-name:var(--font-display)] text-[32px] font-[900] leading-none tracking-[-0.02em] text-forest max-md:text-[28px]">
                    {stat.val}
                  </div>
                  <div className="mt-1.5 text-xs leading-tight text-ink-mute max-md:mt-0">
                    {stat.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
