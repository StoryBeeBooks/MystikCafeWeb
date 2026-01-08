'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-white">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <HeroScene />
    </main>
  );
}
