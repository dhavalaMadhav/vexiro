import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSITION_EASE } from '../utils/animations';

const IntroAnimation = ({ onComplete }) => {
  const [headlineFinished, setHeadlineFinished] = useState(false);

  // Masked Reveal Animation (Left -> Right)
  const maskTransition = {
    duration: 1.2,
    ease: TRANSITION_EASE,
    delay: 0.5
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050507]"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
      onAnimationComplete={() => {
         // This fires when the EXIT animation completes if wrapped in AnimatePresence?
         // No, we want to trigger the exit manually.
      }}
    >
      {/* BACKGROUND GRID/NOISE (Optional, to match theme) */}
      
      {/* CENTERING WRAPPER */}
      <div className="flex flex-col items-center justify-center text-center gap-2 relative z-10 px-6">
        
        {/* HEADLINE: READY TO BUILD... */}
        <div className="relative overflow-hidden">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-urbanist tracking-tight text-white/10 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
             READY TO BUILD YOUR BRAND WITH
          </motion.h1>

          <motion.div 
             className="absolute inset-0 z-10 overflow-hidden"
             initial={{ width: "0%" }}
             animate={{ width: "100%" }} // Reveal the white text
             transition={maskTransition}
             onAnimationComplete={() => setHeadlineFinished(true)}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-urbanist tracking-tight text-white uppercase whitespace-nowrap">
                READY TO BUILD YOUR BRAND WITH
             </h1>
          </motion.div>
        </div>

        {/* BRAND NAME: VEXIRO (VEXAMO now?) The specific code provided used VEXIRO initially but user wants VEXAMO maybe? 
            The previous code I read had V,E,X,I,R,O.
            The User's NEW code has "VEXAMO".
            I should probably update this Intro to say "VEXAMO" to match the new branding.
        */}
        <div className="relative h-[clamp(40px,10vw,140px)] flex items-center justify-center mt-4">
          <AnimatePresence>
            {headlineFinished && (
              <div className="flex items-center gap-2 lg:gap-4 overflow-hidden">
                  {['V', 'E', 'X', 'A', 'M', 'O'].map((letter, i) => (
                    <motion.div 
                      key={i} 
                      className="relative overflow-hidden"
                    >
                       <span className="block text-6xl md:text-8xl lg:text-9xl font-black font-urbanist tracking-tighter text-white">
                         {letter}
                       </span>
                       
                       <motion.div 
                          className="absolute inset-0 bg-[#050507] z-20"
                          initial={{ x: "0%" }}
                          animate={{ x: "100%" }}
                          transition={{ 
                            duration: 0.8, 
                            ease: TRANSITION_EASE,
                            delay: i * 0.1
                          }}
                          onAnimationComplete={i === 5 ? () => {
                             setTimeout(() => onComplete(), 500); // Wait 0.5s then trigger exit
                          } : undefined}
                       />
                    </motion.div>
                  ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
