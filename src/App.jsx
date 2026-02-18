import { useState } from "react";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import QuoteModal from "./components/modal/QuoteModal";
import Contato from "./components/sections/Contato";
import Hero from "./components/sections/Hero";
import QuemSomos from "./components/sections/QuemSomos";
import SaibaMais from "./components/sections/SaibaMais";
import Servicos from "./components/sections/Servicos";
import Veiculos from "./components/sections/Veiculos";
import Privacidade from "./components/sections/Privacidade";
import Divider from "./components/ui/Divider";
import { globalStyles } from "./constants/theme";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{globalStyles}</style>
      <Nav openModal={() => setModalOpen(true)} />
      <Hero openModal={() => setModalOpen(true)} />
      <Divider />
      <QuemSomos />
      <Divider />
      <Veiculos openModal={() => setModalOpen(true)} />
      <Divider />
      <Servicos />
      <Divider />
      <SaibaMais />
      <Divider />
      <Contato />
      <Divider />
      <Privacidade />
      <Footer />
      <WhatsAppButton />
      <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
