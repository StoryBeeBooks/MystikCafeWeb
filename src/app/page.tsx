'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="h-screen w-screen bg-white relative overflow-hidden flex-shrink-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://assets.k12path.com/MystikCafe/background.jpg)' }}
        />
        
        {/* 3D Scene Overlay */}
        <div className="relative z-10 h-full w-full">
          <HeroScene />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
