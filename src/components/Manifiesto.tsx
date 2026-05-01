"use client";

import { useT } from "@/lib/i18n";

export default function Manifiesto() {
  const { t } = useT();
  const m = t.manifesto;
  return (
    <section className="man">
      <div className="eyebrow">{m.eyebrow}</div>
      <p className="reveal">
        {m.l1a}<em>{m.l1em}</em>{m.l1b}
        <br />
        {m.l2a}<strong>{m.l2strong}</strong>{m.l2b}
        <br />
        {m.l3a}<em>{m.l3em}</em>{m.l3b}
      </p>
    </section>
  );
}
