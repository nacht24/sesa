'use client';

import { useState } from 'react';
import Link from 'next/link';
import { transactions } from '@/lib/dummyData';
import BottomNav from '@/components/layout/BottomNav';

export default function RiwayatPage() {
  // State buat filter: Semua, Pemasukan, atau Pengeluaran
  const [filter, setFilter] = useState<'semua' | 'pemasukan' | 'pengeluaran'>('semua');

  // Logika filter data
  const filteredTransactions = transactions.filter((trx) => {
    if (filter === 'pemasukan') return trx.amount > 0;
    if (filter === 'pengeluaran') return trx.amount < 0;
    return true; // Kalau 'semua'
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-32 font-sans text-slate-800 w-full overflow-x-hidden">
      <main className="max-w-md mx-auto bg-[#FDFBF7] min-h-screen relative">
        
        {/* HEADER STICKY */}
        <header className="flex items-center px-6 py-6 gap-4 sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-20 border-b border-zinc-100/50">
          <Link href="/laporan">
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm border border-zinc-100 hover:bg-zinc-50 active:scale-95 transition-all">
              <span className="font-bold text-lg">←</span>
            </button>
          </Link>
          <h1 className="font-extrabold text-lg text-zinc-800">Riwayat Transaksi</h1>
        </header>

        <div className="px-6 mt-6">
          
          {/* FILTER PILLS */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              onClick={() => setFilter('semua')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === 'semua' ? 'bg-zinc-800 text-white' : 'bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => setFilter('pemasukan')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === 'pemasukan' ? 'bg-teal-500 text-white' : 'bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}
            >
              Pemasukan
            </button>
            <button 
              onClick={() => setFilter('pengeluaran')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === 'pengeluaran' ? 'bg-red-500 text-white' : 'bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}
            >
              Pengeluaran
            </button>
          </div>

          {/* LIST TRANSAKSI */}
          <div className="space-y-3">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map(trx => (
                <div key={trx.id} className="bg-white p-4 rounded-[20px] border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${trx.amount > 0 ? 'bg-cyan-50 text-cyan-500' : 'bg-red-50 text-red-500'}`}>
                      {trx.amount > 0 ? '+' : '-'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-800">{trx.title}</h4>
                      <p className="text-[10px] text-zinc-400 font-bold mt-0.5">{trx.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-black text-sm block ${trx.amount > 0 ? 'text-teal-500' : 'text-zinc-800'}`}>
                      {trx.amount > 0 ? '+' : '-'}Rp{Math.abs(trx.amount).toLocaleString('id-ID')}
                    </span>
                    <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-wide">
                      {trx.date}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-sm font-bold text-zinc-400">Belum ada transaksi di kategori ini.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}