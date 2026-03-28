'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { User, Shield, Share2, Globe, Key, Smartphone, Bot, Zap, Save, Check, CreditCard, Bell, ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('perfil');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'perfil', label: 'Meu Perfil', icon: User },
    { id: 'integracoes', label: 'Integrações (APIs)', icon: Share2 },
    { id: 'workspace', label: 'Workspace', icon: Globe },
    { id: 'seguranca', label: 'Segurança', icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
             Configurações <span className="text-xs font-normal px-2 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-lg flex items-center gap-1"><ShieldCheck size={12} /> Enterprise Control</span>
          </h1>
          <p className="text-gray-500 mt-1">Gerencie suas conexões de IA, chaves de API e preferências do ecossistema Dominic Black.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Navegação de Abas */}
          <div className="xl:col-span-3 flex flex-col gap-2">
             {tabs.map(tab => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id 
                       ? 'bg-primary-glow text-white shadow-lg shadow-primary-glow/20' 
                       : 'bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:bg-white/10'
                  }`}
               >
                  <tab.icon size={18} />
                  {tab.label}
               </button>
             ))}
          </div>

          {/* Conteúdo da Aba */}
          <motion.div 
             key={activeTab}
             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
             className="xl:col-span-9 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl min-h-[600px] flex flex-col"
          >
             <AnimatePresence mode="wait">
               {activeTab === 'perfil' && (
                 <div className="space-y-8">
                    <div className="flex items-center gap-6 border-b border-white/5 pb-8">
                       <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 border border-white/10 flex items-center justify-center text-3xl font-black text-white shadow-2xl relative group cursor-pointer">
                          DS
                          <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <p className="text-[10px] font-bold">Mudar</p>
                          </div>
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-1">Dominic Silva</h3>
                          <p className="text-sm text-gray-500">Fundador & Admin Principal • Membro desde Out 2026</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Nome Completo</label>
                          <input type="text" defaultValue="Dominic Silva" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary-glow/50 outline-none" />
                       </div>
                       <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">E-mail Corporativo</label>
                          <input type="email" defaultValue="contato@dominic.black" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary-glow/50 outline-none" />
                       </div>
                    </div>
                 </div>
               )}

               {activeTab === 'integracoes' && (
                 <div className="space-y-8">
                    {/* Evolution API */}
                    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl group hover:border-success-neon/30 transition-all">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                             <div className="p-3 bg-success-neon/10 text-success-neon rounded-xl">
                                <Smartphone size={24} />
                             </div>
                             <div>
                                <h4 className="text-white font-bold">Evolution API (WhatsApp)</h4>
                                <p className="text-xs text-gray-500">Conecte sua instância para enviar mensagens automáticas.</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></div>
                             <span className="text-[10px] font-bold text-success-neon uppercase">Conectado</span>
                          </div>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" placeholder="URL da API" defaultValue="https://api.dominic.black/v1" className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm text-gray-400 font-mono" />
                          <input type="password" placeholder="API Key" defaultValue="••••••••••••••••" className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm text-gray-400 font-mono" />
                       </div>
                    </div>

                    {/* Claude/OpenAI */}
                    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl group hover:border-primary-glow/30 transition-all">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                             <div className="p-3 bg-primary-glow/10 text-primary-glow rounded-xl">
                                <Bot size={24} />
                             </div>
                             <div>
                                <h4 className="text-white font-bold">Dominc AI Core (Claude/GPT)</h4>
                                <p className="text-xs text-gray-500">O cérebro por trás de todas as respostas e criativos.</p>
                             </div>
                          </div>
                          <button className="text-[10px] font-bold text-primary-glow bg-primary-glow/5 px-3 py-1.5 rounded-lg border border-primary-glow/20">CONFIGURAR</button>
                       </div>
                    </div>

                    {/* Meta Ads */}
                    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all">
                       <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                             <Zap size={24} />
                          </div>
                          <div>
                             <h4 className="text-white font-bold">Meta Business Integration</h4>
                             <p className="text-xs text-gray-500">Sincronize suas campanhas e públicos automaticamente.</p>
                          </div>
                       </div>
                    </div>
                 </div>
               )}

               {activeTab === 'workspace' && (
                  <div className="space-y-8 text-gray-500 italic flex flex-col items-center justify-center h-96">
                     <Globe size={48} className="mb-4 opacity-20" />
                     <p>Configurações de Workspace Enterprise em breve...</p>
                  </div>
               )}
             </AnimatePresence>

             <div className="mt-auto pt-10 flex justify-end border-t border-white/5">
                <button 
                  onClick={handleSave}
                  className={`px-10 py-4 rounded-xl font-black text-sm flex items-center gap-2 transition-all active:scale-[0.98] ${
                    saved ? 'bg-success-neon text-black' : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                   {saved ? <Check size={20} /> : <Save size={20} />}
                   {saved ? 'Alterações Salvas!' : 'Salvar Configurações'}
                </button>
             </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
