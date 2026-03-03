import { useState } from "react";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Contato from "./components/sections/Contato";
import Feedbacks from "./components/sections/Feedbacks";
import Hero from "./components/sections/Hero";
import QuemSomos from "./components/sections/QuemSomos";
import SaibaMais from "./components/sections/SaibaMais";
import Servicos from "./components/sections/Servicos";
import Veiculos from "./components/sections/Veiculos";
import Privacidade from "./components/sections/Privacidade";
import Divider from "./components/ui/Divider";
import { globalStyles } from "./constants/theme";

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState("");

  return (
    <>
      <style>{globalStyles}</style>
      <Nav />
      <Hero />
      <Divider />
      <Veiculos onSelectVehicle={setSelectedVehicle} />
      <Divider />
      <QuemSomos />
      <Divider />
      <SaibaMais />
      <Divider />
      <Servicos />
      <Divider />
      <Feedbacks />
      <Divider />
      <Contato selectedVehicle={selectedVehicle} onSelectedVehicleChange={setSelectedVehicle} />
      <Divider />
      <Privacidade />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
