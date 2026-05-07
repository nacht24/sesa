import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SESA. - Personal Hub Planner',
  description: 'Aplikasi manajemen personal dan finansial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Pastiin body-nya polos aja, hapus class bg-black, flex, justify-center, atau max-w-md yang ngunci layarnya */}
      <body className="bg-[#FDFBF7] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}