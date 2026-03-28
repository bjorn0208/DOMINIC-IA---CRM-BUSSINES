'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Target, Brain, Flame, Snowflake, AlertCircle, TrendingUp, History, Info, Sparkles, Filter } from 'lucide-react';

const mockLeads = [
  { id: 1, name: 'Claudio J.', score: 9.8, status: 'Hot', reason: 'Engajamento alto (3 audios ouvidos + clicou em checkout)', time: 'Há 5min' },
  { id: 2, name: 'Marcos P.', score: 4.2, status: 'Cold', reason: 'Dúvidas sobre preço. Demora +2h para responder.', time: 'Há 12min' },
  { id: 3, name: 'Vivian T.', score: 8.5, status: 'Warm', reason: 'Pediu depoimentos. Já comprou produtos similares antes.', time: 'Há 30min' },
];

export default function SensePage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              Dominic Sense AI <span className="text-xs font-normal px-2 py-1 bg-red-500/20 text-red-500 border border-red-500/30 rounded-lg flex items-center gap-1"><Flame size={12} /> Predictive Engine</span>
            </h1>
            <p className="text-gray-500 mt-1">A "caixa preta" que entende quem vai comprar de você antes mesmo da oferta ser feita.</p>
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
             <Filter size={18} /> Filtrar Inteligência
          </button>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Brain size={64} className="text-primary-glow" />
              </div>
              <h3 className="text-gray-500 font-bold text-xs uppercase mb-1">Taxa de Conversão Prevista</h3>
              <p className="text-4xl font-black text-white">24.5%</p>
              <div className="mt-4 flex items-center gap-2 text-success-neon text-xs font-bold">
                 <TrendingUp size={14} /> +8.2% vs ontem
              </div>
           </div>

           <div className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
              <h3 className="text-gray-500 font-bold text-xs uppercase mb-1">Leads 'Quentes' Detectados</h3>
              <p className="text-4xl font-black text-white">42</p>
              <div className="mt-4 flex items-center gap-2 text-gray-500 text-xs">
                 <Info size={14} /> Baseado em comportamento de chat
              </div>
           </div>

           <div className="bg-primary-glow/10 border border-primary-glow/30 p-8 rounded-3xl relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                 <Sparkles className="text-primary-glow" size={18} />
                 <span className="text-white font-bold text-sm">Próxima Ação Recomenda</span>
              </div>
              <p className="text-primary-glow text-lg font-bold leading-tight">Mandar áudio de 45seg para Cláudio J. oferecendo o Bônus VIP.</p>
              <button className="mt-4 text-xs bg-primary-glow text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-glow/80 transition-colors">Executar na Evolution API</button>
           </div>
        </div>

        {/* Intelligence Table */}
        <div className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl flex-1 overflow-hidden flex flex-col">
           <div className="flex items-center gap-3 mb-8">
              <Target size={24} className="text-red-500" />
              <h2 className="text-xl font-bold text-white tracking-tight">Fila de Prioridade de Fechamento</h2>
           </div>

           <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {mockLeads.map((l, i) => (
                <motion.div 
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="p-6 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-white/20 transition-all border-l-4"
                  style={{ borderLeftColor: l.status === 'Hot' ? '#ef4444' : (l.status === 'Warm' ? '#f59e0b' : '#3b82f6') }}
                >
                   <div className="flex items-center gap-6 flex-1">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center text-white font-black text-xl">
                         {l.score}
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-white font-bold">{l.name}</h4>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                               l.status === 'Hot' ? 'bg-red-500/20 text-red-500' : (l.status === 'Warm' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500')
                            }`}>
                               {l.status}
                            </span>
                         </div>
                         <p className="text-gray-400 text-sm italic pr-12">{l.reason}</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-8">
                      <div className="text-right">
                         <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">Último Sinal</p>
                         <p className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                            <History size={12} /> {l.time}
                         </p>
                      </div>
                      <button className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl transition-all border border-white/5">
                         <AlertCircle size={20} />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
