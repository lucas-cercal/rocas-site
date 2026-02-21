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
          {t.privacy.titleA}
          <br />
          <em style={{ fontStyle: "italic", color: lightSection.titleEm }}>{t.privacy.titleB}</em>
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
        </div>
      </Reveal>
    </section>
  );
}
