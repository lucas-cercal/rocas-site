import { useState } from "react";
import { corollaImage, corollaImage2, jeepImage } from "../../assets";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { BtnGhost } from "../ui/Buttons";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

function VehicleCard({ badge, name, desc, tags, grad, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? theme.bg3 : theme.bg2,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "background .3s",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right,transparent,${theme.cr4},transparent)`,
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
            opacity: 0.86,
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
            color: theme.accentDim,
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
            color: theme.cr7,
            fontWeight: 700,
            marginBottom: ".6rem",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: ".75rem",
            color: theme.textMd,
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
                color: theme.cr3,
                textTransform: "uppercase",
                padding: ".2rem .6rem",
                border: `1px solid ${theme.bd}`,
                background: theme.bg1,
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
    { grad: "linear-gradient(135deg,#0e1118,#151b28)", image: corollaImage },
    { grad: "linear-gradient(135deg,#0e1014,#141822)", image: corollaImage2 },
    { grad: "linear-gradient(135deg,#0f1115,#131520)", image: jeepImage },
  ];
  const cars = t.veiculos.cars.map((car, index) => ({ ...car, ...carVisuals[index] }));

  return (
    <section id="veiculos" style={{ background: theme.bg1, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
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
          <SLabel>{t.veiculos.label}</SLabel>
          <STitle>
            {t.veiculos.titleA}
            <br />
            <em style={{ fontStyle: "italic", color: theme.cr6 }}>{t.veiculos.titleB}</em>
          </STitle>
        </Reveal>
        <Reveal>
          <BtnGhost onClick={openModal}>{t.veiculos.cta}</BtnGhost>
        </Reveal>
      </div>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 1, background: theme.bd }}>
          {cars.map((car) => (
            <VehicleCard key={car.name} {...car} />
          ))}
        </div>
      </Reveal>

      <p
        style={{
          fontSize: ".68rem",
          color: theme.textLo,
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
