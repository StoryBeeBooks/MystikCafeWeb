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
          className="text-white text-xl md:text-2xl tracking-[0.3em] mb-24 md:mb-32"
          style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
        >
          JOIN US
        </p>
        
        {/* Main CTA Button */}
        <Link href="/book">
          <button 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider px-16 md:px-24 py-8 md:py-10 leading-tight bg-transparent border-4 border-white rounded-3xl hover:bg-black active:bg-black transition-all duration-300"
            style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
          >
            Explorers<br />of the Wild
          </button>
        </Link>
        
      </div>
    </footer>
  );
}
