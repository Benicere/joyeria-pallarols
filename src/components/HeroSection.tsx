"use client";

import { useT } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useT();
  return (
    <section className="hero">
      <div className="bg" data-parallax="0.3">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=85"
          alt="Plata labrada"
        />
      </div>
      <div className="content">
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1>
          {t.hero.titleA}
          <br />
          {t.hero.titleB}
          <br />
          <em>{t.hero.titleEm}</em> {t.hero.titleC}
        </h1>
        <div className="sub">
          <div className="ticker">
            {t.hero.ticker} <em>925</em> · {t.hero.tickerCity}
          </div>
          <div className="scroll">{t.hero.scroll}</div>
        </div>
      </div>
    </section>
  );
}
