'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Globe, Wand2, Smartphone, Monitor, CheckCircle, ExternalLink, ShieldCheck, Mail, Phone, Layout, Loader2 } from 'lucide-react';

export default function SitesPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setShowPreview(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Gerador de Sites <span className="text-xs font-normal px-2 py-1 bg-success-neon/20 text-success-neon border border-success-neon/30 rounded-lg flex items-center gap-1"><Globe size={12} /> Instant Deployment</span>
          </h1>
          <p className="text-gray-500 mt-1">Transforme sua ideia em uma Landing Page de alta conversão em segundos.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-8 h-full overflow-hidden">
          {/* Lado Esquerdo: Config */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
            className="xl:col-span-4 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col shadow-2xl overflow-y-auto custom-scrollbar"
          >
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                  <Layout size={18} className="text-primary-glow" /> Estética & Conteúdo
                </h3>
                
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Nome da Oferta / Produto</label>
                  <input 
                    type="text" 
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    placeholder="Ex: Método Escala Black"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">WhatsApp de Conversão</label>
                  <input 
                    type="text" 
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Cores da Identidade</label>
                  <div className="flex gap-3">
                     {['#3B82F6', '#10B981', '#F59E0B', '#EF4444'].map(color => (
                       <button 
                        key={color}
                        type="button"
                        className="w-10 h-10 rounded-full border-2 border-transparent hover:border-white transition-all shadow-lg"
                        style={{ backgroundColor: color }}
                       />
                     ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Logo da Marca</label>
                  <div className="border-2 border-dashed border-white/5 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
                     <Smartphone size={24} className="mx-auto mb-2 text-gray-600 group-hover:text-primary-glow transition-colors" />
                     <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">Arraste sua logo ou clique para subir</span>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isGenerating}
                className="w-full bg-success-neon text-black py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isGenerating ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                {isGenerating ? 'Construindo seu Site...' : 'Gerar Página de Vendas'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
               <div className="flex items-center gap-3 text-xs text-gray-500 italic">
                 <ShieldCheck size={14} className="text-success-neon" /> Hospedagem Dominic Black Ativa
               </div>
               <div className="flex items-center gap-3 text-xs text-gray-500 italic">
                 <ShieldCheck size={14} className="text-success-neon" /> SSL (Cadeado) Grátis Incluso
               </div>
            </div>
          </motion.div>

          {/* Lado Direito: Preview */}
          <div className="xl:col-span-8 flex flex-col h-full overflow-hidden relative">
            
            <div className="mb-4 flex items-center justify-between bg-black/40 border border-white/10 rounded-2xl p-2 px-4">
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-1 text-[10px] text-gray-500 font-mono">
                  https://dominic.black/seu-site-exemplo
               </div>
               <div className="flex gap-4">
                  <Monitor size={14} className="text-white" />
                  <Smartphone size={14} className="text-gray-600" />
               </div>
            </div>

            <AnimatePresence mode="wait">
              {showPreview ? (
                <motion.div 
                  key="preview"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 bg-white rounded-t-2xl shadow-2xl overflow-y-auto custom-scrollbar-light"
                >
                  {/* Mock Site Content */}
                  <nav className="p-6 flex justify-between items-center border-b border-gray-100">
                    <span className="text-black font-black text-xl italic">{siteName || 'SUA LOGO'}</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                       <Phone size={14} /> Falar no Whats
                    </button>
                  </nav>

                  <section className="py-20 px-10 text-center bg-gradient-to-b from-gray-50 to-white">
                     <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">A Oferta Irresistível</span>
                     <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight max-w-2xl mx-auto mb-6">
                        O SISTEMA QUE VAI ESCALAR O <span className="text-blue-600 uppercase">{(siteName || 'seu negócio').toUpperCase()}</span> EM ATÉ 3X.
                     </h2>
                     <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
                        Pare de perder tempo com processos manuais. Nossa solução automatiza todo o funil de aquisição de clientes utilizando Inteligência Artificial de ponta.
                     </p>
                     
                     <div className="relative inline-block group">
                        <div className="absolute -inset-1 bg-green-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <button className="relative bg-black text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl">
                           QUERO COMEÇAR AGORA <ArrowRight />
                        </button>
                     </div>
                  </section>

                  <section className="py-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                           <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                              <CheckCircle size={24} />
                           </div>
                           <h4 className="text-black font-bold mb-2">Pilar Nº {i}</h4>
                           <p className="text-gray-500 text-sm">Escalabilidade total e automação garantida para o seu processo comercial de ponta a ponta.</p>
                        </div>
                     ))}
                  </section>

                  <footer className="p-10 bg-black text-white text-center">
                     <p className="text-sm text-gray-500">© 2026 {siteName}. Todos os direitos reservados. Orgulhosamente criado com Dominic Black.</p>
                  </footer>
                </motion.div>
              ) : isGenerating ? (
                <motion.div 
                  key="generating"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-40 h-40 rounded-full border-t-2 border-success-neon animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="text-success-neon animate-pulse" size={60} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">O Motor de Site está rodando...</h3>
                  <div className="space-y-2 max-w-xs mx-auto">
                    <p className="text-gray-500 text-xs animate-pulse">Otimizando SEO e velocidade de carregamento Mobile...</p>
                    <p className="text-gray-500 text-xs animate-pulse delay-75">Configurando domínios e certificados SSL...</p>
                    <p className="text-gray-500 text-xs animate-pulse delay-150">Implementando scripts de conversão automática...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty-preview"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-gray-600"
                >
                  <Globe size={64} className="mb-6 opacity-20" />
                  <h3 className="text-xl font-bold mb-2">Site Live Preview</h3>
                  <p className="max-w-[300px]">Seu site será exibido aqui assim que você configurar as informações ao lado.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Action Menu for Preview */}
            <AnimatePresence>
              {showPreview && (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                  className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-3"
                >
                  <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:scale-110 transition-transform">
                     <Smartphone size={24} />
                  </button>
                  <button className="w-14 h-14 bg-primary-glow text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:scale-110 transition-transform">
                     <ExternalLink size={24} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
