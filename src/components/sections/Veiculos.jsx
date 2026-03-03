import { useEffect, useRef, useState } from "react";
import { corollaImage, corollaImage2, jeepImage, sprinterImage } from "../../assets";
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

function VehicleCard({ badge, name, desc, tags, grad, image, onSelect, ctaLabel }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? lightSection.cardHover : lightSection.card,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "background .3s, box-shadow .3s",
        boxShadow: hovered ? "0 10px 24px rgba(16,36,62,.08)" : "none",
        scrollSnapAlign: "start",
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
        {image ? (
          <img
            src={image}
            alt={`${name} - frota ROCAS`}
            title={name}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.88,
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform .5s",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              color: "#2f4d71",
              fontFamily: "'Neue Montreal', sans-serif",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              fontSize: ".66rem",
              fontWeight: 700,
            }}
          >
            Van executiva
          </div>
        )}
      </div>
      <div
        style={{
          padding: "1.5rem 1.8rem 2rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
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
            flex: 1,
          }}
        >
          {desc}
        </div>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: "auto" }}>
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
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect();
          }}
          style={{
            marginTop: "1.25rem",
            width: "100%",
            border: `1px solid ${hovered ? lightSection.buttonText : lightSection.buttonBorder}`,
            background: hovered ? "rgba(61,93,133,.08)" : "transparent",
            color: lightSection.buttonText,
            padding: ".82rem 1rem",
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: ".7rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all .25s ease",
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export default function Veiculos({ onSelectVehicle }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const trackRef = useRef(null);
  const carVisuals = [
    { grad: "linear-gradient(135deg,#d9e4f2,#f2f7ff)", image: corollaImage },
    { grad: "linear-gradient(135deg,#dae4f0,#f3f7ff)", image: corollaImage2 },
    { grad: "linear-gradient(135deg,#d6e0ed,#eef4fd)", image: jeepImage },
    { grad: "linear-gradient(135deg,#c7daf0,#e8f2ff)", image: sprinterImage },
  ];
  const cars = t.veiculos.cars.map((car, index) => ({ ...car, ...carVisuals[index] }));
  const canSlide = !isMobile && cars.length > 3;

  useEffect(() => {
    const element = trackRef.current;
    if (!element) return undefined;

    const updateControls = () => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth - 4;
      setCanScrollPrev(element.scrollLeft > 4);
      setCanScrollNext(element.scrollLeft < maxScrollLeft);
    };

    updateControls();
    element.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      element.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [cars.length, isMobile]);

  const scrollByCards = (direction) => {
    const element = trackRef.current;
    if (!element) return;
    const amount = isMobile ? element.clientWidth : element.clientWidth * 0.72;
    element.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const handleSelectVehicle = (vehicle) => {
    onSelectVehicle?.(vehicle);
    if (typeof window !== "undefined") {
      window.location.hash = "contato";
    }
  };

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
            {t.veiculos.titleA} {" "}<em style={{ fontStyle: "normal", color: lightSection.titleEm }}>{t.veiculos.titleB}</em>
          </STitle>
        </Reveal>
        <Reveal>
          <LightGhostButton onClick={() => {
            if (typeof window !== "undefined") {
              window.location.hash = "contato";
            }
          }}>
            {t.veiculos.cta}
          </LightGhostButton>
        </Reveal>
      </div>

      <Reveal>
        <div>
          {canSlide && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: ".9rem" }}>
              <div style={{ fontSize: ".62rem", letterSpacing: ".16em", textTransform: "uppercase", color: lightSection.textSoft }}>
                {t.veiculos.moreHint}
              </div>
              <div style={{ display: "flex", gap: ".5rem" }}>
              <button
                onClick={() => scrollByCards(-1)}
                disabled={!canScrollPrev}
                style={{
                  width: 34,
                  height: 34,
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: !canScrollPrev ? "#eef3fa" : "#ffffff",
                  color: lightSection.buttonText,
                  cursor: !canScrollPrev ? "not-allowed" : "pointer",
                }}
              >
                ‹
              </button>
              <button
                onClick={() => scrollByCards(1)}
                disabled={!canScrollNext}
                style={{
                  width: 34,
                  height: 34,
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: !canScrollNext ? "#eef3fa" : "#ffffff",
                  color: lightSection.buttonText,
                  cursor: !canScrollNext ? "not-allowed" : "pointer",
                }}
              >
                ›
              </button>
              </div>
            </div>
          )}
          <div
            style={{
              position: "relative",
              border: `1px solid ${lightSection.border}`,
            }}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: isMobile ? ".9rem" : "1rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                padding: isMobile ? ".9rem" : "1rem",
                scrollBehavior: "smooth",
              }}
            >
              {cars.map((car, index) => (
                <div
                  key={car.name}
                  style={{
                    flex: isMobile ? "0 0 100%" : "0 0 calc((100% - 2rem) / 3.2)",
                    minWidth: 0,
                  }}
                >
                  <VehicleCard
                    {...car}
                    ctaLabel={t.veiculos.selectVehicle}
                    onSelect={() => handleSelectVehicle(car.name)}
                  />
                </div>
              ))}
            </div>
            {!isMobile && canScrollNext && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: 86,
                  background: "linear-gradient(to right, rgba(246,249,254,0), rgba(246,249,254,.92) 72%)",
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
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
