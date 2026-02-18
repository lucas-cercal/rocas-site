import { theme } from "../../constants/theme";

export function SLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".8rem",
        fontSize: ".68rem",
        letterSpacing: ".5em",
        textTransform: "uppercase",
        color: theme.accentDim,
        marginBottom: ".8rem",
        fontWeight: 600,
      }}
    >
      <span
        style={{
          width: 22,
          height: 1,
          background: theme.accentDim,
          flexShrink: 0,
          display: "block",
        }}
      />
      {children}
    </div>
  );
}

export function STitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.55rem,3.95vw,3.7rem)",
        fontWeight: 400,
        lineHeight: 1.1,
        color: theme.cr8,
      }}
    >
      {children}
    </h2>
  );
}
