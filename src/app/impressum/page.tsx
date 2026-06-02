import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Lokanti",
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-7 py-[clamp(72px,9vw,128px)] max-md:px-5">
        <h1 className="mb-10 font-[family-name:var(--font-display)] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06] tracking-[-0.022em]">
          Impressum
        </h1>

        <div className="space-y-8 text-base leading-[1.7] text-ink-soft">
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Dogan Ates
              <br />
              Ulmenweg 3
              <br />
              37327 Leinefelde
            </p>
            <p className="mt-4">
              E-Mail:{" "}
              <a href="mailto:hello@lokanti.com" className="text-forest hover:underline">
                hello@lokanti.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Dogan Ates
              <br />
              Ulmenweg 3
              <br />
              37327 Leinefelde
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
