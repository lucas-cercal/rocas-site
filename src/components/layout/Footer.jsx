import { logoImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";

function SocialLogo({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 52,
        height: 52,
        border: `1px solid ${theme.bd}`,
        background: `linear-gradient(145deg, ${theme.bg2}, ${theme.bg3})`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.cr7,
        textDecoration: "none",
      }}
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);

  return (
    <footer
      style={{
        background: theme.bg0,
        borderTop: `1px solid ${theme.bd}`,
        padding: isMobile ? "2rem 1.25rem" : "3rem 4rem 3rem 1.8rem",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={logoImage}
          alt="ROCAS Locadora de Veículos Blindados"
          style={{
            height: 72,
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
            marginTop: ".9rem",
          }}
        >
          {t.footer.tagline}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: "1rem" }}>
        <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
          <SocialLogo
            href="https://instagram.com"
            label="Instagram"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
              </svg>
            }
          />
          <SocialLogo
            href="mailto:contato@rocaslocadora.com.br"
            label="E-mail"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="6.2" width="17" height="11.6" rx="2.3" stroke="currentColor" strokeWidth="1.7" />
                <path d="M4.7 7.8 12 13l7.3-5.2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            }
          />
          <SocialLogo
            href="https://youtube.com"
            label="YouTube"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.6" y="6.8" width="16.8" height="10.4" rx="3" stroke="currentColor" strokeWidth="1.7" />
                <path d="M10.5 10.2l4.4 2.1-4.4 2.1v-4.2z" fill="currentColor" />
              </svg>
            }
          />
          <SocialLogo
            href="https://facebook.com"
            label="Facebook"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
                <path d="M13.1 17v-4h2.3l.4-2.2h-2.7V9.5c0-.8.2-1.3 1.3-1.3h1.5V6.3h-2.2c-2.3 0-3 1.3-3 3.2v1.3H9V13h1.7v4h2.4z" fill="currentColor" />
              </svg>
            }
          />
        </div>
        <div style={{ fontSize: ".78rem", color: theme.textLo, textAlign: isMobile ? "left" : "right", lineHeight: 1.8 }}>
          <div>{t.footer.copyright}</div>
          <div>{t.footer.rights}</div>
          <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
            <a href="#cookies" style={{ color: theme.textLo }}>
              {t.footer.cookies}
            </a>
            <a href="#privacidade" style={{ color: theme.textLo }}>
              {t.footer.privacy}
            </a>
            <a href="#termos" style={{ color: theme.textLo }}>
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
