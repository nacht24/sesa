import React from 'react';

interface SaldoCardProps {
  saldo: number;
}

export default function SaldoCard({ saldo }: SaldoCardProps) {
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center text-center">
      <p className="text-[11px] font-bold text-zinc-400 mb-3 tracking-widest">
        SISA JATAH SAAT INI
      </p>
      <h2 className="text-4xl font-extrabold text-zinc-800 tracking-tight">
        {formatRupiah(saldo)}
      </h2>
    </div>
  );
}