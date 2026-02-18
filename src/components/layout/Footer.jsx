import { logoImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);

  return (
    <footer
      style={{
        background: theme.bg0,
        borderTop: `1px solid ${theme.bd}`,
        padding: isMobile ? "2rem 1.25rem" : "3rem 4rem",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={logoImage}
          alt="ROCAS Locadora"
          style={{
            height: 58,
            width: "auto",
            filter: "drop-shadow(0 0 8px rgba(160,190,230,.12)) brightness(.88)",
          }}
        />
        <div
          style={{
            fontSize: ".7rem",
            letterSpacing: ".25em",
            textTransform: "uppercase",
            color: theme.textLo,
            marginTop: ".6rem",
          }}
        >
          {t.footer.tagline}
        </div>
      </div>
      <div style={{ fontSize: ".72rem", color: theme.textLo, textAlign: isMobile ? "left" : "right", lineHeight: 1.9 }}>
        {t.footer.copyright}
        <br />
        {t.footer.rights}
        <br />
        <a href="#privacidade" style={{ color: theme.textLo }}>
          {t.footer.privacy}
        </a>
      </div>
    </footer>
  );
}
