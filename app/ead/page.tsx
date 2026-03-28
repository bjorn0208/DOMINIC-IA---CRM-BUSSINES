'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Play, BookOpen, Clock, Trophy, ChevronRight, MessageCircle, Star, Download, Layout, LayoutPanelLeft } from 'lucide-react';

const modules = [
  { id: 1, title: 'Fundamentos Dominic Black', lessons: 5, duration: '45min' },
  { id: 2, title: 'Configuração do Motor de Vendas', lessons: 8, duration: '1h 20min' },
  { id: 3, title: 'Estratégias de Tráfego de Elite', lessons: 12, duration: '2h 15min' },
  { id: 4, title: 'Dominic Sense: IA Avançada', lessons: 4, duration: '30min' },
];

export default function EADPage() {
  const [activeLesson, setActiveLesson] = useState(1);

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-hidden">
        <div className="mb-6 flex justify-between items-center">
           <div>
             <h1 className="text-3xl font-bold text-white flex items-center gap-3">
               Portal de Aulas <span className="text-xs font-normal px-2 py-1 bg-primary-glow/20 text-primary-glow border border-primary-glow/30 rounded-lg flex items-center gap-1"><Trophy size={12} /> Elite Training</span>
             </h1>
             <p className="text-gray-500 mt-1">Domine o ecossistema Dominic Black e escale seu império digital.</p>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="text-right">
                 <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Seu Progresso</p>
                 <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-primary-glow shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                 </div>
              </div>
              <div className="bg-primary-glow/10 border border-primary-glow/20 px-4 py-2 rounded-xl text-primary-glow flex items-center gap-2">
                 <Trophy size={18} />
                 <span className="font-bold text-sm">65%</span>
              </div>
           </div>
        </div>

        <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-8 h-full overflow-hidden">
          
          {/* Lado Esquerdo: Player & Área de Aula */}
          <div className="xl:col-span-8 flex flex-col h-full overflow-y-auto custom-scrollbar pr-2 pb-10">
             {/* Player Placeholder */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
               className="aspect-video bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl"
             >
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lesson Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="w-24 h-24 rounded-full bg-primary-glow/20 border border-primary-glow/40 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-2xl">
                   <Play size={40} className="text-white fill-white translate-x-[3px]" />
                </div>
                
                {/* Controls Overlay UI */}
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-4 text-white font-bold">
                      <span className="text-sm">08:24 / 15:00</span>
                      <div className="w-64 h-1 bg-white/20 rounded-full relative">
                         <div className="w-[40%] h-full bg-primary-glow"></div>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <Download size={20} className="text-white hover:text-primary-glow cursor-pointer" />
                      <Settings size={20} className="text-white hover:text-primary-glow cursor-pointer" />
                   </div>
                </div>
             </motion.div>

             <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                   <h2 className="text-2xl font-black text-white">Configurando as Campanhas no Facebook Ads</h2>
                   <div className="flex gap-2">
                       <button className="p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors">
                          <Download size={20} />
                       </button>
                       <button className="px-6 py-2.5 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-all">
                          Próxima Aula
                       </button>
                   </div>
                </div>
                
                <div className="flex gap-6 mb-8 border-b border-white/5 pb-2">
                   <button className="pb-4 text-primary-glow border-b-2 border-primary-glow font-bold text-sm">Resumo da Aula</button>
                   <button className="pb-4 text-gray-500 hover:text-white font-bold text-sm transition-colors">Materiais de Apoio</button>
                   <button className="pb-4 text-gray-500 hover:text-white font-bold text-sm transition-colors">Perguntas & Respostas</button>
                </div>

                <div className="text-gray-400 leading-relaxed space-y-4">
                   <p>Nesta aula, entraremos no backend do gerenciador de anúncios para que sua Inteligência Dominic Black consiga sincronizar todos os dados de conversão em tempo real.</p>
                   <p>Você vai aprender a estrutura de CBO recomendada para iniciantes e como o nosso pixel detecta o lead 'quente' antes mesmo dele clicar no botão do WhatsApp.</p>
                </div>
             </div>
          </div>

          {/* Lado Direito: Currículo Sidebar */}
          <div className="xl:col-span-4 flex flex-col h-full bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
             <div className="p-6 border-b border-white/5">
                <h3 className="text-white font-bold flex items-center gap-2">
                   <LayoutPanelLeft size={18} className="text-primary-glow" /> Grade do Curso
                </h3>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                {modules.map((m, m_idx) => (
                  <div key={m.id} className="space-y-2">
                     <div className="flex items-center justify-between px-2 mb-3">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Módulo {m.id}</span>
                        <ChevronRight size={14} className="text-gray-700" />
                     </div>
                     <h4 className="text-white font-bold text-sm mb-4">{m.title}</h4>
                     
                     <div className="space-y-2">
                        {[1, 2, 3].map((l_idx) => (
                          <div 
                             key={l_idx}
                             className={`p-3 rounded-2xl border transition-all cursor-pointer group relative flex items-center gap-4 ${
                                m_idx === 0 && l_idx === activeLesson 
                                   ? 'bg-primary-glow/20 border-primary-glow/40' 
                                   : 'bg-black/20 border-white/5 hover:border-white/10'
                             }`}
                          >
                             <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                m_idx === 0 && l_idx === activeLesson 
                                   ? 'bg-primary-glow text-white' 
                                   : 'bg-white/5 text-gray-600 group-hover:text-white'
                             }`}>
                                <Play size={14} className={m_idx === 0 && l_idx === activeLesson ? 'fill-white' : ''} />
                             </div>
                             <div className="flex-1 min-w-0">
                                <p className={`text-xs font-bold truncate ${
                                   m_idx === 0 && l_idx === activeLesson ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                                }`}>
                                   Aula {l_idx}: {m_idx === 0 && l_idx === 1 ? 'Introdução ao Método' : 'Estratégia de Aquisição'}
                                </p>
                                <span className="text-[10px] text-gray-600">12:40 • Assistida</span>
                             </div>
                             {m_idx === 0 && l_idx < activeLesson && (
                                <CheckCircle size={14} className="text-success-neon" />
                             )}
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-6 border-t border-white/5 bg-black/40">
                <button className="w-full bg-primary-glow/10 border border-primary-glow/20 py-3 rounded-2xl text-primary-glow font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-glow/20 transition-all">
                   <MessageCircle size={18} /> Acessar Comunidade
                </button>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function Settings({ size = 16, className = "" }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
         <circle cx="12" cy="12" r="3" />
      </svg>
   );
}

function CheckCircle({ size = 16, className = "" }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
         <path d="m9 11 3 3L22 4" />
      </svg>
   );
}
