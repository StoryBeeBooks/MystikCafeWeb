'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative w-full">
      
      {/* Simple Wave Transition */}
      <div className="relative h-20 md:h-24 overflow-hidden bg-transparent -mb-1 w-full">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,40 C480,100 960,0 1440,40 L1440,100 L0,100 Z" 
            fill="#1a3314"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="relative bg-[#1a3314] w-full">

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 py-12 md:py-16">
          
          {/* Top: CTA + Logo Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            
            {/* Main CTA */}
            <Link 
              href="/book"
              className="group"
            >
              <div className="relative bg-gradient-to-b from-[#3d2817] to-[#241509] border-2 border-[#5a3d28] rounded-xl px-10 md:px-14 py-6 md:py-7 shadow-xl transform group-hover:scale-[1.02] transition-all duration-300">
                
                <p className="text-[#7a6a5a] text-[9px] tracking-[0.3em] uppercase mb-2 text-center">The Jungle Awaits</p>
                
                <h2 className="font-[var(--font-grunge)] text-2xl md:text-3xl text-[#e8dcc8] tracking-wide leading-tight text-center">
                  JOIN THE
                </h2>
                <h2 className="font-[var(--font-grunge)] text-3xl md:text-4xl text-[#8FCE00] tracking-wide leading-tight text-center">
                  EXPEDITION
                </h2>
              </div>
            </Link>

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <img 
                src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
                alt="Mystik Cafe Logo" 
                className="h-20 md:h-24 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl mx-auto h-px bg-white/10 mb-10" />

          {/* Three Column Navigation - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto text-center">
            
            {/* Column 1 - Navigate */}
            <div>
              <h3 className="text-[#8FCE00] font-semibold text-xs tracking-widest uppercase mb-4">
                Navigate
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Book Your Visit
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Visitor Info */}
            <div>
              <h3 className="text-[#8FCE00] font-semibold text-xs tracking-widest uppercase mb-4">
                Visitor Info
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/safety" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Safety Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/conduct" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Connect */}
            <div>
              <h3 className="text-[#8FCE00] font-semibold text-xs tracking-widest uppercase mb-4">
                Connect
              </h3>
              
              {/* Social Icons */}
              <div className="flex gap-3 justify-center mb-4">
                <SocialIcon href="https://www.facebook.com/61576326151475/" icon={<FaFacebookF size={14} />} />
                <SocialIcon href="https://www.instagram.com/mystikcafe/" icon={<FaInstagram size={14} />} />
                <SocialIcon href="https://www.tiktok.com/@mystik.cafe" icon={<FaTiktok size={14} />} />
              </div>

              {/* Contact */}
              <div className="space-y-1 text-sm text-gray-400">
                <p>56C Kensington Ave, Toronto</p>
                <a href="mailto:info@mystikcafe.ca" className="block hover:text-[#8FCE00] transition-colors">
                  info@mystikcafe.ca
                </a>
                <a href="tel:647-560-6524" className="block hover:text-[#8FCE00] transition-colors">
                  647-560-6524
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500">
            <p>© 2026 Mystik Cafe</p>
            <span className="hidden md:inline text-gray-700">•</span>
            <Link href="/sponsors" className="hover:text-[#8FCE00] transition-colors">
              Partners & Sponsors
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#8FCE00] hover:border-[#8FCE00] hover:text-[#1a3314] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
