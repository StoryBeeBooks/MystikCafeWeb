'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative mt-20">
      
      {/* Gradient Transition (Replaces the Zig-Zag) */}
      <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1a120b] z-10 pointer-events-none" />

      {/* Main Background Layer */}
      <div className="relative pt-16 pb-12 px-6 text-white overflow-hidden bg-[#1a120b]">
        
        {/* Background Image with Lighter Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('https://assets.k12path.com/MystikCafe/footer%20background.jpg')",
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Join Us Text */}
          <p className="text-gray-500 text-xs tracking-[0.4em] uppercase mb-6">Join Us</p>
          
          {/* Explorers Box */}
          <Link href="/book" className="mb-6 transform hover:scale-105 transition duration-300">
            <div className="border-2 border-gray-500/40 bg-black/50 backdrop-blur-sm rounded-xl px-12 py-8">
              <h2 className="font-[var(--font-grunge)] text-4xl md:text-5xl tracking-[0.15em] text-white uppercase leading-none">
                Explorers
              </h2>
              <div className="flex items-center justify-center gap-3 my-3">
                <span className="h-[1px] w-8 bg-gray-500"></span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400">Of The</span>
                <span className="h-[1px] w-8 bg-gray-500"></span>
              </div>
              <h2 className="font-[var(--font-grunge)] text-5xl md:text-6xl tracking-[0.15em] text-white uppercase leading-none">
                Wild
              </h2>
            </div>
          </Link>
          
          {/* Logo */}
          <Link href="/" className="mb-8">
            <img 
              src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
              alt="Mystik Cafe Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Brush Stroke Divider - Like Toronto Zoo */}
          <div className="w-full max-w-5xl mb-10">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">
              <path 
                d="M0,30 Q100,10 200,35 T400,25 T600,40 T800,20 T1000,35 T1200,30" 
                stroke="#3d2a1a" 
                strokeWidth="40" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Three Column Layout - Better Aligned */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-4xl gap-12 text-left">
            
            {/* Follow Us - Social Icons */}
            <div>
              <h3 className="text-[#8FCE00] font-bold text-sm tracking-wider mb-5 uppercase">
                Follow Us <span className="ml-1">↘</span>
              </h3>
              <div className="flex gap-3">
                <SocialIcon href="https://www.facebook.com/61576326151475/" icon={<FaFacebookF />} color="bg-[#1877F2]" />
                <SocialIcon href="https://www.instagram.com/mystikcafe/" icon={<FaInstagram />} color="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" />
                <SocialIcon href="https://www.tiktok.com/@mystik.cafe" icon={<FaTiktok />} color="bg-black border border-white/20" />
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-[#8FCE00] transition-colors">Home</Link></li>
                <li><Link href="/faq" className="hover:text-[#8FCE00] transition-colors">FAQ</Link></li>
                <li><Link href="/policies" className="hover:text-[#8FCE00] transition-colors">Policies</Link></li>
                <li><Link href="/sponsors" className="hover:text-[#8FCE00] transition-colors">Sponsors & Partners</Link></li>
                <li><Link href="/safety" className="hover:text-[#8FCE00] transition-colors">For Your Safety</Link></li>
                <li><Link href="/conduct" className="hover:text-[#8FCE00] transition-colors">Code of Conduct</Link></li>
              </ul>
            </div>

            {/* Contact Info - Right */}
            <div className="text-sm text-gray-300 space-y-2 md:text-right">
              <p>56C Kensington Ave.</p>
              <p>Toronto, ON M5T 2K1</p>
              <a href="mailto:info@mystikcafe.ca" className="block hover:text-[#8FCE00] transition-colors">
                info@mystikcafe.ca
              </a>
              <a href="tel:647-560-6524" className="block hover:text-[#8FCE00] transition-colors">
                647-560-6524
              </a>
              <p className="text-gray-600 text-xs mt-4">© 2026 Mystik Cafe</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
    >
      {icon}
    </a>
  );
}
