export const theme = {
  bg0: "#0b0d12", bg1: "#0f1118", bg2: "#13161f",
  bg3: "#181c28", bg4: "#1d2232",
  cr3: "#6f7891", cr4: "#9ca7bf", cr5: "#c3cddd",
  cr6: "#cdd5e0", cr7: "#e2e8f0", cr8: "#f0f3f7",
  accent: "#c8d4e4", accentDim: "#7a8fa8",
  textMd: "#a2afc1", textLo: "#73829a",
  bd: "rgba(180,200,228,0.08)", bdAct: "rgba(180,200,228,0.22)",
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Raleway:wght@200;300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: clamp(17px, 0.5vw + 13px, 20px); }
  body { font-family: 'Raleway', sans-serif; font-size: 1.03rem; background: ${theme.bg1}; color: ${theme.cr5}; overflow-x: hidden; margin: 0; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${theme.bg0}; }
  ::-webkit-scrollbar-thumb { background: ${theme.cr3}; border-radius: 2px; }
  body::after {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes lineBreath { 0%,100%{width:36px;opacity:1} 50%{width:18px;opacity:.5} }
  @keyframes scrollPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.6)} }
`;
