import { useState } from "react";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function ServiceCard({ title, desc, isMobile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? theme.bg3 : theme.bg2,
        padding: "2rem 2.4rem",
        transition: "background .3s",
      }}
    >
      <div>
        <div
          style={{
            width: 26,
            height: 2,
            background: "linear-gradient(to right, rgba(180,205,240,.85), transparent)",
            marginBottom: ".7rem",
          }}
        />
        <div
          style={{
            fontSize: ".72rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: theme.cr6,
            fontWeight: 500,
            marginBottom: ".55rem",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: isMobile ? "16px" : "20px", color: theme.textMd, lineHeight: 1.5, fontWeight: 500 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default function Servicos() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const services = t.servicos.items;
  const hasOddCount = services.length % 2 !== 0;

  return (
    <section id="servicos" style={{ background: theme.bg2, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <SLabel>{t.servicos.label}</SLabel>
        <STitle>
          {t.servicos.titleA} {" "}<em style={{ fontStyle: "normal", color: theme.cr6 }}>{t.servicos.titleB}</em>
        </STitle>
      </Reveal>
      <Reveal delay={150}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
            gap: 1,
            background: theme.bd,
            marginTop: "3rem",
          }}
        >
          {services.map(([, title, desc], index) => {
            const isLastOdd = hasOddCount && index === services.length - 1;
            return (
              <div key={title} style={{ gridColumn: !isMobile && isLastOdd ? "1 / -1" : "auto" }}>
                <ServiceCard title={title} desc={desc} isMobile={isMobile} />
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
