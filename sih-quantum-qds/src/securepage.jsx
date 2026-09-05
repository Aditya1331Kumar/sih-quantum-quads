import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Skull, BarChart3, Send, RefreshCw, CheckCircle, Lock, ShieldAlert, ArrowLeft, Shield } from 'lucide-react';

export default function App() {
  // --- CORE PLATFORM CONFIGURATION STATES ---
  const [messageStr, setMessageStr] = useState('aditya');
  const [customBasis, setCustomBasis] = useState('XZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZ');
  const [attackerMode, setAttackerMode] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  const [showParticleAnim, setShowParticleAnim] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // --- QUANTUM METRICS DATA PACK STATES ---
  const [mismatchRate, setMismatchRate] = useState(0.00);
  const [verdict, setVerdict] = useState('AWAITING TRANSMISSION');
  const [binarySent, setBinarySent] = useState('011010011101100010101101110010011010');
  const [flaggedBinary, setFlaggedBinary] = useState('011010011101100010101101110010011010');
  const [decodedOutput, setDecodedOutput] = useState('🟢 a: 011010   🟢 d: 011101   🟢 i: 100010   🟢 t: 101101   🟢 y: 110010   🟢 a: 011010');
  
  // --- RAW STATUS LOG CONSOLE STORAGE ---
  const [logs, setLogs] = useState([
    '// System secure state line established. System polling on port 8000 operational.',
    '// Enter message tokens and align your custom polarization basis string to evaluate.'
  ]);

  // SIMPLIFIED, NATURAL USER TERMINOLOGY INTERPRETATION GLOSSARY
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

    // Pointing locally on your laptop workspace
    const BACKEND_URL = 'https://sih-quantum-backend.onrender.com';

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
      setVerdict('CONNECTION RUNTIME FAILURE');
      setLogs(['[❌ ERROR] Fatal: Could not reach your Python Qiskit backend on port 8000. Verify your uvicorn console pane is actively polling.']);
    }
  };

  const isButtonLocked = customBasis.length !== bitsNeeded || bitsNeeded === 0;

    return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen md:h-screen w-screen overflow-y-auto md:overflow-hidden flex flex-col p-4 sm:p-5 space-y-5 selection:bg-indigo-500/20">
      
      {/* 👑 PREMIUM NAVBAR WITH Q-SECURE LOGO & BACK BUTTON */}
      <div className="flex items-center justify-between border-2 border-slate-800 bg-slate-900/40 rounded-xl px-5 py-4 backdrop-blur-md shadow-2xl shadow-black/50 transition-all duration-300">
        <div className="flex items-center gap-3.5">
          {/* GEOMETRIC 'Q' SHAPED SHIELD LOGO RE-ENGINEERED */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400/40 shadow-lg shadow-indigo-500/20">
            <Shield className="w-5 h-5 text-indigo-200 animate-pulse" />
            <div className="absolute font-black text-xs text-white tracking-tighter bottom-1 right-2">Q</div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-widest text-slate-100 uppercase">Q-SECURE</h1>
            <p className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase">Quantum Cryptographic Dashboard</p>
          </div>
        </div>
        
        {/* UNIVERSAL BACK ANCHOR POINT */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 border-2 border-slate-800 bg-slate-950/80 hover:bg-slate-900 hover:border-slate-700 active:scale-[0.97] transition-all rounded-xl text-xs font-bold text-slate-300 tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>BACK</span>
        </button>
      </div>

      {/* TOP SECTION HOUSING TWO DEEP MASTER WORKSPACES */}
      <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[55vh] w-full">
          
          {/* 👩‍💻 WORKSPACE ONE: SENDER CONTROLS (ALICE) */}
          <div className="w-full md:w-1/2 h-auto md:h-full border-2 border-slate-800 bg-slate-900/20 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl hover:border-slate-700/80 transition-all duration-300 space-y-4 md:space-y-0">
              <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b-2 border-slate-900/60 pb-3">
                      <User className="text-indigo-400 w-5 h-5" />
                      <h2 className="text-sm font-black uppercase tracking-wider text-slate-200">1. Sender Workspace (Alice)</h2>
                  </div>
                  
                  {/* DATA ENTRY INTAKE */}
                  <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message Payload Text Input</label>
                      <input 
                        type="text"
                        value={messageStr}
                        onChange={(e) => setMessageStr(e.target.value.replace(/[^A-Za-z0-9 .]/g, ""))}
                        className="w-full bg-slate-950 border-2 border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-100 font-mono tracking-wide focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Type text tokens..."
                        maxLength={20}
                      />
                  </div>
                  {/* UNALTERED RAW BINARY STREAMS INTERACTION BLOCK */}
                  <div className="bg-slate-950 border-2 border-slate-900 rounded-xl p-3.5">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Unaltered Binary Preview Vector</span>
                    <div className="text-[13px] font-mono font-bold text-indigo-400 break-all tracking-wider">
                      {currentLiveBinary || '// Awaiting data characters entry...'}
                    </div>
                  </div>

                  {/* CUSTOM BASIS INPUT FIELD SYSTEM WITH RUNNING REQUIREMENT LENGTHS */}
                  <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Configure Custom Basis Polarization String</label>
                        <span className="text-[10px] font-mono text-slate-500">Requires exactly: <b className="text-indigo-400 font-bold">{bitsNeeded}</b> keys</span>
                      </div>
                      <input 
                        type="text"
                        value={customBasis}
                        onChange={(e) => setCustomBasis(e.target.value.toUpperCase().replace(/[^XZ]/g, ""))}
                        className="w-full bg-slate-950 border-2 border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-100 font-mono tracking-widest focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Type X or Z arrays..."
                        maxLength={bitsNeeded}
                        disabled={bitsNeeded === 0}
                      />
                  </div>
              </div>

              {/* ACTION TRIGGER INTERFACE - ENFORCES LENGTH CHECK LOCKS */}
              <div className="pt-4 border-t-2 border-slate-900 mt-4 md:mt-0">
                  <button 
                    onClick={handleTeleportSignature}
                    disabled={isButtonLocked || isLoading}
                    className={`w-full font-black py-4 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-white/5 shadow-xl ${isButtonLocked ? 'bg-slate-900 border-slate-800 text-rose-500/70 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white'}`}
                  >
                      {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {isLoading ? 'Running Quantum Simulations...' : isButtonLocked ? '⛔ Basis Match Required (Type X or Z)' : 'Generate & Teleport Signature'}
                  </button>
              </div>
          </div>
          {/* 👨‍💼 RECEIVER GRID WORKSPACE (BOB) */}
          <div className="w-full md:w-1/2 h-auto md:h-full border-2 border-slate-800 bg-slate-900/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl hover:border-slate-700/80 transition-all duration-300 relative space-y-4 md:space-y-0">
              
              {/* SHIMMER LIGHT TRANSMISSION OVERLAY PARTICLE SIMULATOR */}
              {showParticleAnim && (
                <div className="absolute inset-0 bg-indigo-950/20 rounded-xl z-20 backdrop-blur-[0.5px] flex items-center justify-center transition-all duration-300">
                  <div className="w-4/5 bg-slate-950 border-2 border-slate-800 rounded-xl p-5 text-center space-y-2.5 shadow-2xl">
                    <div className="text-[11px] font-mono font-bold tracking-widest text-indigo-400 uppercase animate-pulse">📡 Teleporting polarization photon state matrices over public fiber line...</div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                      <div className="bg-indigo-500 h-full w-1/3 rounded-full animate-[shimmer_1.5s_infinite] origin-left scale-x-150 shadow-lg shadow-indigo-500/50"></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 border-b-2 border-slate-800/60 pb-3">
                      <ShieldCheck className="text-emerald-400 w-5 h-5" />
                      <h2 className="text-sm font-black uppercase tracking-wider text-slate-200">2. Receiver & Checker (Bob)</h2>
                  </div>

                  {/* TELEMETRY READABLE LOG ENGINE FEED WINDOW */}
                  <div className="bg-slate-950 border-2 border-slate-900 rounded-xl p-4 h-32 md:h-36 overflow-y-auto font-mono text-[13px] text-slate-400 space-y-1 shadow-inner flex-shrink-0">
                      {logs.map((log, i) => (
                        <p key={i} className={log.includes('[🛑 ALERT]') || log.includes('[❌') ? 'text-rose-400 font-bold' : log.includes('[🟢 OK]') ? 'text-emerald-400' : 'text-slate-500'}>
                          {log}
                        </p>
                      ))}
                  </div>

                  {/* ACTUAL OUTPUT TEXT MATRIX DATA STRUCTURES REPLICATING 256BIT.PY TERMINAL LOGS */}
                  <div className="bg-slate-950 border-2 border-slate-900 rounded-xl p-4 font-mono text-[13px] space-y-3 text-slate-400 flex-1 overflow-y-auto">
                      <div>
                        <span className="text-slate-500 block uppercase text-[9px] tracking-widest font-black">Output Binary String:</span>
                        <div className="break-all tracking-widest text-slate-200 mt-1 font-bold">{binarySent || '// No transmission payload received.'}</div>
                      </div>
                      <div className="border-t border-slate-900 pt-2.5">
                        <span className="text-slate-500 block uppercase text-[9px] tracking-widest font-black">Decoded Output Matrix Stream:</span>
                        <div className="tracking-wide text-xs font-bold mt-1 text-slate-300 leading-relaxed max-h-20 overflow-y-auto whitespace-pre-wrap">
                          {decodedOutput || '// Awaiting channel metrics verification...'}
                        </div>
                      </div>
                  </div>
              </div>

              {/* SECURITY BANNERS HOUSING HUMAN TEXT DESCRIPTIONS */}
              <div className={`border-2 rounded-xl p-4 mt-4 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-300 ${verdict === 'ACCEPTED' ? 'bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-500/5' : verdict.includes('REJECTED') ? 'bg-rose-950/20 border-rose-500/40 shadow-lg shadow-rose-500/5' : 'bg-slate-950 border-slate-900'}`}>
                  <div className="space-y-1.5 max-w-md">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">System Authenticity Verdict Report</span>
                      <div className={`text-base font-black tracking-wider ${verdict === 'ACCEPTED' ? 'text-emerald-400' : verdict.includes('REJECTED') ? 'text-rose-400' : 'text-slate-400'}`}>
                        {verdict}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        {verdict === 'ACCEPTED' && "✔ Check complete! The quantum disruption level is perfectly safe. The signature match is genuine and authenticated."}
                        {verdict.includes('REJECTED') && "❌ Warning! The mismatch rate broke past the epsilon buffer limit. Qubits collapsed due to channel monitoring—the document is fake."}
                        {verdict === 'AWAITING TRANSMISSION' && "Ready. Awaiting incoming photon vectors over the public communication network channel."}
                      </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 self-end sm:self-auto shadow-md ${verdict === 'ACCEPTED' ? 'bg-emerald-400 shadow-emerald-400/50' : verdict.includes('REJECTED') ? 'bg-rose-500 animate-ping' : 'bg-slate-700'}`}></div>
              </div>
          </div>

      </div>
      {/* BOTTOM SECTOR REGION WRAPPING INTERACTIVE TOOLTIPS & GRAPHS */}
      <div className="h-auto md:h-[22vh] w-full flex flex-col md:flex-row gap-5 bg-slate-950">
          
          {/* EVE RADIO ATTACK GRID Deck WITH LIVE ON-HOVER INFO GLOSSARY BOXES */}
          <div className="w-full md:w-1/2 h-auto flex flex-col justify-between border-2 border-slate-800 bg-slate-900/10 rounded-xl p-4 hover:border-slate-700/80 transition-colors duration-300 space-y-3 md:space-y-0">
              <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                  <Skull className="text-rose-400 w-4 h-4" />
                  <h3 className="text-xs font-black tracking-wider text-rose-400 uppercase">3. Threat Controller Panel (Eve)</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
                  {[
                    { mode: 'none', label: '0. No Attack (Ideal Channel)' },
                    { mode: 'impersonation', label: '1. Impersonation Attack' },
                    { mode: 'intercept_resend', label: '2. Intercept-Resend Attack' },
                    { mode: 'replay', label: '3. Replay Forgery Attack' },
                    { mode: 'circuit_tamper', label: '4. Circuit-Level Tamper' }
                  ].map((item) => (
                    <div 
                      key={item.mode}
                      onMouseEnter={() => setActiveTooltip(item.mode)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      className="relative"
                    >
                      <label className={`flex items-center gap-2.5 px-3 py-2 border rounded-xl cursor-pointer transition-all text-xs font-mono w-full ${attackerMode === item.mode ? 'bg-rose-950/20 border-rose-500/50 text-rose-400 font-black shadow-inner shadow-black' : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'}`}>
                        <input 
                          type="radio" 
                          name="attackerMode" 
                          value={item.mode} 
                          checked={attackerMode === item.mode}
                          onChange={(e) => setAttackerMode(e.target.value)}
                          className="text-rose-600 focus:ring-0 bg-slate-950 border-slate-900 w-3.5 h-3.5 flex-shrink-0" 
                        />
                        <span className="truncate pr-1">{item.label}</span>
                      </label>

                      {/* POPUP INFORMATION CHIPS EXTRACTED NATIVELY FROM THE GLOSSARY STATE DATA */}
                      {activeTooltip === item.mode && (
                        <div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 border-2 border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 font-sans shadow-2xl z-50 pointer-events-none leading-relaxed transition-opacity">
                          <div className="font-black text-rose-400 mb-1 uppercase tracking-wider text-[11px]">Threat Glossary Details:</div>
                          {GLOSSARY[item.mode]}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
          </div>

          {/* RE-ENGINEERED HORIZONTAL statistIC GRAPH CHANNELS WITH CRITICAL EPSILON INDICATORS */}
          <div className="w-full md:w-1/2 h-auto flex flex-col justify-between border-2 border-slate-800 bg-slate-900/10 rounded-xl p-4 hover:border-slate-700/80 transition-colors duration-300 space-y-4 md:space-y-0">
              <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                  <BarChart3 className="text-cyan-400 w-4 h-4" />
                  <h3 className="text-xs font-black tracking-wider text-cyan-400 uppercase">4. Security Analytics Metrics</h3>
              </div>
              
              <div className="space-y-4 my-auto py-1">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5 font-bold">
                      <span>Average Qubit Mismatch Error Rate</span>
                      <span className={`font-black ${mismatchRate > 0.08 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {(mismatchRate * 100).toFixed(2)}%
                      </span>
                    </div>
                    
                    {/* DUAL LAYER GRADIENT BAR TRACK GRAPH WITH SEGMENT CHANNELS AND AN EPSILON OVERLAY LINE */}
                    <div className="w-full bg-slate-950 border-2 border-slate-900 rounded-full h-5 p-0.5 relative overflow-hidden shadow-inner">
                      
                      {/* Live filling progress bar graphic layer */}
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ease-out ${mismatchRate > 0.08 ? 'bg-gradient-to-r from-rose-600 to-red-500 shadow-md shadow-rose-500/50' : 'bg-gradient-to-r from-emerald-600 to-green-500'}`}
                        style={{ width: `${Math.min(100, Math.max(3, mismatchRate * 100))}%` }}
                      ></div>

                      {/* Superimposed dashed orange marker indicating the Epsilon boundary limit (8% line position) */}
                      <div 
                        className="absolute top-0 bottom-0 border-l-2 border-dashed border-amber-500 z-10" 
                        style={{ left: '8%' }}
                        title="Epsilon Guard Buffer Threshold (0.080)"
                      >
                        <span className="absolute top-full left-0 text-[8px] font-sans font-bold text-amber-500 tracking-tighter bg-slate-950 px-0.5 rounded -translate-y-4">ε=8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center text-mono text-xs">
                      <div className="bg-slate-950 border-2 border-slate-900 p-2.5 rounded-xl">
                        <span className="text-slate-500 block uppercase text-[8px] tracking-widest font-black mb-1">Statistical Limit (ε)</span>
                        <span className="text-base font-black text-amber-500 font-mono">0.080</span>
                      </div>
                      <div className="bg-slate-950 border-2 border-slate-900 p-2.5 rounded-xl">
                        <span className="text-slate-500 block uppercase text-[8px] tracking-widest font-black mb-1">Aer Simulator Shots</span>
                        <span className="text-base font-black text-slate-300 font-mono">300</span>
                      </div>
                  </div>
              </div>
          </div>

      </div>

    </div>
  );
}
