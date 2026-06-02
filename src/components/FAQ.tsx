"use client";

import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wie lange dauert die Einrichtung?",
    a: (
      <>
        <strong className="text-ink font-semibold">In der Regel rund zwei Wochen.</strong> Nach
        einem kurzen Erstgespräch nehmen wir Ihre Speisekarte und Fotos auf und
        bauen Webseite, Bestellsystem und Backoffice auf. Der Drucker kommt
        fertig konfiguriert per Post. Zum Schluss machen wir gemeinsam eine
        Testbestellung — dann gehen Sie live.
        <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-[999px] bg-mint-3 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-[0.06em] text-forest">
          ca. 2 Wochen · vom Erstgespräch bis live
        </span>
      </>
    ),
  },
  {
    q: "Was kostet Lokanti?",
    a: (
      <>
        Das hängt von Ihrem Restaurant ab — Größe der Karte, Lieferzone,
        Sprachen. Wir machen Ihnen am Telefon ein individuelles Angebot.
        <br /><br />
        <strong className="text-ink font-semibold">Was wir versprechen:</strong> feste monatliche
        Pauschale, <strong className="text-ink font-semibold">keine Provision pro Bestellung</strong>. Was Sie
        verdienen, bleibt bei Ihnen.
        <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-[999px] bg-mint-3 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-[0.06em] text-forest">
          Individuell · keine Provision
        </span>
      </>
    ),
  },
  {
    q: "Brauche ich technisches Wissen oder neues Personal?",
    a: "Nein. Wir bauen alles auf, liefern den Drucker fertig konfiguriert und zeigen Ihnen in einer kurzen Einweisung das Wichtigste. Sie müssen nichts installieren und niemanden einstellen.",
  },
  {
    q: "Was ist, wenn der Drucker mal nicht druckt?",
    a: "Bestellungen sehen Sie immer auch im Backoffice — nichts geht verloren. Fällt der Drucker aus, schicken wir kostenlos Ersatz. Unser Support ist für Sie da, wenn Sie ihn brauchen.",
  },
  {
    q: "Wie unterscheidet sich Lokanti von Lieferando oder Uber Eats?",
    a: (
      <>
        Bei Lieferando und Uber Eats gehören die Plattform und die Gast-Daten
        dem Anbieter — und für jede Bestellung zahlen Sie 15–30&nbsp;% Provision.
        Bei Lokanti gehört alles{" "}
        <strong className="text-ink font-semibold">Ihnen</strong>: Ihre eigene Webseite, Ihre eigene
        Domain, Ihre Gast-Daten — zu einer festen monatlichen Pauschale, ohne
        Provision. Sie können Lokanti auch zusätzlich zu den Plattformen nutzen.
      </>
    ),
  },
  {
    q: "Vertragslaufzeit — kann ich jederzeit kündigen?",
    a: "Wir arbeiten mit kurzen Laufzeiten und fairer Kündigung. Genaue Konditionen besprechen wir im Telefonat — wir wollen Sie überzeugen, nicht binden.",
  },
];

export function FAQ() {
  return (
    <section className="bg-paper-2 py-[clamp(72px,9vw,128px)]" id="faq">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="grid grid-cols-[1fr_1.5fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Left sticky */}
          <div className="sticky top-[100px] max-lg:static">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-forest before:h-[1.5px] before:w-[18px] before:bg-forest before:content-['']">
              Häufige Fragen
            </span>
            <h2 className="mt-3.5 mb-[18px] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06]">
              Was Restaurant-Inhaber uns fragen.
            </h2>
            <p className="mb-6 text-[19px] leading-[1.5] text-ink-soft" style={{ textWrap: "pretty" }}>
              Noch eine Frage offen? Rufen Sie an — Mo–Sa, Deutsch oder
              Türkisch.
            </p>
            <a
              href="tel:+4915128991909"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[999px] bg-forest px-[22px] py-3.5 font-[family-name:var(--font-display)] text-[15px] font-bold text-white shadow-[var(--shadow-elev)] transition-all duration-150 hover:-translate-y-px hover:bg-forest-2"
            >
              <Phone className="h-4 w-4" />
              +49 1512 8991909
            </a>
          </div>

          {/* Right accordion */}
          <Accordion defaultValue={["0"]} className="border-t border-rule">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={String(i)}
                className="border-b border-rule"
              >
                <AccordionTrigger className="flex w-full cursor-pointer items-center gap-6 py-6 text-left font-[family-name:var(--font-display)] text-[19px] font-bold tracking-[-0.012em] text-ink transition-colors hover:text-forest hover:no-underline max-md:gap-3.5 max-md:py-5 max-md:text-[17px] **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="flex-1">{faq.q}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-rule bg-white text-[22px] font-normal text-ink transition-all duration-200 group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:border-forest group-aria-expanded/accordion-trigger:bg-forest group-aria-expanded/accordion-trigger:text-white max-md:h-[30px] max-md:w-[30px]">
                    +
                  </span>
                </AccordionTrigger>
                <AccordionContent className="max-w-[660px] pb-7 text-base leading-[1.6] text-ink-soft">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
