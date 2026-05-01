"use client";

import { useT } from "@/lib/i18n";

export default function Encargos() {
  const { t } = useT();
  const e = t.enc;
  return (
    <section className="enc" id="enc">
      <div className="enc-inner">
        <div className="enc-top">
          <div className="eyebrow">{e.eyebrow}</div>
          <h2>
            {e.titleA} <em>{e.titleEm}</em> {e.titleB}
          </h2>
          <p className="sub">{e.lede}</p>
        </div>

        <div className="enc-steps">
          {e.steps.map((s) => (
            <div className="enc-step reveal" key={s.n}>
              <div className="n">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="enc-cta">
          <a href="/encargos">{e.cta}</a>
        </div>
      </div>
    </section>
  );
}
