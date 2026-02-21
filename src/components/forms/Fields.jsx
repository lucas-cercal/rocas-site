import { useState } from "react";
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
  interactive = false,
}) {
  const isLight = variant === "light";
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused
    ? isLight
      ? "rgba(60,98,146,.55)"
      : theme.bdAct
    : hovered
      ? isLight
        ? "rgba(56,90,132,.38)"
        : "rgba(142,180,237,.25)"
      : isLight
        ? lightField.border
        : theme.bd;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: focused ? (isLight ? "#3d5f87" : theme.cr4) : isLight ? lightField.label : theme.textLo,
          transition: interactive ? "color .2s ease" : undefined,
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: `1px solid ${borderColor}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          transform: interactive && focused ? "translateY(-1px)" : "none",
          boxShadow: focused
            ? isLight
              ? "0 0 0 3px rgba(131,166,211,.16), inset 0 1px 0 rgba(255,255,255,.72)"
              : "0 0 0 3px rgba(142,180,237,.16)"
            : isLight
              ? "inset 0 1px 0 rgba(255,255,255,.65)"
              : "none",
          transition: interactive ? "all .22s ease" : undefined,
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
  interactive = false,
}) {
  const isLight = variant === "light";
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused
    ? isLight
      ? "rgba(60,98,146,.55)"
      : theme.bdAct
    : hovered
      ? isLight
        ? "rgba(56,90,132,.38)"
        : "rgba(142,180,237,.25)"
      : isLight
        ? lightField.border
        : theme.bd;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: focused ? (isLight ? "#3d5f87" : theme.cr4) : isLight ? lightField.label : theme.textLo,
          transition: interactive ? "color .2s ease" : undefined,
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: `1px solid ${borderColor}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          transform: interactive && focused ? "translateY(-1px)" : "none",
          boxShadow: focused
            ? isLight
              ? "0 0 0 3px rgba(131,166,211,.16), inset 0 1px 0 rgba(255,255,255,.72)"
              : "0 0 0 3px rgba(142,180,237,.16)"
            : isLight
              ? "inset 0 1px 0 rgba(255,255,255,.65)"
              : "none",
          transition: interactive ? "all .22s ease" : undefined,
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
  interactive = false,
}) {
  const isLight = variant === "light";
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused
    ? isLight
      ? "rgba(60,98,146,.55)"
      : theme.bdAct
    : hovered
      ? isLight
        ? "rgba(56,90,132,.38)"
        : "rgba(142,180,237,.25)"
      : isLight
        ? lightField.border
        : theme.bd;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: focused ? (isLight ? "#3d5f87" : theme.cr4) : isLight ? lightField.label : theme.textLo,
          transition: interactive ? "color .2s ease" : undefined,
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: isLight ? lightField.bg : theme.bg1,
          border: `1px solid ${borderColor}`,
          color: isLight ? lightField.text : theme.cr5,
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: ".9rem",
          padding: ".82rem 1rem",
          outline: "none",
          width: "100%",
          resize: "none",
          transform: interactive && focused ? "translateY(-1px)" : "none",
          boxShadow: focused
            ? isLight
              ? "0 0 0 3px rgba(131,166,211,.16), inset 0 1px 0 rgba(255,255,255,.72)"
              : "0 0 0 3px rgba(142,180,237,.16)"
            : isLight
              ? "inset 0 1px 0 rgba(255,255,255,.65)"
              : "none",
          transition: interactive ? "all .22s ease" : undefined,
        }}
      />
    </div>
  );
}
