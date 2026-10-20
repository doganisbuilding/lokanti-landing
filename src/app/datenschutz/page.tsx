import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Lokanti",
};

const h2 = "mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink";

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
            <h2 className={h2}>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Dogan Ates (Lokanti)
              <br />
              Ulmenweg 3
              <br />
              37327 Leinefelde
            </p>
            <p className="mt-2">
              Telefon:{" "}
              <a href="tel:+4915128991909" className="text-forest hover:underline">
                +49 1512 8991909
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:hello@lokanti.com" className="text-forest hover:underline">
                hello@lokanti.com
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2}>2. Hosting und Zugriffsdaten</h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA gehostet. Beim Besuch der Website erfasst
              Vercel automatisch folgende Daten in Server-Logfiles:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">
              Diese Daten dienen ausschließlich der technischen Bereitstellung,
              Stabilität und Sicherheit der Website. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einem
              sicheren und fehlerfreien Betrieb. Die Logdaten werden vom
              Hosting-Anbieter nur kurzfristig gespeichert und anschließend
              gelöscht.
            </p>
            <p className="mt-2">
              Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28
              DSGVO). Eine Übermittlung in die USA erfolgt auf Grundlage des
              EU-US Data Privacy Framework, unter dem Vercel zertifiziert ist
              (Art. 45 DSGVO), sowie ergänzend der
              EU-Standardvertragsklauseln.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2}>3. Cookies und Tracking</h2>
            <p>
              Diese Website setzt keine Cookies zu Analyse- oder
              Marketingzwecken und verwendet keine Tracking- oder
              Analyse-Dienste. Schriftarten werden lokal von unserem Server
              geladen; es findet keine Verbindung zu Google Fonts statt.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2}>4. Rückruf-Formular</h2>
            <p>
              Wenn Sie über das Formular einen Rückruf anfordern, verarbeiten
              wir die von Ihnen eingegebenen Daten: Name des Restaurants, Ihren
              Namen, Ihre Telefonnummer und den gewünschten Zeitpunkt. Wir
              nutzen diese Daten ausschließlich, um Sie zurückzurufen und Ihre
              Anfrage zu beantworten.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen auf Ihre Anfrage) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p className="mt-2">
              Für den Versand der Formulardaten an unser E-Mail-Postfach nutzen
              wir den Dienst Web3Forms (web3forms.com). Die Formulardaten werden
              dabei an die Server von Web3Forms übermittelt und von dort per
              E-Mail an uns weitergeleitet. Dabei kann eine Verarbeitung
              außerhalb der EU stattfinden. Weitere Informationen finden Sie in
              der Datenschutzerklärung von Web3Forms.
            </p>
            <p className="mt-2">
              Wir löschen Ihre Anfrage, sobald sie erledigt ist, spätestens
              jedoch nach 6 Monaten, sofern kein Vertrag zustande kommt und
              keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2}>5. Kontakt per E-Mail und Telefon</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
              Ihre Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO. Die
              Daten werden gelöscht, sobald die Anfrage erledigt ist und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-2">
              Unser E-Mail-Postfach wird von der IONOS SE, Elgendorfer Str. 57,
              56410 Montabaur, Deutschland, bereitgestellt.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2}>6. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns das Recht auf:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Wenden Sie sich dafür einfach per E-Mail an uns.
            </p>
            <p className="mt-3">
              Darüber hinaus haben Sie das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren. Für uns zuständig ist
              der Thüringer Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit (TLfDI), Häßlerstraße 8, 99096 Erfurt.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2}>7. Widerspruchsrecht (Art. 21 DSGVO)</h2>
            <p className="font-semibold text-ink">
              Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen
              diese Verarbeitung einzulegen. Wir verarbeiten Ihre Daten dann
              nicht mehr, es sei denn, wir können zwingende schutzwürdige
              Gründe nachweisen, die Ihre Interessen überwiegen.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2}>8. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
              „https://“ in der Adresszeile Ihres Browsers.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2}>9. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern
              dies aufgrund rechtlicher oder technischer Änderungen erforderlich
              wird.
            </p>
            <p className="mt-4 font-mono text-sm text-ink-mute">Stand: Oktober 2026</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
