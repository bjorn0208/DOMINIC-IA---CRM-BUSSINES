'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Sparkles, Megaphone, Target, Zap, Lightbulb, Copy, Check, ArrowRight, Play, Loader2 } from 'lucide-react';

export default function CriativosPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleCopy = (text: string, id: string) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Gerador de Criativos <span className="text-xs font-normal px-2 py-1 bg-primary-glow/20 text-primary-glow border border-primary-glow/30 rounded-lg flex items-center gap-1"><Sparkles size={12} /> High Conversion AI</span>
          </h1>
          <p className="text-gray-500 mt-1">Crie anúncios que param o scroll e convertem visitantes em clientes pagantes.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full overflow-hidden">
          {/* Lado Esquerdo: Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
            className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col shadow-2xl overflow-y-auto custom-scrollbar"
          >
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  <Megaphone size={16} className="text-primary-glow" /> Nome do Produto/Serviço
                </label>
                <input 
                  type="text" 
                  placeholder="Ex: Dominic Black - CRM de Alta Performance"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all font-medium"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  <Target size={16} className="text-primary-glow" /> Público-Alvo
                </label>
                <input 
                  type="text" 
                  placeholder="Ex: Infoprodutores e Donos de Agência"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all font-medium"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  <Zap size={16} className="text-primary-glow" /> Maior Benefício
                </label>
                <textarea 
                  rows={3}
                  placeholder="Ex: Recuperação automática de 30% dos leads frios e aumento de ROAS em 2x."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-300 mb-2 block uppercase tracking-wider">Tom de Voz</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all appearance-none cursor-pointer">
                    <option>Agressivo (Vendas)</option>
                    <option>Autoridade</option>
                    <option>Amigável</option>
                    <option>Narrativo / Storytelling</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-300 mb-2 block uppercase tracking-wider">Formato</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-glow/50 transition-all appearance-none cursor-pointer">
                    <option>Reels / TikTok</option>
                    <option>Feed (Imagem)</option>
                    <option>YouTube Search</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    Dominic está analisando...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} className="fill-black group-hover:scale-110 transition-transform" />
                    Gerar Anúncio de Alta Conversão
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Lado Direito: Resultado */}
          <div className="flex flex-col h-full overflow-hidden">
            <AnimatePresence mode="wait">
              {showResult ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  className="flex-1 bg-gradient-to-br from-[#13131a] to-[#0a0a0c] border border-white/5 rounded-3xl p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h3 className="text-white font-bold text-xl flex items-center gap-2">
                      <Sparkles className="text-primary-glow" size={24} /> Criativo Gerado
                    </h3>
                    <div className="flex gap-2">
                       <span className="bg-success-neon/10 text-success-neon text-[10px] font-bold px-2 py-1 rounded border border-success-neon/20">ESTRUTURA VSL</span>
                       <span className="bg-primary-glow/10 text-primary-glow text-[10px] font-bold px-2 py-1 rounded border border-primary-glow/20">PRONTO PARA REELS</span>
                    </div>
                  </div>

                  {/* Hook */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">
                      <span>Gancho (Hook)</span>
                      <button onClick={() => handleCopy("Você está perdendo 30% do seu lucro todos os meses...", "hook")} className="hover:text-white transition-colors">
                        {copied === "hook" ? "Copiado!" : "Copiar"}
                      </button>
                    </div>
                    <div className="bg-primary-glow/10 border border-primary-glow/20 rounded-2xl p-5 text-white font-bold text-lg leading-tight">
                      "Você está perdendo 30% do seu lucro todos os meses e nem sabe disso. Pare de queimar dinheiro com Leads frios."
                    </div>
                  </div>

                  {/* Body/Copy */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">
                      <span>Corpo da Mensagem (Desperte Interesse)</span>
                      <button onClick={() => handleCopy("Enquanto você dorme, sua CRM tradicional está deixando seus melhores clientes...", "copy")} className="hover:text-white transition-colors">
                        {copied === "copy" ? "Copiado!" : "Copiar"}
                      </button>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-5 text-gray-300 text-sm leading-relaxed">
                      Enquanto você dorme, sua CRM tradicional está deixando seus melhores clientes esfriarem. A Dominic Black não apenas organiza seus leads, ela entende quem está pronto para pagar AGORA utilizando IA de ponta. 
                      <br /><br />
                      Não é apenas uma planilha bonita. É uma máquina de aquisição que recupera quem você já daria como perdido.
                    </div>
                  </div>

                  {/* Visual Idea */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">
                      <span>Sugestão Visual / Visual Hook</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center shrink-0">
                         <Lightbulb className="text-yellow-500" size={24} />
                      </div>
                      <p className="text-gray-400 text-sm italic">
                        "Comece o vídeo com um close no extrato bancário (borrado) ou no painel de vendas, com uma luz vermelha pulsando no fundo. Mostre um lead 'congelado' virando fogo no dashboard Dominic."
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-primary-glow to-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(59,130,246,0.2)]">
                    <ArrowRight size={20} />
                    Exportar para Dominic Sense
                  </button>
                </motion.div>
              ) : isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex-1 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-32 h-32 rounded-full border-t-2 border-primary-glow animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="text-primary-glow animate-pulse" size={40} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">A Inteligência está trabalhando...</h3>
                  <div className="space-y-2 max-w-xs">
                    <p className="text-gray-500 text-sm animate-pulse">Cruzando dados de público-alvo...</p>
                    <p className="text-gray-500 text-sm animate-pulse delay-75">Analisando tons agressivos de conversão...</p>
                    <p className="text-gray-500 text-sm animate-pulse delay-150">Estruturando Ganchos psicológicos...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-gray-600"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Sparkles size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aguardando Input</h3>
                  <p className="max-w-[250px]">Preencha as informações do produto ao lado para ver a magia acontecer.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
