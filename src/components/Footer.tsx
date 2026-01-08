'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative">
      
      {/* Smooth Organic Wave Transition */}
      <div className="relative h-32 md:h-40 overflow-hidden bg-transparent">
        <svg 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          {/* Multiple layered waves for depth */}
          <path 
            d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,80 1440,100 L1440,200 L0,200 Z" 
            fill="#0f2409"
            opacity="0.5"
          />
          <path 
            d="M0,120 C240,60 480,160 720,100 C960,40 1200,140 1440,80 L1440,200 L0,200 Z" 
            fill="#132b0e"
            opacity="0.7"
          />
          <path 
            d="M0,150 C180,100 360,180 540,130 C720,80 900,160 1080,120 C1260,80 1380,140 1440,120 L1440,200 L0,200 Z" 
            fill="#162d10"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="relative bg-[#162d10] overflow-hidden">
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-8 pb-12">
          
          {/* CTA Section - Centered and Prominent */}
          <div className="text-center mb-14">
            
            {/* Main CTA */}
            <Link 
              href="/book"
              className="group inline-block"
            >
              <div className="relative bg-gradient-to-b from-[#3d2817] via-[#2a1a0f] to-[#1a0f08] border-2 border-[#5a3d28] rounded-2xl px-12 md:px-20 py-8 md:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-all duration-300">
                
                <p className="text-[#8a7a6a] text-[10px] tracking-[0.4em] uppercase mb-3">The Jungle Awaits</p>
                
                <h2 className="font-[var(--font-grunge)] text-3xl md:text-4xl text-[#e8dcc8] tracking-wide leading-tight">
                  JOIN THE
                </h2>
                <h2 className="font-[var(--font-grunge)] text-4xl md:text-5xl text-[#8FCE00] tracking-wide leading-tight">
                  EXPEDITION
                </h2>
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#8FCE00]/0 group-hover:bg-[#8FCE00]/5 transition-all duration-300" />
              </div>
            </Link>

            {/* Logo - Centered Below CTA */}
            <div className="mt-8">
              <Link href="/" className="inline-block">
                <img 
                  src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
                  alt="Mystik Cafe Logo" 
                  className="h-14 md:h-16 w-auto mx-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8FCE00]/20 to-transparent mb-10" />

          {/* Three Column Navigation - Clean Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* Column 1 - Navigate */}
            <div className="text-center md:text-left">
              <h3 className="text-[#8FCE00] font-semibold text-sm tracking-wider uppercase mb-5">
                Navigate
              </h3>
              <ul className="space-y-3">
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
            <div className="text-center md:text-left">
              <h3 className="text-[#8FCE00] font-semibold text-sm tracking-wider uppercase mb-5">
                Visitor Info
              </h3>
              <ul className="space-y-3">
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
            <div className="text-center md:text-left">
              <h3 className="text-[#8FCE00] font-semibold text-sm tracking-wider uppercase mb-5">
                Connect
              </h3>
              
              {/* Social Icons */}
              <div className="flex gap-3 justify-center md:justify-start mb-5">
                <SocialIcon href="https://www.facebook.com/61576326151475/" icon={<FaFacebookF size={16} />} />
                <SocialIcon href="https://www.instagram.com/mystikcafe/" icon={<FaInstagram size={16} />} />
                <SocialIcon href="https://www.tiktok.com/@mystik.cafe" icon={<FaTiktok size={16} />} />
              </div>

              {/* Contact */}
              <div className="space-y-2 text-sm text-gray-400">
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
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <p>© 2026 Mystik Cafe</p>
            <Link href="/sponsors" className="text-gray-500 hover:text-[#8FCE00] transition-colors">
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
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#8FCE00] hover:border-[#8FCE00] hover:text-[#162d10] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
