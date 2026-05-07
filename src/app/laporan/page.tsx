'use client';

import { useState } from 'react';
import Link from 'next/link';
import { transactions } from '@/lib/dummyData';
import BottomNav from '@/components/layout/BottomNav';

export default function LaporanPage() {
  // State untuk toggle tab (default ke pemasukan biar kayak di gambar)
  const [activeTab, setActiveTab] = useState<'pengeluaran' | 'pemasukan'>('pemasukan');

  // Filter transaksi berdasarkan tab yang aktif
  const filteredTransactions = transactions.filter(trx => 
    activeTab === 'pemasukan' ? trx.amount > 0 : trx.amount < 0
  );

  // Hitung total uang
  const totalAmount = filteredTransactions.reduce((acc, curr) => acc + Math.abs(curr.amount), 0);

  return (
    // Background utama dibikin nyatu sama layar mobile
    <div className="bg-[#FDFBF7] min-h-screen pb-32 font-sans text-slate-800 w-full overflow-x-hidden">
      
      {/* Wrapper tengah biar kalau dibuka di web tetep rapi ala mobile app */}
      <main className="max-w-md mx-auto bg-[#FDFBF7] min-h-screen relative">
        
        {/* HEADER */}
        <header className="flex items-center px-6 py-6 gap-4 sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-20">
          <Link href="/">
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm border border-zinc-100 hover:bg-zinc-50 active:scale-95 transition-all">
              <span className="font-bold text-lg">←</span>
            </button>
          </Link>
          <h1 className="font-extrabold text-lg text-zinc-800">Laporan Keuangan</h1>
        </header>

        <div className="px-6 space-y-6">
          
          {/* 1. CONTROL CARD (Bulan & Toggle) */}
          <div className="bg-white rounded-[28px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100">
            
            {/* Slider Bulan */}
            <div className="flex justify-between items-center mb-6">
              <button className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 font-bold hover:bg-zinc-100">&lt;</button>
              <div className="flex flex-col items-center">
                <div className="flex gap-4 items-baseline">
                  <span className="text-[10px] text-zinc-300 font-bold">Apr 2026</span>
                  <span className="font-black text-zinc-800 text-sm">Mei 2026</span>
                  <span className="text-[10px] text-zinc-300 font-bold">Jun 2026</span>
                </div>
                {/* Garis Merah Penanda */}
                <div className="w-0.5 h-3 bg-red-500 rounded-full mt-2"></div>
              </div>
              <button className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 font-bold hover:bg-zinc-100">&gt;</button>
            </div>

            {/* Toggle Switch */}
            <div className="flex bg-zinc-100/70 rounded-2xl p-1 relative">
              <button 
                onClick={() => setActiveTab('pengeluaran')} 
                className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-[10px] sm:text-xs font-black rounded-xl transition-all duration-300 ${activeTab === 'pengeluaran' ? 'bg-white shadow-sm text-zinc-800' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                <span className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center text-[8px]">↓</span>
                Pengeluaran
              </button>
              <button 
                onClick={() => setActiveTab('pemasukan')} 
                className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-[10px] sm:text-xs font-black rounded-xl transition-all duration-300 ${activeTab === 'pemasukan' ? 'bg-white shadow-sm text-zinc-800' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                <span className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center text-[8px]">↑</span>
                Pemasukan
              </button>
            </div>
          </div>

          {/* 2. TOTAL AMOUNT CARD */}
          <div className={`rounded-[28px] p-6 border border-zinc-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-colors duration-500 ${activeTab === 'pemasukan' ? 'bg-gradient-to-br from-cyan-50 to-blue-50' : 'bg-gradient-to-br from-orange-50 to-red-50'}`}>
            <p className="text-xs font-black text-zinc-500 mb-1 text-center uppercase tracking-wider">Total {activeTab}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-zinc-900 tracking-tight">
              Rp{totalAmount.toLocaleString('id-ID')}
            </h2>
          </div>

          {/* 3. CHART CARD */}
          <div className="bg-white rounded-[28px] p-6 border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <p className="text-[10px] font-extrabold text-zinc-400 mb-1">Mei 2026</p>
            <h3 className="font-extrabold text-zinc-800 text-sm mb-8">Grafik {activeTab} mingguan</h3>

            {/* Fake Bar Chart Container */}
            <div className="h-40 flex items-end justify-between gap-3 relative px-2">
              
              {/* Garis Grid Horizontal (Background) */}
              <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none">
                <div className="border-b border-zinc-100 border-dashed w-full h-0 relative"><span className="absolute -right-2 -top-2 text-[8px] font-bold text-zinc-300 bg-white pl-1">400rb</span></div>
                <div className="border-b border-zinc-100 border-dashed w-full h-0 relative"><span className="absolute -right-2 -top-2 text-[8px] font-bold text-zinc-300 bg-white pl-1">300rb</span></div>
                <div className="border-b border-zinc-100 border-dashed w-full h-0 relative"><span className="absolute -right-2 -top-2 text-[8px] font-bold text-zinc-300 bg-white pl-1">200rb</span></div>
                <div className="border-b border-zinc-100 border-dashed w-full h-0 relative"><span className="absolute -right-2 -top-2 text-[8px] font-bold text-zinc-300 bg-white pl-1">100rb</span></div>
                <div className="w-full h-0 relative"><span className="absolute -right-2 -top-2 text-[8px] font-bold text-zinc-300 bg-white pl-1">0</span></div>
              </div>

              {/* Bar (Tingginya dikondisikan sesuai tab) */}
              <div className={`w-8 ${activeTab === 'pemasukan' ? 'h-[25%] bg-teal-200' : 'h-[60%] bg-red-200'} rounded-t-lg z-10 transition-all duration-500`}></div>
              <div className={`w-8 ${activeTab === 'pemasukan' ? 'h-[80%] bg-teal-400' : 'h-[30%] bg-red-400'} rounded-t-lg z-10 transition-all duration-500 shadow-sm`}></div>
              <div className={`w-8 ${activeTab === 'pemasukan' ? 'h-[40%] bg-teal-300' : 'h-[90%] bg-red-500'} rounded-t-lg z-10 transition-all duration-500`}></div>
              <div className={`w-8 ${activeTab === 'pemasukan' ? 'h-[10%] bg-teal-100' : 'h-[15%] bg-red-100'} rounded-t-lg z-10 transition-all duration-500`}></div>
            </div>
            
            {/* Label X-Axis */}
            <div className="flex justify-between mt-3 text-[10px] font-bold text-zinc-400 px-3">
              <span>1-7</span><span>8-14</span><span>15-21</span><span>22-31</span>
            </div>
          </div>

          {/* 4. HISTORY LIST */}
          <div className="pt-2">
            <h3 className="font-extrabold text-zinc-800 text-sm mb-4 ml-1">Riwayat {activeTab}</h3>
            <div className="space-y-3">
              {filteredTransactions.map(trx => (
                <div key={trx.id} className="bg-white p-4 rounded-[20px] border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${activeTab === 'pemasukan' ? 'bg-cyan-50 text-cyan-500' : 'bg-red-50 text-red-500'}`}>
                      {/* Placeholder Icon */}
                      {activeTab === 'pemasukan' ? '+' : '-'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-800">{trx.title}</h4>
                      <p className="text-[10px] text-zinc-400 font-bold mt-0.5">{trx.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-black text-sm block ${activeTab === 'pemasukan' ? 'text-teal-500' : 'text-zinc-800'}`}>
                      {activeTab === 'pemasukan' ? '+' : '-'}Rp{Math.abs(trx.amount).toLocaleString('id-ID')}
                    </span>
                    <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-wide">
                      {trx.date}
                    </span>
                  </div>
                </div>
                
              ))}
            </div>
          </div>

          <div className="mt-6 pb-4">
            <Link href="/riwayat">
                <div className="flex justify-between items-center bg-white p-4 rounded-[20px] border border-zinc-100 shadow-sm hover:bg-zinc-50 transition-all group">
                <span className="text-xs font-black text-zinc-500 group-hover:text-zinc-800 transition-colors">
                    Cek riwayat selengkapnya
                </span>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
                    →
                </span>
                </div>
            </Link>
          </div>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}