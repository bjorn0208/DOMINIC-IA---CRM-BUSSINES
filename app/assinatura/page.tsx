'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { CreditCard, Check, ShieldCheck, Zap, History, ExternalLink, ArrowRight, Download, Star } from 'lucide-react';

export default function AssinaturaPage() {
  const plans = [
    { name: 'Starter', price: '97', period: 'mês', color: 'border-white/5', icon: Zap, features: ['Até 500 Leads/mês', 'CRM Kanban Básico', 'Gerador de Criativos', '1 Site Hospedado'] },
    { name: 'Pro', price: '297', period: 'mês', color: 'border-primary-glow/40 bg-primary-glow/5', icon: Star, features: ['Leads Ilimitados', 'Dominic Sense AI (Predictive)', 'Chat com Comandos Rápidos', 'Evolution API Integrada', '3 Sites Hospedados'] },
    { name: 'Enterprise', price: '997', period: 'mês', color: 'border-yellow-500/40', icon: ShieldCheck, features: ['Acesso Total ao Ecossistema', 'Treinamento VIP Presencial', 'Sites Ilimitados', 'Suporte Prioritário 24/7'] },
  ];

  const invoices = [
    { id: '#8842', date: '25 Out, 2026', total: 'R$ 297,00', status: 'Pago', method: '•••• 4242' },
    { id: '#8120', date: '25 Set, 2026', total: 'R$ 297,00', status: 'Pago', method: '•••• 4242' },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <div className="mb-10 text-center max-w-2xl mx-auto">
           <h1 className="text-4xl font-black text-white mb-4">Escolha o seu nível de escala</h1>
           <p className="text-gray-500 text-lg">O Dominic Black é a única máquina que se paga logo no primeiro lead quente que você fecha.</p>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
           {plans.map((p, i) => (
             <motion.div 
               key={p.name}
               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
               className={`p-10 rounded-[32px] border flex flex-col items-center text-center relative group overflow-hidden ${p.color}`}
             >
                {p.name === 'Pro' && (
                  <div className="absolute top-0 right-0 py-1.5 px-6 bg-primary-glow text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">Mais Vendido</div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                   <p.icon size={32} className={p.name === 'Pro' ? 'text-primary-glow' : (p.name === 'Enterprise' ? 'text-yellow-500' : 'text-gray-400')} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                   <span className="text-gray-500 text-sm font-bold">R$</span>
                   <span className="text-4xl font-black text-white">{p.price}</span>
                   <span className="text-gray-500 text-xs">/{p.period}</span>
                </div>

                <div className="flex-1 space-y-4 mb-10 w-full">
                   {p.features.map(f => (
                     <div key={f} className="flex items-start gap-3 text-left">
                        <Check size={16} className="text-success-neon shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{f}</span>
                     </div>
                   ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                  p.name === 'Pro' ? 'bg-primary-glow text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:brightness-110' : 'bg-white/5 border border-white/5 text-white hover:bg-white/10'
                }`}>
                   Assinar o Plano {p.name} <ArrowRight size={18} />
                </button>
             </motion.div>
           ))}
        </div>

        {/* Billing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/5 pt-16 px-4">
           
           {/* Cartão Ativo */}
           <div className="lg:col-span-5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <CreditCard size={20} className="text-primary-glow" /> Método de Pagamento
              </h2>
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-20">
                    <ShieldCheck size={120} />
                 </div>
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start mb-12">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Cartão Ativo</span>
                       <span className="text-2xl italic font-black text-white">VISA</span>
                    </div>
                    <div>
                       <p className="text-xl font-mono text-white tracking-widest mb-4">•••• •••• •••• 4242</p>
                       <div className="flex justify-between items-end">
                          <div>
                             <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Titular</p>
                             <p className="text-sm text-white font-bold">Dominic Silva</p>
                          </div>
                          <div>
                             <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Validade</p>
                             <p className="text-sm text-white font-bold">12/28</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <button className="mt-6 w-full py-4 bg-white/5 border border-white/5 rounded-2xl text-gray-400 font-bold hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
                 Alterar Cartão de Crédito <ExternalLink size={16} />
              </button>
           </div>

           {/* Historico de Faturas */}
           <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <History size={20} className="text-gray-500" /> Histórico de Faturamento
              </h2>
              <div className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                 <table className="w-full text-left">
                    <thead className="bg-black/40 border-b border-white/5">
                       <tr>
                          <th className="px-6 py-4 text-[10px] text-gray-500 font-black uppercase tracking-widest">ID</th>
                          <th className="px-6 py-4 text-[10px] text-gray-500 font-black uppercase tracking-widest">Data</th>
                          <th className="px-6 py-4 text-[10px] text-gray-500 font-black uppercase tracking-widest">Valor</th>
                          <th className="px-6 py-4 text-[10px] text-gray-500 font-black uppercase tracking-widest">Ações</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {invoices.map(inv => (
                         <tr key={inv.id} className="hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4 text-sm text-white font-bold">{inv.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-400">{inv.date}</td>
                            <td className="px-6 py-4 text-sm text-success-neon font-mono">{inv.total}</td>
                            <td className="px-6 py-4">
                               <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all">
                                  <Download size={18} />
                               </button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

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
