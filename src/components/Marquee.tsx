"use client";

import { useT } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useT();
  const m = t.marquee;
  return (
    <div className="marquee" aria-hidden="true">
      <span>
        {m.silver} <em>925</em> &nbsp;·&nbsp; {m.handmade} &nbsp;·&nbsp; {m.city}
        &nbsp;·&nbsp; <em>1750</em> — 2026 &nbsp;·&nbsp; {m.generations}
        &nbsp;·&nbsp; {m.silver} <em>925</em> &nbsp;·&nbsp; {m.handmade}
        &nbsp;·&nbsp; {m.city} &nbsp;·&nbsp; <em>1750</em> — 2026
        &nbsp;·&nbsp; {m.generations} &nbsp;·&nbsp;
      </span>
    </div>
  );
}
