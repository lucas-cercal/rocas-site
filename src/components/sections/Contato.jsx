import { useMemo, useState } from "react";
import { format } from "date-fns";
import { enUS, es, fr, ptBR } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { buildWhatsAppLink } from "../../constants/contact";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { FInput, FSelect, FTextarea } from "../forms/Fields";
import "../forms/DatePicker.css";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function formatDate(value) {
  if (!value) return "-";
  return value.toLocaleDateString("pt-BR");
}

function formatTime(value) {
  if (!value) return "-";
  return value.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function capitalize(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function DatePickerField({
  id,
  label,
  selected,
  onChange,
  minDate,
  placeholder,
  showTimeSelectOnly = false,
  locale,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: theme.textLo,
        }}
      >
        {label}
      </label>
      <DatePicker
        id={id}
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        placeholderText={placeholder}
        calendarClassName="quote-datepicker-calendar"
        popperClassName="quote-datepicker-popper"
        wrapperClassName="quote-datepicker-wrapper"
        className="quote-datepicker-input"
        showPopperArrow={false}
        dateFormat={showTimeSelectOnly ? "HH:mm" : "dd/MM/yyyy"}
        showTimeSelect={showTimeSelectOnly}
        showTimeSelectOnly={showTimeSelectOnly}
        timeIntervals={30}
        timeCaption={showTimeSelectOnly ? "Hora" : "Horário"}
        autoComplete="off"
        locale={locale}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: ".55rem .7rem",
            }}
          >
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              style={{
                border: "none",
                background: "transparent",
                color: "#d8e6fb",
                cursor: prevMonthButtonDisabled ? "default" : "pointer",
                opacity: prevMonthButtonDisabled ? 0.35 : 1,
                fontSize: "1rem",
              }}
            >
              {"<"}
            </button>
            <span style={{ color: "#d8e6fb", fontWeight: 600 }}>
              {capitalize(format(date, "LLLL yyyy", { locale }))}
            </span>
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              style={{
                border: "none",
                background: "transparent",
                color: "#d8e6fb",
                cursor: nextMonthButtonDisabled ? "default" : "pointer",
                opacity: nextMonthButtonDisabled ? 0.35 : 1,
                fontSize: "1rem",
              }}
            >
              {">"}
            </button>
          </div>
        )}
      />
    </div>
  );
}

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

function getContactAction(label, value) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel === "whatsapp") {
    return {
      href: buildWhatsAppLink("Olá! Vim pelo site e gostaria de falar com a ROCAS."),
      external: true,
    };
  }

  if (normalizedLabel === "e-mail") {
    return {
      href: `mailto:${value}`,
      external: false,
    };
  }

  if (["atendimento", "service", "atención"].includes(normalizedLabel)) {
    return {
      href: buildWhatsAppLink("Olá! Vim pelo site e gostaria de atendimento da ROCAS."),
      external: true,
    };
  }

  return null;
}

export default function Contato({ selectedVehicle, onSelectedVehicleChange }) {
  const { language, t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [sent, setSent] = useState(false);
  const [quoteCardHovered, setQuoteCardHovered] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    vehicle: "",
    startDate: null,
    endDate: null,
    time: null,
    message: "",
    consent: false,
  });
  const vehicleOptions = t.veiculos.cars.map((car, index) => ({
    value: `vehicle-${index}`,
    label: car.name,
  }));
  const effectiveVehicle = selectedVehicle || form.vehicle;
  const selectedVehicleLabel =
    vehicleOptions.find((option) => option.value === effectiveVehicle)?.label || "";
  const calendarLocale =
    {
      pt: ptBR,
      en: enUS,
      es,
      fr,
    }[language] || ptBR;
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
    const { name, value, type, checked } = event.target;
    if (name === "vehicle") {
      onSelectedVehicleChange?.(value);
    }
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.startDate || !form.endDate || !form.time) return;

    const message = [
      "Olá! Gostaria de solicitar uma cotação.",
      "",
      `Nome: ${form.fullName}`,
      `Empresa: ${form.company || "-"}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Serviço: ${form.serviceType || "-"}`,
      `Veículo: ${selectedVehicleLabel || "-"}`,
      `Período: ${formatDate(form.startDate)} a ${formatDate(form.endDate)} às ${formatTime(form.time)}`,
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
          {t.contato.titleA} {" "}<em style={{ fontStyle: "normal", color: theme.cr6 }}>{t.contato.titleB}</em>
        </STitle>
        <p
          style={{
            fontSize: isMobile ? "16px" : "20px",
            color: theme.textMd,
            lineHeight: 1.5,
            marginTop: "1.2rem",
            fontWeight: 500,
          }}
        >
          {t.contato.intro}
        </p>
        <div style={{ marginTop: "2.2rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {t.contato.info.map(([label, value]) => {
            const action = getContactAction(label, value);

            return (
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
                {action ? (
                  <a
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      color: theme.cr5,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <div style={{ fontSize: isMobile ? "16px" : "20px", color: theme.cr5, fontWeight: 500 }}>{value}</div>
                )}
              </div>
            </div>
          );
          })}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div
          onMouseEnter={() => setQuoteCardHovered(true)}
          onMouseLeave={() => setQuoteCardHovered(false)}
          style={{
            background: theme.bg2,
            padding: "2.4rem",
            border: `1px solid ${quoteCardHovered ? theme.bdAct : theme.bd}`,
            boxShadow: quoteCardHovered
              ? "0 16px 34px rgba(0,0,0,.28), inset 0 0 0 1px rgba(167,198,236,.12)"
              : "0 10px 24px rgba(0,0,0,.18), inset 0 0 0 1px rgba(167,198,236,.06)",
            transform: quoteCardHovered ? "translateY(-2px)" : "translateY(0)",
            transition: "all .28s ease",
          }}
        >
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
                interactive
              />
              <FInput
                id="contato-company"
                name="company"
                label={t.contato.form.company}
                placeholder={t.contato.form.companyPlaceholder}
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
                interactive
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
                interactive
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
                interactive
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
                interactive
              />
              <FSelect
                id="contato-vehicle"
                name="vehicle"
                label={t.contato.form.vehicle}
                options={vehicleOptions}
                placeholderOption={t.common.selectOption}
                value={effectiveVehicle}
                onChange={handleChange}
                interactive
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
              <DatePickerField
                id="contato-start-date"
                label={t.contato.form.startDate}
                selected={form.startDate}
                onChange={(date) => {
                  setForm((prev) => {
                    const nextEndDate = prev.endDate && date && prev.endDate < date ? null : prev.endDate;
                    return { ...prev, startDate: date, endDate: nextEndDate };
                  });
                }}
                placeholder={t.contato.form.startDate}
                locale={calendarLocale}
              />
              <DatePickerField
                id="contato-end-date"
                label={t.contato.form.endDate}
                selected={form.endDate}
                onChange={(date) => setForm((prev) => ({ ...prev, endDate: date }))}
                minDate={form.startDate || undefined}
                placeholder={t.contato.form.endDate}
                locale={calendarLocale}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: ".9rem", marginBottom: ".9rem" }}>
              <DatePickerField
                id="contato-time"
                label={t.contato.form.time}
                selected={form.time}
                onChange={(date) => setForm((prev) => ({ ...prev, time: date }))}
                placeholder={t.contato.form.time}
                showTimeSelectOnly
                locale={calendarLocale}
              />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: ".62rem", color: theme.textLo, lineHeight: 1.6 }}>
                  {t.contato.form.periodHint}
                </div>
              </div>
            </div>
            <FTextarea
              id="contato-message"
              name="message"
              label={t.contato.form.message}
              placeholder={t.contato.form.messagePlaceholder}
              value={form.message}
              onChange={handleChange}
              interactive
            />
            <button
              type="submit"
              onMouseEnter={() => setSubmitHovered(true)}
              onMouseLeave={() => setSubmitHovered(false)}
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
                boxShadow: submitHovered ? "0 12px 28px rgba(186,210,241,.28)" : "none",
                transform: submitHovered ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              {sent ? t.contato.form.success : t.contato.form.submit}
            </button>
            <div style={{ marginTop: ".9rem", borderTop: `1px solid ${theme.bd}`, paddingTop: ".85rem" }}>
              <p style={{ fontSize: ".64rem", color: theme.textLo, lineHeight: 1.6 }}>
                {t.contato.form.consentIntro}{" "}
                <a href="#cookies" style={{ color: theme.cr5 }}>
                  {t.contato.form.consentCookies}
                </a>
                ,{" "}
                <a href="#privacidade" style={{ color: theme.cr5 }}>
                  {t.contato.form.consentPrivacy}
                </a>{" "}
                e{" "}
                <a href="#termos" style={{ color: theme.cr5 }}>
                  {t.contato.form.consentTerms}
                </a>
                .
              </p>
              <label style={{ display: "flex", alignItems: "center", gap: ".55rem", marginTop: ".55rem", color: theme.cr5, fontSize: ".66rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  style={{ width: 16, height: 16, accentColor: theme.cr5, cursor: "pointer", margin: 0, borderRadius: 3, flexShrink: 0, opacity: form.consent ? 1 : .9 }}
                />
                {t.contato.form.consentRequired}
              </label>
            </div>
            <p style={{ fontSize: ".6rem", color: theme.textLo, textAlign: "center", marginTop: ".8rem", lineHeight: 1.6 }}>
              {t.contato.form.privacy}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
