import React, { useState, useEffect } from 'react';
import { Shield, Menu, MessageSquare, Mail, Phone, Users, ShieldAlert, Cpu, Globe, Lock, ArrowLeft, ArrowRight, Info, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import DashboardHub from './dashboard';
import SecurePage from './securepage';

export default function App() {
  // --- MASTER CONDITIONAL ROUTER VIEW ENGINE ---
  // View states available: 'home' | 'login' | 'dashboard' | 'securepage'
  const [currentViewStage, setCurrentViewStage] = useState('home');

  // --- HARDCODED PRE-AUTHENTICATED SECURITY PROFILES ---
  const [usernameInput, setUsernameInput] = useState('alice');
  const [passwordInput, setPasswordInput] = useState('Quantum123');
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState('');

  // --- INTERACTIVE UI LOGIC CONTROLLER LAYERS ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTooltip] = useState('none');

  // --- EXTRA CSS KEYFRAMES DIRECT INJECTOR ENGINE FOR MARQUEE LOOP & SHAKE ANIMATIONS ---
  useEffect(() => {
    const styleId = "qsecure-dynamic-animations-sheet";
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.innerHTML = `
        @keyframes marqueeStream {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeStream 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (usernameInput === 'alice' && passwordInput === 'Quantum123') {
      setLoginErrorText('');
      setCurrentViewStage('dashboard');
    } else {
      setLoginErrorText('Authentication Failed: Invalid terminal encryption profile match.');
    }
  };
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen w-screen overflow-x-hidden selection:bg-indigo-500/10 transition-colors duration-500 flex flex-col">
      
      {/* 👑 REGION 1: PREMIUM COMPONENT UNBOXED NAVIDATION BAR HEADER */}
      {currentViewStage !== 'dashboard' && currentViewStage !== 'securepage' && (
        <nav className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between relative z-50">
          
          {/* BRAND LOGO DESIGN ARCHITECTURE LINK */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentViewStage('home')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-white" />
              <div className="absolute inset-0 border border-white/20 rounded-2xl animate-[pulseRing_3s_infinite]"></div>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-widest text-slate-900 uppercase">Q-Secure</h1>
              <p className="text-[10px] font-mono font-bold text-indigo-600 tracking-widest uppercase mt-0.5">SIH Quantum Protocol Deck</p>
            </div>
          </div>

          {/* DESKTOP SECURE BRAND HORIZONTAL BUTTON LINKS DECK */}
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => setCurrentViewStage('home')} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Home</button>
            <a href="#about-us" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">About Us</a>
            <a href="#features-deck" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Why Q-Secure</a>
            <a href="#contact-us" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Contact Us</a>
          </div>

          {/* ACTION BUTTON ZONE CLOSURES */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setCurrentViewStage('login')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all rounded-xl shadow-sm"
            >
              Sign In
            </button>
            <button 
              onClick={() => setCurrentViewStage('login')}
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all rounded-xl shadow-lg shadow-indigo-600/20"
            >
              Login Terminal
            </button>
          </div>

          {/* MOBILE TOGGLE DRAWER TRIGGER */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 border border-slate-200 bg-white rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* RESPONSIVE MOBILE ACCORDION MENUS DROPDOWN DRAWER */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-6 right-6 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5 shadow-2xl flex flex-col space-y-4 md:hidden animate-[fadeIn_0.2s_ease-out] z-50">
              <button onClick={() => { setCurrentViewStage('home'); setMobileMenuOpen(false); }} className="text-left py-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100">Home</button>
              <a href="#about-us" onClick={() => setMobileMenuOpen(false)} className="py-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100">About Us</a>
              <a href="#features-deck" onClick={() => setMobileMenuOpen(false)} className="py-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100">Why Q-Secure</a>
              <a href="#contact-us" onClick={() => setMobileMenuOpen(false)} className="py-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100">Contact Us</a>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button onClick={() => { setCurrentViewStage('login'); setMobileMenuOpen(false); }} className="w-full py-3 text-center border border-slate-200 bg-slate-50 rounded-xl text-xs font-bold text-slate-700 uppercase">Sign In</button>
                <button onClick={() => { setCurrentViewStage('login'); setMobileMenuOpen(false); }} className="w-full py-3 text-center bg-indigo-600 rounded-xl text-xs font-black text-white uppercase shadow-md shadow-indigo-600/10">Login</button>
              </div>
            </div>
          )}
        </nav>
      )}
      {/* 🚀 REGION 2: MULTI-STAGE STEP CONTAINER ENGINE */}
      {currentViewStage !== 'dashboard' && currentViewStage !== 'securepage' && (
        <div className="w-full flex flex-col flex-1">
          
          {/* CONTINUOUS LOOPING QUANTUM MESSAGE STREAM MARQUEE TICKER BANNER */}
          {currentViewStage === 'home' && (
            <div className="w-full bg-slate-900 border-y border-slate-800 py-3 overflow-hidden select-none relative z-10 shadow-inner">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[11px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
                <span>⚡ QISKIT SIMULATOR LOOP STATUS: OPERATIONAL 🟢</span>
                <span>💎 ENTANGLEMENT PAULI CORRECMINAL 🛡️</span>
                <span>🛡️ QUANTUM NO-CLONING VECTOR SHIELDS ACTIVE ON CHANNEL ASSETS 🧬</span>
                <span>⚙️ STREAMING 6-BIT ALPHANUMERIC TOKENIZED MAP PARSING LIVE SYSTEM PACKS ⚡</span>
                {/* Secondary looping duplicate string copy array to preserve marquee continuity gaps */}
                <span>⚡ QISKIT SIMULATOR LOOP STATUS: OPERATIONAL 🟢</span>
                <span>💎 ENTANGLEMENT PAULI CORRECTION TRACES: NOMINAL 🛡️</span>
                <span>🛡️ QUANTUM NO-CLONING VECTOR SHIELDS ACTIVE ON CHANNEL ASSETS 🧬</span>
                <span>⚙️ STREAMING 6-BIT ALPHANUMERIC TOKENIZED MAP PARSING LIVE SYSTEM PACKS ⚡</span>
              </div>
            </div>
          )}

          {/* VIDEO BACKGROUND COVER HERO REGION SECTION PANEL CONTAINER */}
          {currentViewStage === 'home' && (
            <section className="w-full max-w-[100%]  mx-auto px-6 sm:px-8 py-16 md:py-24 relative overflow-hidden rounded-[32px] border border-slate-200/70 shadow-xl bg-white shadow-slate-200/30 mt-6 animate-[fadeIn_0.6s_ease-out_forwards]">
              
              {/* VIDEO BACKDROP CORE COMPONENT CONTAINER */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-200 filter contrast-125 saturate-150 transition-all duration-700"
                >
                  <source src="src/assets/video01.mp4" type="video/mp4" />
                </video>
                {/* Pure bright radial light diffusion gradient veil overlay to keep text completely clean */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-indigo-50/20 backdrop-blur-[1px]"></div>
              </div>

              {/* OVERLAID BRAND CONSOLE LAYOUT FRAME */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-[fadeIn_0.5s_ease-out_forwards] [animation-delay:150ms]">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-mono font-black tracking-wider uppercase shadow-sm">
                  <Cpu className="w-3.5 h-3.5 animate-spin" /> Information-Theoretic Security Architecture Release
                </div>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] uppercase">
                  Unbreakable Quantum <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">Digital Signatures</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-lg font-medium max-w-2xl leading-relaxed font-sans">
                  Mitigate high-value transaction interception threats using decentralized state wave polarization vectors. Process your 6-bit map parsing keys natively inside our Qiskit simulator pipeline loops to achieve mathematical forward secrecy.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => setCurrentViewStage('login')}
                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-black tracking-widest text-xs uppercase shadow-xl shadow-indigo-600/30 rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Launch Secure Terminal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="#about-us"
                    className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 bg-white/80 hover:bg-slate-50 backdrop-blur-sm active:scale-95 text-slate-700 font-bold tracking-widest text-xs uppercase rounded-xl transition-all shadow-sm text-center"
                  >
                    Explore Protocol Data
                  </a>
                </div>
              </div>
            </section>
          )}
          {/* ========================================== */}
          {/* 📊 REGION 3: METRICS DASHBOARD STACK MATRIX */}
          {/* ========================================== */}
          {currentViewStage === 'home' && (
            <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              
              {/* CARD ONE: ACTIVE NODE CAPACITY USER DATA STRIP */}
              <div className="border border-slate-200/80 bg-white rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:border-indigo-400/30 transition-all duration-300 group opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] [animation-delay:300ms]">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-indigo-50 border border-indigo-100/60 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 text-indigo-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Active System Nodes</h4>
                    <div className="text-3xl font-black font-mono tracking-tight text-slate-900 mt-0.5">4,821+</div>
                    <p className="text-xs text-slate-500 font-sans font-medium mt-1">Validated secure channel operators live</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 group-hover:text-indigo-500 transition-all" />
              </div>

              {/* CARD TWO: SECURITY THREAT BLOCKADE VERDICT LOG REGISTER */}
              <div className="border border-slate-200/80 bg-white rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:border-rose-400/30 transition-all duration-300 group opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] [animation-delay:400ms]">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-rose-50 border border-rose-100/60 rounded-2xl group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 text-rose-600">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Attacks Intercepted</h4>
                    <div className="text-3xl font-black font-mono tracking-tight text-slate-900 mt-0.5">142,912</div>
                    <p className="text-xs text-slate-500 font-sans font-medium mt-1">Eavesdropper waveform collapses recorded</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
              </div>

              {/* CARD THREE: STATISTICAL INVERSION THRESHOLD ACCURACY COUNTERS */}
              <div className="border border-slate-200/80 bg-white rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:border-emerald-400/30 transition-all duration-300 group opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] [animation-delay:500ms]">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-emerald-50 border border-emerald-100/60 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 text-emerald-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">False Negative Matrix</h4>
                    <div className="text-3xl font-black font-mono tracking-tight text-slate-900 mt-0.5">0.00%</div>
                    <p className="text-xs text-slate-500 font-sans font-medium mt-1">Absolute trace decryption accuracy</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
              </div>

            </section>
          )}
          {/* ========================================== */}
          {/* 📑 REGION 4: INNOVATION INTERFACE BLOCK PANELS (WHY WE ARE DIFFERENT) */}
          {/* ========================================== */}
          {currentViewStage === 'home' && (
            <section id="features-deck" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
              
              {/* LEFT PART: GRAPHIC PLACEMENT DECK CARD (pic01.png AS ILLUSTRATION BACKDROP) */}
              <div className="lg:col-span-5 border border-slate-200 bg-white rounded-[32px] p-4 shadow-xl shadow-slate-100/40 relative overflow-hidden group h-96 flex items-center justify-center opacity-0 animate-[fadeIn_0.7s_ease-out_forwards] [animation-delay:600ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-slate-50/50 group-hover:scale-105 transition-all duration-700 z-0"></div>
                
                {/* THE ASSET IMAGE SPECIFIED NATIVELY ON DRIVE MESH CHANNELS */}
                <img 
                  src="src/assets/pic01.jpeg" 
                  alt="Quantum Cryptography Innovation Grid Architecture Diagram" 
                  className="w-[100%] h-[100%] object-contain relative z-10 filter drop-shadow-2xl transition-transform duration-500 group-hover:rotate-1"
                  onError={(e) => { e.target.src = "https://unsplash.com"; }} 
                />
                
                {/* TECH GLOW LAYER ACCENTS */}
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-xl text-[10px] font-mono font-bold text-slate-500 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></div> Fig 1.0: Entanglement Node Mesh
                </div>
              </div>

              {/* RIGHT PART: THE RE-ENGINEERED WHITE SYSTEM TEXT INSIGHT BOX */}
              <div className="lg:col-span-7 border-2 border-slate-200/80 bg-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-full space-y-6 shadow-xl relative overflow-hidden opacity-0 animate-[fadeIn_0.7s_ease-out_forwards] [animation-delay:650ms]">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-mono font-black tracking-widest uppercase">
                    Core Security Inversion Matrix
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-none">
                    Why Q-Secure Is <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Completely Different</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium font-sans">
                    Standard cryptographic signatures rely heavily on computational complexity (such as factoring large primes inside RSA or discrete logarithms in ECC) which can be completely deciphered and broken by modern quantum systems. Q-Secure utilizes **information-theoretic security configurations**. By generating multi-qubit loops inside our custom server gate architecture, any intercept attempt instantly collapses the wavefunction vector, rendering the data uncloneable.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100 font-mono text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">✓</span>
                    <span>Quantum No-Cloning Protection Shifting</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">✓</span>
                    <span>Teleportation Pauli Trace Correction Matrix</span>
                  </div>
                </div>
              </div>

            </section>
          )}
          {/* ========================================== */}
          {/* 📑 REGION 5: Operational Mandate CARD PANELS (WHAT WE DO NATIVELY) */}
          {/* ========================================== */}
          {currentViewStage === 'home' && (
            <section id="about-us" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
              
              {/* LEFT PART: THE PREMIUM LIGHT MANDATE PANEL INSIGHT TEXT CONTAINER */}
              <div className="lg:col-span-7 border-2 border-slate-200/80 bg-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-full space-y-6 shadow-xl relative overflow-hidden order-2 lg:order-1 opacity-0 animate-[fadeIn_0.7s_ease-out_forwards] [animation-delay:700ms]">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-[10px] font-mono font-black tracking-widest uppercase">
                    Operational Protocol Mandate
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-none">
                    What Our Protocol <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Executes Natively</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium font-sans">
                    Our workspace converts raw data inputs into distinct **6-bit binary token arrays**, mapping them precisely onto specialized subatomic qubit orientations. We route these entangled teleportation channels across simulated network vectors. The receiver station measures the outcome results, aligns them with custom basis polarization selections, and evaluates trace deviations to calculate an absolute authentication verdict.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100 font-mono text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span>Live 6-Bit map array character stream parsing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span>AerSimulator quantum state telemetry vectors</span>
                  </div>
                </div>
              </div>

              {/* RIGHT PART: GRAPHIC PLACEMENT DECK CARD (pic02.png AS DATA FLOW BACKDROP) */}
              <div className="lg:col-span-5 border border-slate-200 bg-white rounded-[32px] p-4 shadow-xl shadow-slate-100/40 relative overflow-hidden group h-96 flex items-center justify-center order-1 lg:order-2 opacity-0 animate-[fadeIn_0.7s_ease-out_forwards] [animation-delay:750ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-slate-50/50 group-hover:scale-105 transition-all duration-700 z-0"></div>
                
                {/* THE SPECIFIC SECOND PLATFORM PICTURE GRAPHIC */}
                <img 
                  src="  src/assets/pic02.png" 
                  alt="Quantum Teleportation Verification Logic Data Flow Matrix Diagram" 
                  className="w-[100%] h-[100%] object-contain relative z-10 filter drop-shadow-2xl transition-transform duration-500 group-hover:-rotate-1"
                  onError={(e) => { e.target.src = "https://unsplash.com"; }} 
                />
                
                {/* IDENTIFICATION LOWER CHIP */}
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-xl text-[10px] font-mono font-bold text-slate-500 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Fig 2.0: Teleport Verification Loop
                </div>
              </div>

            </section>
          )}
        {/* ========================================== */}
        {/* 📑 REGION 6: GRID CONTACT & COMMUNICATIONS MATRICES */}
        {/* ========================================== */}
        {currentViewStage === 'home' && (
          <section id="contact-us" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 border border-slate-200 bg-white rounded-[32px] shadow-xl shadow-slate-100/40 relative overflow-hidden transition-all duration-300 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-delay:800ms]">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-black uppercase tracking-widest text-slate-400">Control Center Hub</h3>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-800 uppercase mt-0.5">Connect with Operations</h2>
                </div>
              </div>
              <p className="text-[11px] font-mono font-bold text-indigo-500 bg-indigo-50 border border-indigo-100/50 rounded-full px-3 py-1 self-start sm:self-auto tracking-wider uppercase">Active Command Polling</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs sm:text-sm">
              <div className="border border-slate-100 bg-slate-50/40 rounded-2xl p-5 hover:border-indigo-300/40 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white border border-slate-100 rounded-xl text-indigo-500 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">Operations Mail desk</span>
                </div>
                <a href="mailto:ops@qsecure.sih.gov.in" className="text-slate-600 font-bold group-hover:text-indigo-600 transition-colors block pl-1 truncate">ops@qsecure.sih.gov.in</a>
                <p className="text-[10px] text-slate-400 font-sans font-medium mt-1 pl-1">Average loop triage timeline: &lt; 8 mins</p>
              </div>

              <div className="border border-slate-100 bg-slate-50/40 rounded-2xl p-5 hover:border-indigo-300/40 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white border border-slate-100 rounded-xl text-indigo-500 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">Central Command Hotline</span>
                </div>
                <a href="tel:+91112301QSEC" className="text-slate-600 font-bold group-hover:text-indigo-600 transition-colors block pl-1">+91 11 2301-QSEC</a>
                <p className="text-[10px] text-slate-400 font-sans font-medium mt-1 pl-1">Secure line routed directly via local terminal operator desks</p>
              </div>

              <div className="border border-slate-100 bg-slate-50/40 rounded-2xl p-5 hover:border-indigo-300/40 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white border border-slate-100 rounded-xl text-indigo-500 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">Physical Core Registry HQ</span>
                </div>
                <div className="text-slate-600 font-bold pl-1 truncate">Strategic Systems Lab, New Delhi</div>
                <p className="text-[10px] text-slate-400 font-sans font-medium mt-1 pl-1">SIH Evaluation Core Prototype Workspace Release</p>
              </div>
            </div>
          </section>
        )}
        {/* ========================================== */}
        {/* 📑 REGION 7: COMPLIANCE FOOTERS & PORTAL OVERLAY SHIELD */}
        {/* ========================================== */}
        {currentViewStage === 'home' && (
          <footer className="w-full border-t border-slate-200 pt-8 pb-6 text-center text-[11px] font-mono text-slate-400 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-delay:900ms]">
            <p>© 2026 Q-SECURE SYSTEMS LAB. STRATEGIC CRYPTO SERVICE. ALL RIGHTS RESERVED.</p>
            <p className="tracking-widest uppercase text-indigo-600/80 font-black text-xs sm:text-[11px] bg-indigo-50 border border-indigo-100/50 rounded-full px-4 py-1">
              Smart India Hackathon Core Prototype Release
            </p>
          </footer>
        )}

      </div>
      )}

      {/* 📑 SECURE INTERACTIVE MODAL AUTHORIZATION DIALOGUE OVERLAY */}
      {currentViewStage === 'login' && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-md border border-slate-200/80 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative shadow-slate-900/10">
            
            <button 
              onClick={() => { setCurrentViewStage('home'); setLoginErrorText(''); }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 font-mono text-xs px-2.5 py-1.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
            >
              ESC
            </button>

            <div className="flex flex-col items-center text-center space-y-3 border-b border-slate-100 pb-5">
              <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-2xl">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight text-slate-800 uppercase">Terminal Authorization</h3>
                <p className="text-[11px] font-mono font-bold text-slate-400 mt-0.5">Evaluation security parameters are pre-loaded</p>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest pl-1">User Identity Handle ID</label>
                <input 
                  type="text" 
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter username (e.g. alice)"
                  className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl px-4 py-3 text-xs text-slate-800 font-mono focus:outline-none focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-300" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest pl-1">Cryptographic Password Pin</label>
                <div className="relative w-full">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter security key..."
                    className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl pl-4 pr-16 py-3 text-xs text-slate-800 font-mono focus:outline-none focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-300" 
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono font-black text-slate-400 hover:text-indigo-600 transition-colors border border-slate-200 px-2.5 py-1 rounded-xl bg-white"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {loginErrorText && (
                <p className="text-[11px] font-mono text-rose-600 font-bold bg-rose-50 border border-rose-100 p-3 rounded-2xl">
                  ⚠️ {loginErrorText}
                </p>
              )}

              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-4 rounded-2xl text-xs uppercase tracking-widest transition-all active:scale-[0.98] shadow-xl mt-2"
              >
                Let's Go →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 🚀 MULTI-PAGE DESKTOP VIEW TRANSITION SWITCHBOARDS */}
      {currentViewStage === 'dashboard' && (
        <div className="fixed inset-0 bg-slate-50 z-40 overflow-y-auto w-screen h-screen">
          <DashboardHub 
            onNavigateBack={() => setCurrentViewStage('home')}
            onSelectNodeReceiver={(receiverNodeName) => setCurrentViewStage('securepage')}
          />
        </div>
      )}

      {currentViewStage === 'securepage' && (
        <div className="fixed inset-0 bg-slate-50 z-40 overflow-y-auto w-screen h-screen">
          <SecurePage 
            onBackToHub={() => setCurrentViewStage('dashboard')}
          />
        </div>
      )}

    </div>
  );
}
