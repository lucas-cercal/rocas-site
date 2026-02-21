import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

export default function Privacidade() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);

  return (
    <section id="privacidade" style={{ background: theme.bg2, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <SLabel>{t.privacy.label}</SLabel>
        <STitle>
          {t.privacy.titleA}
          <br />
          <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.privacy.titleB}</em>
        </STitle>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ marginTop: "2rem", maxWidth: 900 }}>
          {t.privacy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontSize: ".8rem",
                color: theme.textMd,
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
