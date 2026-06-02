const voices = [
  {
    quote: "Endlich kann ich bei Memo online bestellen — viel einfacher als anrufen.",
    author: "TANJA M. · GAST BEI MEMO GRILL",
  },
  {
    quote: "Mache ich jetzt jeden Freitag. 30 Sekunden vom Sofa, fertig.",
    author: "DANIEL K. · STAMMGAST",
  },
  {
    quote: "Speisekarte ist immer aktuell — und ich kann meiner Tochter zeigen, was es gibt.",
    author: "FAMILIE ÖNDER · BEI MEMO",
  },
];

export function Voices() {
  return (
    <section className="bg-forest py-[clamp(72px,9vw,128px)] text-ink">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        {/* Head */}
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink before:h-[1.5px] before:w-[18px] before:bg-ink before:content-['']">
            Aus erster Hand
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.4vw,48px)] font-[900] leading-[1.06] text-ink">
            Ihre Gäste werden es{" "}
            <span className="relative inline-block">
              lieben
              <span className="absolute left-0 right-0 bottom-1 -z-10 h-2.5 rounded bg-[rgba(10,10,10,0.16)]" />
            </span>
            .
          </h2>
          <p className="text-[19px] leading-[1.5] text-[rgba(10,10,10,0.78)]" style={{ textWrap: "pretty" }}>
            So reden echte Gäste über Online-Bestellung bei{" "}
            <strong className="text-ink">Memo Grill</strong> in Leinefelde. Bald
            auch bei Ihnen.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-[1080px] grid-cols-3 gap-12 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-3">
          {voices.map((v) => (
            <div
              key={v.author}
              className="text-center max-md:rounded-[22px] max-md:border max-md:border-[rgba(0,0,0,0.12)] max-md:bg-[rgba(0,0,0,0.06)] max-md:p-[18px] max-md:text-center"
            >
              <div
                className="font-[family-name:var(--font-display)] text-[21px] font-medium italic leading-[1.32] tracking-[-0.012em] text-ink max-md:text-base max-md:leading-[1.4]"
                style={{ textWrap: "balance" }}
              >
                <span className="not-italic font-bold text-[rgba(10,10,10,0.4)]">&ldquo;</span>
                {v.quote}
                <span className="not-italic font-bold text-[rgba(10,10,10,0.4)]">&rdquo;</span>
              </div>
              <div className="mt-[18px] inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.08em] text-[rgba(10,10,10,0.62)] before:h-[1.5px] before:w-6 before:bg-[rgba(10,10,10,0.4)] before:content-[''] max-md:mt-2.5">
                {v.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
