import { theme } from "../../constants/theme";

export function SLabel({ children, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".8rem",
        fontSize: ".74rem",
        letterSpacing: ".5em",
        textTransform: "uppercase",
        color: isLight ? "#436387" : theme.accentDim,
        marginBottom: ".8rem",
        fontWeight: 500,
      }}
    >
      <span
        style={{
          width: 22,
          height: 1,
          background: isLight ? "#436387" : theme.accentDim,
          flexShrink: 0,
          display: "block",
        }}
      />
      {children}
    </div>
  );
}

export function STitle({ children, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <h2
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: "clamp(2.25rem,3.6vw,3.4rem)",
        fontWeight: 700,
        lineHeight: 1.1,
        color: isLight ? "#10233f" : theme.cr8,
      }}
    >
      {children}
    </h2>
  );
}
