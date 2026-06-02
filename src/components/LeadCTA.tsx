"use client";

import { Phone } from "lucide-react";
import { type FormEvent, useState } from "react";

export function LeadCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    formData.append("subject", `Rückruf angefordert: ${formData.get("restaurant")}`);
    formData.append("from_name", "Lokanti Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="py-[clamp(72px,9vw,128px)]"
      id="kontakt"
      style={{
        background: "linear-gradient(180deg, var(--color-paper) 0%, var(--color-mint-3) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-forest before:h-[1.5px] before:w-[18px] before:bg-forest before:content-['']">
              Kontakt
            </span>
            <h2 className="mt-3.5 mb-[18px] text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06]">
              Wir rufen Sie zurück.
            </h2>
            <p className="mb-7 text-[19px] leading-[1.5] text-ink-soft" style={{ textWrap: "pretty" }}>
              Kein Vertrag, kein Verkaufsgespräch. Wir schauen einmal gemeinsam,
              ob Lokanti zu Ihrem Restaurant passt — am Telefon, 15 Minuten.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-[14px] border border-rule bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint-3 text-forest">
                <Phone className="h-[22px] w-[22px]" />
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.04em] text-ink-mute">ODER DIREKT</div>
                <div className="mt-0.5 whitespace-nowrap font-[family-name:var(--font-display)] text-[22px] font-[900] tracking-tight text-forest">
                  +49 1512 8991909
                </div>
                <div className="mt-1 font-mono text-xs text-ink-mute">Mo–Sa · 09:00–20:00</div>
              </div>
            </div>
          </div>

          {/* Right form */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-[22px] border border-rule-soft bg-white p-9 text-center shadow-[var(--shadow-card)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-3 text-3xl text-forest">
                ✓
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold">
                Vielen Dank!
              </h3>
              <p className="text-sm text-ink-soft">
                Wir rufen Sie innerhalb von 24 h zurück.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[22px] border border-rule-soft bg-white p-9 shadow-[var(--shadow-card)] max-md:p-7 max-md:px-[22px]"
            >
              <h3 className="mb-1 font-[family-name:var(--font-display)] text-[22px] font-bold">
                Rückruf vereinbaren
              </h3>
              <p className="mb-[22px] text-sm text-ink-soft">
                Wir rufen innerhalb von 24 h zurück.
              </p>

              {status === "error" && (
                <div className="mb-4 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </div>
              )}

              <div className="mb-3.5 flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-[0.04em] text-ink-mute">
                  Name des Restaurants
                </label>
                <input
                  name="restaurant"
                  type="text"
                  placeholder="z.B. Memo Grill"
                  required
                  className="rounded-[10px] border border-rule bg-paper px-3.5 py-3 text-[15px] text-ink transition-all duration-150 placeholder:text-ink-mute/60 focus:border-forest focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mb-3.5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.04em] text-ink-mute">
                    Ihr Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Vor- und Nachname"
                    required
                    className="rounded-[10px] border border-rule bg-paper px-3.5 py-3 text-[15px] text-ink transition-all duration-150 placeholder:text-ink-mute/60 focus:border-forest focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.04em] text-ink-mute">
                    Telefon *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="0152 ..."
                    required
                    className="rounded-[10px] border border-rule bg-paper px-3.5 py-3 text-[15px] text-ink transition-all duration-150 placeholder:text-ink-mute/60 focus:border-forest focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-3.5 flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-[0.04em] text-ink-mute">
                  Wann sollen wir anrufen?
                </label>
                <input
                  name="callbackTime"
                  type="text"
                  placeholder="z.B. heute Nachmittag"
                  className="rounded-[10px] border border-rule bg-paper px-3.5 py-3 text-[15px] text-ink transition-all duration-150 placeholder:text-ink-mute/60 focus:border-forest focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full rounded-[999px] bg-forest px-[22px] py-4 font-[family-name:var(--font-display)] text-base font-bold text-white shadow-[var(--shadow-elev)] transition-all duration-150 hover:-translate-y-px hover:bg-forest-2 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Wird gesendet..." : "Rückruf anfordern →"}
              </button>
              <div className="mt-3 text-center text-[11px] leading-snug text-ink-mute">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="underline hover:text-forest">
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
