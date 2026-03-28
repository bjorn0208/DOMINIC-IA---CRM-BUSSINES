'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { AreaChart, TrendingUp, Users, MousePointer2, Target, Zap, Activity, Filter, BarChart3, Pause, Play, Settings } from 'lucide-react';

export default function TrafegoPage() {
  const metrics = [
    { label: 'Impressões', value: '142.5K', change: '+12%', icon: Users, color: 'text-blue-500' },
    { label: 'Cliques (CTR)', value: '3.8%', change: '+0.5%', icon: MousePointer2, color: 'text-purple-500' },
    { label: 'Conversões', value: '1,280', change: '+24%', icon: Target, color: 'text-success-neon' },
    { label: 'ROAS Global', value: '4.2x', change: '+0.8', icon: Zap, color: 'text-yellow-500' },
  ];

  const campaigns = [
    { name: 'Venda Direta - Black Friday', status: 'active', spend: 'R$ 4.500,00', leads: 420, cpl: 'R$ 10,71' },
    { name: 'Remarketing - Abandono de Checkout', status: 'active', spend: 'R$ 1.200,00', leads: 85, cpl: 'R$ 14,11' },
    { name: 'Lookalike - Compradores 1%', status: 'paused', spend: 'R$ 0,00', leads: 0, cpl: '-' },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              Tráfego Pago <span className="text-xs font-normal px-2 py-1 bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-lg flex items-center gap-1"><Activity size={12} /> Live Sync</span>
            </h1>
            <p className="text-gray-500 mt-1">Status em tempo real das suas campanhas no Facebook, Instagram e Google.</p>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-all">
             <Filter size={18} /> Filtrar Período
          </button>
        </div>

        {/* Metricas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl group hover:border-white/20 transition-all shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${m.color}`}>
                  <m.icon size={24} />
                </div>
                <span className="text-success-neon text-xs font-bold flex items-center gap-1">
                   <TrendingUp size={14} /> {m.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{m.label}</h3>
              <p className="text-2xl font-black text-white">{m.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Campanhas Ativas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="xl:col-span-8 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 size={20} className="text-primary-glow" /> Gerenciador de Campanhas
               </h2>
               <button className="text-primary-glow text-sm font-bold hover:underline">Ver todas no Ads Manager</button>
            </div>

            <div className="space-y-4">
               {campaigns.map((c, i) => (
                 <div key={i} className="p-5 border border-white/5 bg-black/40 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-5">
                       <div className={`w-3 h-3 rounded-full ${c.status === 'active' ? 'bg-success-neon animate-pulse' : 'bg-gray-600'}`}></div>
                       <div>
                          <h4 className="text-white font-bold">{c.name}</h4>
                          <p className="text-xs text-gray-500">Facebook Ads • CBO</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-12">
                       <div className="text-right">
                          <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Investido</p>
                          <p className="text-sm text-gray-200 font-mono">{c.spend}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Leads</p>
                          <p className="text-sm text-gray-200 font-mono">{c.leads}</p>
                       </div>
                       <div className="flex items-center gap-2">
                          <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 group/btn transition-colors">
                             {c.status === 'active' ? <Pause size={18} /> : <Play size={18} />}
                          </button>
                          <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 group/btn transition-colors">
                             <Settings size={18} />
                          </button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <button className="w-full mt-6 py-4 border-2 border-dashed border-white/5 hover:border-primary-glow/50 rounded-2xl text-gray-600 hover:text-primary-glow transition-all font-bold text-sm">
               + Adicionar Nova Campanha do Dominic Sense
            </button>
          </motion.div>

          {/* Radar de Público */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-4 bg-primary-glow/5 border border-primary-glow/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent"></div>
             
             <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full border border-primary-glow/30 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full border border-primary-glow/50 flex items-center justify-center animate-pulse">
                      <div className="w-16 h-16 rounded-full bg-primary-glow shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center justify-center">
                         <Target size={32} className="text-white" />
                      </div>
                   </div>
                </div>
                {/* Dots around */}
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-primary-glow rounded-full"
                    style={{ 
                      top: '50%', left: '50%', 
                      transform: `rotate(${i * 60}deg) translate(80px) rotate(-${i * 60}deg)`
                    }}
                  ></div>
                ))}
             </div>

             <h3 className="text-xl font-black text-white mb-2">Público Otimizado</h3>
             <p className="text-sm text-gray-400 mb-6">A IA do Dominic identificou que seu melhor ROAS está em:</p>
             
             <div className="space-y-3 w-full">
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                   <span className="text-white font-bold text-sm">Mulheres 25-45</span>
                   <span className="text-success-neon font-mono text-xs">82% Match</span>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                   <span className="text-white font-bold text-sm">Interesse: Empreendedorismo</span>
                   <span className="text-success-neon font-mono text-xs">94% Match</span>
                </div>
             </div>

             <button className="mt-8 text-primary-glow text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Ver Relatório de Inteligência <ArrowRight size={16} />
             </button>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

function ArrowRight({ size = 16, className = "" }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
         <path d="M5 12h14m-7-7 7 7-7 7" />
      </svg>
   );
}
