'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url(https://assets.k12path.com/MystikCafe/footer%20background.jpg)' 
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        
        {/* Join Us text */}
        <p 
          className="text-white text-2xl md:text-3xl tracking-wider mb-6"
          style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
        >
          Join Us
        </p>
        
        {/* Main CTA Button */}
        <Link href="/book">
          <button 
            className="text-white text-3xl md:text-5xl tracking-wide px-10 md:px-14 py-4 md:py-6 bg-[#8FCE00] hover:bg-[#7ab800] rounded-2xl shadow-[0_8px_30px_rgba(143,206,0,0.4)] hover:shadow-[0_12px_40px_rgba(143,206,0,0.6)] transform hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Rubik Distressed, sans-serif' }}
          >
            Explorers of the Wild
          </button>
        </Link>
        
      </div>
    </footer>
  );
}
