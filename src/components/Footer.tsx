"use client";

import { useT } from "@/lib/i18n";
import { whatsapp } from "@/lib/dictionary";

export default function Footer() {
  const { t } = useT();
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="f-top">
        <div>
          <h3 className="big">
            {f.brand}
            <br />
            <em>{f.brandEm}</em>
          </h3>
        </div>
        <div className="f-info">
          <div>
            <h5>{f.piezasH}</h5>
            {f.piezas.map((x) => <a href="/piezas" key={x}>{x}</a>)}
          </div>
          <div>
            <h5>{f.contactoH}</h5>
            <p>{f.contacto2}</p>
            <p>{f.contacto3}</p>
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)", marginTop: 12 }}
            >
              WhatsApp · {whatsapp.label}
            </a>
          </div>
        </div>
      </div>
      <div className="f-legal">
        <span>{f.legalL}</span>
        <span>{f.legalR}</span>
      </div>
    </footer>
  );
}
