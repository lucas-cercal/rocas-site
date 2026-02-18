import { useReveal } from "../../hooks/useReveal";

export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
