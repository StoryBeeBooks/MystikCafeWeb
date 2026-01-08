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
    <main className="h-screen w-screen bg-white relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.k12path.com/MystikCafe/background%20video.mp4" type="video/mp4" />
      </video>
      
      {/* 3D Scene Overlay */}
      <div className="relative z-10">
        <HeroScene />
      </div>
    </main>
  );
}
