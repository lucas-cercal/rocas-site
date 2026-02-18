import { useEffect, useState } from "react";

export function useBreakpoint(breakpoint = 980) {
  const [isBelow, setIsBelow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const onResize = () => setIsBelow(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isBelow;
}
