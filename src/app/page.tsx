'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Gallery } from '@/components/LandingSections';
import { useState, useEffect, useCallback, useRef } from 'react';
import { LizardIcon, TurtleIcon, ParrotIcon, SnakeIcon, CrocodileIcon, DinoIcon, LeafIcon, PalmTreeIcon } from '@/components/icons';

// Loading component with progress bar
function LoadingScreen({ progress }: { progress: number }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  
  const iconComponents = [
    <LizardIcon key="lizard" size={40} color="#0D2818" />,
    <TurtleIcon key="turtle" size={40} color="#0D2818" />,
    <ParrotIcon key="parrot" size={40} color="#0D2818" />,
    <SnakeIcon key="snake" size={40} color="#0D2818" />,
    <CrocodileIcon key="croc" size={40} color="#0D2818" />,
    <DinoIcon key="dino" size={40} color="#0D2818" />,
    <LeafIcon key="leaf" size={40} color="#0D2818" />,
    <PalmTreeIcon key="palm" size={40} color="#0D2818" />,
  ];
  
  useEffect(() => {
    // Rotate icons
    const iconInterval = setInterval(() => {
      setCurrentIconIndex(prev => (prev + 1) % iconComponents.length);
    }, 400);
    
    return () => {
      clearInterval(iconInterval);
    };
  }, []);
  
  const loadingStyles = {
    container: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      padding: '24px',
      zIndex: 9999,
    },
    emojiRow: {
      display: 'flex',
      gap: '20px',
      marginBottom: '40px',
      fontSize: 'clamp(32px, 6vw, 48px)',
    },
    emoji: {
      animation: 'bounce 0.6s ease-in-out infinite',
    },
    summoningText: {
      fontFamily: 'Questrial, sans-serif',
      fontSize: 'clamp(16px, 2.5vw, 20px)',
      marginBottom: '40px',
      textAlign: 'center' as const,
      color: '#4A4A4A',
      letterSpacing: '0.02em',
    },
    progressContainer: {
      width: '100%',
      maxWidth: '240px',
      height: '3px',
      backgroundColor: '#E5E5E5',
      borderRadius: '2px',
      overflow: 'hidden',
      marginBottom: '24px',
    },
    progressBar: {
      height: '100%',
      background: '#0D2818',
      borderRadius: '2px',
      transition: 'width 0.3s ease',
      width: `${Math.min(progress, 100)}%`,
    },
    hint: {
      color: '#6B7280',
      fontSize: 'clamp(11px, 1.5vw, 13px)',
      textAlign: 'center' as const,
    },
  };
  
  return (
    <div style={loadingStyles.container}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
      
      {/* Bouncing icons */}
      <div style={loadingStyles.emojiRow}>
        {iconComponents.slice(0, 5).map((icon, index) => (
          <div
            key={index} 
            style={{
              ...loadingStyles.emoji,
              animationDelay: `${index * 0.1}s`,
              opacity: currentIconIndex === index ? 1 : 0.6,
              transform: currentIconIndex === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'opacity 0.3s, transform 0.3s',
            }}
          >
            {icon}
          </div>
        ))}
      </div>
      
      {/* Summoning text */}
      <p style={loadingStyles.summoningText}>
        Summoning the chameleons, turtles, lizards...
      </p>
      
      {/* Progress bar */}
      <div style={loadingStyles.progressContainer}>
        <div style={loadingStyles.progressBar} />
      </div>
      
      {/* Hint text */}
      <p style={loadingStyles.hint}>
        This may take a moment on slower connections.
      </p>
    </div>
  );
}

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
});

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const experienceStyles = {
  section: {
    backgroundColor: '#F5F5F0',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 8vw, 80px)',
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 48px)',
    color: '#1A1A1A',
    marginBottom: 'clamp(12px, 2vw, 20px)',
  },
  subtitle: {
    fontSize: 'clamp(14px, 2vw, 18px)',
    color: '#4A4A4A',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
    gap: 'clamp(30px, 5vw, 50px)',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
  },
  videoContainer: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  cardContent: {
    padding: 'clamp(20px, 4vw, 32px)',
  },
  cardTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(20px, 3vw, 28px)',
    color: '#1A1A1A',
    marginBottom: 'clamp(10px, 2vw, 16px)',
  },
  cardText: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#4A4A4A',
    lineHeight: '1.8',
  },
};

const testimonialStyles = {
  section: {
    backgroundColor: '#FFFFFF',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 8vw, 80px)',
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#1A1A1A',
    marginBottom: 'clamp(8px, 2vw, 16px)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 'clamp(24px, 4vw, 40px)',
    marginBottom: 'clamp(30px, 6vw, 60px)',
  },
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 'clamp(12px, 2vw, 16px)',
    padding: 'clamp(24px, 4vw, 36px)',
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: 'clamp(260px, 30vw, 320px)',
  },
  quote: {
    position: 'absolute' as const,
    top: 'clamp(10px, 2vw, 15px)',
    left: 'clamp(12px, 2vw, 20px)',
    fontSize: 'clamp(40px, 6vw, 60px)',
    color: 'rgba(13, 40, 24, 0.08)',
    fontFamily: 'Georgia, serif',
    lineHeight: '1',
  },
  text: {
    fontSize: 'clamp(13px, 1.8vw, 15px)',
    color: '#4A4A4A',
    lineHeight: '1.8',
    marginBottom: 'clamp(16px, 3vw, 24px)',
    position: 'relative' as const,
    zIndex: 1,
    flex: '1',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(10px, 2vw, 14px)',
  },
  avatar: {
    width: 'clamp(36px, 5vw, 45px)',
    height: 'clamp(36px, 5vw, 45px)',
    borderRadius: '50%',
    backgroundColor: '#0D2818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'clamp(14px, 2vw, 18px)',
  },
  authorName: {
    fontWeight: '600',
    color: '#1A1A1A',
    fontSize: 'clamp(14px, 1.8vw, 16px)',
  },
  authorLocation: {
    color: '#6B7280',
    fontSize: 'clamp(12px, 1.6vw, 14px)',
  },
  stars: {
    color: '#FFB800',
    marginBottom: 'clamp(12px, 2vw, 18px)',
    fontSize: 'clamp(14px, 2vw, 18px)',
  },
};

const visitStyles = {
  section: {
    backgroundColor: '#F5F5F0',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px) clamp(96px, 16vw, 160px)',
    textAlign: 'center' as const,
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  tagline: {
    fontFamily: 'Questrial, sans-serif',
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#0D2818',
    marginBottom: 'clamp(16px, 3vw, 24px)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#1A1A1A',
    marginBottom: 'clamp(8px, 1.5vw, 12px)',
  },
  location: {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    color: '#0D2818',
    marginBottom: 'clamp(24px, 4vw, 40px)',
    fontWeight: '500',
  },
  description: {
    fontSize: 'clamp(14px, 2vw, 17px)',
    color: '#4A4A4A',
    lineHeight: '1.9',
    marginBottom: 'clamp(24px, 4vw, 36px)',
  },
  note: {
    fontSize: 'clamp(12px, 1.6vw, 14px)',
    color: '#6B7280',
    marginBottom: 'clamp(32px, 5vw, 48px)',
    fontStyle: 'italic',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#0D2818',
    color: '#FFFFFF',
    padding: 'clamp(14px, 2.5vw, 20px) clamp(36px, 6vw, 56px)',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: 'clamp(14px, 2vw, 17px)',
    fontFamily: 'Questrial, sans-serif',
    cursor: lizardCursor,
    transition: 'all 0.3s ease',
    border: 'none',
  },
};

const testimonials = [
  {
    name: "Grace",
    location: "Toronto",
    text: "I've visited twice now and both experiences were amazing! The staff are very kind, accommodating, knowledgeable, and are passionate about providing high quality care to their reptile friends. Perfect for any occasion (solo hangout, dates, friend groups, families with young kids)",
  },
  {
    name: "Anna",
    location: "Sydney, AU",
    text: "I'm still buzzing from this place! North America's first reptile café, and it's hands-down one of the coolest experiences ever. Getting up close with these amazing little reptiles, guided by passionate animal ambassadors, was unreal. Add surprisingly good coffee to the mix and I'm obsessed. Already planning my next visit! Amazing staff, amazing vibes, amazing experience. 10/10. ❤️😍",
  },
  {
    name: "Bruce",
    location: "New York, NY",
    text: "A very Unique experience at Mystik Cafe! These ancient creatures had roamed around earth for millions of years and now you got a chance to interact with them. A M A Z I N G! You can also tell the employees are extremely passionate about what they are doing, it's great seeing a local Canadian business providing jobs for local enthusiasts!",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate progress while assets load
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 8;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  // WeChat video autoplay initialization
  useEffect(() => {
    const playVideosInWeChat = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.play().catch(() => {});
      });
    };

    // Check if running in WeChat browser
    const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
    
    if (isWeChat) {
      // Use WeixinJSBridge if available (WeChat's JS API)
      if (typeof (window as any).WeixinJSBridge !== 'undefined') {
        playVideosInWeChat();
      } else {
        // Wait for WeixinJSBridge to be ready
        document.addEventListener('WeixinJSBridgeReady', playVideosInWeChat, false);
      }
      
      // Also try on first touch/click for WeChat
      const handleFirstInteraction = () => {
        playVideosInWeChat();
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('click', handleFirstInteraction);
      };
      document.addEventListener('touchstart', handleFirstInteraction, { passive: true });
      document.addEventListener('click', handleFirstInteraction);
    }
  }, []);

  const handleSceneLoaded = useCallback(() => {
    // Complete the progress bar
    setLoadingProgress(100);
    // Small delay before hiding loading screen for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen progress={loadingProgress} />}

      {/* Hero Section with 3D */}
      <section className="h-screen w-full bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://assets.k12path.com/MystikCafe/10126758_4371323.jpg)' }}
        />
        
        {/* Hero Title */}
        <div className="hero-title-container" style={{
          position: 'absolute',
          top: '7%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          textAlign: 'center',
          width: '90%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}>
          <h1 className="hero-title" style={{
            fontFamily: 'Rubik Distressed, sans-serif',
            lineHeight: '1.2',
            margin: 0,
          }}>
            <span style={{ color: '#FF91A4' }}>Unforgettable</span>
            <br className="hero-break-mobile" />
            <span className="hero-space">{' '}</span>
            <span style={{ color: '#A8D8EA' }}>Adventure</span>
            <br className="hero-break-always" />
            <span style={{ color: '#FFD4A3' }}>Awaits</span>
          </h1>
        </div>
        
        {/* 3D Scene Overlay */}
        <div className="relative z-10 h-full w-full">
          <HeroScene onLoaded={handleSceneLoaded} />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease 0.3s',
        }}>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={experienceStyles.section}>
        <div style={experienceStyles.container}>
          <div style={experienceStyles.header}>
            <h2 style={experienceStyles.title}>Meet Our Jungle Friends</h2>
            <p style={experienceStyles.subtitle}>
              Step into the wild and encounter exotic creatures up close. 
              From vibrant rainforest frogs to color-changing chameleons, every visit is an adventure.
            </p>
          </div>

          <div style={experienceStyles.grid}>
            {/* Frog Card */}
            <div 
              style={experienceStyles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={experienceStyles.videoContainer}>
                <video 
                  style={experienceStyles.video}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="false"
                  poster="https://assets.k12path.com/MystikCafe/Plan1.jpg"
                  onCanPlay={(e) => {
                    const video = e.currentTarget;
                    video.play().catch(() => {});
                  }}
                >
                  <source src="https://assets.k12path.com/MystikCafe/Frog.mp4" type="video/mp4" />
                </video>
              </div>
              <div style={experienceStyles.cardContent}>
                <h3 style={experienceStyles.cardTitle}>Rainforest Frogs</h3>
                <p style={experienceStyles.cardText}>
                  Witness the jewels of the jungle! Our vibrant poison dart frogs showcase 
                  nature's most stunning colors. These tiny amphibians are living proof that 
                  the most beautiful things often come in small packages.
                </p>
              </div>
            </div>

            {/* Chameleon Card */}
            <div 
              style={experienceStyles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={experienceStyles.videoContainer}>
                <video 
                  style={experienceStyles.video}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="false"
                  poster="https://assets.k12path.com/MystikCafe/Plan2.jpg"
                  onCanPlay={(e) => {
                    const video = e.currentTarget;
                    video.play().catch(() => {});
                  }}
                >
                  <source src="https://assets.k12path.com/MystikCafe/Chamelon%20Video.mp4" type="video/mp4" />
                </video>
              </div>
              <div style={experienceStyles.cardContent}>
                <h3 style={experienceStyles.cardTitle}>
                  Chameleons
                </h3>
                <p style={experienceStyles.cardText}>
                  Masters of disguise await you! Watch in wonder as our chameleons shift 
                  colors before your eyes. With their swiveling eyes and lightning-fast tongues, 
                  these ancient reptiles are nature's ultimate shape-shifters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            section > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Testimonials Section */}
      <section style={testimonialStyles.section}>
        <div style={testimonialStyles.container}>
          <div style={testimonialStyles.header}>
            <h2 style={testimonialStyles.title}>What Our Guests Say</h2>
          </div>

          <div style={testimonialStyles.grid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={testimonialStyles.card}>
                <span style={testimonialStyles.quote}>"</span>
                <div style={testimonialStyles.stars}>★★★★★</div>
                <p style={testimonialStyles.text}>"{testimonial.text}"</p>
                <div style={testimonialStyles.author}>
                  <div>
                    <div style={testimonialStyles.authorName}>{testimonial.name}</div>
                    <div style={testimonialStyles.authorLocation}>{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            section > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Visit Us Section */}
      <section style={visitStyles.section}>
        <div style={visitStyles.container}>
          <p style={visitStyles.tagline}>Sip. Explore. Connect.</p>
          <h2 style={visitStyles.title}>Visit Us in Person</h2>
          <p style={visitStyles.location}>at Kensington Market</p>
          <p style={visitStyles.description}>
            Where jungle thrills and ocean vibes collide. Sip, snack, and connect in a dreamy world of glowing exotic fishes, curious reptiles, and wild surprises. Mystik is your escape into the unexpected.
          </p>
          <p style={visitStyles.note}>
            Reservations recommended for "Reptile Jungle". Walk-ins not guaranteed.
          </p>
          <Link 
            href="/book"
            style={visitStyles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A3A2A';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0D2818';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
