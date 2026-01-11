import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const wrapperRef = useRef(null);
  const baseRef = useRef(null);
  const revealRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const services = [
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
        'Ongoing maintenance and support'
      ]
    },
    {
      title: 'Logo & Brand Identity',
      desc: 'Minimal, memorable brand identities crafted with precision and strategy.',
      type: 'logo-design',
      glowClass: 'glow-logo-design',
      features: [
        'Strategic brand discovery and positioning',
        'Logo design with conceptual depth',
        'Complete visual identity systems',
        'Brand guidelines and implementation',
        'Adaptive logos for various applications'
      ]
    },
    {
      title: 'Video Editing & Motion',
      desc: 'Cinematic edits and motion visuals designed to capture attention instantly.',
      type: 'video-edit',
      glowClass: 'glow-video-edit',
      features: [
        'Commercial and promotional video editing',
        '2D/3D motion graphics and animation',
        'Social media video content creation',
        'Color grading and visual effects',
        'Sound design and audio enhancement'
      ]
    }
  ];

  const getServiceHTML = (service) => {
    let visualContent = '';
    
    if (service.type === 'web-dev') {
      visualContent = `
        <div class="circles-container-services ${service.type}">
          <div class="circle-3d-services circle-1-services"></div>
          <div class="circle-3d-services circle-2-services"></div>
          <div class="circle-3d-services circle-3-services"></div>
          <div class="circle-3d-services circle-4-services"></div>
        </div>
        <div class="visual-container-services">
          <div class="code-window-header-services">
            <div class="window-dots-services">
              <div class="dot-services red-services"></div>
              <div class="dot-services yellow-services"></div>
              <div class="dot-services green-services"></div>
            </div>
            <div class="window-title-services">website.jsx</div>
          </div>
          <div class="code-content-services">
            <div class="code-line-services"><span class="code-tag-services">&lt;Website</span> <span class="code-attr-services">performance</span>=<span class="code-value-services">"optimal"</span></div>
            <div class="code-line-services">  <span class="code-attr-services">scalability</span>=<span class="code-value-services">"unlimited"</span></div>
            <div class="code-line-services">  <span class="code-attr-services">technology</span>=<span class="code-value-services">"next-gen"</span><span class="code-tag-services">&gt;</span></div>
            <div class="code-line-services">  <span class="code-tag-services">&lt;UserExperience</span> <span class="code-attr-services">quality</span>=<span class="code-value-services">"exceptional"</span><span class="code-tag-services">/&gt;</span></div>
            <div class="code-line-services">  <span class="code-tag-services">&lt;BusinessResults</span> <span class="code-attr-services">growth</span>=<span class="code-value-services">"accelerated"</span><span class="code-tag-services">/&gt;</span></div>
            <div class="code-line-services"><span class="code-tag-services">&lt;/Website&gt;</span></div>
            <div class="code-line-services code-comment-services">// Crafted by VIXORA</div>
          </div>
        </div>
      `;
    } else if (service.type === 'logo-design') {
      visualContent = `
        <div class="circles-container-services ${service.type}">
          <div class="circle-3d-services circle-1-services"></div>
          <div class="circle-3d-services circle-2-services"></div>
          <div class="circle-3d-services circle-3-services"></div>
          <div class="circle-3d-services circle-4-services"></div>
        </div>
        <div class="visual-container-services">
          <div class="logo-design-visual-services">
            <div class="vixora-logo-services"></div>
            <div class="logo-info-services">
              <h4>Brand Identity System</h4>
              <p>Scalable vector logo with full visual identity guidelines. Perfect for all applications and screen sizes.</p>
            </div>
          </div>
        </div>
      `;
    } else if (service.type === 'video-edit') {
      let waveformBars = '';
      for (let i = 0; i < 50; i++) {
        waveformBars += `<div class="waveform-bar-services" style="--i: ${i};"></div>`;
      }
      
      visualContent = `
        <div class="circles-container-services ${service.type}">
          <div class="circle-3d-services circle-1-services"></div>
          <div class="circle-3d-services circle-2-services"></div>
          <div class="circle-3d-services circle-3-services"></div>
          <div class="circle-3d-services circle-4-services"></div>
        </div>
        <div class="visual-container-services">
          <div class="video-editor-container-services">
            <div class="video-preview-services">
              <div class="video-preview-screen-services">
                <div class="video-waveform-services">
                  ${waveformBars}
                </div>
              </div>
              <div class="video-controls-services">
                <div class="control-btn-services skip-back-services" title="Skip Back"></div>
                <div class="control-btn-services rewind-services" title="Rewind"></div>
                <div class="control-btn-services play-services" title="Play"></div>
                <div class="control-btn-services forward-services" title="Forward"></div>
                <div class="control-btn-services skip-forward-services" title="Skip Forward"></div>
              </div>
            </div>
            <div class="video-timeline-services">
              <div class="timeline-track-services">
                <div class="timeline-progress-services"></div>
                <div class="timeline-clips-services">
                  <div class="timeline-clip-services" style="background: linear-gradient(45deg, rgba(64,158,255,0.4), rgba(64,158,255,0.1));"></div>
                  <div class="timeline-clip-services" style="background: linear-gradient(45deg, rgba(138,61,255,0.4), rgba(138,61,255,0.1));"></div>
                  <div class="timeline-clip-services" style="background: linear-gradient(45deg, rgba(61,122,255,0.4), rgba(61,122,255,0.1));"></div>
                  <div class="timeline-clip-services" style="background: linear-gradient(45deg, rgba(61,255,214,0.4), rgba(61,255,214,0.1));"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    
    const featuresList = service.features.map((feature, index) => {
      const hideClass = index >= 2 ? ' hide-mobile-services' : '';
      return `<li class="service-feature-li-services${hideClass}">${feature}</li>`;
    }).join('');
    
    return `
      <div class="center-glow-services ${service.glowClass}"></div>
      <div class="service-container-services">
        <div class="service-content-services">
          <div class="service-visual-services ${service.type}">
            ${visualContent}
          </div>
          <div class="service-details-services">
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <ul class="service-features-services">
              ${featuresList}
            </ul>
            <a href="#" class="service-link-services">Explore ${service.title.split(' ')[0]} Services</a>
          </div>
        </div>
      </div>
    `;
  };

  const setLayer = (el, service) => {
    if (el) {
      el.innerHTML = getServiceHTML(service);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !services.length) return;

    setLayer(baseRef.current, services[0]);

    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const base = baseRef.current;
      const reveal = revealRef.current;

      if (!wrapper || !base || !reveal) return;

      const start = wrapper.offsetTop;
      const end = start + wrapper.offsetHeight - window.innerHeight;
      const y = window.scrollY;

      if (y < start || y > end) return;

      const progress = (y - start) / (end - start);
      const total = services.length;
      
      const phaseFloat = progress * total;
      const phase = Math.min(Math.floor(phaseFloat), total - 1);
      const local = phaseFloat - phase;

      const current = services[phase];
      const next = services[phase + 1];

      setLayer(base, current);

      if (next) {
        setLayer(reveal, next);
        const maxRadius = Math.hypot(window.innerWidth, window.innerHeight) * 1.2;
        const radius = Math.min(local, 0.999) * maxRadius;
        reveal.style.clipPath = `circle(${radius}px at center)`;
      } else {
        reveal.style.clipPath = `circle(0px at center)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient, services]);

  return (
    <>
      <style>{`
        .vixora-services-wrapper {
          height: 300vh;
        }

        .vixora-services-section {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: #000000;
        }

        .vixora-services-section h2 {
          position: absolute;
          top: 32px;
          width: 100%;
          text-align: center;
          font-size: clamp(48px, 8vw, 110px);
          font-weight: 900;
          letter-spacing: 0.02em;
          line-height: 1;
          z-index: 50;
          pointer-events: none;
        }

        .section-title-services {
          display: inline-flex;
          align-items: baseline;
          gap: 0.2em;
        }

        .section-title-services .primary-services {
          color: #ffffff;
        }

        .section-title-services .secondary-services {
          color: #ffffff;
          font-weight: 900;
        }

        .stage-services {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .base-layer-services,
        .reveal-layer-services {
          position: absolute;
          inset: 0;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .base-layer-services {
          z-index: 1;
        }

        .reveal-layer-services {
          z-index: 2;
          clip-path: circle(0px at center);
          will-change: clip-path;
        }

        .center-glow-services {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1200px;
          height: 1200px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.6;
          pointer-events: none;
          z-index: 0;
        }

        .glow-web-dev {
          background: radial-gradient(circle, rgba(255, 122, 61, 0.8) 0%, rgba(255, 122, 61, 0) 70%);
        }

        .glow-logo-design {
          background: radial-gradient(circle, rgba(138, 61, 255, 0.8) 0%, rgba(138, 61, 255, 0) 70%);
        }

        .glow-video-edit {
          background: radial-gradient(circle, rgba(64, 158, 255, 0.8) 0%, rgba(64, 158, 255, 0) 70%);
        }

        .service-container-services {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          margin-top: 120px;
          position: relative;
          z-index: 1;
        }

        .service-content-services {
          width: 90%;
          max-width: 1400px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
        }

        .service-visual-services {
          flex: 1;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }

        .service-details-services {
          flex: 1;
          padding: 40px 0;
        }

        .service-details-services h3 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
          color: #ffffff;
        }

        .service-details-services p {
          color: #7a7f89;
          line-height: 1.7;
          margin-bottom: 32px;
          font-size: 18px;
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
          color: #7a7f89;
          font-size: 16px;
          position: relative;
          padding-left: 30px;
        }

        .service-feature-li-services.hide-mobile-services {
          display: flex;
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

        .service-link-services {
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.05em;
          font-size: 16px;
        }

        .service-link-services::after {
          content: "→";
          margin-left: 8px;
          font-size: 20px;
        }

        .circles-container-services {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .circle-3d-services {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
          animation: float-services 15s infinite ease-in-out;
        }

        .circle-1-services {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .circle-2-services {
          width: 400px;
          height: 400px;
          bottom: 10%;
          right: 10%;
          animation-delay: 2s;
        }

        .circle-3-services {
          width: 250px;
          height: 250px;
          top: 40%;
          right: 20%;
          animation-delay: 4s;
        }

        .circle-4-services {
          width: 200px;
          height: 200px;
          bottom: 30%;
          left: 20%;
          animation-delay: 6s;
        }

        .web-dev .circle-1-services {
          background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%);
        }

        .web-dev .circle-2-services {
          background: radial-gradient(circle, #3d7aff 0%, rgba(61, 122, 255, 0) 70%);
        }

        .web-dev .circle-3-services {
          background: radial-gradient(circle, #3dffd6 0%, rgba(61, 255, 214, 0) 70%);
        }

        .web-dev .circle-4-services {
          background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%);
        }

        .logo-design .circle-1-services {
          background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%);
        }

        .logo-design .circle-2-services {
          background: radial-gradient(circle, #8a3dff 0%, rgba(138, 61, 255, 0) 70%);
        }

        .logo-design .circle-3-services {
          background: radial-gradient(circle, #3d7aff 0%, rgba(61, 122, 255, 0) 70%);
        }

        .logo-design .circle-4-services {
          background: radial-gradient(circle, #3dffd6 0%, rgba(61, 255, 214, 0) 70%);
        }

        .video-edit .circle-1-services {
          background: radial-gradient(circle, #8a3dff 0%, rgba(138, 61, 255, 0) 70%);
        }

        .video-edit .circle-2-services {
          background: radial-gradient(circle, #3d7aff 0%, rgba(61, 122, 255, 0) 70%);
        }

        .video-edit .circle-3-services {
          background: radial-gradient(circle, #3dffd6 0%, rgba(61, 255, 214, 0) 70%);
        }

        .video-edit .circle-4-services {
          background: radial-gradient(circle, #ff7a3d 0%, rgba(255, 122, 61, 0) 70%);
        }

        @keyframes float-services {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        .visual-container-services {
          width: 90%;
          max-width: 550px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 32px;
          overflow: hidden;
          position: relative;
          z-index: 10;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
        }

        .visual-container-services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent);
        }

        .visual-container-services::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 40%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .visual-container-services:hover::after {
          opacity: 1;
        }

        .video-editor-container-services {
          width: 100%;
          height: 450px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .video-preview-services {
          flex: 1;
          background: rgba(10, 10, 20, 0.9);
          border-radius: 12px 12px 0 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-preview-screen-services {
          width: 90%;
          height: 80%;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .video-waveform-services {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: flex-end;
          padding: 0 10px;
        }

        .waveform-bar-services {
          flex: 1;
          margin: 0 1px;
          background: linear-gradient(to top, #409eff, #8a3dff);
          height: 20px;
          animation: waveform-services 1.5s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes waveform-services {
          0%, 100% {
            height: 20px;
          }
          50% {
            height: 40px;
          }
        }

        .video-timeline-services {
          height: 80px;
          background: rgba(30, 30, 40, 0.8);
          border-radius: 0 0 12px 12px;
          padding: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-track-services {
          height: 100%;
          position: relative;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          overflow: hidden;
        }

        .timeline-progress-services {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 45%;
          background: linear-gradient(90deg, rgba(64, 158, 255, 0.4), rgba(138, 61, 255, 0.2));
          border-right: 2px solid #409eff;
        }

        .timeline-clips-services {
          position: absolute;
          inset: 0;
          display: flex;
          padding: 10px;
          gap: 10px;
        }

        .timeline-clip-services {
          height: 100%;
          border-radius: 4px;
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .timeline-clip-services::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);
          animation: shine-services 3s infinite linear;
        }

        @keyframes shine-services {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .video-controls-services {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 16px;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          padding: 10px 20px;
          border-radius: 999px;
          backdrop-filter: blur(10px);
        }

        .control-btn-services {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(15, 15, 25, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #ffffff;
        }

        .control-btn-services::before,
        .control-btn-services::after {
          content: "";
          position: absolute;
        }

        .control-btn-services.skip-back-services::before {
          width: 3px;
          height: 14px;
          background: #ffffff;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 2px;
        }

        .control-btn-services.skip-back-services::after {
          border-style: solid;
          border-width: 7px 8px 7px 0;
          border-color: transparent #ffffff transparent transparent;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.rewind-services::before {
          border-style: solid;
          border-width: 7px 8px 7px 0;
          border-color: transparent #ffffff transparent transparent;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.rewind-services::after {
          border-style: solid;
          border-width: 7px 8px 7px 0;
          border-color: transparent #ffffff transparent transparent;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.play-services::before {
          border-style: solid;
          border-width: 8px 0 8px 14px;
          border-color: transparent transparent transparent #ffffff;
          left: 50%;
          top: 50%;
          transform: translate(-40%, -50%);
        }

        .control-btn-services.forward-services::before {
          border-style: solid;
          border-width: 7px 0 7px 8px;
          border-color: transparent transparent transparent #ffffff;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.forward-services::after {
          border-style: solid;
          border-width: 7px 0 7px 8px;
          border-color: transparent transparent transparent #ffffff;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.skip-forward-services::before {
          border-style: solid;
          border-width: 7px 0 7px 8px;
          border-color: transparent transparent transparent #ffffff;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .control-btn-services.skip-forward-services::after {
          width: 3px;
          height: 14px;
          background: #ffffff;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 2px;
        }

        .code-window-header-services {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .window-dots-services {
          display: flex;
          gap: 8px;
          margin-right: 20px;
        }

        .dot-services {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-services.red-services {
          background: #ff5f56;
        }

        .dot-services.yellow-services {
          background: #ffbd2e;
        }

        .dot-services.green-services {
          background: #27ca3f;
        }

        .window-title-services {
          color: #7a7f89;
          font-size: 14px;
          font-weight: 500;
        }

        .code-content-services {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 16px;
          color: #a1a1b3;
          line-height: 1.6;
        }

        .code-line-services {
          margin-bottom: 8px;
        }

        .code-comment-services {
          color: #5a5a7a;
        }

        .code-tag-services {
          color: #ff7a3d;
        }

        .code-attr-services {
          color: #8a3dff;
        }

        .code-value-services {
          color: #ffffff;
        }

        .logo-design-visual-services {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          gap: 20px;
        }

        .vixora-logo-services {
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, rgba(255, 122, 61, 0.1), rgba(138, 61, 255, 0.1));
          border-radius: 20px;
          padding: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vixora-logo-services::before {
          content: 'VIXORA';
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #ff7a3d 0%, #8a3dff 50%, #3d7aff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-align: center;
        }

        .logo-info-services {
          color: #a1a1b3;
          font-size: 14px;
          line-height: 1.6;
        }

        .logo-info-services h4 {
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .service-container-services {
            margin-top: 140px;
            padding: 30px 20px;
          }

          .service-content-services {
            flex-direction: column;
            gap: 40px;
          }

          .service-visual-services {
            height: 400px;
            width: 100%;
            justify-content: center;
          }

          .service-details-services h3 {
            font-size: 42px;
          }

          .service-details-services p {
            font-size: 17px;
          }

          .service-feature-li-services {
            font-size: 15px;
          }

          .visual-container-services {
            padding: 28px;
            max-width: 500px;
          }

          .video-editor-container-services {
            height: 400px;
          }

          .vixora-logo-services {
            width: 140px;
            height: 140px;
          }

          .vixora-logo-services::before {
            font-size: 28px;
          }

          .center-glow-services {
            width: 900px;
            height: 900px;
          }

          .code-content-services {
            font-size: 15px;
          }

          .control-btn-services {
            width: 36px;
            height: 36px;
          }

          .video-controls-services {
            gap: 12px;
            padding: 8px 16px;
          }
        }

        @media (max-width: 768px) {
          .vixora-services-section h2 {
            font-size: clamp(32px, 9vw, 48px);
            top: 20px;
          }

          .service-container-services {
            margin-top: 100px;
            padding: 20px 16px;
          }

          .service-content-services {
            width: 100%;
            gap: 30px;
          }

          .service-visual-services {
            height: 320px;
          }

          .service-details-services {
            padding: 20px 0;
          }

          .service-details-services h3 {
            font-size: 28px;
            margin-bottom: 16px;
          }

          .service-details-services p {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .service-features-services {
            margin-bottom: 28px;
          }

          .service-feature-li-services {
            font-size: 14px;
            margin-bottom: 12px;
            padding-left: 26px;
          }

          .service-feature-li-services.hide-mobile-services {
            display: none;
          }

          .service-feature-li-services::before {
            width: 8px;
            height: 14px;
            border-right-width: 2px;
            border-bottom-width: 2px;
          }

          .service-link-services {
            font-size: 14px;
          }

          .visual-container-services {
            padding: 20px;
            max-width: 100%;
            border-radius: 20px;
          }

          .video-editor-container-services {
            height: 320px;
          }

          .video-preview-screen-services {
            width: 95%;
            height: 75%;
          }

          .video-timeline-services {
            height: 60px;
            padding: 10px;
          }

          .video-waveform-services {
            height: 30px;
            padding: 0 6px;
          }

          .waveform-bar-services {
            margin: 0 0.5px;
          }

          .video-controls-services {
            gap: 10px;
            padding: 6px 14px;
            bottom: 15px;
          }

          .control-btn-services {
            width: 32px;
            height: 32px;
          }

          .vixora-logo-services {
            width: 100px;
            height: 100px;
            border-radius: 16px;
            padding: 16px;
          }

          .vixora-logo-services::before {
            font-size: 20px;
            letter-spacing: 0.08em;
          }

          .logo-design-visual-services {
            flex-direction: column;
            gap: 16px;
            align-items: center;
            justify-content: center;
          }

          .logo-info-services {
            font-size: 13px;
            text-align: center;
          }

          .logo-info-services h4 {
            font-size: 16px;
            margin-bottom: 8px;
          }

          .code-window-header-services {
            margin-bottom: 16px;
            padding-bottom: 12px;
          }

          .window-dots-services {
            gap: 6px;
            margin-right: 14px;
          }

          .dot-services {
            width: 10px;
            height: 10px;
          }

          .window-title-services {
            font-size: 12px;
          }

          .code-content-services {
            font-size: 13px;
            line-height: 1.5;
          }

          .code-line-services {
            margin-bottom: 6px;
          }

          .center-glow-services {
            width: 600px;
            height: 600px;
            filter: blur(100px);
          }

          .circle-3d-services {
            filter: blur(40px);
          }

          .circle-1-services {
            width: 200px;
            height: 200px;
          }

          .circle-2-services {
            width: 280px;
            height: 280px;
          }

          .circle-3-services {
            width: 180px;
            height: 180px;
          }

          .circle-4-services {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .vixora-services-section h2 {
            font-size: clamp(28px, 10vw, 36px);
            top: 16px;
          }

          .service-container-services {
            margin-top: 80px;
            padding: 16px 12px;
          }

          .service-content-services {
            gap: 24px;
          }

          .service-visual-services {
            height: 280px;
          }

          .service-details-services h3 {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .service-details-services p {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .service-features-services {
            margin-bottom: 24px;
          }

          .service-feature-li-services {
            font-size: 13px;
            margin-bottom: 10px;
            padding-left: 24px;
          }

          .service-link-services {
            font-size: 13px;
          }

          .visual-container-services {
            padding: 16px;
            border-radius: 16px;
          }

          .video-editor-container-services {
            height: 280px;
          }

          .video-timeline-services {
            height: 50px;
            padding: 8px;
          }

          .video-waveform-services {
            height: 25px;
          }

          .video-controls-services {
            gap: 8px;
            padding: 5px 12px;
            bottom: 12px;
          }

          .control-btn-services {
            width: 28px;
            height: 28px;
          }

          .vixora-logo-services {
            width: 90px;
            height: 90px;
            padding: 14px;
          }

          .vixora-logo-services::before {
            font-size: 18px;
          }

          .logo-info-services h4 {
            font-size: 15px;
          }

          .logo-info-services {
            font-size: 12px;
          }

          .code-content-services {
            font-size: 12px;
          }

          .window-title-services {
            font-size: 11px;
          }

          .center-glow-services {
            width: 500px;
            height: 500px;
            filter: blur(80px);
          }

          .circle-1-services {
            width: 150px;
            height: 150px;
          }

          .circle-2-services {
            width: 220px;
            height: 220px;
          }

          .circle-3-services {
            width: 140px;
            height: 140px;
          }

          .circle-4-services {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>

      <div className="vixora-services-wrapper" ref={wrapperRef}>
        <section className="vixora-services-section">
          <h2>
            <span className="section-title-services">
              <span className="primary-services">OUR</span>
              <span className="secondary-services">SERVICES</span>
            </span>
          </h2>
          <div className="stage-services">
            <div className="base-layer-services" ref={baseRef}></div>
            <div className="reveal-layer-services" ref={revealRef}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
