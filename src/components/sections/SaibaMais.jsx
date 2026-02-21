import { useState } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

const lightSection = {
  bg: "#f6f9fe",
  border: "rgba(24,49,81,.14)",
  titleEm: "#2d4f78",
  text: "#3f5675",
  textSoft: "#607492",
  accent: "#4e6f96",
  panelBg: "#111e31",
  panelTitle: "#e6eeff",
  panelMuted: "#9cb2d1",
  panelBorder: "rgba(130,160,205,.2)",
  shieldOn: "#74bc47",
  shieldOff: "#cad8e9",
  levelBg: "#17263d",
  levelBgHighlight: "#29481f",
  levelBorder: "rgba(130,160,205,.2)",
  levelBorderHighlight: "rgba(116,188,71,.45)",
  panelText: "#b9cbed",
};

function ShieldIcon({ active = false }) {
  return (
    <svg width="16" height="18" viewBox="0 0 24 26" aria-hidden="true">
      <path
        d="M12 1.9 21.2 5v7.4c0 5.3-3.7 10.2-9.2 11.7C6.5 22.6 2.8 17.7 2.8 12.4V5L12 1.9Z"
        fill={active ? lightSection.shieldOn : "none"}
        stroke={active ? lightSection.shieldOn : lightSection.shieldOff}
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ProtectionRow({ label, strength, highlight = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: ".8rem",
        padding: ".45rem .55rem",
        background: highlight ? lightSection.levelBgHighlight : lightSection.levelBg,
        border: highlight
          ? `1px solid ${lightSection.levelBorderHighlight}`
          : `1px solid ${lightSection.levelBorder}`,
      }}
    >
      <span
        style={{
          fontSize: ".58rem",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: highlight ? "#cde9bf" : "#c7d7ed",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: ".25rem" }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <ShieldIcon key={index} active={index < strength} />
        ))}
      </div>
    </div>
  );
}

export default function SaibaMais() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [openItem, setOpenItem] = useState(null);
  const [panelHovered, setPanelHovered] = useState(false);
  const items = t.saibaMais.items;

  return (
    <section id="saiba-mais" style={{ background: lightSection.bg, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <div style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
          <SLabel tone="light">{t.saibaMais.label}</SLabel>
          <STitle tone="light">
            {t.saibaMais.titleA}
            <br />
            <em style={{ fontStyle: "italic", color: lightSection.titleEm }}>{t.saibaMais.titleB}</em>
          </STitle>
          <p
            style={{
              fontSize: ".8rem",
              color: lightSection.text,
              lineHeight: 1.85,
              marginTop: "1rem",
              fontWeight: 500,
            }}
          >
            {t.saibaMais.intro}
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "700px minmax(500px, 1fr)",
            justifyContent: "stretch",
            alignItems: "start",
            gap: isMobile ? "2rem" : "2.2rem",
          }}
        >
          <div>
            {items.map(([question, answer], index) => (
              <div key={index} style={{ borderBottom: `1px solid ${lightSection.border}` }}>
                <div
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.3rem 0",
                    cursor: "pointer",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontSize: ".79rem", letterSpacing: ".06em", fontWeight: 500, color: "#19304d" }}>
                    {question}
                  </span>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: lightSection.accent,
                      transition: "transform .3s",
                      transform: openItem === index ? "rotate(45deg)" : "none",
                      flexShrink: 0,
                      lineHeight: 1,
                      fontWeight: 500,
                    }}
                  >
                    +
                  </span>
                </div>
                {openItem === index && (
                  <div style={{ paddingBottom: "1.3rem" }}>
                    <p style={{ fontSize: ".77rem", color: lightSection.textSoft, lineHeight: 1.85, fontWeight: 500 }}>
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!isMobile && (
            <aside
              onMouseEnter={() => setPanelHovered(true)}
              onMouseLeave={() => setPanelHovered(false)}
              style={{
                width: 500,
                justifySelf: "center",
                position: "static",
                background: lightSection.panelBg,
                border: `1px solid ${panelHovered ? "rgba(160,192,240,.34)" : lightSection.panelBorder}`,
                borderRadius: 14,
                padding: "1.7rem",
                boxShadow: panelHovered
                  ? "0 18px 34px rgba(8,14,24,.3), inset 0 0 0 1px rgba(198,220,255,.14), 0 0 0 1px rgba(132,168,220,.16)"
                  : "0 14px 28px rgba(8,14,24,.22), inset 0 0 0 1px rgba(198,220,255,.08), 0 0 0 1px rgba(112,148,198,.1)",
                transform: panelHovered ? "translateY(-3px)" : "translateY(0)",
                transition: "transform .28s ease, box-shadow .28s ease, border-color .28s ease",
              }}
            >
              <div
                style={{
                  fontSize: ".58rem",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: lightSection.panelMuted,
                  marginBottom: ".6rem",
                }}
              >
                Leitura rápida
              </div>
              <h3
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: "1.14rem",
                  color: lightSection.panelTitle,
                  marginBottom: ".95rem",
                  lineHeight: 1.2,
                }}
              >
                Blindagem III-A
              </h3>

              <div style={{ display: "grid", gap: ".5rem", marginBottom: ".9rem" }}>
                <ProtectionRow label="Nível 1A" strength={1} />
                <ProtectionRow label="Nível 2 e 2A" strength={2} />
                <ProtectionRow label="Nível III-A" strength={3} highlight />
                <ProtectionRow label="Nível III" strength={4} />
              </div>

              <p
                style={{
                  fontSize: ".74rem",
                  color: lightSection.panelText,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                O nível III-A é a referência para proteção civil executiva, equilibrando segurança balística e
                discrição no uso diário.
              </p>
            </aside>
          )}
        </div>
      </Reveal>
    </section>
  );
}
