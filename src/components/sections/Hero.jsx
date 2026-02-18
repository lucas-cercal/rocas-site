import { useState } from "react";
import { logoImage } from "../../assets";
import logoAnimatedVideo from "../../assets/logo-animada.mp4";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { BtnChrome, BtnGhost } from "../ui/Buttons";

export default function Hero({ openModal }) {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 45%, rgba(100,130,190,.06) 0%,transparent 60%), radial-gradient(ellipse 50% 80% at 15% 60%, rgba(80,110,170,.04) 0%,transparent 60%), linear-gradient(160deg,#080a0f 0%,#0b0d14 45%,#0f1220 100%)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", perspective: 600 }}>
        <div
          style={{
            position: "absolute",
            left: "-50%",
            right: "-50%",
            top: "40%",
            height: "200%",
            backgroundImage:
              "linear-gradient(rgba(180,200,228,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(180,200,228,.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "rotateX(60deg)",
            maskImage: "linear-gradient(to bottom,transparent,black 30%,black 70%,transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom,transparent,black 30%,black 70%,transparent)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "48%",
          background: `linear-gradient(145deg,${theme.bg2},${theme.bg3})`,
          clipPath: "polygon(12% 0,100% 0,100% 100%,0% 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: isMobile ? "0 1.25rem" : "0 4rem",
          paddingTop: 78,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "1.5rem" : "3rem",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ padding: isMobile ? "2.2rem 0 1rem" : "4rem 0", animation: "fadeUp 1s ease both" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".8rem",
              fontSize: ".68rem",
              letterSpacing: ".5em",
              textTransform: "uppercase",
              color: theme.accentDim,
              marginBottom: "2rem",
              fontWeight: 600,
            }}
            >
              <span
              style={{
                width: 28,
                height: 1,
                background: `linear-gradient(to right,transparent,${theme.accentDim})`,
                display: "block",
              }}
              />
            {t.hero.badge}
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: isMobile ? "clamp(2.35rem,12vw,3.6rem)" : "clamp(3.3rem,5.9vw,5.8rem)",
              fontWeight: 400,
              lineHeight: 1,
              color: theme.cr8,
              marginBottom: "1.8rem",
            }}
          >
            {t.hero.lines[0]}
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                background: `linear-gradient(135deg,${theme.cr7},${theme.cr5} 60%,${theme.cr6})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.hero.lines[1]}
            </em>
            <br />
            {t.hero.lines[2]}
            <br />
            {t.hero.lines[3]}
          </h1>
          <p
            style={{
              fontSize: ".92rem",
              color: theme.textMd,
              lineHeight: 1.9,
              maxWidth: 520,
              marginBottom: "2.8rem",
              fontWeight: 300,
            }}
          >
            {t.hero.desc}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <BtnChrome onClick={openModal}>{t.hero.ctaPrimary}</BtnChrome>
            <BtnGhost href="#veiculos">{t.hero.ctaSecondary}</BtnGhost>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${theme.bd}`,
            }}
          >
            {t.hero.stats.map(({ value, label }) => {
              return (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "2.1rem",
                      color: theme.cr7,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: ".66rem",
                      letterSpacing: ".2em",
                      color: theme.textLo,
                      textTransform: "uppercase",
                      marginTop: ".25rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(120,160,220,.06) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: isMobile ? "min(82vw, 360px)" : "min(94%, 500px)",
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              transform: isMobile ? "translate(14%, -4%)" : "translate(18%, -7%)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter:
                  "drop-shadow(0 0 80px rgba(160,190,230,.2)) drop-shadow(0 30px 60px rgba(0,0,0,.7)) brightness(1.05)",
                animation: "floatY 7s ease-in-out infinite",
              }}
            >
              {!videoError ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={logoImage}
                  onError={() => setVideoError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                    display: "block",
                  }}
                >
                  <source src={logoAnimatedVideo} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={logoImage}
                  alt="ROCAS"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "4rem",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: ".8rem",
            fontSize: ".66rem",
            letterSpacing: ".3em",
            color: theme.textLo,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 36, height: 1, background: theme.cr3, animation: "lineBreath 2s ease-in-out infinite" }} />
          {t.hero.scroll}
        </div>
      )}
    </section>
  );
}
