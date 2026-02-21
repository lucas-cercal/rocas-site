import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "../../constants/contact";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { FInput, FSelect, FTextarea } from "../forms/Fields";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 56,
        height: 56,
        border: `1px solid ${theme.bd}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.cr7,
        cursor: "pointer",
        transition: "all .3s",
        background: `linear-gradient(145deg, ${theme.bg2}, ${theme.bg3})`,
        textDecoration: "none",
      }}
    >
      {icon}
    </a>
  );
}

export default function Contato() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    period: "",
    message: "",
  });
  const contactIcons = useMemo(
    () => ({
      WhatsApp: "🟢",
      "E-mail": "✉️",
      Atendimento: "🕒",
      "Área de atuação": "📍",
      Service: "🕒",
      Coverage: "📍",
      Atención: "🕒",
      Cobertura: "📍",
      "Zone d'action": "📍",
    }),
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      "Olá! Gostaria de solicitar uma cotação.",
      "",
      `Nome: ${form.fullName}`,
      `Empresa: ${form.company || "-"}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Serviço: ${form.serviceType || "-"}`,
      `Período: ${form.period || "-"}`,
      `Mensagem: ${form.message || "-"}`,
    ].join("\n");

    if (typeof window !== "undefined") {
      window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    }
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contato"
      style={{
        background: theme.bg3,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr",
        gap: isMobile ? "2rem" : "5rem",
        alignItems: "start",
        padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem",
      }}
    >
      <Reveal>
        <SLabel>{t.contato.label}</SLabel>
        <STitle>
          {t.contato.titleA}
          <br />
          <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.contato.titleB}</em>
        </STitle>
        <p
          style={{
            fontSize: ".8rem",
            color: theme.textMd,
            lineHeight: 1.85,
            marginTop: "1.2rem",
            fontWeight: 500,
          }}
        >
          {t.contato.intro}
        </p>
        <div style={{ marginTop: "2.2rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {t.contato.info.map(([label, value]) => (
            <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  border: `1px solid ${theme.bd}`,
                  background: theme.bg2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                {contactIcons[label] || "•"}
              </div>
              <div>
                <div
                  style={{
                    fontSize: ".58rem",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: theme.textLo,
                    marginBottom: ".2rem",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: ".8rem", color: theme.cr5, fontWeight: 500 }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: ".6rem", marginTop: "2.2rem" }}>
          <SocialIcon
            href="https://instagram.com"
            label="Instagram"
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
              </svg>
            }
          />
          <SocialIcon
            href="https://linkedin.com"
            label="LinkedIn"
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
                <rect x="7.3" y="10.1" width="2.1" height="6.2" fill="currentColor" />
                <circle cx="8.35" cy="7.8" r="1.2" fill="currentColor" />
                <path d="M12 16.3v-3.5c0-1.5.9-2.5 2.2-2.5 1.2 0 2 .8 2 2.3v3.7" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            }
          />
          <SocialIcon
            href="https://youtube.com"
            label="YouTube"
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.6" y="6.8" width="16.8" height="10.4" rx="3" stroke="currentColor" strokeWidth="1.7" />
                <path d="M10.5 10.2l4.4 2.1-4.4 2.1v-4.2z" fill="currentColor" />
              </svg>
            }
          />
          <SocialIcon
            href="https://facebook.com"
            label="Facebook"
            icon={
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
                <path d="M13.1 17v-4h2.3l.4-2.2h-2.7V9.5c0-.8.2-1.3 1.3-1.3h1.5V6.3h-2.2c-2.3 0-3 1.3-3 3.2v1.3H9V13h1.7v4h2.4z" fill="currentColor" />
              </svg>
            }
          />
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ background: theme.bg2, padding: "2.4rem", border: `1px solid ${theme.bd}` }}>
          <div
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: "1.7rem",
              color: theme.cr7,
              marginBottom: "1.8rem",
              fontWeight: 700,
            }}
          >
            {t.contato.form.title}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
              <FInput
                id="contato-full-name"
                name="fullName"
                label={t.contato.form.fullName}
                placeholder={t.contato.form.namePlaceholder}
                value={form.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              <FInput
                id="contato-company"
                name="company"
                label={t.contato.form.company}
                placeholder={t.contato.form.companyPlaceholder}
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
              <FInput
                id="contato-email"
                name="email"
                label={t.contato.form.email}
                placeholder={t.contato.form.emailPlaceholder}
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <FInput
                id="contato-whatsapp"
                name="whatsapp"
                label={t.contato.form.whatsapp}
                placeholder={t.contato.form.whatsappPlaceholder}
                type="tel"
                value={form.whatsapp}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
              <FSelect
                id="contato-service-type"
                name="serviceType"
                label={t.contato.form.serviceType}
                options={t.contato.form.serviceOptions}
                placeholderOption={t.common.selectOption}
                value={form.serviceType}
                onChange={handleChange}
              />
              <FInput
                id="contato-period"
                name="period"
                label={t.contato.form.period}
                placeholder={t.contato.form.periodPlaceholder}
                value={form.period}
                onChange={handleChange}
              />
            </div>
            <FTextarea
              id="contato-message"
              name="message"
              label={t.contato.form.message}
              placeholder={t.contato.form.messagePlaceholder}
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "1.1rem",
                background: sent
                  ? "linear-gradient(135deg,#2d6a4f,#40916c)"
                  : `linear-gradient(135deg,${theme.cr5},${theme.cr7})`,
                color: theme.bg0,
                border: "none",
                padding: ".9rem",
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: ".68rem",
                letterSpacing: ".26em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all .3s",
              }}
            >
              {sent ? t.contato.form.success : t.contato.form.submit}
            </button>
            <p style={{ fontSize: ".6rem", color: theme.textLo, textAlign: "center", marginTop: ".8rem", lineHeight: 1.6 }}>
              {t.contato.form.privacy}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
