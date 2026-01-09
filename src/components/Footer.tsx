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
          className="text-white text-xl md:text-2xl tracking-[0.3em] mb-32 md:mb-48"
          style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
        >
          JOIN US
        </p>
        
        {/* Main CTA Button */}
        <Link href="/book">
          <button 
            className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider px-24 md:px-36 py-12 md:py-16 leading-tight bg-transparent border-2 border-white rounded-3xl hover:bg-black hover:cursor-pointer active:bg-black transition-all duration-300"
            style={{ 
              fontFamily: 'Rubik Distressed, sans-serif',
              cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer'
            }}
          >
            Explorers<br />of the Wild
          </button>
        </Link>
        
      </div>
    </footer>
  );
}
