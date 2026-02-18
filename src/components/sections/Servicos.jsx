import { useState } from "react";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function ServiceCard({ num, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? theme.bg3 : theme.bg2,
        padding: "2rem 2.4rem",
        display: "flex",
        gap: "1.2rem",
        transition: "background .3s",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "2.5rem",
          color: "rgba(150,170,200,.1)",
          lineHeight: 1,
          flexShrink: 0,
          marginTop: "-.2rem",
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontSize: ".72rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: theme.cr6,
            fontWeight: 600,
            marginBottom: ".55rem",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: ".76rem", color: theme.textMd, lineHeight: 1.7, fontWeight: 300 }}>
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

  return (
    <section id="servicos" style={{ background: theme.bg2, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <SLabel>{t.servicos.label}</SLabel>
        <STitle>
          {t.servicos.titleA}
          <br />
          <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.servicos.titleB}</em>
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
          {services.map(([num, title, desc]) => (
            <ServiceCard key={num} num={num} title={title} desc={desc} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
