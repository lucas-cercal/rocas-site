import { useEffect, useState } from "react";
import { buildWhatsAppLink } from "../../constants/contact";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { FInput, FSelect, FTextarea } from "../forms/Fields";

export default function QuoteModal({ open, onClose }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    service: "",
    period: "",
  });

  useEffect(() => {
    if (!open || typeof window === "undefined") return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (event) => {
    event.preventDefault();
    const message = [
      "Olá! Quero solicitar uma cotação.",
      "",
      `Nome: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      `Serviço: ${form.service || "-"}`,
      `Período/Detalhes: ${form.period || "-"}`,
    ].join("\n");

    if (typeof window !== "undefined") {
      window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  if (!open) return null;

  return (
    <div
      onClick={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        background: "rgba(5,7,12,.9)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: theme.bg2,
          width: "90%",
          maxWidth: 480,
          padding: isMobile ? "1.5rem" : "2.5rem",
          position: "relative",
          animation: "fadeUp .35s ease both",
          border: `1px solid ${theme.bd}`,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1.2rem",
            background: "none",
            border: "none",
            color: theme.textLo,
            fontSize: "1.3rem",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <div
          id="quote-modal-title"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: "1.8rem",
            color: theme.cr7,
            marginBottom: ".3rem",
            fontWeight: 700,
          }}
        >
          {t.modal.title}
        </div>
        <div style={{ fontSize: ".68rem", color: theme.textLo, marginBottom: "1.8rem", letterSpacing: ".1em" }}>
          {t.modal.subtitle}
        </div>
        <form onSubmit={handleSend}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
            <FInput
              id="quote-name"
              name="name"
              label={t.modal.name}
              placeholder={t.modal.namePlaceholder}
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <FInput
              id="quote-whatsapp"
              name="whatsapp"
              label={t.modal.whatsapp}
              placeholder={t.modal.whatsappPlaceholder}
              type="tel"
              value={form.whatsapp}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>
          <FSelect
            id="quote-service"
            name="service"
            label={t.modal.service}
            options={t.modal.serviceOptions}
            placeholderOption={t.common.selectOption}
            value={form.service}
            onChange={handleChange}
          />
          <div style={{ marginTop: ".9rem" }}>
            <FTextarea
              id="quote-period"
              name="period"
              label={t.modal.period}
              placeholder={t.modal.periodPlaceholder}
              value={form.period}
              onChange={handleChange}
            />
          </div>
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
            {sent ? t.modal.success : t.modal.submit}
          </button>
          <p style={{ fontSize: ".6rem", color: theme.textLo, textAlign: "center", marginTop: ".8rem", lineHeight: 1.6 }}>
            {t.modal.response}
          </p>
        </form>
      </div>
    </div>
  );
}
