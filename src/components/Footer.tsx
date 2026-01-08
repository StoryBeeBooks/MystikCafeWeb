'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="relative">
      
      {/* Organic Leaf Wave Transition */}
      <div className="relative h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1440,60 L1440,120 L0,120 Z" 
            fill="#0d1f0a"
          />
          <path 
            d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" 
            fill="#132b0e"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Main Footer - Deep Jungle */}
      <div className="relative bg-gradient-to-b from-[#132b0e] to-[#0a1a07] overflow-hidden">
        
        {/* Animated Fireflies Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#8FCE00] rounded-full animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Jungle Vines Decoration */}
        <div className="absolute top-0 left-4 w-1 h-32 bg-gradient-to-b from-[#2d5a1e] to-transparent rounded-full opacity-30" />
        <div className="absolute top-0 right-8 w-1 h-48 bg-gradient-to-b from-[#2d5a1e] to-transparent rounded-full opacity-20" />
        <div className="absolute top-0 left-1/4 w-0.5 h-24 bg-gradient-to-b from-[#2d5a1e] to-transparent rounded-full opacity-25" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16">
          
          {/* Top Section - CTA & Logo */}
          <div className="text-center mb-16">
            {/* Whisper Text */}
            <p className="text-[#8FCE00]/60 text-xs tracking-[0.5em] uppercase mb-4 font-light">
              🌿 The jungle awaits 🌿
            </p>
            
            {/* Big CTA - "Wooden Sign" Style */}
            <Link 
              href="/book"
              className="group inline-block relative"
            >
              <div className="relative bg-gradient-to-b from-[#2d1810] to-[#1a0e08] border-4 border-[#4a3020] rounded-3xl px-10 md:px-16 py-8 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                {/* Wood grain texture overlay */}
                <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
                }} />
                
                <h2 className="font-[var(--font-grunge)] text-3xl md:text-5xl text-[#f4e4c1] tracking-wider leading-tight relative z-10">
                  JOIN THE
                </h2>
                <h2 className="font-[var(--font-grunge)] text-4xl md:text-6xl text-[#8FCE00] tracking-wider leading-tight relative z-10 drop-shadow-[0_0_20px_rgba(143,206,0,0.3)]">
                  EXPEDITION
                </h2>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-[#8FCE00]/0 group-hover:bg-[#8FCE00]/5 transition-colors duration-500" />
              </div>
              
              {/* Rope/Vine hanging effect */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-6 border-l-2 border-r-2 border-[#4a3020] rounded-b-full" />
            </Link>

            {/* Logo with glow */}
            <div className="mt-10 relative inline-block">
              <div className="absolute inset-0 bg-[#8FCE00]/20 blur-2xl rounded-full scale-150" />
              <Link href="/">
                <img 
                  src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
                  alt="Mystik Cafe Logo" 
                  className="h-16 md:h-20 w-auto relative z-10 hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Organic Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8FCE00]/30" />
            <span className="text-2xl">🦎</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8FCE00]/30" />
          </div>

          {/* Three Column Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
            
            {/* Column 1 - Explore */}
            <div>
              <h3 className="font-[var(--font-grunge)] text-xl text-[#8FCE00] tracking-wider mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">🧭</span> Navigate
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Base Camp', icon: '🏕️' },
                  { href: '/book', label: 'Book Adventure', icon: '🎫' },
                  { href: '/faq', label: 'Field Guide', icon: '📖' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white transition-all duration-300"
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`transition-transform duration-300 ${hoveredLink === link.href ? 'scale-125' : ''}`}>
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Jungle Rules */}
            <div>
              <h3 className="font-[var(--font-grunge)] text-xl text-[#8FCE00] tracking-wider mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📜</span> Jungle Rules
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/safety', label: 'Survival Guide', icon: '⚠️' },
                  { href: '/conduct', label: 'Tribe Code', icon: '🤝' },
                  { href: '/policies', label: 'Territory Laws', icon: '📋' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white transition-all duration-300"
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`transition-transform duration-300 ${hoveredLink === link.href ? 'scale-125' : ''}`}>
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Connect */}
            <div>
              <h3 className="font-[var(--font-grunge)] text-xl text-[#8FCE00] tracking-wider mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📡</span> Send a Signal
              </h3>
              
              {/* Social Icons - Leaf shaped hover */}
              <div className="flex gap-3 justify-center md:justify-start mb-6">
                <SocialIcon href="https://www.facebook.com/61576326151475/" icon={<FaFacebookF />} label="Facebook" />
                <SocialIcon href="https://www.instagram.com/mystikcafe/" icon={<FaInstagram />} label="Instagram" />
                <SocialIcon href="https://www.tiktok.com/@mystik.cafe" icon={<FaTiktok />} label="TikTok" />
              </div>

              {/* Contact - "Radio Transmission" style */}
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span>📍</span> 56C Kensington Ave, Toronto
                </p>
                <a href="mailto:info@mystikcafe.ca" className="flex items-center justify-center md:justify-start gap-2 hover:text-[#8FCE00] transition-colors">
                  <span>✉️</span> info@mystikcafe.ca
                </a>
                <a href="tel:647-560-6524" className="flex items-center justify-center md:justify-start gap-2 hover:text-[#8FCE00] transition-colors">
                  <span>📞</span> 647-560-6524
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>© 2026 Mystik Cafe · Built for the Wild 🌴</p>
            <Link href="/sponsors" className="hover:text-[#8FCE00] transition-colors">
              Our Jungle Allies →
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#8FCE00] hover:border-[#8FCE00] hover:text-[#0a1a07] hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-lg"
    >
      {icon}
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-[#8FCE00]/0 group-hover:bg-[#8FCE00]/20 blur-xl transition-all duration-300" />
    </a>
  );
}
