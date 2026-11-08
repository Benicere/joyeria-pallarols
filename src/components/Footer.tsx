"use client";

import { useT } from "@/lib/i18n";
import WhatsAppLink from "@/components/WhatsAppLink";
import { instagram } from "@/lib/contact";
import AurosentLogo from "@/components/AurosentLogo";

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
            <WhatsAppLink className="f-wa" />
            <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="f-ig">
              Instagram · {instagram.label}
            </a>
          </div>
        </div>
      </div>
      {/* Barra final, igual que en los otros sitios de Aurosent: © a la izquierda,
          "Desarrollado por" + logo (plateado que se dora al acercarse) a la derecha. */}
      <div className="f-bar">
        <div className="f-bar-inner">
          <span>
            © {new Date().getFullYear()} {f.copy}
          </span>
          <span className="f-dev">
            {f.devBy}
            <a href="https://aurosent.com" target="_blank" rel="noopener noreferrer" aria-label="Aurosent">
              <AurosentLogo className="h-[16px]" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
