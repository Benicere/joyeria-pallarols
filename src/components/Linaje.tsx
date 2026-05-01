"use client";

import { useT } from "@/lib/i18n";

export default function Linaje() {
  const { t } = useT();
  const l = t.linaje;
  return (
    <section className="linaje" id="linaje">
      <div className="linaje-inner">
        <div className="photo">
          <div className="big">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85"
              alt="Retrato del taller"
            />
          </div>
          <div className="stamp">
            <div>
              <div className="y">IX</div>
              <div className="t">{l.stampT}</div>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="eyebrow">{l.eyebrow}</div>
          <h2>
            {l.titleA} <em>{l.titleEm}</em>
          </h2>
          <p className="lede">{l.lede}</p>
          <div className="timeline">
            {l.rows.map((r) => (
              <div className="row reveal" key={r.y}>
                <span className="y">{r.y}</span>
                <h4>{r.h}</h4>
                <span className="g">{r.g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
