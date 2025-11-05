import { useState } from 'react';
import './App.css';
import LightRays from './components/LightRays';
import PillNav from './components/PillNav';
import logo from './path/nsalogo.png';
import HomeComponent from './components/HomeComponent';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Workshops from './components/Workshops';
import About from './components/About';
import WhatAwaits from './components/WhatAwaits';
import Corporate from './components/Corporate';
import SceneStudy from './components/SceneStudy';
import ContemporaryDance from './components/ContemporaryDance';
import StageInADay from './components/StageInADay';
import ConservatoryPrep from './components/ConservatoryPrep';

import AdvancedActing from './components/AdvancedActing';
function App() {
  // Atölye dropdown menüsü - 5 kırılım (artık ana sayfa yok, sadece alt sayfalar)
  const workshopItems = [
    { label: 'Oyun Çalışma / Çıkarma Atölyesi', href: '/scenestudy' },
    { label: 'Çağdaş Dans Atölyesi', href: '/contemporarydance' },
    { label: 'Sahnede Bir Gün', href: '/stageinaday' },
    { label: 'Konservatuvara Hazırlık Atölyesi – Oyunculuk', href: '/conservatoryprep' },
    { label: 'İleri Seviye Oyunculuk Atolyesi', href: '/advancedacting' }
  ];

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <PillNav
        logo={logo}
        logoAlt="Nişantaşı Sanat Akademisi"
        items={[
          { label: 'ANASAYFA', href: '/' },
          { 
            label: 'ATÖLYELERİMİZ', 
            href: '#', // Artık sayfa yok, sadece dropdown
            dropdown: workshopItems
          },
          { label: 'SENİ NELER BEKLİYOR', href: '/whatawaits' },
          { label: 'KURUMSAL', href: '/corporate' },
          { label: 'İLETİŞİM', href: '/contact' },
          { label: 'HAKKIMIZDA', href: '/about' }
        ]}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#dfe3e6"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* Background Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#a4aeae"
        raysSpeed={1.2}
        lightSpread={0.7}
        rayLength={1.4}
        fadeDistance={1.2}
        saturation={1.1}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.05}
        distortion={0.08}
      />

      {/* Main Content */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshops/all" element={<Workshops />} />
          <Route path="/scenestudy" element={<SceneStudy />} />
          <Route path="/contemporarydance" element={<ContemporaryDance />} />
          <Route path="/stageinaday" element={<StageInADay />} />
          <Route path="/conservatoryprep" element={<ConservatoryPrep />} />
          <Route path="/advancedacting" element={<AdvancedActing />} />
          <Route path="/about" element={<About />} />
          <Route path="/whatawaits" element={<WhatAwaits />} />
          <Route path="/corporate" element={<Corporate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;