import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- Global Background logic moved to BackgroundSystem ---

// --- Word Rotator Component ---

const words = ['Aesthetic.', 'Experience.', 'Presence.', 'Craft.', 'Identity.'];

function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Slight initial delay to let entrance animation finish
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 3500); // Slower, calm rhythm
      return () => clearInterval(interval);
    }, 2000);
    
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="relative inline-flex items-center ml-2 md:ml-4 overflow-visible align-top h-[1.1em]">
      {/* Container for word */}
      <div className="relative overflow-hidden h-full min-w-[5ch] flex flex-col justify-end">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Cinematic easing
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 pb-1 font-medium relative z-10"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        
        {/* Premium Underline */}
        <motion.div 
          className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"
          layoutId="rotator-underline"
        />
      </div>
    </div>
  );
}

// --- Main Hero Component ---

const Hero = () => {
  useEffect(() => {
    // Mobile check removed to fix unused variable warning
    const check = () => {};
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollY } = useScroll();
  
  // Scroll transitions
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  // Cinematic blur reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="home" className="relative w-full h-screen bg-transparent text-white overflow-hidden font-sans">
      
      {/* 1. PREMIUM HEADER LAYER */}
      <motion.header 
        className="absolute top-0 left-0 w-full z-50 px-8 md:px-12 py-10 flex items-center justify-between pointer-events-auto"
        style={{ opacity: heroOpacity }}
      >
        {/* Brand & Logo Placeholder */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white/95">VEXIRO</span>
        </div>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-8 md:gap-12">
          {['Home', 'Our Services', 'Contact'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a 
                key={item} 
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </motion.header>

      {/* UI CONTENT LAYER */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-12 pointer-events-none">
        
        <motion.div 
          className="max-w-6xl text-center pointer-events-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          
          {/* 1. Eyebrow Label */}
          <motion.p 
            variants={itemVariants} 
            className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-white/40 mb-8"
          >
            Digital Experience Studio
          </motion.p>
          
          {/* 2. Main Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-white flex flex-col items-center"
          >
            <span className="block">Refining the</span>
            
            {/* Word Rotator Row */}
            <div className="flex items-center justify-center">
              <span className="text-white/90">Digital</span>
              {/* Insert Rotator */}
              <WordRotator />
            </div>
          </motion.h1>

          {/* 3. Supporting Line */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We adhere to a philosophy of reductive design, crafting immersive digital systems that perform with silence and precision.
          </motion.p>

          {/* 4. Call-to-Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            
            {/* Primary Button: Glassmorphic */}
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <span className="relative z-10">Start Project</span>
              {/* Inner shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.button>
            
            {/* Secondary Button: Minimal */}
            <motion.button 
               whileHover={{ scale: 1.02, color: "rgba(255,255,255,1)" }}
               whileTap={{ scale: 0.98 }}
               className="px-8 py-4 bg-transparent text-white/40 font-medium text-sm tracking-widest uppercase transition-all duration-300 border border-transparent hover:border-white/5 rounded-full"
            >
              Our Vision
            </motion.button>

          </motion.div>
        
        </motion.div>
      </div>

      {/* 5. SCROLL TO EXPLORE INDICATOR */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-10"
        style={{ opacity: heroOpacity }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-medium">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent relative"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-r border-b border-white/40 rotate-45" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
