import { useEffect, useState } from "react";
import { logoImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useScrolled } from "../../hooks/useScrolled";
import { useI18n } from "../../i18n/LanguageContext";

function NavLink({ href, children }) {
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
        color: hovered ? theme.cr7 : theme.cr4,
        textDecoration: "none",
        fontWeight: 500,
        transition: "color .2s",
        position: "relative",
        paddingBottom: 4,
        borderBottom: hovered ? `1px solid ${theme.cr6}` : "1px solid transparent",
      }}
    >
      {children}
    </a>
  );
}

function NavCta({ onClick, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? theme.cr6 : theme.cr3}`,
        background: hovered ? theme.cr6 : "transparent",
        color: hovered ? theme.bg0 : theme.cr6,
        padding: ".56rem 1.42rem",
        fontSize: ".72rem",
        letterSpacing: ".22em",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 600,
        fontFamily: "'Raleway',sans-serif",
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

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 1.25rem" : "0 4rem",
          background: scrolled ? "rgba(11,13,18,.97)" : "rgba(11,13,18,.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${theme.bd}`,
          boxShadow: scrolled ? "0 2px 40px rgba(0,0,0,.5)" : "none",
          transition: "background .3s, box-shadow .3s",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logoImage}
            alt="ROCAS Locadora"
            style={{
              height: 58,
              width: "auto",
              filter: "drop-shadow(0 0 12px rgba(180,210,240,.18))",
            }}
          />
        </a>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              style={{
                background: "transparent",
                border: `1px solid ${theme.bd}`,
                color: theme.textLo,
                fontSize: ".68rem",
                letterSpacing: ".15em",
                padding: ".3rem .5rem",
                cursor: "pointer",
                fontFamily: "'Raleway',sans-serif",
                textTransform: "uppercase",
              }}
            >
              <option value="pt">{t.nav.langs.pt}</option>
              <option value="en">{t.nav.langs.en}</option>
              <option value="es">{t.nav.langs.es}</option>
              <option value="fr">{t.nav.langs.fr}</option>
            </select>
            <NavCta onClick={openModal}>{t.nav.cta}</NavCta>
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
                style={{ width: 22, height: 1, background: theme.cr5, display: "block" }}
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
              fontFamily: "'Raleway',sans-serif",
              textTransform: "uppercase",
            }}
          >
            <option value="pt">{t.nav.langs.pt}</option>
            <option value="en">{t.nav.langs.en}</option>
            <option value="es">{t.nav.langs.es}</option>
            <option value="fr">{t.nav.langs.fr}</option>
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
