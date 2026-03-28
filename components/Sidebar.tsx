import { 
  LayoutDashboard, MessageSquare, Brush, Users, Globe, Settings, 
  User, Bot, Zap, MessageCircle, PlaySquare, BarChart, CreditCard, Brain
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menuGroups = [
    {
      label: 'Motor de Vendas',
      items: [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
        { name: 'CRM Kanban', icon: Users, href: '/crm' },
        { name: 'Atendimento IA', icon: Bot, href: '/atendimento' },
        { name: 'Chat Real', icon: MessageCircle, href: '/chat' },
      ]
    },
    {
      label: 'Inteligência & Aquisição',
      items: [
        { name: 'Gerador Criativos', icon: Brush, href: '/criativos' },
        { name: 'Meu Site', icon: Globe, href: '/sites' },
        { name: 'Tráfego Pago', icon: Zap, href: '/trafego' },
        { name: 'EAD / Treinamentos', icon: PlaySquare, href: '/ead' },
      ]
    },
    {
      label: 'Gestão',
      items: [
        { name: 'Dominic Sense', icon: Brain, href: '/sense' },
        { name: 'Relatórios', icon: BarChart, href: '/relatorios' },
        { name: 'Assinatura', icon: CreditCard, href: '/assinatura' },
      ]
    }
  ];

  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 rounded-2xl bg-[#0f0f14]/80 backdrop-blur-xl border border-white/5 p-5 flex flex-col justify-between z-50 shadow-2xl overflow-y-auto custom-scrollbar">
      <div>
        <div className="flex items-center gap-3 px-2 mb-8 mt-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-gray-900 to-gray-700 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">DOMINIC <span className="text-xs align-top opacity-50">PRO</span></h1>
        </div>

        <nav className="space-y-6">
          {menuGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-2">
                {group.label}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                  >
                    <item.icon size={18} className="group-hover:scale-110 group-hover:text-primary-glow transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-2 mt-8">
        <div className="px-4 py-3 bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-2xl flex items-center gap-3 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white font-bold z-10">DS</div>
          <div className="z-10">
            <p className="text-sm font-bold text-white leading-none">Dominic Silva</p>
            <p className="text-[11px] text-gray-400 mt-1">Admin Pro</p>
          </div>
        </div>
        
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
          <Settings size={18} />
          <span className="font-medium">Configurações</span>
        </Link>
      </div>
    </aside>
  );
}
