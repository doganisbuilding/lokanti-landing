import { Monitor, Smartphone, LayoutDashboard, Printer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { num: string; title: string; desc: string; Icon: LucideIcon }[] = [
  {
    num: "01 · Website",
    title: "Eigene Webseite",
    desc: "Professionelle Seite mit Fotos, Adresse und Öffnungszeiten. Auf Ihren Namen, Ihre Domain.",
    Icon: Monitor,
  },
  {
    num: "02 · Bestellung",
    title: "Bestellsystem für Gäste",
    desc: "Gäste bestellen direkt am Handy — ohne App, ohne Account. Zahlung online oder bei Abholung.",
    Icon: Smartphone,
  },
  {
    num: "03 · Backoffice",
    title: "Übersicht für Sie",
    desc: "Alle Bestellungen auf einen Blick — Status, Umsatz, Stammgäste. Am Tablet, Laptop oder Handy.",
    Icon: LayoutDashboard,
  },
  {
    num: "04 · Drucker",
    title: "Drucker in der Küche",
    desc: "Bestellung kommt rein → druckt automatisch. Kein Klicken, kein Bestätigen. WLAN reicht.",
    Icon: Printer,
  },
];

export function Bausteine() {
  return (
    <section className="py-[clamp(72px,9vw,128px)]" id="produkt">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="mb-14 max-w-[760px] max-md:mb-9">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-forest before:h-[1.5px] before:w-[18px] before:bg-forest before:content-['']">
            So machen wir das
          </span>
          <h2 className="mt-3.5 mb-[18px] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06]">
            Vier Bausteine. Wir bauen alles für Sie auf.
          </h2>
          <p className="text-[19px] leading-[1.5] text-ink-soft" style={{ textWrap: "pretty" }}>
            Sie müssen nichts installieren, nichts programmieren, niemanden
            einstellen. Wir liefern es eingerichtet — Sie kochen weiter wie
            bisher.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {items.map((item) => (
            <article
              key={item.num}
              className="flex flex-col gap-3.5 rounded-[22px] border border-rule bg-white p-7 px-[26px] pb-[30px] transition-all duration-200 hover:-translate-y-[3px] hover:border-sage hover:shadow-[var(--shadow-card)]"
            >
              <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-[14px] bg-mint-3 text-forest">
                <item.Icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-mute">
                {item.num}
              </span>
              <h4 className="text-lg font-bold leading-[1.25]">{item.title}</h4>
              <p className="text-sm leading-[1.55] text-ink-soft">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
