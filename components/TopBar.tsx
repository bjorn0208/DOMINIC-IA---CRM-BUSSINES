import { Bell, HelpCircle, Search } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-4 left-80 right-4 h-16 rounded-2xl bg-card-bg/60 backdrop-blur-md border border-white/10 flex items-center justify-between px-6 z-40">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input type="text" placeholder="Pesquisar..." className="w-full bg-white/5 border-none rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:ring-2 focus:ring-primary-vibrant/50 transition-all" />
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <Bell size={20} className="cursor-pointer hover:text-white" />
        <HelpCircle size={20} className="cursor-pointer hover:text-white" />
        <div className="w-8 h-8 rounded-full bg-gray-700" />
      </div>
    </header>
  );
}
