'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Flame, Clock, MoreVertical, MessageCircle, Phone } from 'lucide-react';

const columns = [
  { id: 'novo', title: 'Novos Leads', color: 'border-blue-500/30 text-blue-400' },
  { id: 'atendimento', title: 'Em Atendimento', color: 'border-yellow-500/30 text-yellow-400' },
  { id: 'interessado', title: 'Interessados', color: 'border-orange-500/30 text-orange-400' },
  { id: 'fechado', title: 'Fechados / Pagos', color: 'border-success-neon/30 text-success-neon' },
];

const mockLeads = [
  { id: 1, name: 'Mariana Silva', phone: '+55 11 98765-4321', temp: 'Quente', urgency: 9, status: 'novo', tags: ['Campanha FB', 'Vídeo 1'] },
  { id: 2, name: 'Ricardo Oliveira', phone: '+55 21 99887-1122', temp: 'Médio', urgency: 5, status: 'atendimento', tags: ['Orgânico'] },
  { id: 3, name: 'Ana Costa', phone: '+55 31 99999-0000', temp: 'Quente', urgency: 10, status: 'interessado', tags: ['Google Ads', 'Alta Renda'] },
];

export default function CRMPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 h-screen flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              CRM <span className="text-xs font-normal px-2 py-1 bg-white/10 rounded-lg text-gray-400">Visão Kanban</span>
            </h1>
            <p className="text-gray-500 mt-1">Arraste os leads pelo funil para atualizar o status.</p>
          </div>
          <button className="bg-primary-glow text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary-glow/80 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            + Adicionar Lead Manual
          </button>
        </div>

        <div className="flex-1 flex gap-6 overflow-x-auto pb-4 custom-scrollbar">
          {columns.map((col, i) => (
            <div key={col.id} className="min-w-[320px] w-[320px] flex flex-col bg-[#0f0f14]/80 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden">
              <div className={`p-4 border-b ${col.color} bg-black/20 flex items-center justify-between`}>
                <h2 className="font-bold flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-current shadow-[0_0_10px_currentColor]`} />
                  {col.title}
                </h2>
                <span className="text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full text-white">
                  {mockLeads.filter(l => l.status === col.id).length}
                </span>
              </div>
              
              <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
                {mockLeads.filter(l => l.status === col.id).map((lead, j) => (
                  <motion.div 
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: j * 0.1 }}
                    className="p-4 rounded-2xl bg-[#16161d] border border-white/5 hover:border-white/20 transition-all cursor-grab group shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-white text-sm">{lead.name}</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                          <Phone size={12} /> {lead.phone}
                        </p>
                      </div>
                      <button className="text-gray-600 hover:text-white transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {lead.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        {lead.temp === 'Quente' ? (
                          <div className="flex items-center gap-1 text-xs text-orange-500 font-bold bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                            <Flame size={12} className="fill-orange-500" /> Quente
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded-md border border-blue-400/20">
                            Frio
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-xs text-red-400 font-bold" title="Urgência do Lead">
                          <Clock size={12} /> {lead.urgency}/10
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-glow/20 hover:border hover:border-primary-glow/50 transition-all" title="Abrir Chat Livre">
                        <MessageCircle size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
                
                {mockLeads.filter(l => l.status === col.id).length === 0 && (
                  <div className="h-24 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-gray-600 text-sm font-medium">
                    Arraste um lead aqui
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
