import { useEffect, useRef, useState } from "react";
import { logoImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useScrolled } from "../../hooks/useScrolled";
import { useI18n } from "../../i18n/LanguageContext";

function FlagIcon({ country }) {
  const common = {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    xmlns: "http://www.w3.org/2000/svg",
    style: { display: "block", borderRadius: 2, boxShadow: "0 0 0 1px rgba(0,0,0,.12)" },
    "aria-hidden": true,
  };

  if (country === "br") {
    return (
      <svg {...common}>
        <rect width="18" height="12" fill="#1F8B4C" />
        <polygon points="9,1.4 15.1,6 9,10.6 2.9,6" fill="#F7C63D" />
        <circle cx="9" cy="6" r="2.3" fill="#204B9B" />
      </svg>
    );
  }

  if (country === "us") {
    return (
      <svg {...common}>
        <rect width="18" height="12" fill="#fff" />
        {[0, 2, 4, 6, 8, 10].map((y) => (
          <rect key={y} y={y} width="18" height="1" fill="#B22234" />
        ))}
        <rect width="7.6" height="5.8" fill="#3C3B6E" />
      </svg>
    );
  }

  if (country === "es") {
    return (
      <svg {...common}>
        <rect width="18" height="12" fill="#AA151B" />
        <rect y="3" width="18" height="6" fill="#F1BF00" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="18" height="12" fill="#1F4AA8" />
      <rect y="4" width="18" height="4" fill="#fff" />
      <rect x="5" width="4" height="12" fill="#fff" />
      <rect y="4.8" width="18" height="2.4" fill="#D72638" />
      <rect x="5.8" width="2.4" height="12" fill="#D72638" />
    </svg>
  );
}

function LanguageMenu({ value, options, onChange, scrolled = false, mobile = false }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const current = options.find((option) => option.value === value) || options[0];

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const palette = mobile
    ? {
        background: "rgba(8,10,16,.72)",
        border: `1px solid ${theme.bd}`,
        color: theme.textLo,
        menuBackground: "rgba(8,10,16,.98)",
        menuBorder: `1px solid ${theme.bd}`,
        hover: "rgba(255,255,255,.08)",
        shadow: "0 16px 32px rgba(0,0,0,.28)",
      }
    : {
        background: scrolled ? "rgba(250,252,255,.92)" : "transparent",
        border: scrolled ? "1px solid rgba(16,28,44,.24)" : `1px solid ${theme.bd}`,
        color: scrolled ? "#1b2b41" : theme.textLo,
        menuBackground: scrolled ? "rgba(248,251,255,.98)" : "rgba(9,14,22,.96)",
        menuBorder: scrolled ? "1px solid rgba(16,28,44,.14)" : `1px solid ${theme.bd}`,
        hover: scrolled ? "rgba(20,36,56,.08)" : "rgba(255,255,255,.08)",
        shadow: scrolled ? "0 14px 30px rgba(9,18,32,.12)" : "0 18px 36px rgba(0,0,0,.26)",
      };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        minWidth: mobile ? 116 : 98,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: ".55rem",
          background: palette.background,
          border: palette.border,
          color: palette.color,
          fontSize: mobile ? ".74rem" : ".64rem",
          letterSpacing: ".15em",
          padding: mobile ? ".5rem .8rem" : ".38rem .62rem",
          cursor: "pointer",
          fontFamily: "'Neue Montreal', sans-serif",
          fontWeight: 500,
          textTransform: "uppercase",
          transition: "all .28s ease",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: ".45rem" }}>
          <FlagIcon country={current.flag} />
          <span>{current.label}</span>
        </span>
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRight: `1.5px solid ${palette.color}`,
            borderBottom: `1.5px solid ${palette.color}`,
            transform: open ? "rotate(-135deg)" : "rotate(45deg)",
            transition: "transform .2s ease",
            marginTop: open ? 4 : -2,
            flexShrink: 0,
          }}
        />
      </button>

      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + .45rem)",
            left: 0,
            right: 0,
            display: "grid",
            gap: ".2rem",
            padding: ".28rem",
            background: palette.menuBackground,
            border: palette.menuBorder,
            boxShadow: palette.shadow,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {options.map((option) => {
            const active = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".55rem",
                  width: "100%",
                  border: "none",
                  background: active ? palette.hover : "transparent",
                  color: palette.color,
                  padding: ".48rem .5rem",
                  cursor: "pointer",
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: mobile ? ".72rem" : ".64rem",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  textAlign: "left",
                }}
              >
                <FlagIcon country={option.flag} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function NavLink({ href, children, scrolled = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: ".72rem",
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: hovered ? (scrolled ? "#0f1c2f" : theme.cr7) : scrolled ? "#243246" : theme.cr4,
        textDecoration: "none",
        fontWeight: 500,
        transition: "color .2s, border-color .2s",
        position: "relative",
        paddingBottom: 4,
        borderBottom: hovered
          ? `1px solid ${scrolled ? "rgba(15,28,47,.35)" : theme.cr6}`
          : "1px solid transparent",
      }}
    >
      {children}
    </a>
  );
}

function NavCta({ onClick, href, children, scrolled = false }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    border: `1px solid ${
      scrolled
        ? hovered
          ? "rgba(15,28,47,.88)"
          : "rgba(15,28,47,.34)"
        : hovered
          ? theme.cr6
          : theme.cr3
    }`,
    background: hovered ? (scrolled ? "#132033" : theme.cr6) : "transparent",
    color: hovered ? (scrolled ? "#f8fbff" : theme.bg0) : scrolled ? "#1a2a40" : theme.cr6,
    padding: ".56rem 1.42rem",
    fontSize: ".68rem",
    letterSpacing: ".22em",
    cursor: "pointer",
    transition: "all .3s",
    fontWeight: 500,
    fontFamily: "'Neue Montreal', sans-serif",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "inline-block",
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </button>
  );
}

export default function Nav({ openModal }) {
  const { language, setLanguage, t } = useI18n();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const initial = typeof window !== "undefined" && window.innerWidth < 980;
    setIsMobile(initial);

    const onResize = () => setIsMobile(window.innerWidth < 980);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  const links = [
    { label: t.nav.links[0], href: "#home" },
    { label: t.nav.links[1], href: "#quem-somos" },
    { label: t.nav.links[2], href: "#veiculos" },
    { label: t.nav.links[3], href: "#servicos" },
    { label: t.nav.links[4], href: "#saiba-mais" },
    { label: t.nav.links[5], href: "#contato" },
  ];
  const languageOptions = [
    { value: "pt", label: t.nav.langs.pt, flag: "br" },
    { value: "en", label: t.nav.langs.en, flag: "us" },
    { value: "es", label: t.nav.langs.es, flag: "es" },
    { value: "fr", label: t.nav.langs.fr, flag: "fr" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          height: scrolled ? 70 : 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 1.25rem" : scrolled ? "0 3.2rem 0 1.6rem" : "0 4rem 0 1.8rem",
          background: scrolled ? "rgba(248,251,255,.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(12,22,36,.13)" : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 28px rgba(9,18,32,.16)" : "none",
          transition: "height .28s ease, padding .28s ease, background .28s ease, box-shadow .28s ease, border-color .28s ease",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logoImage}
            alt="ROCAS Locadora de Veículos Blindados"
            style={{
              height: scrolled ? 60 : 72,
              width: "auto",
              filter: scrolled
                ? "brightness(.22) contrast(1.18) drop-shadow(0 1px 2px rgba(0,0,0,.12))"
                : "drop-shadow(0 0 12px rgba(180,210,240,.18))",
              transition: "height .28s ease, filter .28s ease",
            }}
          />
        </a>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} scrolled={scrolled}>
                {link.label}
              </NavLink>
            ))}
            <LanguageMenu value={language} options={languageOptions} onChange={setLanguage} scrolled={scrolled} />
            <NavCta href="#contato" scrolled={scrolled}>
              {t.nav.cta}
            </NavCta>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                style={{
                  width: 22,
                  height: 1,
                  background: scrolled ? "#1b2b41" : theme.cr5,
                  display: "block",
                  transition: "background .28s ease",
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 499,
            background: "rgba(8,10,16,.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: ".9rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: theme.cr5,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <LanguageMenu
            value={language}
            options={languageOptions}
            onChange={(nextLanguage) => {
              setLanguage(nextLanguage);
              setOpen(false);
            }}
            mobile
          />
          <NavCta
            href="#contato"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </NavCta>
        </div>
      )}
    </>
  );
}
