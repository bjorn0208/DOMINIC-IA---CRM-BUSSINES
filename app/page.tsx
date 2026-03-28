'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-deep">
      <Sidebar />
      <TopBar />
      <main className="ml-80 pt-24 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card-bg/60 backdrop-blur-md border border-white/10"
            >
              <h2 className="text-xl font-bold text-white mb-2">Métrica {i}</h2>
              <p className="text-gray-400">Informação importante sobre o sistema.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
