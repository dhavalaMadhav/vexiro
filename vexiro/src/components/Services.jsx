import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate,useSpring } from 'framer-motion';
import { unifiedVariants, staggerContainer } from '../utils/animations';
import TextReveal from './TextReveal';

// --- Sub-Components for Services Visuals ---

const WebDevVisual = () => (
  <div className="visual-container-services">
    <div className="code-window-header-services">
      <div className="window-dots-services">
        <div className="dot-services red-services" />
        <div className="dot-services yellow-services" />
        <div className="dot-services green-services" />
      </div>
      <div className="window-title-services">website.jsx</div>
    </div>
    <div className="code-content-services">
      <div className="code-line-services"><span className="code-tag-services">&lt;Website</span> <span className="code-attr-services">performance</span>=<span className="code-value-services">"optimal"</span></div>
      <div className="code-line-services">  <span className="code-attr-services">scalability</span>=<span className="code-value-services">"unlimited"</span></div>
      <div className="code-line-services">  <span className="code-attr-services">technology</span>=<span className="code-value-services">"next-gen"</span><span className="code-tag-services">&gt;</span></div>
      <div className="code-line-services">  <span className="code-tag-services">&lt;UserExperience</span> <span className="code-attr-services">quality</span>=<span className="code-value-services">"exceptional"</span><span className="code-tag-services">/&gt;</span></div>
      <div className="code-line-services">  <span className="code-tag-services">&lt;BusinessResults</span> <span className="code-attr-services">growth</span>=<span className="code-value-services">"accelerated"</span><span className="code-tag-services">/&gt;</span></div>
      <div className="code-line-services"><span className="code-tag-services">&lt;/Website&gt;</span></div>
      <div className="code-line-services code-comment-services">{'// Crafted by VEXAMO'}</div>
    </div>
  </div>
);

const LogoDesignVisual = () => (
  <div className="visual-container-services">
    <div className="logo-design-visual-services">
      <img
        src="/vexamo.svg"
        alt="Vexamo Logo"
        className="w-[180px] h-[180px] object-contain flex-shrink-0 invert brightness-0"
      />
      <div className="logo-info-services">
        <h4>Brand Identity System</h4>
        <p>Scalable vector logo with full visual identity guidelines. Perfect for all applications and screen sizes.</p>
      </div>
    </div>
  </div>
);

const VideoEditVisual = () => {
  const waveformBars = useMemo(() => [...Array(50)].map((_, i) => (
    <div key={i} className="waveform-bar-services" style={{ '--i': i }} />
  )), []);

  return (
    <div className="visual-container-services">
      <div className="video-editor-container-services">
        <div className="video-preview-services" style={{ boxShadow: '0 4px 20px rgba(64, 158, 255, 0.15)' }}>
          <div className="video-preview-screen-services">
            <div className="video-waveform-services">
              {waveformBars}
            </div>
          </div>
          <div className="video-controls-services">
            <div className="control-btn-services skip-back-services" />
            <div className="control-btn-services rewind-services" />
            <div className="control-btn-services play-services" />
            <div className="control-btn-services forward-services" />
            <div className="control-btn-services skip-forward-services" />
          </div>
        </div>
        <div className="video-timeline-services">
          <div className="timeline-track-services">
            <div className="timeline-progress-services" />
            <div className="timeline-clips-services">
              <div className="timeline-clip-services" style={{ background: 'linear-gradient(45deg, rgba(64,158,255,0.4), rgba(64,158,255,0.1))' }} />
              <div className="timeline-clip-services" style={{ background: 'linear-gradient(45deg, rgba(138,61,255,0.4), rgba(138,61,255,0.1))' }} />
              <div className="timeline-clip-services" style={{ background: 'linear-gradient(45deg, rgba(61,122,255,0.4), rgba(61,122,255,0.1))' }} />
              <div className="timeline-clip-services" style={{ background: 'linear-gradient(45deg, rgba(61,255,214,0.4), rgba(61,255,214,0.1))' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Circle3DBackground = ({ type }) => (
  <div className={`circles-container-services ${type}`}>
    <div className="circle-3d-services circle-1-services" />
    <div className="circle-3d-services circle-2-services" />
    <div className="circle-3d-services circle-3-services" />
    <div className="circle-3d-services circle-4-services" />
  </div>
);

// --- Connector & Service Item Components ---

const ServiceItem = ({ service, index, total, scrollYProgress }) => {
  const Visual = service.type === 'web-dev' ? WebDevVisual :
    service.type === 'logo-design' ? LogoDesignVisual :
      VideoEditVisual;

  const layoutClass = index % 2 === 0 ? 'layout-normal' : 'layout-reverse';

  // Calculate generic active range based on index
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;

  const isActive = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [0, 1] 
  );

  // Refined Transform for isolated activation
  const activeState = useTransform(
    scrollYProgress,
    [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
    [0, 1, 1, 0]
  );
  
  // Mapping properties to this isolated activeState
 const scale = useTransform(activeState, [0,1], [1,1.02]);
const glowOpacity = useTransform(activeState, [0,1], [0,1]);

  const buttonOpacity = useTransform(activeState, [0.2, 0.8], [0, 1]);
  const buttonY = useTransform(activeState, [0.2, 0.8], [20, 0]);
  const pointerEvents = useTransform(activeState, (v) => v > 0.5 ? "auto" : "none");
 
  const opacity = useTransform(activeState, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={`service-block ${layoutClass}`}
      style={{
        scale,
        opacity,
      }}
    >
      {/* Visual Side */}
      <div className="service-visual-wrapper">
        <motion.div 
            className="service-visual-container"
            style={{ scale }}
        >
          <div className={`center-glow-services ${service.glowClass}`} />
          <Circle3DBackground type={service.type} />
          <Visual />
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="service-details-wrapper">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{service.title}</h3>
        <p>{service.desc}</p>
        <ul className="service-features-services">
          {service.features.map((feature, fIdx) => (
            <li key={fIdx} className="service-feature-li-services">
              {feature}
            </li>
          ))}
        </ul>
        <motion.button
          className="service-link-services"
          style={{
             opacity: buttonOpacity,
             y: buttonY,
             pointerEvents
          }}
          onClick={() => window.location.href = `mailto:hello@vexamo.com?subject=Inquiry: ${service.title}`}
        >
          Explore {service.title.split(' ')[0]} Services
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesConnector = ({ scrollYProgress }) => {
  // Fix 1: Connector path must start with pathLength = 0 until > 0.05
  // Fix 2: Origin from center of first visual
  // Using user supplied coordinates: 
  // M 25,15 (Visual 1 center roughly)
  // C 25,30 75,40 75,50 (Curve to Visual 2 center)
  // C 75,60 25,70 25,85 (Curve to Visual 3 center)

const lineProgress = useTransform(scrollYProgress,[0.05,0.95],[0,1]);
  const opacity = useTransform(lineProgress, [0, 0.1], [0, 1]);

  return (
<div className="absolute inset-0 z-[1] pointer-events-none w-full h-full hidden md:block">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >

        <motion.path
          d="M 25,15 C 25,30 75,40 75,50 C 75,60 25,70 25,85"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          filter="drop-shadow(0 0 6px rgba(255,255,255,0.25))" // Subtle glow trail
          style={{
            pathLength: lineProgress,
            opacity
          }}
        />
      </svg>
    </div>
  );
};

// --- Main Component ---

const Services = () => {
  const containerRef = useRef(null);
  
  // Scroll progress for the entire stack
  const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start center", "end center"]
});

const smoothScroll = useSpring(scrollYProgress, {
  stiffness: 200,
  damping: 25,
  mass: 0.1
});

  const services = useMemo(() => [
    {
      title: 'Website Development',
      desc: 'High-performance, scalable, modern websites engineered for real-world businesses.',
      type: 'web-dev',
      glowClass: 'glow-web-dev',
      features: [
        'Custom responsive web applications',
        'E-commerce solutions with seamless checkout',
        'CMS integration and content strategy',
        'Performance optimization and SEO',
        'Website maintenance and analytics'
      ]
    },
    {
      title: 'Logo & Brand Identity',
      desc: 'Minimal, memorable brand identities crafted with precision and strategy.',
      type: 'logo-design',
      glowClass: 'glow-logo-design',
      features: [
        'Strategic brand discovery',
        'Logo design with conceptual depth',
        'Complete visual identity systems',
        'Brand guidelines and typography',
        'Social media asset kits'
      ]
    },
    {
      title: 'Video Editing & Motion',
      desc: 'Cinematic edits and motion visuals designed to capture attention instantly.',
      type: 'video-edit',
      glowClass: 'glow-video-edit',
      features: [
        'Commercial video editing',
        '2D/3D motion graphics',
        'Social media reels & short form',
        'Color grading and VFX',
        'Sound design and mastering'
      ]
    }
  ], []);

  return (
    <>
      <style>{`
/* Premium mask for connector passing under cards */
.service-visual-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at center,
      rgba(0,0,0,0.92) 0%,
      rgba(0,0,0,0.85) 35%,
      rgba(0,0,0,0.65) 55%,
      rgba(0,0,0,0.45) 70%,
      rgba(0,0,0,0.25) 85%,
      rgba(0,0,0,0) 100%
    );
  pointer-events: none;
  z-index: 6;
}
.service-block,
.service-visual-container,
.visual-container-services,
motion-path {
  will-change: transform, opacity;
  transform: translateZ(0);
}

        .vixora-services-wrapper {
          position: relative;
          background: transparent;
        }

        .vixora-services-section {
          background: transparent;
          padding: 64px 0;
          position: relative;
          overflow: hidden;
        }

        .section-header-container {
          text-align: center;
          margin-bottom: 100px;
          padding: 0 16px;
          position: relative;
          z-index: 20;
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 120px; /* Consistent gap for timing */
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative; 
        }

        .service-block {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
          z-index: 20;
          transition: transform 0.1s linear; /* minimal transition for non-motion props */
        }
        
        .service-block.layout-normal { flex-direction: row; }
        .service-block.layout-reverse { flex-direction: row-reverse; }

        .service-visual-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }
        
        .service-visual-container {
           width: 100%;
           max-width: 550px;
           position: relative;
           border-radius: 24px; /* Ensure radius matches visual for shadow */
        }

        .service-details-wrapper {
          flex: 1;
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start; 
        }

        .service-details-wrapper h3 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ffffff;
          letter-spacing: -0.025em;
        }

        .service-details-wrapper p {
          color: rgba(255, 255, 255, 0.3);
          line-height: 1.625;
          margin-bottom: 2rem;
          font-size: 10px;
          font-weight: 300;
          max-width: 480px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .service-features-services {
          list-style: none;
          margin-bottom: 40px;
          padding: 0;
        }

        .service-feature-li-services {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 16px;
          font-weight: 300;
          position: relative;
          padding-left: 28px;
        }

        .service-feature-li-services::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 10px;
          height: 16px;
          border-right: 2.5px solid #ffffff;
          border-bottom: 2.5px solid #ffffff;
          border-radius: 1px;
        }

        .layout-reverse .service-details-wrapper { padding-left: 10%; }
        
        .service-link-services {
          display: inline-flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          letter-spacing: 0.1em;
          font-size: 12px;
          text-transform: uppercase;
          padding: 12px 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .service-link-services:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        /* Visuals & Glows from Snippet */
        .visual-container-services {
          width: 100%;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.15), transparent 40%), rgba(255, 255, 255, 0.03); 
          backdrop-filter: blur(25px); 
          -webkit-backdrop-filter: blur(25px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1); 
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
          padding: 32px;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        
        .center-glow-services { position: absolute; top: 50%; left: 50%; width: 800px; height: 600px; transform: translate(-50%, -50%); border-radius: 50%; filter: blur(140px); opacity: 0.5; pointer-events: none; z-index: 0; }
        .glow-web-dev { background: radial-gradient(circle, rgba(255, 122, 61, 0.7) 0%, rgba(255, 122, 61, 0) 65%); }
        .glow-logo-design { background: radial-gradient(circle, rgba(138, 61, 255, 0.7) 0%, rgba(138, 61, 255, 0) 65%); }
        .glow-video-edit { background: radial-gradient(circle, rgba(64, 158, 255, 0.7) 0%, rgba(64, 158, 255, 0) 65%); }
        .circles-container-services { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; }
        .circle-3d-services { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.6; animation: float-services 15s infinite ease-in-out; }
        .circle-1-services { width: 300px; height: 300px; top: 10%; left: 10%; animation-delay: 0s; }
        .circle-2-services { width: 400px; height: 400px; bottom: 10%; right: 10%; animation-delay: 2s; }
        .circle-3-services { width: 250px; height: 250px; top: 40%; right: 20%; animation-delay: 4s; }
        .circle-4-services { width: 200px; height: 200px; bottom: 30%; left: 20%; animation-delay: 6s; }
        .web-dev .circle-1-services { background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%); }
        .web-dev .circle-2-services { background: radial-gradient(circle, #3d7aff 0%, rgba(61, 122, 255, 0) 70%); }
        .web-dev .circle-3-services { background: radial-gradient(circle, #3dffd6 0%, rgba(61, 255, 214, 0) 70%); }
        .web-dev .circle-4-services { background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%); }
        @keyframes float-services { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(1.05); } }
        /* SVG Components Styles (kept compact) */
        .code-window-header-services { display: flex; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
        .window-dots-services { display: flex; gap: 8px; margin-right: 20px; }
        .dot-services { width: 12px; height: 12px; border-radius: 50%; }
        .dot-services.red-services { background: #ff5f56; }
        .dot-services.yellow-services { background: #ffbd2e; }
        .dot-services.green-services { background: #27ca3f; }
        .window-title-services { color: #7a7f89; font-size: 14px; font-weight: 500; }
        .code-content-services { font-family: 'Monaco', 'Menlo', monospace; font-size: 16px; color: #a1a1b3; line-height: 1.6; }
        .code-line-services { margin-bottom: 8px; }
        .code-comment-services { color: #5a5a7a; }
        .code-tag-services { color: #ff7a3d; }
        .code-attr-services { color: #8a3dff; }
        .code-value-services { color: #ffffff; }
        .logo-design-visual-services { display: flex; align-items: center; justify-content: flex-start; width: 100%; height: 100%; gap: 20px; }
        .logo-info-services { color: #a1a1b3; font-size: 14px; line-height: 1.6; }
        .logo-info-services h4 { color: #ffffff; font-size: 18px; margin-bottom: 12px; font-weight: 600; }
        .video-editor-container-services { width: 100%; height: 450px; display: flex; flex-direction: column; position: relative; z-index: 1; }
        .video-preview-services { flex: 1; background: rgba(10, 10, 20, 0.9); border-radius: 12px 12px 0 0; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .video-preview-screen-services { width: 90%; height: 80%; background: rgba(0, 0, 0, 0.8); border-radius: 8px; position: relative; overflow: hidden; }
        .video-waveform-services { position: absolute; bottom: 0; left: 0; right: 0; height: 40px; background: rgba(255, 255, 255, 0.05); display: flex; align-items: flex-end; padding: 0 10px; }
        .waveform-bar-services { flex: 1; margin: 0 1px; background: linear-gradient(to top, #409eff, #8a3dff); height: 20px; animation: waveform-services 1.5s infinite ease-in-out; animation-delay: calc(var(--i) * 0.1s); }
        @keyframes waveform-services { 0%, 100% { height: 20px; } 50% { height: 40px; } }
        .video-timeline-services { height: 80px; background: rgba(30, 30, 40, 0.8); border-radius: 0 0 12px 12px; padding: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .timeline-track-services { height: 100%; position: relative; background: rgba(0, 0, 0, 0.3); border-radius: 8px; overflow: hidden; }
        .timeline-progress-services { position: absolute; left: 0; top: 0; height: 100%; width: 45%; background: linear-gradient(90deg, rgba(64, 158, 255, 0.4), rgba(138, 61, 255, 0.2)); border-right: 2px solid #409eff; }
        .timeline-clips-services { position: absolute; inset: 0; display: flex; padding: 10px; gap: 10px; }
        .timeline-clip-services { height: 100%; border-radius: 4px; flex: 1; background: rgba(255, 255, 255, 0.1); position: relative; overflow: hidden; }
        .video-controls-services { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 16px; align-items: center; background: rgba(0, 0, 0, 0.7); padding: 10px 20px; border-radius: 999px; backdrop-filter: blur(10px); }
        .control-btn-services { width: 40px; height: 40px; border-radius: 50%; background: rgba(15, 15, 25, 0.9); border: 1px solid rgba(255, 255, 255, 0.18); display: flex; align-items: center; justify-content: center; position: relative; color: #ffffff; }
        .control-btn-services::before, .control-btn-services::after { content: ""; position: absolute; }
        .control-btn-services.skip-back-services::before { width: 3px; height: 14px; background: #ffffff; left: 12px; top: 50%; transform: translateY(-50%); border-radius: 2px; }
        .control-btn-services.skip-back-services::after { border-style: solid; border-width: 7px 8px 7px 0; border-color: transparent #ffffff transparent transparent; right: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.rewind-services::before { border-style: solid; border-width: 7px 8px 7px 0; border-color: transparent #ffffff transparent transparent; left: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.rewind-services::after { border-style: solid; border-width: 7px 8px 7px 0; border-color: transparent #ffffff transparent transparent; right: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.play-services::before { border-style: solid; border-width: 8px 0 8px 14px; border-color: transparent transparent transparent #ffffff; left: 50%; top: 50%; transform: translate(-40%, -50%); }
        .control-btn-services.forward-services::before { border-style: solid; border-width: 7px 0 7px 8px; border-color: transparent transparent transparent #ffffff; left: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.forward-services::after { border-style: solid; border-width: 7px 0 7px 8px; border-color: transparent transparent transparent #ffffff; right: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.skip-forward-services::before { border-style: solid; border-width: 7px 0 7px 8px; border-color: transparent transparent transparent #ffffff; left: 10px; top: 50%; transform: translateY(-50%); }
        .control-btn-services.skip-forward-services::after { width: 3px; height: 14px; background: #ffffff; right: 12px; top: 50%; transform: translateY(-50%); border-radius: 2px; }

        @media (max-width: 1024px) {
           .service-block.layout-normal, .service-block.layout-reverse { flex-direction: column; gap: 24px; text-align: center; padding: 20px 0; min-height: auto; }
           .service-details-wrapper h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
           .service-details-wrapper p { margin: 0 auto 1rem; font-size: 0.8rem; line-height: 1.4; }
           .service-features-services { text-align: left; display: inline-block; font-size: 0.8rem; margin-bottom: 1rem; }
           .service-feature-item-services { margin-bottom: 4px; padding-left: 16px; }
           .service-link-services { margin: 0 auto; }
           .layout-reverse .service-details-wrapper { align-items: center; padding-left: 0; }
           .layout-reverse .service-features-services { align-items: flex-start; }
           .layout-reverse .service-feature-li-services { padding-left: 28px; padding-right: 0; flex-direction: row; text-align: left; }
           .layout-reverse .service-feature-li-services::before { left: 0; right: auto; transform: translateY(-50%) rotate(45deg); }
           .editor-container-services, .logo-design-visual-services, .video-editor-container-services { height: 250px; transform: scale(0.9); }
        }
      `}</style>
      
      <div id="our-services" className="vixora-services-wrapper bg-transparent">
        <motion.section 
          className="vixora-services-section bg-transparent"
        >
          <div className="section-header-container">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 relative inline-block">
               <TextReveal>OUR SERVICES</TextReveal>
              <div className="absolute -bottom-2 left-0 w-full h-4 -z-10">
                <svg viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M2.00025 7.00001C35.9529 3.01602 125.792 -2.12693 197.994 3.00631" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </h2>
            <p className="section-subtitle-services mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/50">
              Bespoke digital excellence for forward-thinking brands
            </p>
          </div>

          <motion.div 
             className="services-stack"
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             ref={containerRef}
          >
            {/* Connector Line passing shared scroll progress */}
           <ServicesConnector scrollYProgress={smoothScroll} />

            {services.map((service, idx) => (
              <ServiceItem
                key={idx}
                index={idx}
                total={services.length}
                service={service}
               scrollYProgress={smoothScroll}
              />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default Services;