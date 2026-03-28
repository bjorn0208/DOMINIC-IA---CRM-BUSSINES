'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export default function AtendimentoPage() {
  return (
    <div className="min-h-screen bg-bg-deep">
      <Sidebar />
      <TopBar />
      <main className="ml-80 pt-24 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Central de Atendimento</h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-2xl bg-card-bg/60 backdrop-blur-md border border-white/10">
          <p className="text-gray-400">Otimize suas interações com clientes.</p>
        </motion.div>
      </main>
    </div>
  );
}
