"use client";

import { useT } from "@/lib/i18n";

export default function Taller() {
  const { t } = useT();
  const tl = t.taller;
  return (
    <section className="taller" id="taller">
      <div className="bg" data-parallax="0.2">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=85"
          alt="Taller"
        />
      </div>
      <div className="wrap">
        <div>
          <div className="eyebrow">{tl.eyebrow}</div>
          <h2>
            {tl.titleA} <em>{tl.titleEm}</em>{tl.titleB}
          </h2>
          <p className="lede">{tl.lede}</p>
        </div>
        <div className="steps">
          {tl.steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <span className="n">{s.n}</span>
              <div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
