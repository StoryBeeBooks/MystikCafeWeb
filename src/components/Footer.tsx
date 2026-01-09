'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url(https://assets.k12path.com/MystikCafe/footer%20background.jpg)' 
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        
        {/* Join Us text */}
        <p 
          className="text-white text-xl md:text-2xl tracking-[0.3em] mb-16 md:mb-20"
          style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
        >
          JOIN US
        </p>
        
        {/* Main CTA Button */}
        <Link href="/book">
          <button 
            className="text-white text-5xl font-bold tracking-wider px-12 md:px-20 py-6 md:py-8 bg-transparent border-4 border-white rounded-3xl hover:bg-black active:bg-black transition-all duration-300"
            style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
          >
            Explorers of the Wild
          </button>
        </Link>
        
      </div>
    </footer>
  );
}
