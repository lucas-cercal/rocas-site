import { useState } from "react";
import { theme } from "../../constants/theme";

export function BtnChrome({ children, onClick, href }) {
  const [hovered, setHovered] = useState(false);
  const style = {
    background: `linear-gradient(135deg, ${theme.cr5}, ${theme.cr7})`,
    color: theme.bg0,
    border: "none",
    padding: ".9rem 2.1rem",
    fontFamily: "'Raleway',sans-serif",
    fontSize: ".74rem",
    letterSpacing: ".24em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: 700,
    transition: "all .3s",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: hovered ? "0 8px 30px rgba(180,200,228,.22)" : "none",
    transform: hovered ? "translateY(-2px)" : "none",
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

export function BtnGhost({ children, onClick, href }) {
  const [hovered, setHovered] = useState(false);
  const style = {
    background: hovered ? "rgba(180,200,228,.04)" : "transparent",
    border: `1px solid ${hovered ? theme.cr5 : theme.bdAct}`,
    color: hovered ? theme.cr7 : theme.cr5,
    padding: ".9rem 2.1rem",
    fontFamily: "'Raleway',sans-serif",
    fontSize: ".74rem",
    letterSpacing: ".24em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: 400,
    transition: "all .3s",
    textDecoration: "none",
    display: "inline-block",
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}
