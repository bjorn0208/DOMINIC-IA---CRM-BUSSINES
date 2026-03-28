'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { BarChart3, PieChart, TrendingUp, Calendar, Download, DollarSign, Target, MousePointer2, Percent, Filter, Star } from 'lucide-react';

export default function RelatoriosPage() {
  const stats = [
    { label: 'Receita Total', value: 'R$ 84.500,00', icon: DollarSign, trend: '+15.2%', color: 'text-success-neon' },
    { label: 'Lucro Líquido', value: 'R$ 52.320,00', icon: Target, trend: '+12.1%', color: 'text-blue-500' },
    { label: 'Ticket Médio', value: 'R$ 1.250,00', icon: MousePointer2, trend: '-2.4%', color: 'text-purple-500' },
    { label: 'ROI Global', value: '4.8x', icon: Star, trend: '+0.5', color: 'text-yellow-500' },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              Relatórios de Performance <span className="text-xs font-normal px-2 py-1 bg-blue-500/20 text-blue-500 border border-blue-500/30 rounded-lg flex items-center gap-1"><BarChart3 size={12} /> Analytics Engine</span>
            </h1>
            <p className="text-gray-500 mt-1">Visão 360º de suas vendas, ROI e custo de aquisição de clientes.</p>
          </div>
          <div className="flex gap-4">
             <button className="bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                <Calendar size={18} /> Últimos 30 dias
             </button>
             <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Download size={18} /> Exportar PDF
             </button>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {stats.map((s, i) => (
             <motion.div 
               key={s.label}
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
               className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl group shadow-2xl relative overflow-hidden"
             >
                <div className="flex justify-between items-start mb-4">
                   <div className={`p-3 rounded-2xl bg-white/5 ${s.color}`}>
                      <s.icon size={22} />
                   </div>
                   <span className={`text-[10px] font-bold px-2 py-1 rounded bg-black/40 ${s.trend.startsWith('+') ? 'text-success-neon' : 'text-red-500'}`}>
                      {s.trend}
                   </span>
                </div>
                <h3 className="text-gray-500 text-sm mb-1">{s.label}</h3>
                <p className="text-2xl font-black text-white">{s.value}</p>
                <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                   <s.icon size={80} />
                </div>
             </motion.div>
           ))}
        </div>

        {/* Charts Simulation Area */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-8">
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="xl:col-span-8 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col min-h-[400px]"
           >
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <TrendingUp size={20} className="text-primary-glow" /> Curva de Ingressos Diários
                 </h2>
                 <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
                    <button className="px-3 py-1 text-[10px] font-bold text-white bg-white/10 rounded">Dia</button>
                    <button className="px-3 py-1 text-[10px] font-bold text-gray-500 hover:text-white transition-colors">Mes</button>
                 </div>
              </div>
              
              <div className="flex-1 flex items-end gap-2 px-4 pb-4">
                 {[40, 60, 45, 90, 65, 80, 50, 70, 85, 95, 100, 80, 60, 40].map((h, i) => (
                   <div key={i} className="flex-1 group relative">
                      <div 
                        className="w-full bg-gradient-to-t from-primary-glow/20 to-primary-glow rounded-t-lg transition-all hover:brightness-125"
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         R$ {(h*200).toLocaleString('pt-br')}
                      </div>
                   </div>
                 ))}
              </div>
              <div className="flex justify-between items-center px-4 mt-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                 <span>Seg</span>
                 <span>Ter</span>
                 <span>Qua</span>
                 <span>Qui</span>
                 <span>Sex</span>
                 <span>Sab</span>
                 <span>Dom</span>
              </div>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="xl:col-span-4 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col"
           >
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-8">
                 <PieChart size={20} className="text-purple-500" /> Canais de Venda
              </h2>

              <div className="flex-1 space-y-6">
                 {[
                   { label: 'Facebook Ads', pct: 65, color: 'bg-blue-500' },
                   { label: 'Google Search', pct: 20, color: 'bg-red-500' },
                   { label: 'WhastApp Orgânico', pct: 15, color: 'bg-success-neon' },
                 ].map(c => (
                   <div key={c.label}>
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-gray-300">{c.label}</span>
                         <span className="text-[10px] text-gray-500 font-mono tracking-wider">{c.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full">
                         <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-10 p-6 bg-white/5 border border-white/5 rounded-2xl">
                 <p className="text-xs text-center text-gray-500 leading-relaxed italic">
                    "O Facebook Ads continua sendo sua principal fonte de escala. Recomendamos aumentar o orçamento da Campanha de Black Friday em 15%."
                 </p>
              </div>
           </motion.div>
        </div>
      </main>
    </div>
  );
}
