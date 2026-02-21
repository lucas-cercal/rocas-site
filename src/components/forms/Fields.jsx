import { theme } from "../../constants/theme";

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
          background: theme.bg1,
          border: `1px solid ${theme.bd}`,
          color: theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
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
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: theme.bg1,
          border: `1px solid ${theme.bd}`,
          color: theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
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
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: theme.bg1,
          border: `1px solid ${theme.bd}`,
          color: theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          resize: "vertical",
        }}
      />
    </div>
  );
}
