'use client';

import { userProfile } from '@/lib/dummyData';
import SaldoCard from '@/components/dashboard/SaldoCard';
import FAB from '@/components/layout/FAB';
import BottomNav from '@/components/layout/BottomNav';
import { IconDoc, IconClock, IconPiggy, IconCalendar } from '@/components/shared/Icons';

export default function Home() {
  return (
    <div className="bg-[#FDFBF7] w-full h-[100dvh] overflow-hidden md:h-auto">
      <main className="max-w-5xl mx-auto px-6 pt-8 pb-28 flex flex-col h-full">
        
        <header className="flex justify-between items-end mb-5 shrink-0">
          <h1 className="font-extrabold text-3xl tracking-tighter text-zinc-900 uppercase">
            sesa.
          </h1>
          <span className="text-[10px] font-bold text-zinc-400">Halo, {userProfile.username}</span>
        </header>

        <div className="flex-1 flex flex-col md:grid md:grid-cols-12 gap-4 min-h-0">
          <div className="md:col-span-5 rounded-[28px] overflow-hidden border border-zinc-200 bg-white shrink-0 h-[130px] md:h-full">
            <SaldoCard saldo={userProfile.currentBalance} />
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-3 flex-1 min-h-0">
            <MenuCard icon={<IconDoc />} label="RIWAYAT TRANSAKSI" />
            <MenuCard icon={<IconClock />} label="DEADLINE TERDEKAT" />
            <MenuCard icon={<IconPiggy />} label={`SAVINGS: Rp ${userProfile.totalSavings.toLocaleString('id-ID')}`} />
            <MenuCard icon={<IconCalendar />} label="JADWAL HARI INI" />
          </div>
        </div>

      </main>
      <FAB />
      <BottomNav />
    </div>
  );
}

// Nah ini dia fungsi MenuCard yang sempet ngilang
function MenuCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="bg-white h-full w-full md:min-h-[160px] rounded-[24px] md:rounded-[32px] border border-zinc-200 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-4 md:p-6 flex flex-col justify-between items-start hover:bg-blue-50 active:scale-95 transition-all duration-200 group">
      <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-blue-600 shadow-sm transition-colors shrink-0">
        {icon}
      </div>
      <span className="text-[10px] md:text-xs font-black text-zinc-500 text-left leading-tight tracking-wide group-hover:text-blue-800 transition-colors mt-2">
        {label}
      </span>
    </button>
  );
}