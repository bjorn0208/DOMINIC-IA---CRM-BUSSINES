'use client';
import { motion } from 'motion/react';
import { Play className="mr-2", ArrowRight, Flame, Users, Zap, MessageSquare, Brush } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Link from 'next/link';

export default function Home() {
  const metrics = [
    { title: 'Leads Hoje', value: '1,248', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { title: 'Leads Quentes', value: '312', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Pagamentos Pendentes', value: '14', icon: Zap, color: 'text-success-neon', bg: 'bg-success-neon/10' },
  ];

  const actions = [
    { name: 'Atendimento IA', icon: MessageSquare, href: '/atendimento', desc: 'Resolver chats pendentes' },
    { name: 'Novo Criativo', icon: Brush, href: '/criativos', desc: 'Gerar anúncios de alta conversão' },
    { name: 'Acessar CRM', icon: Users, href: '/crm', desc: 'Gerenciar funil de vendas' },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="ml-76 pt-24 p-8 pr-12 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Sessão de Boas-vindas & Vídeo */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#13131a] to-[#0a0a0c] border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
            >
              <div className="p-8 md:p-10 flex-1 z-10">
                <div className="inline-block px-3 py-1 bg-primary-glow/10 text-primary-glow text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  Sua Máquina
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Bem-vindo de volta,<br /> <span className="text-gray-400">Dominic Silva</span>
                </h1>
                <p className="text-gray-400 mb-8 max-w-md">
                  Seu ecossistema de aquisição e conversão está rodando. Assista ao vídeo de orientação do dia para alinhar sua estratégia.
                </p>
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                  <Play className="fill-black" size={16} /> 
                  Assistir Update
                </button>
              </div>
              {/* Vídeo Thumbnail Placeholder */}
              <div className="md:w-64 lg:w-80 relative bg-black/50 border-l border-white/5 flex items-center justify-center min-h-[200px]">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop")'}}></div>
                <div className="w-16 h-16 rounded-full bg-primary-glow/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10 border border-primary-glow/50">
                   <Play className="text-white fill-white ml-1" size={24} />
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Column */}
            <div className="space-y-4">
              {metrics.map((metric, i) => (
                <motion.div 
                  key={metric.title}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-white/10 transition-all cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.bg}`}>
                    <metric.icon size={24} className={metric.color} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Atalhos Rápidos */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="text-primary-glow" size={20} /> Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actions.map((action, i) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                >
                  <Link href={action.href} className="block group">
                    <div className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-6 rounded-3xl hover:border-primary-glow/30 hover:bg-white/[0.02] transition-all relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="text-primary-glow" size={20} />
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <action.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{action.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[80%]">{action.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
