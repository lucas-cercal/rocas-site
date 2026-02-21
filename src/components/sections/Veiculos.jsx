import { useState } from "react";
import { corollaImage, corollaImage2, jeepImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

const lightSection = {
  bg: "#f6f9fe",
  card: "#ffffff",
  cardHover: "#edf4fc",
  border: "rgba(24,49,81,.14)",
  titleEm: "#2d4f78",
  text: "#3f5675",
  textSoft: "#607492",
  tagText: "#365274",
  tagBorder: "rgba(40,71,110,.2)",
  buttonText: "#2d4f78",
  buttonBorder: "rgba(40,71,110,.28)",
  buttonHoverBg: "rgba(61,93,133,.08)",
};

function LightGhostButton({ children, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? lightSection.buttonHoverBg : "transparent",
        border: `1px solid ${hovered ? lightSection.buttonText : lightSection.buttonBorder}`,
        color: lightSection.buttonText,
        padding: ".9rem 2.1rem",
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: ".74rem",
        letterSpacing: ".24em",
        textTransform: "uppercase",
        cursor: "pointer",
        fontWeight: 500,
        transition: "all .25s",
      }}
    >
      {children}
    </button>
  );
}

function VehicleCard({ badge, name, desc, tags, grad, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? lightSection.cardHover : lightSection.card,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "background .3s, box-shadow .3s",
        boxShadow: hovered ? "0 10px 24px rgba(16,36,62,.08)" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(to right,transparent,rgba(58,90,130,.45),transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity .3s",
        }}
      />
      <div
        style={{
          aspectRatio: "16/9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: grad,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.88,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform .5s",
          }}
        />
      </div>
      <div style={{ padding: "1.5rem 1.8rem 2rem" }}>
        <div
          style={{
            fontSize: ".58rem",
            letterSpacing: ".3em",
            color: "#496a92",
            textTransform: "uppercase",
            marginBottom: ".5rem",
            fontWeight: 500,
          }}
        >
          {badge}
        </div>
        <div
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: "1.4rem",
            color: "#10233f",
            fontWeight: 700,
            marginBottom: ".6rem",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: ".75rem",
            color: lightSection.textSoft,
            lineHeight: 1.65,
            marginBottom: "1.2rem",
            fontWeight: 500,
          }}
        >
          {desc}
        </div>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: ".58rem",
                letterSpacing: ".12em",
                color: lightSection.tagText,
                textTransform: "uppercase",
                padding: ".2rem .6rem",
                border: `1px solid ${lightSection.tagBorder}`,
                background: "#f8fbff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Veiculos({ openModal }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const carVisuals = [
    { grad: "linear-gradient(135deg,#d9e4f2,#f2f7ff)", image: corollaImage },
    { grad: "linear-gradient(135deg,#dae4f0,#f3f7ff)", image: corollaImage2 },
    { grad: "linear-gradient(135deg,#d6e0ed,#eef4fd)", image: jeepImage },
  ];
  const cars = t.veiculos.cars.map((car, index) => ({ ...car, ...carVisuals[index] }));

  return (
    <section id="veiculos" style={{ background: lightSection.bg, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <Reveal>
          <SLabel tone="light">{t.veiculos.label}</SLabel>
          <STitle tone="light">
            {t.veiculos.titleA}
            <br />
            <em style={{ fontStyle: "italic", color: lightSection.titleEm }}>{t.veiculos.titleB}</em>
          </STitle>
        </Reveal>
        <Reveal>
          <LightGhostButton onClick={openModal}>{t.veiculos.cta}</LightGhostButton>
        </Reveal>
      </div>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 1, background: lightSection.border }}>
          {cars.map((car) => (
            <VehicleCard key={car.name} {...car} />
          ))}
        </div>
      </Reveal>

      <p
        style={{
          fontSize: ".68rem",
          color: lightSection.text,
          textAlign: "center",
          marginTop: "1.5rem",
          letterSpacing: ".1em",
        }}
      >
        {t.veiculos.footnote}
      </p>
    </section>
  );
}
