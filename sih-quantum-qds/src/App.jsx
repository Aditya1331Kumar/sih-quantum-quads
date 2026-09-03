import React, { useState } from 'react';
import { User, ShieldCheck, Skull, BarChart3, Send, RefreshCw, CheckCircle, Fingerprint, Lock, ShieldAlert } from 'lucide-react';

export default function App() {
  // --- UI INPUT & RUNTIME CONTROL STATES ---
  const [messageStr, setMessageStr] = useState('SIH2026');
  const [secretBasisChar, setSecretBasisChar] = useState('Z'); // Primary basis choice (Auto-scaled by backend)
  const [attackerMode, setAttackerMode] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  
  // --- STATISTICAL DATA PACK STATES ---
  const [mismatchRate, setMismatchRate] = useState(0.00);
  const [verdict, setVerdict] = useState('AWAITING TRANSMISSION');
  const [binarySent, setBinarySent] = useState('');
  const [flaggedBinary, setFlaggedBinary] = useState('');
  const [decodedOutput, setDecodedOutput] = useState('');
  
  // --- LOGGING CONSOLE HISTORY MATRIX ---
  const [logs, setLogs] = useState([
    '// SYSTEM CORE INITIALIZED: Ready to route teleportation vectors.',
    '// INTERFACE GRIDS STATUS: Operational. Waiting for token string...'
  ]);

  // Total quantum resource footprint calculator (Each alphanumeric character mapping needs 6 bits)
  const totalQubitsRequired = (messageStr ? messageStr.length : 0) * 6;

    const handleTeleportSignature = async () => {
    if (!messageStr || messageStr.trim() === '') {
      setVerdict('INVALID INPUT');
      return;
    }

    setIsLoading(true);
    setVerdict('TELEPORTING...');
    setLogs([
      `[🕒 EVENT] Signature compilation requested for text segment: "${messageStr}"`,
      `[🧬 QUANTUM] Mapping text string to array chains using an expanded 6-bit charmap...`,
      `[🛡️ BOUNDS] Activating physical channel safeguards. Epsilon noise guard set at 0.080.`,
      `[⚠️ ALERT] Initializing network configuration path under intervention channel: ${attackerMode.toUpperCase()}`
    ]);

    // Using localhost to align perfectly with standard browser security origins
    const BACKEND_URL = 'http://localhost:8000/simulate'; 

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          basis: secretBasisChar,       // Aligns perfectly with SimulationRequest.basis
          message_str: messageStr,      // Aligns perfectly with SimulationRequest.message_str
          adversary_mode: attackerMode  // Aligns perfectly with SimulationRequest.adversary_mode
        })
      });

      if (!response.ok) throw new Error('Network bridge rejected communication');
      const result = await response.json();
      
      // Map data variables directly from your Qiskit simulation script payload response
      setMismatchRate(result.mismatch_rate ?? 0.00);
      setVerdict(result.verdict ?? 'UNKNOWN STATUS');
      setBinarySent(result.binary_sent ?? '');
      setFlaggedBinary(result.flagged_binary ?? '');
      setDecodedOutput(result.decoded_output ?? '');

      // Dynamically append logs based on the statistical threat threshold outcome
      const errorSpikeText = ((result.mismatch_rate ?? 0) * 100).toFixed(2) + '%';
      const isRejected = result.verdict && result.verdict.includes('REJECTED');

      setLogs(prev => [
        ...prev,
        `[✅ LINK] State vectors telemetry successfully processed across ${totalQubitsRequired} active qubits.`,
        `[📈 METRIC] Bob calculated an Average Mismatch Rate of ${errorSpikeText} per qubit.`,
        isRejected 
          ? `[🚨 CRITICAL] Forgery detected! Wavefunction collapsed on manipulated nodes. Flagged stream: ${result.flagged_binary}`
          : `[🔒 SECURE] Quantum cryptographic state integrity verified completely. Perfect information-theoretic security match.`
      ]);

    } catch (error) {
      setVerdict('CONNECTION RUNTIME FAILURE');
      setLogs(prev => [
        ...prev,
        '[❌ ERROR] Fatal: Could not communicate with Python Qiskit Engine on port 8000. Verify uvicorn server is actively polling.'
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-slate-950 text-slate-100 font-sans h-screen w-screen overflow-hidden select-none flex flex-col p-4 space-y-4">
      
      {/* GLOWING MASTER HEADER SUB-PANEL */}
      <div className="flex items-center justify-between border border-slate-800 bg-slate-900/40 rounded-xl px-6 py-3 backdrop-blur-md shadow-lg shadow-indigo-500/5 transition-all duration-300">
        <div className="flex items-center gap-3">
          <Fingerprint className="text-indigo-500 w-6 h-6 animate-pulse" />
          <div>
            <h1 className="text-md font-black tracking-widest text-slate-200">QUANTUM DIGITAL SIGNATURE PROTOCOL</h1>
            <p className="text-[10px] font-mono text-indigo-400 tracking-wider">TELEPORTATION-BASED CYBER THREAT DETECTION FRAMEWORK</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">QISKIT CORE LOCAL: ACTIVE</span>
        </div>
      </div>

      {/* TOP SECTION Grid: 50% / 50% split wrapped inside 70vh bounds */}
      <div className="flex gap-4 h-[58vh] w-full">
          
          {/* 👩‍💻 ALICE'S TRANSMITTER (50% Width Panel) */}
          <div className="w-1/2 h-full border border-slate-800/80 bg-slate-900/30 rounded-xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-indigo-500/30">
              <div>
                  <div className="flex items-center gap-3 border-b border-slate-800/60 pb-3 mb-6">
                      <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <User className="text-indigo-400 w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-sm font-black uppercase tracking-wider text-indigo-400">Alice • Signer Workspace</h2>
                        <p className="text-[10px] text-slate-500 font-mono">Qubit signature vector configuration block</p>
                      </div>
                  </div>
                  
                  <div className="space-y-5">
                      <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Message payload string</label>
                          <input 
                            type="text"
                            value={messageStr}
                            onChange={(e) => setMessageStr(e.target.value.replace(/[^A-Za-z0-9 .]/g, ""))}
                            className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 font-mono tracking-wide focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200"
                            placeholder="Type alphanumeric content..."
                            maxLength={32}
                          />
                          <div className="mt-1.5 flex justify-between text-[10px] font-mono text-slate-500">
                            <span>Allowed keys: A-Z, a-z, 0-9, spaces, dots</span>
                            <span className="text-indigo-400 font-bold">{totalQubitsRequired} Quantum States Generated</span>
                          </div>
                      </div>

                      <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Primary target state basis selection</label>
                          <div className="flex gap-3">
                            {['Z', 'X'].map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => setSecretBasisChar(b)}
                                className={`flex-1 py-3 text-xs font-mono font-bold rounded-lg border transition-all duration-200 ${secretBasisChar === b ? 'bg-indigo-600/10 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/5' : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                              >
                                {b === 'Z' ? 'Computational Basis (|0⟩ / |1⟩)' : 'Hadamard Basis (|+⟩ / |-⟩)'}
                              </button>
                            ))}
                          </div>
                      </div>
                  </div>
              </div>

              <div className="pt-4 border-t border-slate-800/40">
                  <button 
                    onClick={handleTeleportSignature}
                    disabled={isLoading || !messageStr || messageStr.length === 0}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-950/50 disabled:text-slate-600 disabled:border-slate-900 border border-indigo-500/20 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 group"
                  >
                      {isLoading ? (
                        <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" />
                      ) : (
                        <Send className="w-4 h-4 text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      )}
                      {isLoading ? 'EXECUTING WAVEFUNCTION MODEL...' : 'GENERATE & TELEPORT SIGNATURE'}
                  </button>
              </div>
          </div>
          {/* 👨‍💼 BOB'S VERIFIER (50% Width Panel) */}
          <div className="w-1/2 h-full border border-slate-800/80 bg-slate-900/20 rounded-xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-emerald-500/20">
              <div>
                  <div className="flex items-center gap-3 border-b border-slate-800/60 pb-3 mb-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <ShieldCheck className="text-emerald-400 w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-sm font-black uppercase tracking-wider text-emerald-400">Bob • Verification Engine</h2>
                        <p className="text-[10px] text-slate-500 font-mono">Real-time measurement and Pauli trace logs</p>
                      </div>
                  </div>

                  {/* HIGH-TECH EMBEDDED CONSOLE BLOCK */}
                  <div className="bg-slate-950/90 border border-slate-900 rounded-xl p-4 h-56 overflow-y-auto font-mono text-[11px] text-slate-400 space-y-1.5 shadow-inner">
                      {logs.map((log, index) => (
                        <p key={index} className={log && log.includes('[❌ ERROR]') ? 'text-rose-400' : log && (log.includes('[🔒 SECURE]') || log.includes('[SUCCESS]')) ? 'text-emerald-400' : log && log.includes('[🚨 CRITICAL]') ? 'text-amber-400' : 'text-slate-400'}>
                          {log}
                        </p>
                      ))}
                  </div>
              </div>

              {/* CONTEXTUAL SECURITY VERDICT DISPLAY STATUS */}
              <div className={`border rounded-xl p-4 flex items-center justify-between transition-all duration-300 ${verdict && verdict.includes('REJECTED') ? 'bg-rose-950/20 border-rose-500/30 shadow-lg shadow-rose-500/5' : verdict === 'ACCEPTED' ? 'bg-emerald-950/20 border-emerald-500/30 shadow-lg shadow-emerald-500/5' : 'bg-slate-950 border-slate-800'}`}>
                  <div className="flex items-center gap-3">
                      {verdict && verdict.includes('REJECTED') ? (
                        <ShieldAlert className="w-5 h-5 text-rose-500 animate-bounce" />
                      ) : verdict === 'ACCEPTED' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Lock className="w-5 h-5 text-slate-600" />
                      )}
                      <div>
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Verification Verdict Token</span>
                          <div className={`text-md font-black tracking-wide ${verdict && verdict.includes('REJECTED') ? 'text-rose-500' : verdict === 'ACCEPTED' ? 'text-emerald-500' : 'text-slate-400'}`}>
                            {verdict}
                          </div>
                      </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${verdict && verdict.includes('REJECTED') ? 'bg-rose-500 animate-ping' : verdict === 'ACCEPTED' ? 'bg-emerald-500' : 'bg-slate-800'}`}></div>
              </div>
          </div>

      </div>

      {/* BOTTOM SECTION: 30vh Height Complete 100% Width Footer Space */}
      <div className="h-[25vh] w-full p-4 flex gap-4 bg-slate-950 border border-slate-950/10">
          
          {/* 🥷 ATTACKER CONSOLE PANEL (Left Half Footer) */}
          <div className="w-1/2 h-full flex flex-col justify-between border border-slate-800 bg-slate-900/10 rounded-xl p-4 transition-all duration-300 hover:border-rose-500/20">
              <div className="flex items-center gap-2 border-b border-slate-800/60 pb-2 mb-2">
                  <Skull className="text-rose-500 w-4 h-4" />
                  <h3 className="text-xs font-black tracking-wider text-rose-500 uppercase">Eve • Adversary Manipulation Deck</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 my-auto">
                  {[
                    { mode: 'none', label: 'No Intervention (Ideal Channel)' },
                    { mode: 'impersonation', label: '1. Impersonation Attack' },
                    { mode: 'intercept_resend', label: '2. Intercept-Resend Attack' },
                    { mode: 'circuit_tamper', label: '4. Circuit-Level Tamper' }
                  ].map((item) => (
                    <label 
                      key={item.mode} 
                      className={`flex items-center gap-2.5 px-3 py-2 border rounded-lg cursor-pointer transition-all duration-150 text-[11px] font-mono ${attackerMode === item.mode ? 'bg-rose-950/20 border-rose-500/40 text-rose-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                    >
                        <input 
                          type="radio" 
                          name="attackerMode" 
                          value={item.mode} 
                          checked={attackerMode === item.mode}
                          onChange={(e) => setAttackerMode(e.target.value)}
                          className="text-rose-600 focus:ring-0 bg-slate-950 border-slate-800 w-3 h-3" 
                        />
                        <span>{item.label}</span>
                    </label>
                  ))}
              </div>
          </div>

          {/* 📊 SECURITY METRICS GRAPH BLOCKS (Right Half Footer) */}
          <div className="w-1/2 h-full flex flex-col justify-between border border-slate-800 bg-slate-900/10 rounded-xl p-4 transition-all duration-300 hover:border-cyan-500/20">
              <div className="flex items-center gap-2 border-b border-slate-800/60 pb-2 mb-2">
                  <BarChart3 className="text-cyan-400 w-4 h-4" />
                  <h3 className="text-xs font-black tracking-wider text-cyan-400 uppercase">Information-Theoretic Security Bounds</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center my-auto">
                  <div className="bg-slate-950 border border-slate-900/80 p-2.5 rounded-lg">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Avg Quantum Error</span>
                      <div className={`text-base font-mono font-black ${mismatchRate > 0.08 ? 'text-rose-500' : mismatchRate > 0 ? 'text-slate-200' : 'text-slate-400'}`}>
                        {(mismatchRate * 100).toFixed(2)}%
                      </div>
                  </div>
                  <div className="bg-slate-950 border border-slate-900/80 p-2.5 rounded-lg">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Statistical Limit (ε)</span>
                      <div className="text-base font-mono font-black text-amber-500">0.080</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-900/80 p-2.5 rounded-lg">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Simulation Shots</span>
                      <div className="text-base font-mono font-black text-slate-400">300</div>
                  </div>
              </div>
          </div>

      </div>

    </div>
  );
}
