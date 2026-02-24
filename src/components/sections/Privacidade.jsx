import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

const lightSection = {
  bg: "#f6f9fe",
  titleEm: "#2d4f78",
  text: "#3f5675",
};

export default function Privacidade() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);

  return (
    <section id="privacidade" style={{ background: lightSection.bg, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <SLabel tone="light">{t.privacy.label}</SLabel>
        <STitle tone="light">
          {t.privacy.titleA} {" "}<em style={{ fontStyle: "normal", color: lightSection.titleEm }}>{t.privacy.titleB}</em>
        </STitle>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ marginTop: "2rem", maxWidth: 900 }}>
          {t.privacy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontSize: ".8rem",
                color: lightSection.text,
                lineHeight: 1.85,
                marginTop: "1rem",
                fontWeight: 500,
              }}
            >
              {paragraph}
            </p>
          ))}
          <h3 id="cookies" style={{ fontSize: "1.02rem", color: "#1b3553", marginTop: "1.6rem", fontWeight: 700 }}>
            {t.privacy.cookiesTitle}
          </h3>
          <p style={{ fontSize: ".86rem", color: lightSection.text, lineHeight: 1.85, marginTop: ".75rem", fontWeight: 500 }}>
            {t.privacy.cookiesText}
          </p>
          <h3 id="termos" style={{ fontSize: "1.02rem", color: "#1b3553", marginTop: "1.6rem", fontWeight: 700 }}>
            {t.privacy.termsTitle}
          </h3>
          <p style={{ fontSize: ".86rem", color: lightSection.text, lineHeight: 1.85, marginTop: ".75rem", fontWeight: 500 }}>
            {t.privacy.termsText}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
