'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Search, Send, Paperclip, MoreVertical, Sparkles, User, Check, CheckCheck, Smile } from 'lucide-react';
import Image from 'next/image';

const mockContacts = [
  { id: 1, name: 'Mariana Silva', lastMsg: 'Vou ver com meu marido e te falo', time: '10:42', unread: 2, online: true, tag: 'Frio' },
  { id: 2, name: 'Ricardo Oliveira', lastMsg: 'Me manda o link de pagamento', time: '10:30', unread: 1, online: true, tag: 'Quente' },
  { id: 3, name: 'Ana Costa', lastMsg: 'Ok, combinado!', time: 'Ontem', unread: 0, online: false, tag: 'Interessado' },
];

const mockMessages = [
  { id: 1, text: 'Olá, gostaria de saber mais sobre o sistema.', sender: 'client', time: '10:15' },
  { id: 2, text: 'Claro! O Dominic Black é uma máquina completa para escalar vendas com IA. Como posso te ajudar hoje?', sender: 'me', time: '10:17', read: true },
  { id: 3, text: 'Gostei do que vi, mas achei o valor alto agora pro meu caixa.', sender: 'client', time: '10:30' },
];

export default function ChatPage() {
  const [aiMode, setAiMode] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [showCommands, setShowCommands] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputVal(val);
    if (val.endsWith('/')) {
      setShowCommands(true);
    } else {
      setShowCommands(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 h-screen flex flex-col">
        
        <div className="flex-1 bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden flex shadow-2xl">
          
          {/* Lado Esquerdo: Lista de Contatos */}
          <div className="w-80 border-r border-white/5 flex flex-col bg-black/20">
            <div className="p-5 border-b border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Conversas</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="text" placeholder="Buscar lead..." 
                  className="w-full bg-black/40 border border-white/5 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-glow/50 text-white" 
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {mockContacts.map(contact => (
                <div key={contact.id} className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors relative group">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold">
                        {contact.name.charAt(0)}
                      </div>
                      {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-neon rounded-full border-2 border-[#16161d]"></div>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-white font-bold text-sm truncate">{contact.name}</h3>
                        <span className="text-[10px] text-gray-500">{contact.time}</span>
                      </div>
                      <p className="text-xs text-gray-400 truncate pr-4">{contact.lastMsg}</p>
                    </div>
                  </div>
                  {contact.unread > 0 && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 bg-primary-glow rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      {contact.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Área de Chat */}
          <div className="flex-1 flex flex-col relative">
            
            {/* Topbar do Chat */}
            <div className="h-20 border-b border-white/5 bg-black/10 px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <h3 className="text-white font-bold">Mariana Silva</h3>
                  <p className="text-xs text-gray-400">Online agora • Lead <span className="text-orange-500">Quente</span></p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5">
                  <button 
                    onClick={() => setAiMode(false)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${!aiMode ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Humano
                  </button>
                  <button 
                    onClick={() => setAiMode(true)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${aiMode ? 'bg-primary-glow/20 text-primary-glow border border-primary-glow/50' : 'text-gray-500 hover:text-white'}`}
                  >
                    <Sparkles size={12} /> Dominic AI
                  </button>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Histórico de Mensagens */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed" style={{ backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.2)'}}>
              <div className="text-center text-xs text-gray-600 font-medium mb-8">Hoje</div>
              
              {mockMessages.map(msg => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[70%] p-3 px-4 rounded-2xl ${
                    msg.sender === 'me' 
                      ? 'bg-primary-glow/20 border border-primary-glow/30 text-white rounded-tr-sm' 
                      : 'bg-[#16161d] border border-white/5 text-gray-200 rounded-tl-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1 flex items-center gap-1">
                    {msg.time} 
                    {msg.sender === 'me' && <CheckCheck size={12} className={msg.read ? 'text-blue-400' : 'text-gray-500'} />}
                  </div>
                </div>
              ))}
            </div>

            {/* Sugestão IA (Flutuante) */}
            <AnimatePresence>
              {aiMode && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-24 left-6 right-6 bg-primary-glow/10 border border-primary-glow/30 rounded-xl p-4 shadow-lg backdrop-blur-md flex items-start gap-3"
                >
                  <Sparkles className="text-primary-glow mt-0.5 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold text-primary-glow uppercase tracking-wider mb-1">Sugestão de Fechamento</h4>
                    <p className="text-sm text-white">Entendo, Mariana! O que acha de parcelarmos no cartão? O investimento mensal fica menor que uma pizza, e você já ativa a máquina hoje mesmo.</p>
                    <div className="block mt-3 space-x-2">
                      <button className="bg-primary-glow text-white text-xs px-3 py-1.5 rounded-lg font-bold hover:bg-primary-glow/80">
                        Usar Resposta
                      </button>
                      <button className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white/20">
                        Gerar Outra
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Área */}
            <div className="p-4 bg-black/40 border-t border-white/5 relative">
              {showCommands && (
                <div className="absolute bottom-full left-4 mb-2 w-64 bg-[#16161d] border border-white/10 rounded-xl shadow-2xl p-2 z-50">
                  <div className="text-xs font-bold text-gray-500 uppercase px-2 mb-2 mt-1">Comandos Rápidos</div>
                  {[
                    { cmd: '/pix', desc: 'Enviar chave PIX' },
                    { cmd: '/link', desc: 'Link de checkout' },
                    { cmd: '/audio1', desc: 'Áudio quebra-objeção' }
                  ].map(c => (
                    <div key={c.cmd} className="px-3 py-2 hover:bg-white/5 rounded-lg cursor-pointer flex justify-between items-center group">
                      <span className="text-primary-glow font-bold text-sm">{c.cmd}</span>
                      <span className="text-xs text-gray-400">{c.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5">
                  <Smile size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  value={inputVal}
                  onChange={handleInput}
                  placeholder={aiMode ? "Pressione '/' para comandos ou deixe a IA responder..." : "Digite sua mensagem..."}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary-glow/50"
                />
                <button className="w-12 h-12 rounded-xl bg-primary-glow text-white flex items-center justify-center hover:bg-primary-glow/80 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Send size={18} className="translate-x-[2px]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
