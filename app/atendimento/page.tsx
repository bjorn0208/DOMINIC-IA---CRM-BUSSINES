'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Sparkles, Copy, Check, MessageSquare, History, ArrowRight } from 'lucide-react';

export default function AtendimentoPage() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Atendimento IA <span className="text-xs font-normal px-2 py-1 bg-primary-glow/20 text-primary-glow border border-primary-glow/30 rounded-lg flex items-center gap-1"><Sparkles size={12} /> Powered by Dominic Sense</span>
          </h1>
          <p className="text-gray-500 mt-1">Cole a mensagem do cliente e deixe a IA formular a melhor resposta focada em conversão.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Lado Esquerdo: Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
            className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl flex flex-col shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4 text-gray-300 font-medium">
              <MessageSquare className="text-primary-glow" size={20} />
              Mensagem do Cliente
            </div>
            <textarea 
              className="flex-1 w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-neutral-200 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-glow/50 focus:border-primary-glow/50 transition-all resize-none custom-scrollbar"
              placeholder="Cole aqui o que o cliente enviou... Ex: 'Achei o valor meio alto, consegue um desconto?'"
            ></textarea>
            
            <button className="mt-4 w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group">
              <Sparkles size={20} className="fill-black group-hover:animate-pulse" />
              Gerar Resposta Premium
            </button>
          </motion.div>

          {/* Lado Direito: Resultado & Histórico */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="bg-primary-glow/5 border border-primary-glow/20 p-6 rounded-3xl flex-1 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-glow/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Sparkles className="text-primary-glow" size={18} />
                  Resposta Sugerida
                </h3>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/5"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              
              <div className="flex-1 bg-black/40 border border-white/10 rounded-2xl p-5 text-gray-300 leading-relaxed font-medium">
                <p>Compreendo perfeitamente o seu lado! Investimentos como esse precisam fazer sentido no caixa agora.</p>
                <p className="mt-4">O que a maioria dos nossos membros descobre é que o valor pago se paga logo na primeira semana com as novas conversões automáticas.</p>
                <p className="mt-4">Se parcelarmos em 12x, o impacto mensal será menor que um lanche. O que você acha de destravarmos seu acesso para começarmos a rodar a ferramenta hoje?</p>
              </div>
            </motion.div>

            {/* Histórico */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl h-64 flex flex-col"
            >
              <h3 className="text-white font-bold flex items-center gap-2 mb-4">
                <History className="text-gray-400" size={18} />
                Geradas Recentemente
              </h3>
              <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-3 bg-white/5 border border-white/5 rounded-xl hover:border-white/20 transition-colors cursor-pointer group flex items-start gap-3">
                    <MessageSquare size={16} className="text-gray-500 mt-0.5 group-hover:text-primary-glow transition-colors shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-300 truncate">Cliente perguntou sobre o prazo legal de garantia...</p>
                      <span className="text-xs text-gray-500">Há {item * 10} minutos</span>
                    </div>
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
