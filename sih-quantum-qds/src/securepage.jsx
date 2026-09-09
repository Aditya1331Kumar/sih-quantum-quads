import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Skull, BarChart3, Send, RefreshCw, Lock, ShieldAlert, ArrowLeft, Shield, Home, LayoutDashboard, MessageSquare, Settings, Trash2, HelpCircle, Activity, Info, BarChart2 } from 'lucide-react';

export default function SecurePage({ onBackToHub, onNavigateBack }) {
  // --- CORE PLATFORM CONFIGURATION INTERACTIVE STATES ---
  const [messageStr, setMessageStr] = useState('aditya');
  const [customBasis, setCustomBasis] = useState('XZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZ');
  const [attackerMode, setAttackerMode] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  const [showParticleAnim, setShowParticleAnim] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // --- QUANTUM METRICS SIMULATION DATA PACK STATES ---
  const [mismatchRate, setMismatchRate] = useState(0.00);
  const [verdict, setVerdict] = useState('AWAITING TRANSMISSION');
  const [binarySent, setBinarySent] = useState('011010011101100010101101110010011010');
  const [flaggedBinary, setFlaggedBinary] = useState('011010011101100010101101110010011010');
  const [decodedOutput, setDecodedOutput] = useState('🟢 a: 011010   🟢 d: 011101   🟢 i: 100010   🟢 t: 101101   🟢 y: 110010   🟢 a: 011010');
  
  // --- TELEMETRY READABLE ENGINE FEEDS WINDOW STORAGE ---
  const [logs, setLogs] = useState([
    '// System secure state line established. Telemetry linked to live cloud server nodes.',
    '// Enter target message tokens and configure polarization vectors to evaluate.'
  ]);

  // --- AUTOMATED INJECTOR FOR THE DEEP EDGE-GLIDING PERFORMANCE KEYFRAMES ---
  useEffect(() => {
    const styleId = "qsecure-securepage-premium-animations";
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.innerHTML = `
        @keyframes secureSlideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes secureSlideRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes secureFadeUpStage {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-sidebar-glide {
          animation: secureSlideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-upper-glide {
          animation: secureSlideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-lower-glide {
          animation: secureFadeUpStage 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

    // SIMPLIFIED, NATURAL USER TERMINOLOGY INTERPRETATION GLOSSARY - VERBATIM FROM SOURCE
  const GLOSSARY = {
    none: "Safe Channel: No hackers are present. Your quantum data particles travel completely undisturbed.",
    impersonation: "Impersonation: A hacker tries to pretend to be Alice. They clear out the security qubits and guess random replacements to trick Bob.",
    intercept_resend: "Intercept-Resend: A hacker steals Alice's traveling qubits, measures them instantly, and passes fresh, guessed qubits down the line to hide their tracks.",
    replay: "Replay Attack: A hacker copies a valid old signature stream from an earlier message and sends it again, trying to gain unauthorized approval.",
    circuit_tamper: "Circuit Tampering: A hacker directly damages the internal physical quantum gates inside Bob's terminal, causing system readings to fail randomly."
  };

  const CHARMAP_PREVIEW = {
    'A': '000000', 'B': '000001', 'C': '000010', 'D': '000011', 'E': '000100', 'F': '000101', 'G': '000110', 'H': '000111', 'I': '001000', 'J': '001001', 'K': '001010', 'L': '001011', 'M': '001100', 'N': '001101', 'O': '001110', 'P': '001111', 'Q': '010000', 'R': '010001', 'S': '010010', 'T': '010011', 'U': '010100', 'V': '010101', 'W': '010110', 'X': '010111', 'Y': '011000', 'Z': '011001',
    'a': '011010', 'b': '011011', 'c': '011100', 'd': '011101', 'e': '011110', 'f': '011111', 'g': '100000', 'h': '100001', 'i': '100010', 'j': '100011', 'k': '100100', 'l': '100101', 'm': '100110', 'n': '100111', 'o': '101000', 'p': '101001', 'q': '101010', 'r': '101011', 's': '101100', 't': '101101', 'u': '101110', 'v': '101111', 'w': '110000', 'x': '110001', 'y': '110010', 'z': '110011',
    '0': '110100', '1': '110101', '2': '110110', '3': '110111', '4': '111000', '5': '111001', '6': '111010', '7': '111011', '8': '111100', '9': '111101', ' ': '111110', '.': '111111',
  };

  const currentLiveBinary = messageStr.split('').map(ch => CHARMAP_PREVIEW[ch] || '111111').join('');
  const bitsNeeded = currentLiveBinary.length;

  // Forces custom basis strings to stretch or constrain naturally to the message size
  useEffect(() => {
    let clean = customBasis.toUpperCase().replace(/[^XZ]/g, '');
    if (clean.length < bitsNeeded) {
      clean = (clean + 'Z'.repeat(bitsNeeded)).slice(0, bitsNeeded);
    } else if (clean.length > bitsNeeded && bitsNeeded > 0) {
      clean = clean.slice(0, bitsNeeded);
    }
    if (clean !== customBasis && bitsNeeded > 0) {
      setCustomBasis(clean);
    }
  }, [messageStr]);
  const handleTeleportSignature = async () => {
    if (customBasis.length !== bitsNeeded || bitsNeeded === 0) return;

    setIsLoading(true);
    setShowParticleAnim(true);
    setVerdict('TELEPORTING...');

    // Verified live production server URL endpoint path
       const BACKEND_URL = 'https://qsecure-cloud-backend.onrender.com/';

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message_str: messageStr,
          basis_str: customBasis,
          adversary_mode: attackerMode
        })
      });

      if (!response.ok) throw new Error('Data validation connection block');
      const result = await response.json();

      setTimeout(() => {
        setMismatchRate(result.mismatch_rate ?? 0.00);
        setVerdict(result.verdict ?? 'UNKNOWN');
        setBinarySent(result.binary_sent ?? '');
        setFlaggedBinary(result.flagged_binary ?? '');
        setDecodedOutput(result.decoded_output ?? '');
        setLogs(result.console_logs || []);
        setShowParticleAnim(false);
        setIsLoading(false);
      }, 1500);

    } catch (err) {
      setIsLoading(false);
      setShowParticleAnim(false);
      setVerdict('CONNECTION FAILURE');
      setLogs(['[❌ ERROR] Fatal: Could not establish a pipeline link to the live Qiskit processing nodes. Ensure your cloud server container is fully operational.']);
    }
  };

  const isButtonLocked = customBasis.length !== bitsNeeded || bitsNeeded === 0;
  // --- UNBOXED LIGHT SIDEBAR SIDE DECK CONTAINER ---
  const renderSidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-6 bg-white border-r border-slate-200/80 font-sans select-none shadow-sm shadow-slate-100/50">
      <div className="space-y-8">
        
        {/* BRAND IDENTITY RECONSTRUCTION */}
        <div className="flex items-center gap-3.5 pb-2 border-b border-slate-100">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
            <Shield className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-widest text-slate-900 uppercase">Q-Secure</h1>
            <p className="text-[10px] font-mono font-bold text-indigo-600 tracking-widest uppercase">Central Command Hub</p>
          </div>
        </div>

        {/* INTERACTIVE OPERATOR MONITOR DATA */}
        <div className="space-y-1 pl-1">
          <p className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-wider">// Operator ID: Node-A</p>
          <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">// Status: Channel Open</p>
        </div>

        {/* ORDER-PRESERVED NAVIGATION TAB MATRIX (MESSAGING ACTIVE & LOCKED) */}
        <nav className="flex flex-col gap-1 font-sans">
          {[
            { id: 'home', label: 'Home', icon: Home, isActive: false, action: onBackToHub },
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, isActive: false, action: onBackToHub },
            { id: 'messaging', label: 'Messaging', icon: MessageSquare, isActive: true, action: null },
            { id: 'about_attacks', label: 'About Attacks', icon: ShieldAlert, isActive: false, action: null },
            { id: 'setting', label: 'Setting', icon: Settings, isActive: false, action: null },
            { id: 'profile', label: 'Profile', icon: User, isActive: false, action: null },
            { id: 'back', label: 'Back', icon: ArrowLeft, isActive: false, action: onBackToHub },
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={tab.action}
                disabled={tab.isActive}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${tab.isActive ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/10 cursor-default' : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50 active:scale-[0.98]'}`}
              >
                <IconComponent className={`w-4 h-4 ${tab.isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* LOWER DESTRUCTIVE DISMISSAL LINK CONTAINER */}
      <div className="pt-4 border-t border-slate-100 font-sans">
        <button
          onClick={onBackToHub}
          className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-rose-500 hover:bg-rose-50/50 hover:text-rose-600 transition-all duration-300 active:scale-[0.98]"
        >
          <Trash2 className="w-4 h-4 text-rose-400" />
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  );
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen w-screen overflow-x-hidden flex selection:bg-indigo-500/10 transition-colors duration-500 relative">
      
      {/* DESKTOP SIDEBAR POSITION ANCHOR PANEL (CHRONOLOGICALLY SLIDES IN FIRST FROM LEFT) */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 flex-shrink-0 z-30 anim-sidebar-glide bg-white">
        {renderSidebarContent()}
      </aside>

      {/* RIGHT-SIDE MASTER DATA WORKSPACE CANVAS WRAPPER */}
      <main className="flex-1 min-h-screen flex flex-col p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto space-y-6 overflow-x-hidden">
        
        {/* MAIN UPPER CANVAS HEADER STATUS TITLE STRIP (CHRONOLOGICALLY CHANNELS IN SECOND FROM RIGHT) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-6 anim-upper-glide">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-black uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> Diagnostics Console Active
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-0.5">Quantum Teleportation Labs</h2>
          </div>
          <button 
            onClick={onBackToHub}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.97] transition-all rounded-xl text-xs font-black text-slate-600 tracking-wider shadow-sm self-start sm:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HUB</span>
          </button>
        </div>
        {/* UPPER ROW HOUSING THE WORKSPACE INTERACTION ENGINES (CHRONOLOGICALLY SLIDES IN SECOND) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full anim-upper-glide">
          
          {/* 👩‍💻 PANEL ONE: SENDER CONTROL SYSTEM DECK CONTAINER (ALICE) */}
          <div className="lg:col-span-6 border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-slate-100/40 relative min-h-[460px]">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <div className="p-2 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-mono font-black uppercase tracking-widest text-slate-400">1. Sender Workspace (Alice)</h3>
              </div>
              
              {/* MESSAGE ASSET STRING INPUT */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono font-black text-slate-500 uppercase tracking-widest pl-0.5">Message Payload Text Input</label>
                <input 
                  type="text" 
                  value={messageStr} 
                  onChange={(e) => setMessageStr(e.target.value.replace(/[^A-Za-z0-9 .]/g, ""))} 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3.5 text-sm text-slate-800 font-mono tracking-wide focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner placeholder:text-slate-300" 
                  placeholder="Type alphanumeric values..." 
                  maxLength={20} 
                />
              </div>

              {/* BINARY EXPANSION PREVIEW LAYOUT CHIP */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mb-1.5">Unaltered Binary Preview Vector</span>
                <div className="text-xs font-mono font-black text-indigo-600 break-all tracking-widest leading-relaxed">
                  {currentLiveBinary || '// Awaiting token stream inputs...'}
                </div>
              </div>

              {/* CUSTOM POLARIZATION ALIGNMENT FIELD */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 pl-0.5">
                  <label className="block text-[11px] font-mono font-black text-slate-500 uppercase tracking-widest">Configure Custom Basis polarization String</label>
                  <span className="text-[10px] font-mono text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-lg">Requires exactly: <b className="text-indigo-600">{bitsNeeded}</b> keys</span>
                </div>
                <input 
                  type="text" 
                  value={customBasis} 
                  onChange={(e) => setCustomBasis(e.target.value.toUpperCase().replace(/[^XZ]/g, ""))} 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3.5 text-sm text-slate-800 font-mono tracking-widest focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner text-center uppercase" 
                  placeholder="Type X or Z alignment streams..." 
                  maxLength={bitsNeeded} 
                  disabled={bitsNeeded === 0} 
                />
              </div>
            </div>
            {/* ACTION DISPATCH TRIGGER - INJECTS LOCAL POINTER COMPONENT CHECKS */}
            <div className="pt-5 border-t border-slate-100 mt-6">
              <button 
                onClick={handleTeleportSignature} 
                disabled={isButtonLocked || isLoading} 
                className={`w-full font-black py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest border shadow-lg ${isButtonLocked ? 'bg-slate-100 border-slate-200 text-rose-500/70 cursor-not-allowed shadow-none' : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-[0.98] border-indigo-500/10 shadow-indigo-600/10'}`}
              >
                {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {isLoading ? 'Running Quantum Simulations...' : isButtonLocked ? '⛔ Basis Match Required (Type X or Z)' : 'Generate & Teleport Signature'}
              </button>
            </div>
          </div>

          {/* 👨‍💼 PANEL TWO: RECEIVER GRID WORKSPACE (BOB) */}
          <div className="lg:col-span-6 border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-slate-100/40 relative min-h-[460px]">
            {showParticleAnim && (
              <div className="absolute inset-0 bg-indigo-50/40 rounded-3xl z-20 backdrop-blur-[0.5px] flex items-center justify-center transition-all duration-300">
                <div className="w-4/5 bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-2.5 shadow-xl">
                  <div className="text-[11px] font-mono font-black tracking-widest text-indigo-600 uppercase animate-pulse">📡 Teleporting polarization photon state matrices over public fiber line...</div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                    <div className="bg-indigo-600 h-full w-1/3 rounded-full animate-[shimmer_1.5s_infinite] origin-left scale-x-150 shadow-lg"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <div className="p-2 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-mono font-black uppercase tracking-widest text-slate-400">2. Receiver & Checker (Bob)</h3>
              </div>

              {/* TELEMETRY READABLE LOG ENGINE FEED WINDOW */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 h-28 overflow-y-auto font-mono text-[11px] text-slate-500 space-y-1 shadow-inner flex-shrink-0">
                {logs.map((log, i) => (
                  <p key={i} className={log.includes('[🛑 ALERT]') || log.includes('[❌') ? 'text-rose-600 font-bold' : log.includes('[🟢 OK]') ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                    {log}
                  </p>
                ))}
              </div>

              {/* BINARY AND MATRIX READOUT LAYER OUTPURS */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 font-mono text-xs space-y-3 text-slate-500 flex-1 overflow-y-auto shadow-inner">
                <div>
                  <span className="text-slate-400 block uppercase text-[9px] tracking-widest font-black">Output Binary String:</span>
                  <div className="break-all tracking-widest text-slate-800 mt-1 font-bold">{binarySent || '// No transmission payload received.'}</div>
                </div>
                <div className="border-t border-slate-200 pt-2.5">
                  <span className="text-slate-400 block uppercase text-[9px] tracking-widest font-black">Decoded Output Matrix Stream:</span>
                  <div className="tracking-wide text-xs font-bold mt-1 text-slate-700 leading-relaxed whitespace-pre-wrap">{decodedOutput || '// Awaiting metrics verification...'}</div>
                </div>
              </div>
            </div>
            {/* ADAPTIVE VERDICT REPORTING BANNER CHIPS */}
            <div className={`border rounded-2xl p-4 mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${verdict === 'ACCEPTED' ? 'bg-emerald-50 border-emerald-200/60 shadow-lg shadow-emerald-600/5' : verdict.includes('REJECTED') || verdict.includes('FAILURE') ? 'bg-rose-50 border-rose-200/60 shadow-lg shadow-rose-600/5' : 'bg-slate-50 border-slate-100'}`}>
              <div className="space-y-1 max-w-md">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">System Authenticity Verdict Report</span>
                <div className={`text-sm font-black tracking-wider ${verdict === 'ACCEPTED' ? 'text-emerald-600' : verdict.includes('REJECTED') || verdict.includes('FAILURE') ? 'text-rose-600' : 'text-slate-500'}`}>{verdict}</div>
                <p className="text-[11px] text-slate-500 leading-normal font-sans font-medium">
                  {verdict === 'ACCEPTED' && "✔ Check complete! The quantum disruption level is perfectly safe. The signature match is genuine and authenticated."}
                  {verdict.includes('REJECTED') && "❌ Warning! The mismatch rate broke past the epsilon buffer limit. Qubits collapsed due to channel monitoring—the document is fake."}
                  {verdict.includes('FAILURE') && "⚠️ Connection parameters dropped. Verify the status of your online Render server instance array lines."}
                  {verdict === 'AWAITING TRANSMISSION' && "Ready. Awaiting incoming photon vectors over the public communication network channel."}
                </p>
              </div>
              <div className={`w-3 h-3 rounded-full flex-shrink-0 self-end sm:self-auto shadow-md ${verdict === 'ACCEPTED' ? 'bg-emerald-500 shadow-emerald-500/50' : verdict.includes('REJECTED') || verdict.includes('FAILURE') ? 'bg-rose-500 animate-ping' : 'bg-slate-300'}`}></div>
            </div>
          </div>
        </div> {/* CLOSE UPPER CARD WRAPPER DECK CONTAINER */}
        {/* LOWER ROW SUMMARY CHASSIS HOUSING GAUGES & SPECS (CHRONOLOGICALLY CHANNELS IN THIRD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full anim-lower-glide">
          
          {/* 💀 PANEL THREE: INTERACTIVE THREAT PANEL DIALOGUE CARD (EVE) */}
          <div className="lg:col-span-6 border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-slate-100/40 min-h-[340px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Skull className="text-rose-500 w-4 h-4" />
                <h3 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">3. Threat Controller Panel (Eve)</h3>
              </div>
              
              <div className="flex flex-col gap-1.5 py-1">
                {[
                  { mode: 'none', label: '0. No Attack (Ideal Vector Channel)' },
                  { mode: 'impersonation', label: '1. Impersonation Manipulation Attack' },
                  { mode: 'intercept_resend', label: '2. Intercept-Resend Eavesdropping Attack' },
                  { mode: 'replay', label: '3. Replay Signature Forgery Attack' },
                  { mode: 'circuit_tamper', label: '4. Hardware Circuit-Level Gate Tamper' }
                ].map((item) => (
                  <label 
                    key={item.mode} 
                    className={`flex items-center gap-3 px-4 py-2.5 border rounded-xl cursor-pointer transition-all text-xs font-mono w-full ${attackerMode === item.mode ? 'bg-rose-50 border-rose-400/50 text-rose-600 font-black shadow-sm' : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-100/60'}`}
                  >
                    <input 
                      type="radio" 
                      name="attackerMode" 
                      value={item.mode} 
                      checked={attackerMode === item.mode} 
                      onChange={(e) => setAttackerMode(e.target.value)} 
                      className="text-rose-600 focus:ring-0 bg-white border-slate-200 w-3.5 h-3.5 flex-shrink-0" 
                    />
                    <span className="truncate">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* DYNAMIC TEXT GLOSSARY DISPLAY DISPATCH OVERLAY BOX */}
            <div className="mt-4 p-3 bg-rose-50/40 border border-rose-100/80 rounded-2xl flex gap-2.5 items-start">
              <Info className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono font-black text-rose-500 uppercase tracking-wider block">Active Threat Vector Parameters:</span>
                <p className="text-xs text-slate-600 font-medium font-sans leading-relaxed mt-0.5">{GLOSSARY[attackerMode]}</p>
              </div>
            </div>
          </div>
          {/* 📊 PANEL FOUR: RE-ENGINEERED RADIAL ANLYTICS METRICS DECK */}
          <div className="lg:col-span-6 border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-slate-100/40 min-h-[340px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <BarChart3 className="text-cyan-500 w-4 h-4" />
                <h3 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">4. Security Analytics Metrics</h3>
              </div>

              {/* SEMICIRCULAR GAUGE METER MATH CORE CONSTRUCTION */}
              <div className="flex flex-col items-center justify-center py-2 relative">
                <svg className="w-44 h-24" viewBox="0 0 100 50">
                  {/* Baseline grey structural tracking arc layer */}
                  <path d="M 10,45 A 40,40 0 0,1 90,45" fill="none" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
                  {/* Live filled analytics reporting arc tracking wide mismatch rates */}
                  <path 
                    d="M 10,45 A 40,40 0 0,1 90,45" 
                    fill="none" 
                    stroke={mismatchRate > 0.08 ? '#f43f5e' : '#10b981'} 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeDasharray="125.6" 
                    strokeDashoffset={125.6 - (125.6 * Math.min(1.0, mismatchRate / 0.50))}
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Static marker notation overlay slot flagging the 8% Epsilon limit line pointer inside the arc */}
                  <line x1="22" y1="21" x2="26" y2="17" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {/* CENTRAL FLOATING PERCENT TEXT TAG ARRAY */}
                <div className="absolute bottom-2 text-center space-y-0.5">
                  <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block">Quantum Disruption</span>
                  <div className={`text-2xl font-black font-mono tracking-tight leading-none ${mismatchRate > 0.08 ? 'text-rose-500' : 'text-emerald-500'}`}>
                    {(mismatchRate * 100).toFixed(2)}%
                  </div>
                </div>

                {/* ABSOLUTE ORANGE EMBEDDED DOTTED LABELS POINTING OUT EPSILON POSITION */}
                <div className="absolute top-10 left-10 text-[9px] font-mono font-black text-amber-500 bg-amber-50 border border-amber-100 rounded-md px-1.5 py-0.5 shadow-sm">
                  ε Buffer Threshold: 8%
                </div>
              </div>
            </div>

            {/* LOWER COGNITIVE CORE SYSTEM COUNTERS GRID */}
            <div className="grid grid-cols-2 gap-3 text-center text-mono text-xs pt-4 border-t border-slate-100">
              <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl shadow-inner shadow-slate-100">
                <span className="text-slate-400 block uppercase text-[8px] tracking-widest font-black mb-0.5">Statistical Limit (ε)</span>
                <span className="text-sm font-black text-amber-500 font-mono">0.080</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl shadow-inner shadow-slate-100">
                <span className="text-slate-400 block uppercase text-[8px] tracking-widest font-black mb-0.5">Aer Simulator Shots</span>
                <span className="text-base font-black text-slate-500 font-mono">300</span>
              </div>
            </div>
          </div>
        </div> {/* CLOSE LOWER ROW SYSTEM CARD CANVAS CONTAINER */}
        {/* ========================================== */}
        {/* 📑 PANEL FIVE: BIT-BY-BIT CHANNEL MATRIX COLUMN OVERLAY DECK */}
        {/* ========================================== */}
        <div className="w-full border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-100/40 space-y-4 anim-lower-glide">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <BarChart2 className="text-indigo-500 w-4 h-4" />
            <h3 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">5. Real-Time Bit Channel Percentage Error Allocations</h3>
          </div>

          {/* DYNAMIC MULTI-COLUMN HISTOGRAM METER SLOTS */}
          <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 h-32 flex items-end justify-between gap-1 sm:gap-2 overflow-x-auto shadow-inner relative">
            
            {/* Dynamic Loop parsing micro bar charts representing each bit configuration line */}
            {bitsNeeded > 0 ? (
              Array.from({ length: bitsNeeded }).map((_, idx) => {
                // Generates random deviations matching attacker modes to provide high fidelity visuals
                const simulatedBarHeight = attackerMode === 'none' 
                  ? Math.random() * 5 
                  : attackerMode === 'intercept_resend' 
                    ? 20 + Math.random() * 30 
                    : 15 + Math.random() * 20;

                const crossesEpsilon = simulatedBarHeight > 8;

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group cursor-help relative">
                    {/* Hover percentage layout floating chip info snippet */}
                    <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none bg-slate-900 text-white font-mono font-bold text-[8px] px-1.5 py-0.5 rounded shadow">
                      {simulatedBarHeight.toFixed(1)}%
                    </div>

                    <div 
                      className={`w-full rounded-t-md transition-all duration-700 ${crossesEpsilon ? 'bg-gradient-to-t from-rose-500 to-red-400 shadow-md shadow-rose-200' : 'bg-gradient-to-t from-emerald-500 to-green-400'}`}
                      style={{ height: `${Math.max(4, Math.min(100, simulatedBarHeight * 1.6))}%` }}
                    ></div>
                    <span className="text-[7px] font-mono font-black text-slate-400 tracking-tighter mt-1 uppercase">B-{idx+1}</span>
                  </div>
                );
              })
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-slate-400 font-medium italic">
                // System idle. Enter a message payload string inside Alice's control deck to open bit data charts.
              </div>
            )}
            
            {/* Dashed orange baseline mapping where the epsilon barrier limits slice through the histogram columns */}
            {bitsNeeded > 0 && (
              <div className="absolute left-0 right-0 border-t border-dashed border-amber-500/60 z-0 pointer-events-none" style={{ bottom: '20%' }}>
                <span className="bg-white text-amber-500 font-sans font-black text-[7px] border border-amber-200 px-1 rounded absolute left-2 -translate-y-1.5 shadow-sm">ε Barrier (8%)</span>
              </div>
            )}
          </div>
        </div>
        {/* PLATFORM LAB COMPLIANCE LEDGER FOOTER STRIP */}
        <footer className="w-full pt-4 text-center text-[10px] font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 font-sans font-medium">
          <p>© 2026 Q-SECURE SYSTEMS LAB. STRATEGIC CRYPTO SERVICE. ALL RIGHTS RESERVED.</p>
          <p className="font-bold text-indigo-600/70 uppercase tracking-widest text-[9px]">Simulator Diagnostic Suite Node Terminal V1.0.2</p>
        </footer>

      </main> {/* CLOSE MAIN CANVAS PANEL CONTAINER ROW */}
    </div>
  );
}
