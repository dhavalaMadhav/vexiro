import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import BackgroundSystem from './components/BackgroundSystem';
import Work from './components/Work';
import SectionNav from './components/SectionNav';
import useLocomotiveScroll from './hooks/useLocomotiveScroll';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import CurvedDivider from './components/CurvedDivider';
import Team from './components/Team';

function App() {
  useLocomotiveScroll();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App selection:bg-white/10 selection:text-white">
      {/* Intro Animation Layer */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <BackgroundSystem />
      <SectionNav />
      
      <div className="relative z-10">
        <Hero />
        <Services />
         <CurvedDivider />
        <Work/>
        <Team/>
        <Contact />
        <Footer />
       
      </div>
    </div>
  );
}

export default App;