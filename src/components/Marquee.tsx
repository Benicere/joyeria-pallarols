"use client";

import { useT } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useT();
  const m = t.marquee;
  return (
    <div className="marquee" aria-hidden="true">
      <span>
        {m.silver} <em>925</em> &nbsp;·&nbsp; {m.handmade} &nbsp;·&nbsp; {m.city}
        &nbsp;·&nbsp; {m.unique} &nbsp;·&nbsp; {m.silver} <em>925</em>
        &nbsp;·&nbsp; {m.handmade} &nbsp;·&nbsp; {m.city}
        &nbsp;·&nbsp; {m.unique} &nbsp;·&nbsp;
      </span>
    </div>
  );
}
