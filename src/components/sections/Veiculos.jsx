import { useState } from "react";
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

function VehicleCard({
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
  compact = false,
  teaser = false,
}) {
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
          aspectRatio: imageAspect || (teaser ? "4/5" : compact ? "16/8.4" : "16/5.7"),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: teaser ? grad : hovered ? lightSection.cardHover : lightSection.card,
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
                objectFit: imageFit,
                objectPosition: imagePosition,
                opacity: 0.88,
                transform: hovered
                  ? `scale(${imageScale * (imageFit === "contain" ? 1.02 : 1.04)})`
                  : `scale(${imageScale})`,
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
          padding: teaser ? ".8rem" : compact ? "1.25rem 1.35rem 1.45rem" : "1.5rem 1.8rem 2rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {!teaser && (
          <>
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
                fontSize: compact ? "1.16rem" : "1.4rem",
                color: "#10233f",
                fontWeight: 700,
                marginBottom: ".6rem",
              }}
            >
              {name}
            </div>
          </>
        )}
        {teaser ? (
          <div
            style={{
              marginTop: "auto",
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: ".72rem",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#35557a",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              alignSelf: "center",
            }}
          >
            ROCAS
          </div>
        ) : (
          <>
            <div
              style={{
                fontSize: compact ? ".7rem" : ".75rem",
                color: lightSection.textSoft,
                lineHeight: compact ? 1.58 : 1.65,
                marginBottom: "1.2rem",
                fontWeight: 500,
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: compact ? 4 : "unset",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {desc}
            </div>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: compact ? "auto" : "auto" }}>
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
                padding: compact ? ".7rem .85rem" : ".82rem 1rem",
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: compact ? ".62rem" : ".7rem",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all .25s ease",
              }}
            >
              {ctaLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export default function Veiculos({ onSelectVehicle }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [activeIndex, setActiveIndex] = useState(1);
  const carVisuals = [
    { grad: "linear-gradient(135deg,#d9e4f2,#f2f7ff)", image: corollaImage, imageFit: "contain", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    { grad: "linear-gradient(135deg,#dae4f0,#f3f7ff)", image: corollaImage2, imageFit: "contain", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    { grad: "linear-gradient(135deg,#d6e0ed,#eef4fd)", image: jeepImage, imageFit: "contain", imagePosition: "center center", imageScale: 1.02, imageAspect: "16/7.4" },
    {
      grad: "linear-gradient(135deg,#d8e0ea,#eef2f7)",
      image: sprinterImage,
      imageFit: "contain",
      imagePosition: "center center",
      imageScale: 1.02,
      imageAspect: "16/7.4",
    },
  ];
  const cars = t.veiculos.cars.map((car, index) => ({ ...car, ...carVisuals[index], id: `vehicle-${index}` }));
  const canSlide = !isMobile && cars.length > 1;

  const handleSelectVehicle = (vehicle) => {
    onSelectVehicle?.(vehicle);
    if (typeof window !== "undefined") {
      window.location.hash = "contato";
    }
  };

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % cars.length);

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
            <div style={{ marginBottom: ".9rem" }} />
          )}
          {isMobile ? (
            <div
              style={{
                display: "grid",
                gap: ".9rem",
                padding: ".9rem",
              }}
            >
              {cars.map((car) => (
                <VehicleCard
                  key={car.name}
                  {...car}
                  ctaLabel={t.veiculos.selectVehicle}
                  onSelect={() => handleSelectVehicle(car.id)}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                height: 760,
                overflow: "hidden",
                background: "linear-gradient(180deg,#f8fbff,#eef4fc)",
              }}
            >
              <button
                type="button"
                onClick={goPrev}
                aria-label="Veículo anterior"
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: "rgba(255,255,255,.92)",
                  color: lightSection.buttonText,
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
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: `1px solid ${lightSection.buttonBorder}`,
                  background: "rgba(255,255,255,.92)",
                  color: lightSection.buttonText,
                  cursor: "pointer",
                  boxShadow: "0 8px 22px rgba(29,53,86,.12)",
                }}
              >
                ›
              </button>
              <div style={{ position: "absolute", inset: "0 48px" }}>
                {cars.map((car, index) => {
                  const offset = getCircularOffset(index, activeIndex, cars.length);
                  const absOffset = Math.abs(offset);
                  const hidden = absOffset > 2;
                  const width = absOffset === 0 ? "38%" : absOffset === 1 ? "25.5%" : "8%";
                  const x = offset === 0 ? "50%" : offset === -1 ? "19%" : offset === 1 ? "81%" : offset < 0 ? "3.5%" : "96.5%";
                  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.94 : 0.82;

                  return (
                    <div
                      key={car.name}
                      style={{
                        position: "absolute",
                        top: 20,
                        bottom: 20,
                        left: x,
                        width,
                        transform: `translateX(-50%) scale(${scale})`,
                        opacity: hidden ? 0 : absOffset === 2 ? 0.55 : absOffset === 1 ? 0.88 : 1,
                        zIndex: 20 - absOffset,
                        transition: "all .42s cubic-bezier(.22,1,.36,1)",
                        pointerEvents: hidden ? "none" : "auto",
                        filter: absOffset === 0 ? "none" : "saturate(.88)",
                      }}
                    >
                      <VehicleCard
                        {...car}
                        ctaLabel={t.veiculos.selectVehicle}
                        onSelect={() => handleSelectVehicle(car.id)}
                        compact={absOffset === 1}
                        teaser={absOffset === 2}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
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
