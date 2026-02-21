import { useEffect, useState } from "react";
import { logoImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useScrolled } from "../../hooks/useScrolled";
import { useI18n } from "../../i18n/LanguageContext";

function NavLink({ href, children, scrolled = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: ".76rem",
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

function NavCta({ onClick, children, scrolled = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        fontSize: ".72rem",
        letterSpacing: ".22em",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        fontFamily: "'Neue Montreal', sans-serif",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
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
    { value: "pt", label: `🇧🇷 ${t.nav.langs.pt}` },
    { value: "en", label: `🇺🇸 ${t.nav.langs.en}` },
    { value: "es", label: `🇪🇸 ${t.nav.langs.es}` },
    { value: "fr", label: `🇫🇷 ${t.nav.langs.fr}` },
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
          padding: isMobile ? "0 1.25rem" : scrolled ? "0 3.2rem" : "0 4rem",
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
            alt="ROCAS Locadora"
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
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              style={{
                background: scrolled ? "rgba(250,252,255,.92)" : "transparent",
                border: scrolled ? "1px solid rgba(16,28,44,.24)" : `1px solid ${theme.bd}`,
                color: scrolled ? "#1b2b41" : theme.textLo,
                fontSize: ".68rem",
                letterSpacing: ".15em",
                padding: ".3rem .5rem",
                cursor: "pointer",
                fontFamily: "'Neue Montreal', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                transition: "all .28s ease",
              }}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <NavCta onClick={openModal} scrolled={scrolled}>
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
                fontSize: ".98rem",
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
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            style={{
              background: "transparent",
              border: `1px solid ${theme.bd}`,
              color: theme.textLo,
              fontSize: ".8rem",
              letterSpacing: ".15em",
              padding: ".5rem .8rem",
              cursor: "pointer",
              fontFamily: "'Neue Montreal', sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <NavCta
            onClick={() => {
              setOpen(false);
              openModal();
            }}
          >
            {t.nav.cta}
          </NavCta>
        </div>
      )}
    </>
  );
}
