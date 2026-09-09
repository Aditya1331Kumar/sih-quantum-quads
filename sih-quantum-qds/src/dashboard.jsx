import React, { useState, useEffect } from 'react';
import { Shield, ArrowLeft, Search, UserPlus, Check, Heart, Play, Info, Home, LayoutDashboard, MessageSquare, ShieldAlert, Settings, User, LogOut, Trash2 } from 'lucide-react';

// Standalone link directing straight to your separate third page file natively
import SecurePage from './securepage';

export default function DashboardHub({ onNavigateBack }) {
  // --- INTERNAL INDEPENDENT SCREEN SWITCHBOARD ---
  const [activeScreenStage, setActiveScreenStage] = useState('securepage_view'); // Keeps selected dashboard as default view
  const [activeTab, setActiveTab] = useState('dashboard');

  // --- SEARCH AND INVITATION SYSTEM STATE MATRIX ---
  const [searchQuery, setSearchQuery] = useState('');
  const [invitationsSent, setInvitationsSent] = useState({});
  const [searchFeedback, setSearchErrorFeedback] = useState('');

  // --- AUTOMATED INJECTOR FOR THE MOTION KEYFRAME STYLES TO PREVENT BLANK SCREEN CRASHES ---
  useEffect(() => {
    const styleId = "qsecure-dashboard-premium-animations-sheet";
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.innerHTML = `
        @keyframes slideInLeftEdge {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRightEdge {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUpEdge {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left {
          animation: slideInLeftEdge 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-right {
          animation: slideInRightEdge 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideInUpEdge 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

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
  // --- REUSABLE UNBOXED LIGHT SIDEBAR COMPONENT LINK LAYOUT ---
  const renderSidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-6 bg-white border-r border-slate-200/80 font-sans select-none">
      <div className="space-y-8">
        
        {/* 👑 TOP ASSET: UNBOXED CORE BRAND RECONSTRUCTION */}
        <div className="flex items-center gap-3.5 pb-2 border-b border-slate-100">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
            <Shield className="w-5 h-5 text-white animate-pulse" />
            <img src="/logo.png" alt="" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0" onError={(e) => e.target.style.opacity = 0} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-widest text-slate-900 uppercase">Q-Secure</h1>
            <p className="text-[10px] font-mono font-bold text-indigo-600 tracking-widest uppercase">Central Command Hub</p>
          </div>
        </div>

        {/* TWO INTERACTIVE BRIEF META INFORMATION LINES */}
        <div className="space-y-1 pl-1">
          <p className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-wider">// Operator ID: Node-A</p>
          <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">// Status: Quantum Encrypted</p>
        </div>
        {/* INTERACTIVE NAVIGATION CONTROL CHIPS DECK */}
        <nav className="flex flex-col gap-1 font-sans">
          {[
            { id: 'home', label: 'Home', icon: Home, action: onNavigateBack },
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, action: () => setActiveScreenStage('securepage_view') },
            { id: 'messaging', label: 'Messaging', icon: MessageSquare, action: null },
            { id: 'about_attacks', label: 'About Attacks', icon: ShieldAlert, action: null },
            { id: 'setting', label: 'Setting', icon: Settings, action: null },
            { id: 'profile', label: 'Profile', icon: User, action: null },
            { id: 'back', label: 'Back', icon: ArrowLeft, action: onNavigateBack },
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.action) tab.action();
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] ${isSelected ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'}`}
              >
                <IconComponent className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      {/* LOWER DESTRUCTIVE TRACK TERMINAL CHIPS */}
      <div className="pt-4 border-t border-slate-100 font-sans">
        <button
          onClick={() => {
            if(confirm("Are you sure you want to terminate this cryptographic terminal node completely?")) onNavigateBack();
          }}
          className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-rose-500 hover:bg-rose-50/50 hover:text-rose-600 transition-all duration-300 active:scale-[0.98]"
        >
          <Trash2 className="w-4 h-4 text-rose-400" />
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  );

  // --- REDIRECT ENGINE CONDITIONAL CHECK ---
  if (activeScreenStage === 'securepage_view_active') {
    return (
      <SecurePage 
        onBackToHub={() => {
          setActiveScreenStage('securepage_view');
        }}
      />
    );
  }

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen w-screen overflow-x-hidden flex selection:bg-indigo-500/10 transition-colors duration-500 relative">
      
      {/* DESKTOP SIDEBAR PANEL (GLIDES IN FROM LEFT EDGE NATIVELY) */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 flex-shrink-0 z-30 opacity-0 animate-slide-left">
        {renderSidebarContent()}
      </aside>
      {/* RIGHT MAIN CANVAS CONTAINER (GLIDES IN FROM RIGHT EDGE NATIVELY) */}
      <main className="flex-1 min-h-screen flex flex-col p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto space-y-6 overflow-x-hidden opacity-0 animate-slide-right">
        
        {/* HEADER WELCOME BLOCK */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Quantum Router Node</h2>
            <p className="text-xs sm:text-sm font-mono text-slate-500">Authenticated Operational Node Handle: <b className="text-indigo-600 font-bold">alice (Node-A Source Channel)</b></p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-xs font-mono font-bold tracking-wider uppercase self-start sm:self-auto shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Terminal Sync Online
          </div>
        </div>
        {/* 📊 CORE MODULE: FAVORITE SELECTION NETWORK MATRIX DECK */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pl-1">
            <Heart className="w-4 h-4 text-indigo-500" />
            <h3 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase font-bold">Select Friend From Your Favourite List</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {[
              { id: 'bob', name: '1. Bob (Node-B Receiver)', desc: 'Primary signature recipient loop station. Configured to manage live securepage.jsx telemetry components.', active: true },
              { id: 'charlie', name: '2. Charlie (Node-C Relay)', desc: 'Secondary system terminal outpost. Currently offline for polarization multi-qubit re-alignment arrays.', active: false },
              { id: 'another_name', name: '3. Dev Sandbox Node', desc: 'Auxiliary backup mainframe routing lines. Locked by global command system configurations.', active: false }
            ].map((peer) => (
              <button
                key={peer.id}
                disabled={!peer.active}
                onClick={() => {
                  // Direct internal router state unmount action loop
                  setActiveScreenStage('securepage_view_active');
                }}
                className={`border text-left p-5 rounded-2xl flex flex-col justify-between h-48 shadow-xl transition-all duration-300 ${peer.active ? 'border-slate-200 bg-white hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-600/5 hover:-translate-y-0.5 cursor-pointer group' : 'border-slate-200/60 bg-slate-100/40 text-slate-400 cursor-not-allowed'}`}
              >
                <div>
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`text-xs font-black uppercase tracking-wider ${peer.active ? 'text-indigo-600' : 'text-slate-400'}`}>{peer.name}</span>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded border ${peer.active ? 'border-emerald-500/30 text-emerald-400 bg-emerald-50' : 'border-slate-200 text-slate-400'}`}>{peer.active ? 'ONLINE' : 'OFFLINE'}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium font-sans">{peer.desc}</p>
                </div>
                {peer.active && (
                  <span className="text-[10px] font-mono font-black text-indigo-600 tracking-wider flex items-center gap-1 group-hover:text-indigo-500 self-end">
                    SECURE PAGE LINK →
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* 🔍 SEARCH MORE AND SEND INVITATIONS PIPELINE BOX */}
        <div className="border border-slate-200 bg-white rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl shadow-slate-100/50">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Search className="w-4 h-4 text-indigo-500" />
            <h3 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">Search More & Send Quantum Invitations</h3>
          </div>

          <div className="w-full">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search global cryptographic directory nodes... (Type 'dev')"
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3 text-xs text-slate-800 font-mono focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner placeholder:text-slate-300"
            />
          </div>

          {/* DYNAMIC REGISTER BOX ARRAY RESULT FIELDS */}
          {searchQuery.trim() !== '' && (
            <div className="space-y-2 pt-1 animate-slide-up">
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-slate-100 bg-slate-50/30 p-4 rounded-xl gap-3 sm:gap-0 font-mono text-xs">
                    <div>
                      <div className="font-bold text-slate-700 flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className={`text-[8px] px-1.5 py-0.2 rounded border ${item.active ? 'border-emerald-500/20 text-emerald-400' : 'border-slate-200 text-slate-400'}`}>{item.active ? 'AVAILABLE' : 'BLOCKED'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-xl font-sans font-medium">{item.desc}</p>
                    </div>

                    <button
                      type="button"
                      disabled={!item.active || invitationsSent[item.id]}
                      onClick={() => handleSendInvitation(item.id)}
                      className={`px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 ${invitationsSent[item.id] ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : !item.active ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-none' : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 shadow-md shadow-indigo-600/10'}`}
                    >
                      {invitationsSent[item.id] ? 'INVITED' : 'SEND INVITE'}
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-2 text-[11px] font-mono text-slate-400">// No matching security nodes discovered inside active directory fields.</div>
              )}
            </div>
          )}
        </div>
             {/* ========================================== */}
        {/* 🎬 PART 8: INTEGRATED FULL-WIDTH VIDEO02.MP4 SCREEN DECK CONTAINER */}
        {/* ========================================== */}
        <div className="w-full border border-slate-200 bg-white rounded-[24px] shadow-xl shadow-slate-100/40 relative overflow-hidden h-100  group opacity-0 animate-slide-up">
          
          {/* NATIVE HIGH-PERFORMANCE VIDEO CONTAINER LAYER */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-90 filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
            >
              <source src="src/assets/video02.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle premium light-diffusion vignette overlay to anchor the card edge layout */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-transparent to-transparent"></div>
          </div>

          {/* LOWER RUNTIME STATUS OVERLAY PLACED SUBTLY IN THE CORNER */}
          <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] font-black tracking-widest text-slate-400 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/40 uppercase shadow-sm">
            📡 Live Telemetry Stream Feed : active
          </div>

        </div>

        {/* COMMAND HUB PLATFORM FOOTER COMPLIANCE LEDGER STRIP */}
        <footer className="w-full pt-4 border-t border-slate-100 text-center text-[10px] font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <p>© 2026 Q-SECURE SYSTEMS LAB. STRATEGIC CRYPTO SERVICE. HACKATHON BUILD.</p>
          <p className="font-bold text-indigo-600/70 uppercase tracking-widest text-[9px]">Node Operator Room Terminal V1.0.2</p>
        </footer>

      </main>
    </div>
  );
}
