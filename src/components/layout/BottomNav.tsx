'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconBarChart, IconHome, IconLayout } from '../shared/Icons';

export default function BottomNav() {
  // Ambil path URL sekarang (misal: '/', '/laporan', atau '/planner')
  const pathname = usePathname();

  // Kita buatin list tab-nya biar gampang di-map
  const tabs = [
    { id: 'audit', href: '/laporan', icon: <IconBarChart />, label: 'Audit' },
    { id: 'home', href: '/', icon: <IconHome />, label: 'Home' },
    { id: 'planner', href: '/planner', icon: <IconLayout />, label: 'Planner' },
  ];

  return (
    <nav className="fixed bottom-0 md:bottom-6 left-1/2 -translate-x-1/2 w-full md:max-w-2xl bg-white/90 backdrop-blur-md border-t md:border border-zinc-100 md:rounded-3xl flex justify-around items-center px-4 md:px-12 py-3 md:shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-30">
      {tabs.map((tab) => {
        // Cek apakah tab ini adalah halaman yang lagi dibuka
        const isActive = pathname === tab.href;
        
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className="flex flex-col items-center gap-1 min-w-[80px] transition-all group"
          >
            {/* Background Kotak untuk Ikon yang Aktif */}
            <div
              className={`
                p-2 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-zinc-800 text-white scale-110 shadow-md' 
                  : 'text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-600'}
              `}
            >
              {tab.icon}
            </div>
            
            {/* Label di bawah ikon */}
            <span
              className={`
                text-[10px] font-bold transition-colors duration-300
                ${isActive ? 'text-zinc-800' : 'text-zinc-400'}
              `}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}