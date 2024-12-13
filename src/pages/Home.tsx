// pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SessaoUm from '../components/SessaoUm';
import SessaoDois from '../components/SessaoDois';
import Sessaotres from '../components/SessaoTres';
import SessaoQuatro from '../components/SessaoQuatro';
import WhatsAppButton from '../components/WhatsAppButton';

const Home: React.FC = () => {
  return (
    <div>
      {/* Header no topo */}
      <Header />
      
      {/* Sessões intermediárias */}
      <SessaoUm />
      <Sessaotres/>
      <SessaoQuatro/>
      <SessaoDois />

      {/* Footer na base */}
      <Footer />

      {/* Botão do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
