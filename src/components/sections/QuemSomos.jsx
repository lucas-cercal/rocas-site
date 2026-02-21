import { useState } from "react";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function Pillar({ title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? theme.bg3 : theme.bg2,
        padding: "1.8rem",
        position: "relative",
        transition: "background .3s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right,transparent,${theme.cr4},transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity .3s",
        }}
      />
      <div
        style={{
          width: 24,
          height: 2,
          background: "linear-gradient(to right, rgba(180,205,240,.85), transparent)",
          marginBottom: ".65rem",
        }}
      />
      <div
        style={{
          fontSize: ".7rem",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: theme.cr6,
          marginBottom: ".4rem",
          fontWeight: 500,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: ".75rem", color: theme.textMd, lineHeight: 1.65, fontWeight: 500 }}>
        {desc}
      </div>
    </div>
  );
}

export default function QuemSomos() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const pillars = t.quemSomos.pillars;

  return (
    <section
      id="quem-somos"
      style={{
        background: theme.bg2,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "2.2rem" : "6rem",
        alignItems: "center",
        padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem",
      }}
    >
      <Reveal>
        <SLabel>{t.quemSomos.label}</SLabel>
        <STitle>
          {t.quemSomos.titleA}
          <br />
          <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.quemSomos.titleB}</em>
        </STitle>
        {t.quemSomos.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              fontSize: ".81rem",
              color: theme.textMd,
              lineHeight: 1.9,
              marginTop: "1.3rem",
              fontWeight: 500,
            }}
          >
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={150}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 1, background: theme.bd }}>
          {pillars.map((pillar) => (
            <Pillar key={pillar.title} title={pillar.title} desc={pillar.desc} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
