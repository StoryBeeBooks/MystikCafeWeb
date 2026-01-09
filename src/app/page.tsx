'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-white">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
});

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const experienceStyles = {
  section: {
    backgroundColor: '#0D2818',
    padding: '80px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '60px',
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: '48px',
    color: '#F5E6D3',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(245, 230, 211, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(245, 230, 211, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
    padding: '24px',
  },
  cardTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: '28px',
    color: '#F5E6D3',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '16px',
    color: 'rgba(245, 230, 211, 0.75)',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#1B5E20',
    color: '#F5E6D3',
    padding: '12px 28px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: lizardCursor,
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section with 3D */}
      <section className="h-screen w-full bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://assets.k12path.com/MystikCafe/10126758_4371323.jpg)' }}
        />
        
        {/* 3D Scene Overlay */}
        <div className="relative z-10 h-full w-full">
          <HeroScene />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
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
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={experienceStyles.videoContainer}>
                <video 
                  style={experienceStyles.video}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://assets.k12path.com/MystikCafe/Frog.mp4" type="video/mp4" />
                </video>
              </div>
              <div style={experienceStyles.cardContent}>
                <h3 style={experienceStyles.cardTitle}>🐸 Rainforest Frogs</h3>
                <p style={experienceStyles.cardText}>
                  Witness the jewels of the jungle! Our vibrant poison dart frogs showcase 
                  nature's most stunning colors. These tiny amphibians are living proof that 
                  the most beautiful things often come in small packages.
                </p>
                <Link 
                  href="/book"
                  style={experienceStyles.ctaButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2E7D32';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B5E20';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Book Your Visit →
                </Link>
              </div>
            </div>

            {/* Chameleon Card */}
            <div 
              style={experienceStyles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={experienceStyles.videoContainer}>
                <video 
                  style={experienceStyles.video}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://assets.k12path.com/MystikCafe/Chamelon%20Video.mp4" type="video/mp4" />
                </video>
              </div>
              <div style={experienceStyles.cardContent}>
                <h3 style={experienceStyles.cardTitle}>🦎 Chameleons</h3>
                <p style={experienceStyles.cardText}>
                  Masters of disguise await you! Watch in wonder as our chameleons shift 
                  colors before your eyes. With their swiveling eyes and lightning-fast tongues, 
                  these ancient reptiles are nature's ultimate shape-shifters.
                </p>
                <Link 
                  href="/book"
                  style={experienceStyles.ctaButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2E7D32';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B5E20';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Book Your Visit →
                </Link>
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
    </>
  );
}
