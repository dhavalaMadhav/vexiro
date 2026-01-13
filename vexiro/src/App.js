import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import BackgroundSystem from './components/BackgroundSystem';

function App() {
  return (
    <div className="App selection:bg-white/10 selection:text-white">
      <BackgroundSystem />
      <div className="relative z-10">
        <Hero />
        <Services />
      </div>
    </div>
  );
}

export default App;
