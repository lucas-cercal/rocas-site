import { theme } from "../../constants/theme";

const lightField = {
  label: "#5f7492",
  bg: "#f7fbff",
  border: "rgba(44,72,110,.22)",
  text: "#132846",
  placeholder: "#6f86aa",
};

export function FInput({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  variant = "dark",
}) {
  const isLight = variant === "light";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: isLight ? lightField.label : theme.textLo,
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: isLight ? `1px solid ${lightField.border}` : `1px solid ${theme.bd}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          boxShadow: isLight ? "inset 0 1px 0 rgba(255,255,255,.65)" : "none",
        }}
      />
    </div>
  );
}

export function FSelect({
  id,
  name,
  label,
  options,
  value,
  onChange,
  required = false,
  placeholderOption = "Selecione",
  variant = "dark",
}) {
  const isLight = variant === "light";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: isLight ? lightField.label : theme.textLo,
        }}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: isLight ? `1px solid ${lightField.border}` : `1px solid ${theme.bd}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          boxShadow: isLight ? "inset 0 1px 0 rgba(255,255,255,.65)" : "none",
        }}
      >
        <option value="">{placeholderOption}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FTextarea({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  variant = "dark",
}) {
  const isLight = variant === "light";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: isLight ? lightField.label : theme.textLo,
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: isLight ? `1px solid ${lightField.border}` : `1px solid ${theme.bd}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          resize: "none",
          boxShadow: isLight ? "inset 0 1px 0 rgba(255,255,255,.65)" : "none",
        }}
      />
    </div>
  );
}
