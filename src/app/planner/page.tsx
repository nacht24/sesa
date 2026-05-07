'use client';

import { todaySchedule, upcomingDeadlines } from '@/lib/dummyData';
import BottomNav from '@/components/layout/BottomNav';
import Link from 'next/link';

export default function PlannerPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-32 font-sans text-slate-800 w-full overflow-x-hidden">
      <main className="max-w-md mx-auto bg-[#FDFBF7] min-h-screen relative">
        
        {/* HEADER */}
        <header className="px-6 py-6 sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-20">
          <h1 className="font-extrabold text-2xl tracking-tighter text-zinc-900 uppercase">
            Personal Planner
          </h1>
          <p className="text-[10px] font-bold text-zinc-400">Jumat, 8 Mei 2026</p>
        </header>

        <div className="px-6 space-y-8">
          
          {/* 1. HORIZONTAL MINI CALENDAR */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Mei 2026</h2>
              <span className="text-[10px] font-bold text-blue-600">Lihat Kalender →</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {[6, 7, 8, 9, 10, 11, 12].map((date) => (
                <div 
                  key={date}
                  className={`min-w-[50px] h-20 rounded-2xl flex flex-col items-center justify-center border transition-all ${date === 8 ? 'bg-zinc-900 border-zinc-900 shadow-lg scale-105' : 'bg-white border-zinc-100'}`}
                >
                  <span className={`text-[10px] font-bold ${date === 8 ? 'text-zinc-400' : 'text-zinc-300'}`}>
                    {date === 8 ? 'HARI INI' : 'MEI'}
                  </span>
                  <span className={`text-xl font-black ${date === 8 ? 'text-white' : 'text-zinc-800'}`}>
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. DEADLINE TRACKER */}
          <section>
            <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Upcoming Deadlines</h2>
            <div className="space-y-3">
              {upcomingDeadlines.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-[24px] border border-zinc-100 shadow-sm flex items-center gap-4 group">
                  <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`} />
                  <div className="flex-1">
                    <h3 className="font-extrabold text-xs text-zinc-800">{item.task}</h3>
                    <p className="text-[10px] text-zinc-400 font-bold mt-0.5">{item.deadline}</p>
                  </div>
                  <button className="w-6 h-6 rounded-lg border-2 border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <span className="text-[10px] hidden group-hover:block">✓</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 3. DAILY TIMELINE (Logbook Style) */}
          <section>
            <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Today's Schedule</h2>
            <div className="relative border-l-2 border-zinc-100 ml-2 pl-6 space-y-8">
              {todaySchedule.map((item) => (
                <div key={item.id} className="relative">
                  {/* Dot on line */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-zinc-800" />
                  
                  <div className="bg-white p-5 rounded-[28px] border border-zinc-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                    <span className="text-[9px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h3 className="font-extrabold text-sm text-zinc-800 mt-2">{item.activity}</h3>
                    <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase">PT Krakatau Information Technology</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. MENTAL HEALTH / MOOD CHECK (Optional but nice) */}
          <section className="bg-zinc-900 rounded-[32px] p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-black text-sm uppercase tracking-tighter italic">"Keep grinding, Hamzah!"</h3>
              <p className="text-[10px] text-zinc-400 font-bold mt-1 leading-relaxed">
                6th Semester Informatics Student @ UNTIRTA. <br />
                Chairman of Class 2023 & HMIF Vice Chairman.
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-full blur-[60px] opacity-30 translate-x-10 -translate-y-10" />
          </section>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}