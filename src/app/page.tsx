'use client';

import dynamic from 'next/dynamic';
import { HeroIntro, Testimonials, TwoWorlds, VisitUs, Membership, Gallery } from '@/components/LandingSections';

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
    <>
      {/* Hero Section with 3D */}
      <section className="h-screen w-screen bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://assets.k12path.com/MystikCafe/10126758_4371323.jpg)' }}
        />
        
        {/* 3D Scene Overlay */}
        <div className="relative z-10 h-full w-full">
          <HeroScene />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Landing Page Sections */}
      <HeroIntro />
      <Testimonials />
      <TwoWorlds />
      <Gallery />
      <VisitUs />
      <Membership />
    </>
  );
}
