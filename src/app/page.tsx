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
  },
};

const testimonialStyles = {
  section: {
    backgroundColor: '#F5E6D3',
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
    fontSize: '42px',
    color: '#0D2818',
    marginBottom: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '60px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'relative' as const,
  },
  quote: {
    position: 'absolute' as const,
    top: '15px',
    left: '20px',
    fontSize: '60px',
    color: 'rgba(13, 40, 24, 0.1)',
    fontFamily: 'Georgia, serif',
    lineHeight: '1',
  },
  text: {
    fontSize: '15px',
    color: '#4A4A4A',
    lineHeight: '1.7',
    marginBottom: '20px',
    position: 'relative' as const,
    zIndex: 1,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#1B5E20',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  authorName: {
    fontWeight: 'bold',
    color: '#0D2818',
    fontSize: '16px',
  },
  authorLocation: {
    color: '#888',
    fontSize: '14px',
  },
  stars: {
    color: '#FFB800',
    marginBottom: '15px',
    fontSize: '18px',
  },
};

const visitStyles = {
  section: {
    backgroundColor: '#0D2818',
    padding: '80px 24px',
    textAlign: 'center' as const,
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  tagline: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: '24px',
    color: '#1B5E20',
    marginBottom: '20px',
    letterSpacing: '0.2em',
  },
  title: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: '42px',
    color: '#F5E6D3',
    marginBottom: '8px',
  },
  location: {
    fontSize: '20px',
    color: '#1B5E20',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '18px',
    color: 'rgba(245, 230, 211, 0.85)',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  note: {
    fontSize: '14px',
    color: 'rgba(245, 230, 211, 0.6)',
    marginBottom: '40px',
    fontStyle: 'italic',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#F5E6D3',
    color: '#0D2818',
    padding: '18px 50px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Rubik Distressed, sans-serif',
    cursor: lizardCursor,
    transition: 'all 0.3s ease',
    border: '2px solid #F5E6D3',
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
                  <div style={testimonialStyles.avatar}>{testimonial.name[0]}</div>
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

      {/* Visit Us Section */}
      <section style={visitStyles.section}>
        <div style={visitStyles.container}>
          <p style={visitStyles.tagline}>Sip. Explore. Connect.</p>
          <h2 style={visitStyles.title}>Visit Us in Person</h2>
          <p style={visitStyles.location}>at Kensington Market</p>
          <p style={visitStyles.description}>
            Where jungle thrills and ocean vibes collide.<br /><br />
            Sip, snack, and connect in a dreamy world of glowing exotic fishes, 
            curious reptiles, and wild surprises. Mystik is your escape into the unexpected.
          </p>
          <p style={visitStyles.note}>
            Reservations recommended for "Reptile Jungle". Walk-ins not guaranteed.
          </p>
          <Link 
            href="/book"
            style={visitStyles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0D2818';
              e.currentTarget.style.color = '#F5E6D3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5E6D3';
              e.currentTarget.style.color = '#0D2818';
            }}
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
