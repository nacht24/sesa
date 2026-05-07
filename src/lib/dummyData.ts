// src/lib/dummyData.ts

export const userProfile = {
  name: "Hamzah Permata Putra",
  username: "Sae",
  currentBalance: 500000,
  totalSavings: 2500000,
};

export const transactions = [
  { id: '1', title: 'Mie Gacoan Level 2', amount: -25000, category: 'Food', date: '2026-05-08' },
  { id: '2', title: 'Top up by.U', amount: -50000, category: 'Bills', date: '2026-05-07' },
  { id: '3', title: 'Transfer Ortu', amount: 1000000, category: 'Income', date: '2026-05-01' },
];

export const upcomingDeadlines = [
  { id: '1', task: 'Tugas Akhir UI/UX', deadline: '2 Hari lagi', color: 'bg-red-500' },
  { id: '2', task: 'Project Web Laravel', deadline: '5 Hari lagi', color: 'bg-orange-500' },
];

export const todaySchedule = [
  { id: '1', activity: 'Briefing Penugasan', time: '13:00 - 13:30' },
  { id: '2', activity: 'Sesi Mentorship', time: '14:00 - 15:00' },
];