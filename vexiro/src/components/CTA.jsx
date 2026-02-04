import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, PerspectiveCamera } from "@react-three/drei";

/* -------------------- Stars -------------------- */

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame((state) => {
    if (!starsRef.current) return;
    starsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    starsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={1.5}
    />
  );
};

/* -------------------- CTA -------------------- */

export default function CTA() {
  const sectionRef = useRef(null);

  /* Scroll inside section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 25
  });

  /* Sentence fills first */
  const sentenceFill = useTransform(smooth, [0.1, 0.5], [100, 0]);
const sentenceClip = useTransform(
  sentenceFill,
  v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`
);

  /* VEXIRO phase after sentence */
  const vexiroPhase = useTransform(smooth, [0.5, 0.95], [0, 1]);
const showVexiro = useTransform(smooth, [0.45, 0.55], [0, 1]);

  /* Individual letter fills */
  const l0 = useTransform(vexiroPhase, [0.0, 0.25], [100, 0]);
  const l1 = useTransform(vexiroPhase, [0.15, 0.40], [100, 0]);
  const l2 = useTransform(vexiroPhase, [0.30, 0.55], [100, 0]);
  const l3 = useTransform(vexiroPhase, [0.45, 0.70], [100, 0]);
  const l4 = useTransform(vexiroPhase, [0.60, 0.85], [100, 0]);
  const l5 = useTransform(vexiroPhase, [0.75, 1.00], [100, 0]);
const letters = ["V", "E", "X", "I", "R", "O"];

const letterClips = [
  useTransform(l0, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
  useTransform(l1, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
  useTransform(l2, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
  useTransform(l3, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
  useTransform(l4, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
  useTransform(l5, v => `inset(0 ${Math.max(v - 0.1, 0)}% 0 0)`),
];



  /* Button after everything */
  const buttonOpacity = useTransform(smooth, [0.75, 0.9], [0, 1]);
  const buttonY = useTransform(smooth, [0.75, 0.9], [40, 0]);

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-[#050507]">

      {/* Sticky Stage */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <AnimatedStars />
            <Sparkles count={60} scale={20} size={2} color="#ffffff" />
          </Canvas>
        </div>

        {/* Glow */}
      

        {/* CONTENT */}
     <div className="relative z-10 text-center px-6 w-full
  flex flex-col items-center justify-center
  pt-[15vh]">

          {/* HEADLINE STACK */}
          {/* HEADLINE STACK */}
{/* ================= HEADLINE STACK ================= */}

<div className="relative flex flex-col items-center justify-center text-center mb-13">

  {/* SENTENCE */}
  <div className="relative mb-6">

    {/* Base */}
    <h3
      className="
        font-syne
        text-white
        text-3xl md:text-5xl lg:text-6xl
        font-extrabold
        tracking-[-0.02em]
        uppercase
        leading-[1]
        select-none
      "
    >
      READY TO BUILD YOUR BRAND WITH
    </h3>

    {/* Fill Layer */}
    <motion.h3
      style={{
        clipPath: sentenceClip,
        textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, -2px 0 0 white, 2px 0 0 white, 0 -2px 0 white, 0 2px 0 white",
      }}
      className="
        absolute inset-0
        font-syne
        text-black
        text-3xl md:text-5xl lg:text-6xl
        font-extrabold
        tracking-[-0.02em]
        uppercase
        leading-[1]
        pointer-events-none
      "
    >
      READY TO BUILD YOUR BRAND WITH
    </motion.h3>

  </div>

  {/* VEXIRO */}
  <motion.div
    className="flex justify-center items-center"
    style={{ opacity: showVexiro }}
  >
    {letters.map((letter, i) => (
      <div
        key={i}
        className="
          relative
          font-urbanist
          text-[22vw] md:text-[18vw] lg:text-[14vw]
          font-black
          tracking-[-0.04em]
          uppercase
          leading-[0.85]
        "
      >

        {/* Base Letter */}
        <span className="text-white">{letter}</span>

        {/* Fill Letter - Expanded to prevent clip */}
        <motion.span
          style={{
            clipPath: letterClips[i],
            textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, -2px 0 0 white, 2px 0 0 white, 0 -2px 0 white, 0 2px 0 white",
          }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[120%] h-[120%]
            flex items-center justify-center
            text-black
            pointer-events-none
          "
        >
          {letter}
        </motion.span>

      </div>
    ))}
  </motion.div>

</div>


          {/* BOTTOM AREA */}
          <motion.div
            style={{ opacity: buttonOpacity, y: buttonY }}
            className="flex flex-col items-center gap-8"
          >

            <p className="text-white/60 text-sm md:text-xl tracking-[0.27em] uppercase">
              The journey starts with a single click
            </p>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(120,170,255,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-16 py-5 rounded-full
                font-black tracking-widest uppercase transition-all"
            >
              CONTACT NOW
            </motion.button>

            <div className="flex gap-8">
              <SocialBox icon={<GithubIcon />} />
              <SocialBox icon={<LinkedinIcon />} />
              <SocialBox icon={<MailIcon />} />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
/* ---------------- Social Box ---------------- */
const SocialBox = ({ icon }) => (
  <motion.a
    href="#"
    whileHover={{ y: -6, boxShadow: "0 0 25px rgba(255,255,255,0.25)" }}
    className="w-16 h-16 rounded-2xl border border-white/10
      flex items-center justify-center
      text-white/70 hover:text-white
      backdrop-blur-md bg-white/[0.03]"
  >
    {icon}
  </motion.a>
);

/* ---------------- Icons ---------------- */
const GithubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.4 5.4 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
    <path d="M22 6L12 13L2 6"/>
  </svg>
);
