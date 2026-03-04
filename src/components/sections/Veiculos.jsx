import { useEffect, useRef, useState } from "react";
import { corollaImage, corollaImage2, jeepImage, sprinterImage } from "../../assets";
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
  shell: "transparent",
  shellBorder: "transparent",
  shellText: "#10233f",
  shellTextSoft: "#607492",
  shellTagText: "#365274",
  shellTagBorder: "rgba(40,71,110,.2)",
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

function MobileVehicleCard({
  badge,
  name,
  desc,
  tags,
  grad,
  image,
  imageFit = "cover",
  imagePosition = "center center",
  imageScale = 1,
  imageAspect,
  onSelect,
  ctaLabel,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? lightSection.cardHover : lightSection.card,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "background .3s, box-shadow .3s",
        boxShadow: hovered ? "0 10px 24px rgba(16,36,62,.08)" : "none",
      }}
    >
      <div
        style={{
          aspectRatio: imageAspect || "16/7.4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered ? lightSection.cardHover : grad,
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={`${name} - frota ROCAS`}
          title={name}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: imageFit,
            objectPosition: imagePosition,
            opacity: 0.9,
            transform: hovered
              ? `scale(${imageScale * (imageFit === "contain" ? 1.03 : 1.05)})`
              : `scale(${imageScale})`,
            transition: "transform .45s ease",
          }}
        />
      </div>

      <div
        style={{
          padding: "1.35rem 1.35rem 1.5rem",
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
            fontSize: "1.26rem",
            color: "#10233f",
            fontWeight: 700,
            marginBottom: ".6rem",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: ".74rem",
            color: lightSection.textSoft,
            lineHeight: 1.65,
            marginBottom: "1.2rem",
            fontWeight: 500,
            textAlign: "justify",
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
        <button
          type="button"
          onClick={onSelect}
          style={{
            marginTop: "1.25rem",
            width: "100%",
            border: `1px solid ${hovered ? lightSection.buttonText : lightSection.buttonBorder}`,
            background: hovered ? "rgba(61,93,133,.08)" : "transparent",
            color: lightSection.buttonText,
            padding: ".82rem 1rem",
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: ".68rem",
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

function DesktopVehicleCard({
  badge,
  name,
  desc,
  tags,
  image,
  imageFit = "cover",
  imagePosition = "center center",
  imageScale = 1,
  active,
  onActivate,
  onSelect,
  ctaLabel,
}) {
  const [hovered, setHovered] = useState(false);
  const isSprinter = /sprinter/i.test(name);

  return (
    <article
      onClick={() => {
        if (!active) onActivate();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 auto",
        width: "var(--card-w)",
        minHeight: 640,
        margin: "0 var(--card-gap)",
        background: active ? "#ffffff" : "rgba(255,255,255,.72)",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: active ? "default" : "pointer",
        transition: "transform .5s cubic-bezier(.25,.46,.45,.94), background .5s ease, box-shadow .5s ease, opacity .5s ease",
        transform: active ? "scale(1)" : "scale(.88)",
        opacity: active ? 1 : 0.8,
        boxShadow: active ? "0 20px 44px rgba(16,36,62,.12)" : "0 8px 18px rgba(16,36,62,.04)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 280,
          overflow: "hidden",
          background: active ? "#eef4fc" : "#dfe8f3",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={`${name} - frota ROCAS`}
          title={name}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: imageFit,
            objectPosition: imagePosition,
            transition: "transform .4s ease, filter .4s ease",
            transform: active && hovered ? `scale(${imageScale * 1.02})` : `scale(${imageScale})`,
            filter: active ? "brightness(1)" : "brightness(.88)",
          }}
        />
      </div>

      <div
        style={{
          padding: "1.1rem 1.25rem .4rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: ".68rem",
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: active ? "#496a92" : "#6e83a2",
            marginBottom: ".4rem",
          }}
        >
          {badge}
        </div>
        <div
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: isSprinter ? "1.2rem" : "1.3rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: lightSection.shellText,
            marginBottom: ".5rem",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: isSprinter ? ".76rem" : ".82rem",
            color: lightSection.shellTextSoft,
            lineHeight: 1.6,
            flex: 1,
            minHeight: 104,
            textAlign: "justify",
          }}
        >
          {desc}
        </div>
      </div>

      <div
        style={{
          padding: ".9rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: ".65rem",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: ".62rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                border: `1px solid ${lightSection.shellTagBorder}`,
                color: lightSection.shellTagText,
                borderRadius: 4,
                padding: "3px 8px",
                background: "#f8fbff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          disabled={!active}
          onClick={(event) => {
            event.stopPropagation();
            if (active) onSelect();
          }}
          style={{
            width: "100%",
            padding: "12px",
            textAlign: "center",
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: ".7rem",
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: active ? lightSection.buttonText : lightSection.buttonText,
            border: `1px solid ${active ? (hovered ? lightSection.buttonText : lightSection.buttonBorder) : lightSection.buttonBorder}`,
            borderRadius: 8,
            background: active && hovered ? "rgba(61,93,133,.08)" : "transparent",
            cursor: active ? "pointer" : "default",
            pointerEvents: active ? "auto" : "none",
            opacity: active ? 1 : 0.45,
            transition: "background .2s, color .2s, border-color .2s",
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}

export default function Veiculos({ onSelectVehicle }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(1180);
  const viewportRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(420);
  const [viewportWidth, setViewportWidth] = useState(0);
  const carGap = 16;

  const carVisuals = [
    { grad: "linear-gradient(135deg,#d9e4f2,#f2f7ff)", image: corollaImage, imageFit: "contain", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    { grad: "linear-gradient(135deg,#dae4f0,#f3f7ff)", image: corollaImage2, imageFit: "contain", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    { grad: "linear-gradient(135deg,#d6e0ed,#eef4fd)", image: jeepImage, imageFit: "cover", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    { grad: "linear-gradient(135deg,#d8e0ea,#eef2f7)", image: sprinterImage, imageFit: "cover", imagePosition: "center center", imageScale: 1.06, imageAspect: "16/7.4" },
  ];

  const cars = t.veiculos.cars.map((car, index) => ({
    ...car,
    ...carVisuals[index],
    id: `vehicle-${index}`,
  }));

  const handleSelectVehicle = (vehicle) => {
    onSelectVehicle?.(vehicle);
    if (typeof window !== "undefined") {
      window.location.hash = "contato";
    }
  };

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % cars.length);

  useEffect(() => {
    if (isMobile) return undefined;

    const updateMetrics = () => {
      const width = viewportRef.current?.offsetWidth || 0;
      setViewportWidth(width);
      setCardWidth(420);
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [isMobile]);

  const trackOffset = activeIndex * (cardWidth + carGap * 2) - (viewportWidth / 2 - cardWidth / 2);

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
          <LightGhostButton
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.hash = "contato";
              }
            }}
          >
            {t.veiculos.cta}
          </LightGhostButton>
        </Reveal>
      </div>

      <Reveal>
        <div>
          {isMobile ? (
            <div
              style={{
                display: "grid",
                gap: ".9rem",
                padding: ".9rem",
              }}
            >
              {cars.map((car) => (
                <MobileVehicleCard
                  key={car.id}
                  {...car}
                  ctaLabel={t.veiculos.selectVehicle}
                  onSelect={() => handleSelectVehicle(car.id)}
                />
              ))}
            </div>
          ) : (
            <>
              <div
              style={{
                position: "relative",
                paddingBottom: "2rem",
              }}
            >
              <button
                type="button"
                onClick={goPrev}
                aria-label="Veículo anterior"
                style={{
                  position: "absolute",
                  left: -10,
                  top: "42%",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: "rgba(255,255,255,.92)",
                  color: lightSection.buttonText,
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  boxShadow: "0 8px 22px rgba(29,53,86,.12)",
                }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo veículo"
                style={{
                  position: "absolute",
                  right: -10,
                  top: "42%",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: "rgba(255,255,255,.92)",
                  color: lightSection.buttonText,
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  boxShadow: "0 8px 22px rgba(29,53,86,.12)",
                }}
              >
                ›
              </button>
              <div ref={viewportRef} style={{ overflowX: "hidden", overflowY: "visible", position: "relative", padding: "0 0.75rem 0.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transition: "transform .5s cubic-bezier(.25,.46,.45,.94)",
                    willChange: "transform",
                    transform: `translateX(${-trackOffset}px)`,
                    ["--card-w"]: `${cardWidth}px`,
                    ["--card-gap"]: `${carGap}px`,
                  }}
                >
                  {cars.map((car, index) => (
                    <DesktopVehicleCard
                      key={car.id}
                      {...car}
                      active={index === activeIndex}
                      onActivate={() => setActiveIndex(index)}
                      onSelect={() => handleSelectVehicle(car.id)}
                      ctaLabel={t.veiculos.selectVehicle}
                    />
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
                {cars.map((car, index) => (
                  <button
                    key={`${car.id}-dot`}
                    type="button"
                    aria-label={`Ir para ${car.name}`}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      background: index === activeIndex ? lightSection.buttonText : "rgba(61,93,133,.24)",
                      transform: index === activeIndex ? "scale(1.3)" : "scale(1)",
                      transition: "background .2s, transform .2s",
                    }}
                  />
                ))}
              </div>
              </div>
            </>
          )}
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
