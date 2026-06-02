import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Lokanti",
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-7 py-[clamp(72px,9vw,128px)] max-md:px-5">
        <h1 className="mb-10 font-[family-name:var(--font-display)] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06] tracking-[-0.022em]">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-base leading-[1.7] text-ink-soft">
          {/* 1 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              1. Verantwortlicher
            </h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">Dogan Ates</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a href="mailto:hello@lokanti.com" className="text-forest hover:underline">
                hello@lokanti.com
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              2. Zugriff auf die Website
            </h2>
            <p>
              Beim Besuch dieser Website werden automatisch Informationen durch
              den Hosting-Anbieter erfasst. Dies umfasst insbesondere:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">
              Diese Daten dienen der technischen Bereitstellung und Sicherheit
              der Website.
            </p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              3. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
              übermittelten personenbezogenen Daten zur Bearbeitung Ihrer Anfrage
              verarbeitet.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1
              lit. f DSGVO.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              4. Google Maps
            </h2>
            <p>
              Diese Website verwendet Google Maps zur Darstellung interaktiver
              Karten.
            </p>
            <p className="mt-2">
              Anbieter ist Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p className="mt-2">
              Bei Nutzung der Kartenfunktion können personenbezogene Daten,
              insbesondere Ihre IP-Adresse, an Google übermittelt werden.
            </p>
            <p className="mt-2">
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Google.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              5. Ihre Rechte
            </h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mt-3">
              Darüber hinaus haben Sie das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              6. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern
              dies aufgrund rechtlicher oder technischer Änderungen erforderlich
              wird.
            </p>
            <p className="mt-4 font-mono text-sm text-ink-mute">Stand: Juni 2026</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
