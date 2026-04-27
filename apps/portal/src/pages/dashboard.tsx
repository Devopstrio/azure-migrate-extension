import React from 'react';

// Devopstrio Azure Migrate Extension
// Executive Migration Factory Command Center & Modernization Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30">
            {/* Global Migration Header */}
            <header className="border-b border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(8,145,178,0.4)] border border-white/10 relative overflow-hidden">
                            AX
                            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(34,211,238,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none">AZURE MIGRATE EXTENSION</h1>
                            <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em] mt-2 italic">Industrialized Modernization Factory</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-cyan-400 border-b-2 border-cyan-500 pb-10 pt-10">Program Core</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Assessments</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Wave Planner</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Global Inventory</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Cutover Logic</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Global Migration Health KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Discovered Assets', value: '1,542', status: '82% Audited', color: 'cyan' },
                        { label: 'Migration Velocity', value: '38/wk', status: 'Accelerating', color: 'emerald' },
                        { label: 'Replication Healthy', value: '942', status: 'Syncing', color: 'emerald' },
                        { label: 'Forecast Completion', value: 'Q4 2026', status: 'On Track', color: 'cyan' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Intelligence & Wave Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Live Server Tracking & Factory Feed */}
                    <div className="xl:col-span-2 bg-slate-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Active Replication & Inventory</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring global Azure Migrate data sync, recovery point objective (RPO) health, and wave cutover readiness in real-time.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Run Global Assessment
                                </button>
                                <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-cyan-900/40">
                                    Start Wave 1 Cutover
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { host: 'fin-app-prod-01', wave: 'Wave 1 - Finance', sync: 100, state: 'Ready', icon: 'server' },
                                { host: 'sql-db-cluster-04', wave: 'Wave 1 - Finance', sync: 100, state: 'Ready', icon: 'database' },
                                { host: 'web-front-uk-882', wave: 'Wave 2 - Public Web', sync: 74, state: 'Syncing', icon: 'globe' },
                                { host: 'leg-hr-vcenter-01', wave: 'Wave 3 - Global HR', sync: 12, state: 'Primary Sync', icon: 'cpu' }
                            ].map((row, idx) => (
                                <div key={idx} className="p-8 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-cyan-500/20 transition-all flex justify-between items-center">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-cyan-600/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                                            <span className="text-cyan-400 text-xs font-black italic">{row.icon[0].toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white">{row.host}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{row.wave}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <div className="w-48 text-right">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-[9px] font-black text-slate-500 uppercase">Data Sync Status</div>
                                                <div className="text-[9px] font-black text-cyan-400 font-mono">{row.sync}%</div>
                                            </div>
                                            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: `${row.sync}%` }}></div>
                                            </div>
                                        </div>
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${row.state === 'Ready' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                                            {row.state}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Active Waves & Assessment Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-cyan-500/20 pb-6">Wave Pipeline State</h3>
                            <div className="space-y-8 flex-1">
                                {[
                                    { wave: 'Wave 1 - Finance Hub', servers: 45, state: 'Readiness-Check', color: 'emerald' },
                                    { wave: 'Wave 2 - Public Portals', servers: 120, state: 'Replication-Sync', color: 'cyan' },
                                    { wave: 'Wave 3 - HR Core', servers: 82, state: 'Assessment-Mode', color: 'indigo' },
                                    { wave: 'Wave 4 - Legacy Archive', servers: 14, state: 'Scoping-Audit', color: 'slate' }
                                ].map((w, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-white">{w.wave}</span>
                                            <span className="text-[10px] font-black text-slate-500 font-mono">{w.servers} Servers</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full bg-${w.color}-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]`}></div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{w.state}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-black hover:bg-slate-800 text-white text-[11px] font-black py-4 rounded-2xl border border-white/10 uppercase tracking-widest transition-all">
                                Manage Program Pipeline
                            </button>
                        </div>

                        <div className="bg-cyan-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(8,145,178,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                            <h4 className="text-[10px] font-black text-cyan-200 uppercase tracking-widest mb-4 leading-none">Insight Center</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-4">AI Right-Sizing Score</div>
                            <p className="text-xs text-white/90 font-black px-6 py-4 rounded-2xl bg-black/20 shadow-xl leading-relaxed">
                                Wave 2 optimization recommendation will save £4,200/mo by moving to D-Series v5.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Intelligence & Program Risk Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-3">Ingestion Throughput (24h)</h5>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter">842 GB/S <span className="text-xs font-bold text-emerald-400 ml-1 uppercase tracking-normal">PEAK</span></div>
                            </div>
                            <div className="text-right text-[10px] font-black text-slate-500 uppercase">Factory Data Flow</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 18, 14, 32, 22, 14, 12, 38, 54, 12, 8, 12, 14, 32, 48, 24, 14, 18, 12, 10, 8, 12].map((v, i) => (
                                <div key={i} className="flex-1 bg-cyan-500/20 rounded-t-lg hover:bg-cyan-500 transition-all relative group cursor-pointer" style={{ height: `${v}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        {v} GB/s
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl flex flex-col justify-between">
                        <div>
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border-b border-cyan-500/20 pb-4">Migration Risk Register</h5>
                            <div className="space-y-4">
                                {[
                                    { risk: 'Storage latency on Wave 3 Primary DB', level: 'High', color: 'rose' },
                                    { risk: 'Missing tag compliance on Legacy RHEL', level: 'Medium', color: 'orange' },
                                    { risk: 'Ineligible VM SKU in East US 2', level: 'Medium', color: 'orange' }
                                ].map((r, i) => (
                                    <div key={i} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5 group hover:border-cyan-500/20 transition-all">
                                        <div className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{r.risk}</div>
                                        <div className={`text-[8px] font-black px-3 py-1 rounded-full uppercase bg-${r.color}-500/10 text-${r.color}-400`}>{r.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="mt-8 bg-white hover:bg-slate-200 text-black text-[11px] font-black py-4 rounded-2xl uppercase tracking-widest transition-all">
                            Generate Program Status Report
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
