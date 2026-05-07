'use client';

import { useState } from 'react';
import { IconWallet, IconSchedule, IconNotes } from '../shared/Icons';

export default function FAB() {
  const [open, setOpen] = useState(false);

  return (
    // Posisi fixed di pojok kanan bawah, sesuaikan jarak dengan BottomNav
    <div className="fixed bottom-28 right-8 z-50">
      
      {/* Container utama (ukuran sama persis kayak tombol utama) biar animasinya berpusat di sini */}
      <div className="relative w-14 h-14">
        
        {/* Overlay transparan biar bisa nutup FAB kalau klik di mana aja */}
        {open && (
          <div className="fixed inset-0 -z-10 bg-transparent" onClick={() => setOpen(false)} />
        )}

        {/* 1. BULATAN ATAS (Audit Center) */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out z-10
            ${open ? '-translate-y-[70px] scale-100 opacity-100' : 'translate-y-0 scale-0 opacity-0 pointer-events-none'}
          `}
        >
          {/* Tombol Bulat */}
          <button className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,150,0.3)] hover:bg-blue-700 transition-colors">
            <IconWallet />
          </button>
        </div>

        {/* 2. BULATAN DIAGONAL / KIRI ATAS (Personal Planner) */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out z-10 delay-75
            ${open ? '-translate-y-[70px] -translate-x-[70px] scale-100 opacity-100' : 'translate-y-0 translate-x-0 scale-0 opacity-0 pointer-events-none'}
          `}
        >
          <button className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,150,0.3)] hover:bg-blue-700 transition-colors">
            <IconSchedule />
          </button>
        </div>

        {/* 3. BULATAN KIRI (HomePage) */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out z-10 delay-150
            ${open ? '-translate-x-[70px] scale-100 opacity-100' : 'translate-x-0 scale-0 opacity-0 pointer-events-none'}
          `}
        >
          <button className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,150,0.3)] hover:bg-blue-700 transition-colors">
            <IconNotes />
          </button>
        </div>

        {/* ========================================= */}
        {/* TOMBOL UTAMA (KOTAK X / +) - SELALU DI DEPAN */}
        {/* ========================================= */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            absolute inset-0 w-14 h-14 flex items-center justify-center text-white z-20 shadow-2xl transition-all duration-300
            ${open ? 'bg-zinc-900 rounded-[20px] rotate-0' : 'bg-blue-800 rounded-[20px] rotate-0'}
          `}
        >
          <span className={`text-2xl font-bold transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>
            +
          </span>
        </button>

      </div>
    </div>
  );
}