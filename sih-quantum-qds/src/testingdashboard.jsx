import React, { useState } from 'react';
import { Shield, ArrowLeft, Search, UserPlus, Check } from 'lucide-react';

// Flawless standalone link directing straight to your separate third page file natively
import SecurePage from './securepage';

export default function DashboardHub({ onNavigateBack }) {
  // --- INTERNAL INDEPENDENT SCREEN SWITCHBOARD ---
  // Tracks whether to show the friend list hub view or the clean securepage simulator view
  const [activeScreenStage, setActiveScreenStage] = useState('hub_view');

  // --- SEARCH AND INVITATION SYSTEM STATE MATRIX ---
  const [searchQuery, setSearchQuery] = useState('');
  const [invitationsSent, setInvitationsSent] = useState({});
  const [searchFeedback, setSearchErrorFeedback] = useState('');

  // --- HARDCODED REGISTERED COMPONENT SEARCH MESH ARRAY ---
  const MOCK_GLOBAL_DIRECTORY = [
    { id: 'dev', name: 'Dev (Node-D Outpost)', desc: 'Remote developer sandbox node. Configured for experimental state channel testing.', active: true },
    { id: 'eve', name: 'Eve (Interception Probe)', desc: 'Warning: Malicious hardware profile signature flagged by central mainframe.', active: false },
    { id: 'system_root', name: 'Mainframe Core Router', desc: 'Protected primary loop hub. Access restricted to administrator keys.', active: false }
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : MOCK_GLOBAL_DIRECTORY.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSendInvitation = (nodeId) => {
    setInvitationsSent(prev => ({ ...prev, [nodeId]: true }));
  };

    // --- REDIRECT ENGINE CONDITIONAL CHECK ---
  // If active screen state drops into securepage view, unmount the hub and swap the screens completely
  if (activeScreenStage === 'securepage_view') {
    return (
      <SecurePage 
        onBackToHub={() => {
          // Lets user safely exit securepage.jsx and return right back to this selection hub
          setActiveScreenStage('hub_view');
        }}
      />
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen w-screen overflow-x-hidden flex flex-col p-4 sm:p-6 space-y-6 animate-[fadeIn_0.4s_ease-out]">
      
      {/* 👑 INDEPENDENT PAGE NAVBAR GRID - PRESERVED UNTOUCHED */}
      <div className="flex items-center justify-between border-2 border-slate-800 bg-slate-900/40 rounded-xl px-5 py-4 backdrop-blur-md shadow-2xl shadow-black/50 w-full">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400/40 shadow-lg shadow-indigo-500/20">
            <Shield className="w-5 h-5 text-indigo-200 animate-pulse" />
            <div className="absolute font-black text-xs text-white tracking-tighter bottom-1 right-2">Q</div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-widest text-slate-100 uppercase">Q-SECURE HUB</h1>
            <p className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase">Verified Node Route Operator</p>
          </div>
        </div>
        
        {/* DISPATCH ACTION LOGOUT TO HOME */}
        <button 
          onClick={onNavigateBack}
          className="flex items-center gap-2 px-4 py-2 border-2 border-slate-800 bg-slate-950/80 hover:bg-slate-900 hover:border-slate-700 active:scale-[0.97] transition-all rounded-xl text-xs font-bold text-slate-300 tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>LOGOUT</span>
        </button>
      </div>
      {/* 📊 FAVORITES LIST SECTION COMPONENT GRID */}
      <div className="flex-1 flex flex-col items-center justify-start max-w-4xl mx-auto w-full space-y-8 py-6">
        
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-slate-200 flex items-center justify-center gap-2">
             Quantum Node Router Center
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Authenticated Source: <b className="text-indigo-400">alice (Node-A)</b>. Select target destination from your favourite list:
          </p>
        </div>

        {/* 3 CORE PRE-CONFIGURED NODES TRACK MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {[
            { id: 'bob', name: '1. Bob (Node-B Receiver)', desc: 'Primary signature recipient station. Linked directly to securepage.jsx loop parameters.', active: true },
            { id: 'charlie', name: '2. Charlie (Node-C Relay)', desc: 'Secondary system terminal outpost. Offline for polarization re-alignment.', active: false },
            { id: 'another_name', name: '3. Dev Sandbox Node', desc: 'Auxiliary backup mainframe node lines. Currently locked by core operations.', active: false }
          ].map((peer) => (
            <button
              key={peer.id}
              disabled={!peer.active}
              onClick={() => {
                // REDIRECT ACTION TRIGGER: Bypasses parent callbacks and switches views inside dashboard.jsx directly!
                setActiveScreenStage('securepage_view');
              }}
              className={`border-2 p-4 rounded-xl flex flex-col justify-between text-left h-48 shadow-2xl transition-all ${peer.active ? 'border-slate-800 bg-slate-900/10 hover:border-indigo-500 hover:scale-[1.02] cursor-pointer' : 'border-slate-900 bg-slate-950 text-slate-600 cursor-not-allowed'}`}
            >
              <div>
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-xs font-black uppercase tracking-wider ${peer.active ? 'text-indigo-400' : 'text-slate-500'}`}>{peer.name}</span>
                  <span className={`text-[8px] font-mono px-2 py-0.5 rounded border ${peer.active ? 'border-emerald-500/30 text-emerald-400 bg-emerald-950/10' : 'border-slate-800 text-slate-700'}`}>{peer.active ? 'ONLINE' : 'OFFLINE'}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium mt-1">{peer.desc}</p>
              </div>
              {peer.active && (
                <span className="text-[10px] font-mono font-bold text-indigo-400 tracking-wider mt-2 self-end flex items-center gap-1">
                  SECURE PAGE LINK →
                </span>
              )}
            </button>
          ))}
        </div>
        {/* 🔍 COMPONENT ADVANCED NETWORK DISCOVERY SEARCH BAR */}
        <div className="w-full max-w-3xl border-2 border-slate-800 bg-slate-900/20 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
            <Search className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs font-black tracking-wider text-slate-300 uppercase">Search More & Send Quantum Invitations</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search global cryptographic directory nodes... (Type 'dev' or 'system')"
              className="flex-1 bg-slate-950 border-2 border-slate-900 rounded-xl px-4 py-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700"
            />
          </div>

          {/* DYNAMIC SEARCH RESULT BOX OUTPUT */}
          {searchQuery.trim() !== '' && (
            <div className="space-y-2 pt-2 animate-[fadeIn_0.15s_ease-out]">
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-slate-800/60 bg-slate-950/50 p-3 rounded-xl gap-3 sm:gap-0 font-mono text-xs">
                    <div>
                      <div className="font-bold text-slate-300 flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className={`text-[8px] px-1.5 py-0.2 rounded border ${item.active ? 'border-emerald-500/20 text-emerald-400' : 'border-slate-800 text-slate-600'}`}>{item.active ? 'AVAILABLE' : 'BLOCKED'}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 max-w-lg leading-normal font-sans">{item.desc}</p>
                    </div>

                    <button
                      type="button"
                      disabled={!item.active || invitationsSent[item.id]}
                      onClick={() => handleSendInvitation(item.id)}
                      className={`px-3 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 ${invitationsSent[item.id] ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-500/20' : !item.active ? 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95'}`}
                    >
                      {invitationsSent[item.id] ? <Check className="w-3 h-3" /> : <UserPlus className="w-3 h-3" />}
                      {invitationsSent[item.id] ? 'INVITED' : 'SEND INVITE'}
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-2 text-[11px] font-mono text-slate-600">
                  // No matching security nodes discovered inside active router directory fields.
                </div>
              )}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
