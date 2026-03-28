import { LayoutDashboard, MessageSquare, Brush, Users, Globe, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 rounded-2xl bg-card-bg/60 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between z-50">
      <div>
        <h1 className="text-2xl font-bold text-white mb-8 px-4">Luminous</h1>
        <nav className="space-y-2">
          {[
            { name: 'Dashboard', icon: LayoutDashboard },
            { name: 'Atendimento', icon: MessageSquare },
            { name: 'Criativos', icon: Brush },
            { name: 'CRM', icon: Users },
            { name: 'Meu Site', icon: Globe },
          ].map((item) => (
            <Link key={item.name} href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all">
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="space-y-4">
        <div className="px-4 py-3 bg-white/5 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-vibrant flex items-center justify-center text-white font-bold">DS</div>
          <div>
            <p className="text-sm font-bold text-white leading-none">Dominic Silva</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all">
          <Settings size={20} />
          <span className="font-medium">Configurações</span>
        </Link>
      </div>
    </aside>
  );
}
