"use client";

import { useEffect, useState } from "react";

export function HeroDemo() {
  const [badge, setBadge] = useState(1);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let i = 0;
    const seq = [1, 2, 3];
    const interval = setInterval(() => {
      i++;
      setBadge(seq[i % seq.length]);
    }, 2333);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto mt-[72px] flex max-w-[880px] flex-wrap items-center justify-center gap-14 max-lg:gap-8 max-md:mt-10 max-md:mb-[-230px] max-md:flex-nowrap max-md:gap-1.5 max-md:origin-top max-md:scale-[0.62]">
      {/* Phone */}
      <div className="relative w-[280px] h-[580px] bg-ink rounded-[44px] p-3 shadow-[0_30px_60px_-20px_rgba(12,27,30,0.32),0_12px_24px_-12px_rgba(12,27,30,0.18),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        {/* Dynamic Island */}
        <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-24 h-[26px] bg-black rounded-[99px] z-[3]" />

        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative flex flex-col">
          {/* Status bar */}
          <div className="h-[50px] flex justify-between items-center px-7 font-[family-name:var(--font-display)] text-sm font-bold text-ink">
            <span>9:41</span>
            <span className="flex gap-[5px] text-[11px]">●●● 4G ▮</span>
          </div>

          {/* URL bar */}
          <div className="mx-4 mb-3 mt-1.5 flex items-center gap-1.5 rounded-[10px] bg-paper-2 px-3 py-2 font-mono text-xs text-ink-mute">
            <span className="text-[10px] text-sage">🔒</span> ihr-restaurant.de
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden px-4 pb-3 flex flex-col gap-2.5">
            <div className="font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[0.08em] text-ink-mute my-0.5 mt-2">
              Klassiker
            </div>

            {/* Menu items */}
            {[
              { name: "Döner-Teller", desc: "Mit Reis & Salat", price: "8,90 €", animDelay: "1s" },
              { name: "Iskender", desc: "Hausspezialität", price: "9,90 €", animDelay: "" },
              { name: "Lahmacun", desc: "Mit Salat", price: "6,50 €", animDelay: "2.5s" },
              { name: "Ayran", desc: "0,3 L", price: "2,50 €", animDelay: "" },
            ].map((item, i) => (
              <div
                key={item.name}
                className="flex gap-2.5 items-center p-2.5 rounded-[10px] border border-rule-soft bg-white transition-all duration-500"
                style={
                  (i === 0 || i === 2)
                    ? { animation: `addPulse 7s ease-in-out infinite ${item.animDelay}` }
                    : undefined
                }
              >
                <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-mint-2 to-mint shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-ink leading-tight">{item.name}</div>
                  <div className="text-[10px] text-ink-mute mt-0.5">{item.desc}</div>
                </div>
                <div className="text-[13px] font-bold text-forest font-[family-name:var(--font-display)]">
                  {item.price}
                </div>
                <div className="w-[22px] h-[22px] rounded-full bg-forest text-white flex items-center justify-center text-sm font-bold shrink-0">
                  +
                </div>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="mx-4 mb-[22px] h-11 bg-forest text-white rounded-xl flex items-center justify-between px-4 font-[family-name:var(--font-display)] font-bold text-sm tracking-tight shadow-[0_8px_18px_-6px_rgba(10,60,38,0.4)]">
            <span>Bestellen · 21,80 €</span>
            <span className="bg-white text-forest w-[22px] h-[22px] rounded-full inline-flex items-center justify-center text-xs">
              {badge}
            </span>
          </div>
        </div>

        {/* Cursor */}
        <div
          className="absolute w-[26px] h-[26px] border-2 border-ink rounded-full bg-[rgba(118,160,136,0.4)] pointer-events-none z-[4] motion-reduce:hidden"
          style={{ animation: "cursorMove 7s ease-in-out infinite" }}
        />
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-2 text-forest font-mono text-[11px] tracking-[0.1em]">
        <span className="flex gap-1 items-center text-ink-mute">automatisch</span>
        <div className="relative w-14 h-0.5 bg-forest">
          <div className="absolute -right-px -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-forest" />
        </div>
        <span className="flex gap-1 items-center text-ink-mute">{"in < 2 Sek."}</span>
      </div>

      {/* Receipt */}
      <div className="relative w-[260px] bg-white border border-rule p-7 px-6 shadow-[var(--shadow-card)] font-mono text-xs text-ink leading-relaxed">
        {/* Perforated top */}
        <div
          className="absolute -top-2 left-0 right-0 h-2"
          style={{
            background:
              "radial-gradient(circle at 8px 8px, transparent 6px, var(--color-paper) 6px) 0 0 / 16px 8px repeat-x",
          }}
        />
        {/* Zigzag bottom */}
        <div
          className="absolute -bottom-2.5 left-0 right-0 h-2.5"
          style={{
            background: `
              linear-gradient(135deg, transparent 50%, var(--color-paper) 50%) 0 0 / 10px 10px repeat-x,
              linear-gradient(45deg, transparent 50%, var(--color-paper) 50%) 0 0 / 10px 10px repeat-x
            `,
          }}
        />

        {/* NEU stamp */}
        <div className="absolute top-4 -right-2 bg-forest text-white font-[family-name:var(--font-display)] text-[9px] font-[900] tracking-[0.1em] px-2 py-1 rotate-[8deg] shadow-[0_4px_12px_-4px_rgba(10,60,38,0.4)]">
          NEU
        </div>

        <div className="text-center mb-3 pb-2.5 border-b border-dashed border-ink">
          <div className="font-[family-name:var(--font-display)] font-[900] text-base tracking-[0.04em]">
            IHR RESTAURANT
          </div>
          <div className="text-[10px] text-ink-mute mt-1 tracking-[0.06em]">
            BESTELLUNG #1247 · 19:42
          </div>
        </div>

        <div className="flex justify-between items-baseline py-0.5">
          <span>1× Döner-Teller</span><span>8,90</span>
        </div>
        <div className="flex justify-between items-baseline py-0.5">
          <span>1× Iskender</span><span>9,90</span>
        </div>
        <div className="flex justify-between items-baseline py-0.5">
          <span>1× Ayran</span><span>3,00</span>
        </div>

        <div className="border-t border-dashed border-ink my-2.5" />
        <div className="flex justify-between items-baseline py-0.5 font-bold text-sm">
          <span>SUMME</span><span>21,80 €</span>
        </div>
        <div className="border-t border-dashed border-ink my-2.5" />

        <div className="text-[11px] leading-snug mt-1.5 text-ink-soft">
          M. Schmidt<br />
          Goethestr. 14<br />
          37327 Leinefelde<br />
          ABHOLUNG · 20:15
        </div>
      </div>
    </div>
  );
}
