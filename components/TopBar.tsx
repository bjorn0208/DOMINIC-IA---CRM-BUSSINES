import { Bell, HelpCircle, Search, Zap } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-4 left-76 right-4 h-16 rounded-2xl bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 flex items-center justify-between px-6 z-40 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Pesquisar leads, relatórios (Pressione '/')" 
            className="w-full bg-black/40 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-neutral-200 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary-glow/50 focus:border-primary-glow/50 transition-all" 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success-neon/10 text-success-neon border border-success-neon/20 hover:bg-success-neon/20 transition-colors text-xs font-bold uppercase tracking-wider">
          <Zap size={14} className="fill-success-neon/40" />
          <span className="hidden sm:inline">12 Alertas</span>
        </button>
        
        <div className="w-px h-6 bg-white/10 mx-2"></div>
        
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0f0f14]"></span>
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <HelpCircle size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 border border-white/10 shadow-inner ml-2 cursor-pointer" />
      </div>
    </header>
  );
}
