import { useState } from "react";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

export default function SaibaMais() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [openItem, setOpenItem] = useState(null);
  const items = t.saibaMais.items;

  return (
    <section id="saiba-mais" style={{ background: theme.bg1, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <div style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
          <SLabel>{t.saibaMais.label}</SLabel>
          <STitle>
            {t.saibaMais.titleA}
            <br />
            <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.saibaMais.titleB}</em>
          </STitle>
          <p
            style={{
              fontSize: ".8rem",
              color: theme.textMd,
              lineHeight: 1.85,
              marginTop: "1rem",
              fontWeight: 300,
            }}
          >
            {t.saibaMais.intro}
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ maxWidth: 680 }}>
          {items.map(([question, answer], index) => (
            <div key={index} style={{ borderBottom: `1px solid ${theme.bd}` }}>
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
                <span style={{ fontSize: ".79rem", letterSpacing: ".06em", fontWeight: 500, color: theme.cr5 }}>
                  {question}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: theme.accentDim,
                    transition: "transform .3s",
                    transform: openItem === index ? "rotate(45deg)" : "none",
                    flexShrink: 0,
                    lineHeight: 1,
                    fontWeight: 300,
                  }}
                >
                  +
                </span>
              </div>
              {openItem === index && (
                <div style={{ paddingBottom: "1.3rem" }}>
                  <p style={{ fontSize: ".77rem", color: theme.textMd, lineHeight: 1.85, fontWeight: 300 }}>
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
