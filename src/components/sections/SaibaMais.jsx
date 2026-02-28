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
};

export default function SaibaMais() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [openItem, setOpenItem] = useState(null);
  const items = t.saibaMais.items;

  return (
    <section id="saiba-mais" style={{ background: lightSection.bg, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <div style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
          <SLabel tone="light">{t.saibaMais.label}</SLabel>
          <STitle tone="light">
            {t.saibaMais.titleA} {" "}<em style={{ fontStyle: "normal", color: "inherit" }}>{t.saibaMais.titleB}</em>
          </STitle>
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              color: lightSection.text,
              lineHeight: 1.5,
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
            maxWidth: 980,
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
                  <span style={{ fontSize: isMobile ? "16px" : "20px", letterSpacing: ".06em", fontWeight: 500, color: "#19304d" }}>
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
                    <p style={{ fontSize: isMobile ? "16px" : "20px", color: lightSection.textSoft, lineHeight: 1.5, fontWeight: 500 }}>
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
