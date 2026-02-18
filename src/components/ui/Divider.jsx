import { theme } from "../../constants/theme";

export default function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: `linear-gradient(to right, transparent, ${theme.bdAct} 30%, ${theme.bdAct} 70%, transparent)`,
      }}
    />
  );
}
