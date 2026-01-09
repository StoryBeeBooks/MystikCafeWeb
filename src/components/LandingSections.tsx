'use client';

import { useState } from 'react';

// Testimonial data
const testimonials = [
  {
    name: "Grace",
    location: "Toronto",
    text: "I've visited twice now and both experiences were amazing! The staff are very kind, accommodating, knowledgeable, and are passionate about providing high quality care to their reptile friends. Perfect for any occasion (solo hangout, dates, friend groups, families with young kids)",
    rating: 5,
  },
  {
    name: "Anna",
    location: "Sydney, AU",
    text: "I'm still buzzing from this place! North America's first reptile café, and it's hands-down one of the coolest experiences ever. Getting up close with these amazing little reptiles, guided by passionate animal ambassadors, was unreal. Add surprisingly good coffee to the mix and I'm obsessed. Already planning my next visit! Amazing staff, amazing vibes, amazing experience. 10/10. ❤️😍",
    rating: 5,
  },
  {
    name: "Bruce",
    location: "New York, NY",
    text: "A very Unique experience at Mystik Cafe! These ancient creatures had roamed around earth for millions of years and now you got a chance to interact with them. A M A Z I N G! You can also tell the employees are extremely passionate about what they are doing, it's great seeing a local Canadian business providing jobs for local enthusiasts!",
    rating: 5,
  },
];

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Hero Intro Section
export function HeroIntro() {
  return (
    <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Jungle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30c0 16.6 13.4 30 30 30 16.6 0 30-13.4 30-30C60 13.4 46.6 0 30 0zm0 54c-13.3 0-24-10.7-24-24S16.7 6 30 6s24 10.7 24 24-10.7 24-24 24z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.jpg" 
            alt="Mystik Cafe Logo" 
            className="w-48 h-48 mx-auto rounded-full shadow-2xl border-4 border-emerald-400/30 object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-emerald-300 via-yellow-300 to-emerald-300 bg-clip-text text-transparent">
            Reptile Jungle
          </span>
          <br />
          <span className="text-3xl md:text-4xl font-light text-emerald-200">Experiences</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          A tropical heaven in Northern Canada. North America's first reptile café awaits you.
        </p>
        
        <a 
          href="#book" 
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-yellow-400/30"
        >
          BOOK NOW
        </a>
      </div>
      
      {/* Decorative leaves */}
      <div className="absolute -bottom-10 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-emerald-400">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0z"/>
        </svg>
      </div>
      <div className="absolute -top-10 right-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-emerald-400">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0z"/>
        </svg>
      </div>
    </section>
  );
}

// Testimonials Section
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-stone-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-stone-800">
          What Our Guests Say
        </h2>
        <p className="text-center text-stone-600 mb-12 text-lg">Real experiences from real adventurers</p>
        
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-stone-200 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-6 text-6xl text-emerald-500/20 font-serif">"</div>
              
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <p className="text-stone-600 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-stone-800">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 relative">
            <div className="absolute -top-4 left-6 text-6xl text-emerald-500/20 font-serif">"</div>
            
            <div className="mb-4">
              <StarRating rating={testimonials[activeIndex].rating} />
            </div>
            
            <p className="text-stone-600 mb-6 leading-relaxed relative z-10 min-h-[150px]">
              "{testimonials[activeIndex].text}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[activeIndex].name[0]}
              </div>
              <div>
                <p className="font-semibold text-stone-800">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-stone-500">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-emerald-500' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Two Worlds Section
export function TwoWorlds() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Two Worlds of Discovery
          </h2>
          <p className="text-xl text-stone-600">Sip. Explore. Connect.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ocean Café */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 relative">
              {/* Placeholder for ocean café image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">[Ocean Café Image]</p>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🐠</span>
                <h3 className="text-3xl font-bold">Ocean Café</h3>
              </div>
              <p className="text-blue-100 mb-2">Complimentary entry with café purchase</p>
              <p className="text-white/90 text-lg font-medium">11AM - 6:30PM (Wed OFF)</p>
              <p className="text-white/70 text-sm mt-2">Glowing exotic fishes await you</p>
            </div>
          </div>
          
          {/* Reptile Jungle */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 via-green-600 to-lime-700 relative">
              {/* Placeholder for reptile jungle image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">[Reptile Jungle Image]</p>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🦎</span>
                <h3 className="text-3xl font-bold">Reptile Jungle</h3>
              </div>
              <p className="text-emerald-100 mb-2">Ticketed animal encounter experience</p>
              <p className="text-white/90 text-lg font-medium">11AM - 6:00PM (Wed OFF)</p>
              <p className="text-white/70 text-sm mt-2">Reserve your appointment online</p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-stone-500 mt-8 text-sm">
          Last entry 30 minutes before closing. Hours may vary on holidays.
        </p>
      </div>
    </section>
  );
}

// Visit Us Section
export function VisitUs() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with jungle vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-600/30">
              {/* Placeholder for cafe interior/ambiance image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">[Café Interior/Ambiance Image]</p>
                  <p className="text-xs mt-2 opacity-70">Suggested: Cold brew with lush greenery</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />
          </div>
          
          {/* Right: Info */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Us in Person
              <span className="block text-2xl font-normal text-emerald-300 mt-2">at Kensington Market</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
              Where jungle thrills and ocean vibes collide.
            </p>
            
            <p className="text-emerald-200/80 mb-8 leading-relaxed">
              Sip, snack, and connect in a dreamy world of glowing exotic fishes, curious reptiles, and wild surprises. Mystik is your escape into the unexpected.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-lg font-semibold text-white">56C Kensington Ave.</p>
                  <p className="text-emerald-200">Toronto, ON M5T 2K1</p>
                </div>
              </div>
            </div>
            
            <p className="text-yellow-300/90 text-sm mb-8 italic">
              ⚠️ Reservations recommended for "Reptile Jungle". Walk-ins not guaranteed.
            </p>
            
            <a 
              href="#book" 
              id="book"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Membership Section
export function Membership() {
  const benefits = [
    { icon: "🦎", title: "Meet Every Reptile", desc: "Exclusive access to all our scaly friends" },
    { icon: "📚", title: "Learn Their Stories", desc: "History, origin, and unique personality of each pet" },
    { icon: "🎓", title: "Expert Knowledge", desc: "Monthly educational sessions with our animal ambassadors" },
    { icon: "☕", title: "Member Perks", desc: "Discounts on café items and priority booking" },
    { icon: "📸", title: "Photo Moments", desc: "Exclusive photo opportunities with rare species" },
    { icon: "🎁", title: "Special Events", desc: "VIP invitations to new arrivals and seasonal events" },
  ];

  return (
    <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            EXCLUSIVE ACCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mystik Membership
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Join our community of reptile enthusiasts and unlock a world of scaly wonders
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800/80 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-stone-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Card */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
              Sign up for our membership and start your journey into the mystical world of reptiles
            </p>
            <a 
              href="#"
              className="inline-block bg-white text-emerald-700 font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-white/20"
            >
              BECOME A MEMBER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section - Magazine-style editorial layout
const galleryStyles = {
  section: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 8vw, 96px) clamp(16px, 3vw, 24px)',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 64px)',
    position: 'relative' as const,
  },
  tagline: {
    display: 'block',
    color: '#1B5E20',
    fontSize: 'clamp(11px, 1.5vw, 14px)',
    letterSpacing: '0.4em',
    textTransform: 'uppercase' as const,
    marginBottom: 'clamp(12px, 2vw, 16px)',
    fontWeight: '300',
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(36px, 6vw, 64px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 24px)',
    letterSpacing: '-0.02em',
  },
  titleAccent: {
    color: '#1B5E20',
  },
  subtitle: {
    color: 'rgba(245, 230, 211, 0.7)',
    fontSize: 'clamp(14px, 2vw, 18px)',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 'clamp(12px, 2vw, 24px)',
    gridAutoRows: 'clamp(160px, 20vw, 250px)',
  },
  imageContainer: {
    position: 'relative' as const,
    overflow: 'hidden',
    borderRadius: 'clamp(12px, 2vw, 24px)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.7s ease',
  },
  imageOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    transition: 'background-color 0.5s ease',
  },
  bottomTagline: {
    textAlign: 'center' as const,
    marginTop: 'clamp(40px, 6vw, 64px)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: 'clamp(12px, 2vw, 20px)',
  },
  bottomText: {
    color: 'rgba(245, 230, 211, 0.5)',
    fontSize: 'clamp(11px, 1.5vw, 14px)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  socialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(16px, 2.5vw, 24px)',
  },
  socialIcon: {
    color: 'rgba(245, 230, 211, 0.5)',
    width: 'clamp(20px, 2.5vw, 26px)',
    height: 'clamp(20px, 2.5vw, 26px)',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
};

export function Gallery() {
  const galleryImages = [
    { src: 'https://assets.k12path.com/MystikCafe/IMG_2994.JPG', alt: 'Mystik Cafe Experience 1' },
    { src: 'https://assets.k12path.com/MystikCafe/IMG_6146.JPG', alt: 'Mystik Cafe Experience 2' },
    { src: 'https://assets.k12path.com/MystikCafe/IMG_6447.JPG', alt: 'Mystik Cafe Experience 3' },
    { src: 'https://assets.k12path.com/MystikCafe/IMG_6516.JPG', alt: 'Mystik Cafe Experience 4' },
    { src: 'https://assets.k12path.com/MystikCafe/065cb57b-51ee-4984-a30c-4d26bc09472a.jpg', alt: 'Mystik Cafe Experience 5' },
    { src: 'https://assets.k12path.com/MystikCafe/718dee43-68dd-4cb8-b0c0-a1b2d0e0bfa1.jpg', alt: 'Mystik Cafe Experience 6' },
    { src: 'https://assets.k12path.com/MystikCafe/772947bf-1fc7-499e-b7f5-46f1b616bcaa.jpg', alt: 'Mystik Cafe Experience 7' },
    { src: 'https://assets.k12path.com/MystikCafe/A93D4A6D-BA0D-4E84-BE52-FDE3B1CFCFD2.jpg', alt: 'Mystik Cafe Experience 8' },
  ];

  // Grid position configurations
  const gridPositions = [
    { gridColumn: 'span 7', gridRow: 'span 2' },  // Large featured
    { gridColumn: 'span 5', gridRow: 'span 1' },  // Top right 1
    { gridColumn: 'span 5', gridRow: 'span 1' },  // Top right 2
    { gridColumn: 'span 4', gridRow: 'span 1' },  // Middle 1
    { gridColumn: 'span 4', gridRow: 'span 1' },  // Middle 2
    { gridColumn: 'span 4', gridRow: 'span 1' },  // Middle 3
    { gridColumn: 'span 8', gridRow: 'span 1' },  // Bottom wide
    { gridColumn: 'span 4', gridRow: 'span 1' },  // Bottom right
  ];

  return (
    <section style={galleryStyles.section}>
      <div style={galleryStyles.container}>
        {/* Header */}
        <div style={galleryStyles.header}>
          <span style={galleryStyles.tagline}>The Experience</span>
          <h2 style={galleryStyles.title}>
            Moments at <span style={galleryStyles.titleAccent}>Mystik</span>
          </h2>
          <p style={galleryStyles.subtitle}>
            Wild connections. Unforgettable memories. Real moments captured by our guests.
          </p>
        </div>
        
        {/* Magazine-style grid */}
        <div style={galleryStyles.grid}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              style={{
                ...galleryStyles.imageContainer,
                gridColumn: gridPositions[index].gridColumn,
                gridRow: gridPositions[index].gridRow,
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                const overlay = e.currentTarget.querySelector('div') as HTMLDivElement;
                if (img) img.style.transform = 'scale(1.08)';
                if (overlay) overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                const overlay = e.currentTarget.querySelector('div') as HTMLDivElement;
                if (img) img.style.transform = 'scale(1)';
                if (overlay) overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
              }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                style={galleryStyles.image}
              />
              <div style={galleryStyles.imageOverlay} />
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div style={galleryStyles.bottomTagline}>
          <p style={galleryStyles.bottomText}>
            Share your experience • Tag us @mystikcafe
          </p>
          <div style={galleryStyles.socialRow}>
            <a 
              href="https://www.instagram.com/mystikcafe/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.9)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              style={{ ...galleryStyles.socialIcon, display: 'block' }}
            >
              <svg style={{ width: '100%', height: '100%' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@mystik.cafe" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.9)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              style={{ ...galleryStyles.socialIcon, display: 'block' }}
            >
              <svg style={{ width: '100%', height: '100%' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/61576326151475/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.9)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245, 230, 211, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              style={{ ...galleryStyles.socialIcon, display: 'block' }}
            >
              <svg style={{ width: '100%', height: '100%' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridColumn: span 7"],
          div[style*="gridColumn: span 5"],
          div[style*="gridColumn: span 4"],
          div[style*="gridColumn: span 8"] {
            grid-column: span 6 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
