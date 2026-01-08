'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative mt-20 [clip-path:polygon(0_3%,_3%_0%,_6%_3%,_9%_0%,_12%_3%,_15%_0%,_18%_3%,_21%_0%,_24%_3%,_27%_0%,_30%_3%,_33%_0%,_36%_3%,_39%_0%,_42%_3%,_45%_0%,_48%_3%,_51%_0%,_54%_3%,_57%_0%,_60%_3%,_63%_0%,_66%_3%,_69%_0%,_72%_3%,_75%_0%,_78%_3%,_81%_0%,_84%_3%,_87%_0%,_90%_3%,_93%_0%,_96%_3%,_100%_0%,_100%_100%,_0%_100%)]">

      {/* Main Background with Image + Overlay */}
      <div className="relative pt-20 pb-8 px-4 text-white overflow-hidden">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://assets.k12path.com/MystikCafe/footer%20background.jpg')",
          }}
        >
          {/* Dark Overlay Tint */}
          <div className="absolute inset-0 bg-[#2A1B12]/85 mix-blend-multiply"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Join Us - CTA */}
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4">Join Us</p>
          
          {/* EXPLORERS OF THE WILD Box - Links to booking */}
          <Link href="/book" className="border-2 border-gray-400/50 rounded-2xl px-8 py-6 mb-8 inline-block bg-black/20 backdrop-blur-sm hover:border-[#8FCE00] transition-colors">
            <h2 className="font-[var(--font-grunge)] text-4xl md:text-5xl tracking-widest text-gray-200 uppercase leading-none">
              Explorers
            </h2>
            <div className="flex items-center justify-center gap-2 my-2">
              <span className="h-[1px] w-6 bg-gray-400"></span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gray-400">Of The</span>
              <span className="h-[1px] w-6 bg-gray-400"></span>
            </div>
            <h2 className="font-[var(--font-grunge)] text-5xl md:text-6xl tracking-widest text-white uppercase leading-none">
              Wild
            </h2>
          </Link>

          {/* Logo */}
          <Link href="/" className="mb-8">
            <img 
              src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
              alt="Mystik Cafe Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 text-left mt-4 border-t border-white/10 pt-10">
            
            {/* Social Icons */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4 text-[#8FCE00] tracking-wider">
                FOLLOW US <span className="inline-block ml-1">↘</span>
              </h3>
              <div className="flex gap-3">
                <SocialIcon href="https://www.facebook.com/61576326151475/" icon={<FaFacebookF />} color="bg-[#1877F2]" />
                <SocialIcon href="https://www.instagram.com/mystikcafe/" icon={<FaInstagram />} color="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" />
                <SocialIcon href="https://www.tiktok.com/@mystik.cafe" icon={<FaTiktok />} color="bg-black" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center">
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-[#8FCE00] transition">Home</Link></li>
                <li><Link href="/faq" className="hover:text-[#8FCE00] transition">FAQ</Link></li>
                <li><Link href="/policies" className="hover:text-[#8FCE00] transition">Policies</Link></li>
                <li><Link href="/sponsors" className="hover:text-[#8FCE00] transition">Sponsors & Partners</Link></li>
                <li><Link href="/safety" className="hover:text-[#8FCE00] transition">For Your Safety</Link></li>
                <li><Link href="/conduct" className="hover:text-[#8FCE00] transition">Code of Conduct</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-end text-sm text-gray-300">
              <address className="not-italic text-center md:text-right space-y-1">
                <p>56C Kensington Ave.</p>
                <p>Toronto, ON M5T 2K1</p>
                <a href="mailto:info@mystikcafe.ca" className="block hover:text-[#8FCE00] transition">
                  info@mystikcafe.ca
                </a>
                <a href="tel:647-560-6524" className="block hover:text-[#8FCE00] transition">
                  647-560-6524
                </a>
              </address>
              <p className="mt-6 text-gray-500 text-xs">© 2026 Mystik Cafe</p>
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
      className={`w-11 h-11 rounded-full ${color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
    >
      {icon}
    </a>
  );
}
