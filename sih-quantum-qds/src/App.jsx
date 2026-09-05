import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Skull, BarChart3, Send, RefreshCw, CheckCircle, Lock, ShieldAlert, ArrowLeft, Shield, Cpu, Users, Globe, MessageSquare, Mail, Phone } from 'lucide-react';

// Flawless, case-correct import targeting your separate local page file natively
import DashboardHub from './dashboard';

export default function App() {
  // --- MULTI-STAGE STEP ENGINE ROUTER CONTROLLER ---
  // Stages available: 'home' | 'login' | 'dashboard'
  const [currentViewStage, setCurrentViewStage] = useState('home');
  const [selectedFriend, setSelectedFriend] = useState(null);

  // --- HARDCODED IDENTITY PROFILES FOR SIH HANDLES ---
  const [usernameInput, setUsernameInput] = useState('alice');
  const [passwordInput, setPasswordInput] = useState('Quantum123');
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState('');

    // --- INTERACTIVE PARAMETER LOGIC STATE LAYERS ---
  const [messageStr, setMessageStr] = useState('aditya');
  const [customBasis, setCustomBasis] = useState('XZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZ');
  const [attackerMode, setAttackerMode] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  const [showParticleAnim, setShowParticleAnim] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // --- LIVE TELEMETRY ANALYTICS MATRICES ---
  const [mismatchRate, setMismatchRate] = useState(0.00);
  const [verdict, setVerdict] = useState('AWAITING TRANSMISSION');
  const [binarySent, setBinarySent] = useState('011010011101100010101101110010011010');
  const [flaggedBinary, setFlaggedBinary] = useState('011010011101100010101101110010011010');
  const [decodedOutput, setDecodedOutput] = useState('🟢 a: 011010   🟢 d: 011101   🟢 i: 100010   🟢 t: 101101   🟢 y: 110010   🟢 a: 011010');

  const [logs, setLogs] = useState([
    '// System secure state line established. System polling on port 8000 operational.',
    '// Enter message tokens and align your custom polarization basis string to evaluate.'
  ]);
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (usernameInput === 'alice' && passwordInput === 'Quantum123') {
      setLoginErrorText('');
      
      // FIXED: Safely calls your exact case-correct router view state variable
      setCurrentViewStage('dashboard'); 
    } else {
      setLoginErrorText('Authentication Failure: Invalid credentials for this terminal node.');
    }
  };
  const handleTeleportSignature = async () => {
    if (customBasis.length !== bitsNeeded || bitsNeeded === 0) return;
    setIsLoading(true);
    setShowParticleAnim(true);
    setVerdict('TELEPORTING...');
    const BACKEND_URL = 'http://localhost:8000/simulate';
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message_str: messageStr, basis_str: customBasis, adversary_mode: attackerMode })
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
      setVerdict('CONNECTION ERROR');
      setLogs(['[❌ ERROR] Fatal: Could not reach your Python Qiskit backend on port 8000. Ensure uvicorn is running.']);
    }
  };

  const isButtonLocked = customBasis.length !== bitsNeeded || bitsNeeded === 0;

  const renderGlobalHeaderNavbar = () => (
    <div className="flex items-center justify-between border-2 border-slate-800 bg-slate-900/40 rounded-xl px-5 py-4 backdrop-blur-md shadow-2xl shadow-black/50 w-full transition-all duration-300">
      <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => setCurrentViewStage('home')}>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400/40 shadow-lg shadow-indigo-500/20">
          <Shield className="w-5 h-5 text-indigo-200 animate-pulse" />
          <div className="absolute font-black text-xs text-white tracking-tighter bottom-1 right-2">Q</div>
        </div>
        <div>
          <h1 className="text-xl font-black tracking-widest text-slate-100 uppercase">Q-SECURE</h1>
          <p className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase">Quantum Cryptographic Dashboard</p>
        </div>
      </div>
      {currentViewStage !== 'home' && (
        <button 
          onClick={() => {
            if (currentViewStage === 'dashboard') setCurrentViewStage('home');
            else if (currentViewStage === 'login') setCurrentViewStage('home');
            else setCurrentViewStage('home');
          }}
          className="flex items-center gap-2 px-4 py-2 border-2 border-slate-800 bg-slate-950/80 hover:bg-slate-900 hover:border-slate-700 active:scale-[0.97] transition-all rounded-xl text-xs font-bold text-slate-300 tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>BACK</span>
        </button>
      )}
    </div>
  );
  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen w-screen overflow-x-hidden select-none flex flex-col p-4 sm:p-6 space-y-12">
      {currentViewStage !== 'dashboard' && renderGlobalHeaderNavbar()}

      {/* --- SUBVIEW ENGINE 1: MAIN LANDING HOME PRODUCT VIEW --- */}
      {currentViewStage === 'home' && (
        <div className="flex flex-col space-y-12 animate-[fadeIn_0.6s_ease-out] w-full">
          {/* HERO AREA */}
          <section className="flex flex-col items-center text-center max-w-4xl mx-auto py-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5 animate-spin" /> Advanced Quantum Signature Protections Live
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400 leading-tight">
              Teleportation-Based Quantum Digital Signatures
            </h2>
            <p className="text-sm sm:text-lg text-slate-400 font-medium max-w-2xl leading-relaxed">
              Mitigate communication vulnerabilities using information-theoretic cryptographic protocols. Instantly identify routing interceptors, circuit tampering, and active signature forgeries via our Qiskit core interface loop.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setCurrentViewStage('login')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 active:scale-95 border border-indigo-500/20 text-white font-black tracking-widest text-xs uppercase shadow-2xl shadow-indigo-600/20 rounded-xl"
              >
                Access Cryptographic Terminal
              </button>
            </div>
          </section>

          {/* METRICS STACK */}
          <section className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            <div className="border-2 border-slate-800 bg-slate-900/10 rounded-2xl p-6 flex items-center gap-5 hover:border-slate-700 hover:scale-[1.02] transition-all duration-300 group shadow-xl">
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-slate-100">4,821+</div>
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">Active Secured User Nodes</p>
              </div>
            </div>
            <div className="border-2 border-slate-800 bg-slate-900/10 rounded-2xl p-6 flex items-center gap-5 hover:border-slate-700 hover:scale-[1.02] transition-all duration-300 group shadow-xl">
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl group-hover:bg-rose-500/20 transition-colors">
                <ShieldAlert className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-slate-100">142,912</div>
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">Adversary Attacks Prevented</p>
              </div>
            </div>
            <div className="border-2 border-slate-800 bg-slate-900/10 rounded-2xl p-6 flex items-center gap-5 hover:border-slate-700 hover:scale-[1.02] transition-all duration-300 group shadow-xl">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-slate-100">0.00%</div>
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">False Negative Failure Rate</p>
              </div>
            </div>
          </section>
          {/* STRUCTURAL ARCHITECTURE COMPARISON PANELS */}
          <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
            <div className="border-2 border-slate-800 bg-slate-900/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-4 hover:border-indigo-500/30 transition-all duration-300 shadow-xl shadow-black/40">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-[10px] font-mono font-bold tracking-wider uppercase">Core Innovation Matrix</div>
                <h3 className="text-lg sm:text-xl font-black tracking-wide text-slate-100 uppercase">Why Q-Secure Is Different</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">Standard digital signatures rely heavily on public-key infrastructure (RSA or ECC) which can be factored and broken by emerging quantum computer threats. Q-Secure utilizes information-theoretic security bound configurations. By running multi-qubit loops inside our Qiskit engine, any attempt to intercept data instantly collapses the state vector, exposing the attacker automatically.</p>
              </div>
              <ul className="text-[11px] sm:text-xs font-mono text-slate-500 space-y-2 pt-2 border-t border-slate-800/60">
                <li className="flex items-center gap-2 text-indigo-400/90 font-bold">💎 Quantum No-Cloning Protection Enabled</li>
                <li className="flex items-center gap-2 text-indigo-400/90 font-bold">⚡ Teleportation Pauli Correction Vectors</li>
                <li className="flex items-center gap-2 text-indigo-400/90 font-bold">🛡️ Active Channel Distortion Epsilon Monitor</li>
              </ul>
            </div>
            <div className="border-2 border-slate-800 bg-slate-900/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-4 hover:border-emerald-500/20 transition-all duration-300 shadow-xl shadow-black/40">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">Operational Mandate</div>
                <h3 className="text-lg sm:text-xl font-black tracking-wide text-slate-100 uppercase">What We Do Natively</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">Our application converts raw alphanumeric message assets into distinct 6-bit binary token arrays, mapping them onto localized photon states. We route these entanglement chains across simulated communication networks. Bob receives classical bit measurements, re-aligns them with custom basis polarization strings, and evaluates the Pauli trace discrepancies to generate an absolute security verdict.</p>
              </div>
              <ul className="text-[11px] sm:text-xs font-mono text-slate-500 space-y-2 pt-2 border-t border-slate-800/60">
                <li className="flex items-center gap-2 text-emerald-400/90 font-bold">⚙️ Live 6-bit Alphanumeric Map Stream Parsing</li>
                <li className="flex items-center gap-2 text-emerald-400/90 font-bold">🧬 Qiskit AerSimulator Gate Telemetry Loops</li>
                <li className="flex items-center gap-2 text-emerald-400/90 font-bold">📊 Dynamic Forgery Marker Replacement Output</li>
              </ul>
            </div>
          </section>

          {/* OPERATIONS CONTACTS */}
          <section className="max-w-6xl mx-auto w-full border-2 border-slate-800 bg-slate-900/20 rounded-2xl p-6 sm:p-8 hover:border-slate-700/60 transition-colors duration-300 shadow-md">
            <div className="flex items-center gap-2 border-b-2 border-slate-800 pb-3 mb-6">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xs font-black tracking-widest text-slate-200 uppercase">Connect with Q-Secure Control Center</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono text-slate-400">
              <div className="flex items-center gap-3 p-3.5 bg-slate-950 border-2 border-slate-800 rounded-xl">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>ops@qsecure.sih.gov.in</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-slate-950 border-2 border-slate-800 rounded-xl">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+91 11 2301-QSEC</span>
              </div>
            </div>
          </section>

          {/* FIXED PLATFORM FOOTER STRIP */}
          <footer className="w-full border-t border-slate-900 pt-6 pb-2 text-center text-[10px] font-mono text-slate-600 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <p>© 2026 Q-SECURE SYSTEMS LAB. STRATEGIC CRYPTO SERVICE. ALL RIGHTS RESERVED.</p>
            <p className="tracking-widest uppercase text-indigo-500/70 font-black">Smart India Hackathon Core Prototype Release</p>
          </footer>
        </div>
      )}
      {/* 📑 USER TERMINAL POPUP VALIDATION INTERFACE */}
      {currentViewStage === 'login' && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-md border-2 border-slate-800 bg-slate-900 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative shadow-black">
            
            {/* ESCAPE TRIGGER BOX */}
            <button 
              onClick={() => { setCurrentViewStage('home'); setLoginErrorText(''); }}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 font-mono text-xs px-2 py-1 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            >
              ESC
            </button>

            <div className="flex flex-col items-center text-center space-y-2 border-b-2 border-slate-900 pb-4">
              <Lock className="w-8 h-8 text-indigo-400 animate-pulse" />
              <h3 className="text-base font-black tracking-wider uppercase text-slate-100">Terminal Authorization</h3>
              <p className="text-[10px] font-mono text-slate-500">Security profiles are pre-loaded for SIH evaluation</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* ALPHANUMERIC ACCOUNT USERNAME ENTRY */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">User Identity Handle ID</label>
                <input 
                  type="text" 
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter terminal name (e.g. alice)"
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700" 
                  required 
                />
              </div>

              {/* MASKED SYSTEM PASSWORD MECHANICS WITH TOGGLE CHIP */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Cryptographic Password Pin</label>
                <div className="relative w-full">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter decryption code..."
                    className="w-full bg-slate-950 border-2 border-slate-800 rounded-xl pl-4 pr-16 py-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700" 
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono font-black text-slate-500 hover:text-indigo-400 transition-colors border border-slate-800 px-2 py-1 rounded bg-slate-950"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {/* DYNAMIC ERROR TEXT FEED CHIP */}
              {loginErrorText && (
                <p className="text-[10px] font-mono text-rose-400 font-bold bg-rose-950/20 p-2.5 rounded-lg border border-rose-950">
                  {loginErrorText}
                </p>
              )}

              {/* ACCESS SHIP CONTROLLER DISPATCH SUBMIT BUTTON */}
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-4 rounded-xl text-xs uppercase tracking-widest transition-transform active:scale-[0.98] shadow-lg shadow-indigo-600/10 border border-indigo-500/20"
              >
                Let's Go →
              </button>
            </form>
          </div>
        </div>
      )}
      {/* 🚀 VIEW REGION 3: DIRECTLY RENDERS YOUR INDEPENDENT DASHBOARD.JSX COMPONENT AS A FULL PAGE */}
      {currentViewStage === 'dashboard' && (
        <div className="fixed inset-0 bg-slate-950 z-40 overflow-y-auto w-screen h-screen">
          <DashboardHub 
            onLogout={() => {
              // Gracefully unmounts your dashboard and sets the layout back to home
              setCurrentViewStage('home');
            }}
            onSelectReceiver={(receiverNodeName) => {
              alert(`Quantum connection successfully established with ${receiverNodeName}! Ready to load step 3.`);
            }}
          />
        </div>
      )}

    </div>
  );
}
