'use client';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  // Hero Section
  hero: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'clamp(400px, 60vh, 600px)',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/jungle-landscape-cartoon.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(13, 40, 24, 0.65)',
  },
  heroContent: {
    position: 'relative' as const,
    zIndex: 10,
    textAlign: 'center' as const,
    padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 24px)',
    maxWidth: '900px',
  },
  heroTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(36px, 8vw, 72px)',
    color: 'white',
    marginBottom: 'clamp(16px, 3vw, 24px)',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  },
  heroSubtitle: {
    fontSize: 'clamp(16px, 2.5vw, 22px)',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.7',
    maxWidth: '700px',
    margin: '0 auto',
  },

  // Story Section
  storySection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  storyContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
    gap: 'clamp(40px, 6vw, 80px)',
    alignItems: 'center',
  },
  storyContent: {
    order: 1,
  },
  storyLabel: {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    color: '#1B5E20',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    marginBottom: 'clamp(12px, 2vw, 16px)',
    fontWeight: '600',
  },
  storyTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#0D2818',
    marginBottom: 'clamp(20px, 3vw, 32px)',
    lineHeight: '1.2',
  },
  storyText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  videoContainer: {
    order: 2,
    position: 'relative' as const,
    borderRadius: 'clamp(16px, 3vw, 32px)',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(13, 40, 24, 0.2)',
  },
  video: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },

  // Mission/Vision Section
  mvSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  mvContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  mvGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    gap: 'clamp(40px, 6vw, 60px)',
  },
  mvCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(30px, 5vw, 50px)',
    border: '1px solid rgba(245, 230, 211, 0.1)',
  },
  mvIcon: {
    fontSize: 'clamp(40px, 6vw, 56px)',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  mvTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(24px, 4vw, 32px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  mvText: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: 'rgba(245, 230, 211, 0.85)',
    lineHeight: '1.8',
  },
  mvHighlight: {
    color: '#4ade80',
    fontStyle: 'italic',
    display: 'block',
    marginTop: 'clamp(12px, 2vw, 16px)',
    fontSize: 'clamp(15px, 2vw, 18px)',
  },

  // Pillars Section
  pillarsSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  pillarsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pillarsHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  pillarsLabel: {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    color: '#1B5E20',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    marginBottom: 'clamp(12px, 2vw, 16px)',
    fontWeight: '600',
  },
  pillarsTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#0D2818',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 'clamp(24px, 4vw, 40px)',
  },
  pillarCard: {
    backgroundColor: 'white',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(13, 40, 24, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  pillarImage: {
    width: '100%',
    aspectRatio: '4/3',
    objectFit: 'cover' as const,
  },
  pillarContent: {
    padding: 'clamp(20px, 3vw, 32px)',
  },
  pillarNumber: {
    display: 'inline-block',
    backgroundColor: '#1B5E20',
    color: 'white',
    width: 'clamp(32px, 4vw, 40px)',
    height: 'clamp(32px, 4vw, 40px)',
    borderRadius: '50%',
    textAlign: 'center' as const,
    lineHeight: 'clamp(32px, 4vw, 40px)',
    fontSize: 'clamp(14px, 2vw, 18px)',
    fontWeight: 'bold',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  pillarCardTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(20px, 3vw, 26px)',
    color: '#0D2818',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  pillarCardText: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#4A4A4A',
    lineHeight: '1.7',
  },

  // CTA Section
  ctaSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
    textAlign: 'center' as const,
  },
  ctaContainer: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 3vw, 24px)',
  },
  ctaText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: 'rgba(245, 230, 211, 0.8)',
    lineHeight: '1.7',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#F5E6D3',
    color: '#0D2818',
    padding: 'clamp(14px, 2vw, 18px) clamp(36px, 5vw, 50px)',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontFamily: 'Rubik Distressed, sans-serif',
    cursor: lizardCursor,
    transition: 'all 0.3s ease',
    border: '2px solid #F5E6D3',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Mystik Café</h1>
          <p style={styles.heroSubtitle}>
            Where the aroma of ethically sourced coffee blends with the quiet wonder of nature. 
            A sanctuary for the curious, a haven for the wild at heart.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={styles.storySection}>
        <div style={styles.storyContainer}>
          <div style={styles.storyContent}>
            <p style={styles.storyLabel}>Our Story</p>
            <h2 style={styles.storyTitle}>Reimagining the Café Experience</h2>
            <p style={styles.storyText}>
              Mystik Café was born from a simple yet powerful idea: <strong>What if a coffee shop could be a portal to the wild?</strong>
            </p>
            <p style={styles.storyText}>
              We did not just want to serve coffee. We wanted to spark curiosity. We believed that in a busy world, 
              people needed a place to pause, breathe, and reconnect, not just with each other, but with the 
              fascinating creatures we share this planet with.
            </p>
            <p style={styles.storyText}>
              From that seed, Mystik grew into a sanctuary. A place where you can sip a latte while watching a 
              chameleon change colors, or enjoy a fresh pastry in the company of ancient reptiles. Here, every 
              visit becomes an adventure, every cup tells a story, and every creature reminds us of the wild 
              beauty that exists just beyond our daily lives.
            </p>
          </div>
          <div style={styles.videoContainer}>
            <video 
              style={styles.video}
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://assets.k12path.com/MystikCafe/Mauritius_Gecko.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={styles.mvSection}>
        <div style={styles.mvContainer}>
          <div style={styles.mvGrid}>
            {/* Mission */}
            <div style={styles.mvCard}>
              <div style={styles.mvIcon}>🎯</div>
              <h3 style={styles.mvTitle}>Our Mission</h3>
              <p style={styles.mvText}>
                To inspire curiosity, compassion, and a deeper connection to the natural world.
              </p>
              <p style={styles.mvText}>
                We are more than a café. We are a living classroom. We exist to bridge the gap between 
                humans and nature, proving that understanding leads to caring, and caring leads to conservation.
              </p>
              <span style={styles.mvHighlight}>
                "Understanding leads to caring. Caring leads to conservation."
              </span>
            </div>

            {/* Vision */}
            <div style={styles.mvCard}>
              <div style={styles.mvIcon}>✨</div>
              <h3 style={styles.mvTitle}>Our Vision</h3>
              <p style={styles.mvText}>
                A world where every creature is viewed with wonder and respect.
              </p>
              <p style={styles.mvText}>
                We envision a community that dares to look closer, where an afternoon coffee break becomes 
                a moment of discovery, and where fear of the unknown is replaced by fascination. We strive 
                to be a hub where artists, families, and explorers come together to celebrate the wild beauty of life.
              </p>
              <span style={styles.mvHighlight}>
                "Where fear becomes fascination, and strangers become family."
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section style={styles.pillarsSection}>
        <div style={styles.pillarsContainer}>
          <div style={styles.pillarsHeader}>
            <p style={styles.pillarsLabel}>What Drives Us</p>
            <h2 style={styles.pillarsTitle}>The Three Pillars of Mystik</h2>
          </div>
          <div style={styles.pillarsGrid}>
            {/* Pillar 1 */}
            <div 
              style={styles.pillarCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(13, 40, 24, 0.1)';
              }}
            >
              <img 
                src="https://assets.k12path.com/MystikCafe/about%20us%201.jpeg" 
                alt="Compassion and Care"
                style={styles.pillarImage}
              />
              <div style={styles.pillarContent}>
                <div style={styles.pillarNumber}>1</div>
                <h4 style={styles.pillarCardTitle}>Compassion & Care</h4>
                <p style={styles.pillarCardText}>
                  Our animals are family. We uphold the highest standards of ethical care and enrichment, 
                  ensuring every resident thrives. From the smallest gecko to the oldest tortoise, every 
                  creature lives in a habitat designed for their wellbeing, not just for display.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              style={styles.pillarCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(13, 40, 24, 0.1)';
              }}
            >
              <img 
                src="https://assets.k12path.com/MystikCafe/about%20us%202.jpeg" 
                alt="Community and Connection"
                style={styles.pillarImage}
              />
              <div style={styles.pillarContent}>
                <div style={styles.pillarNumber}>2</div>
                <h4 style={styles.pillarCardTitle}>Community & Connection</h4>
                <p style={styles.pillarCardText}>
                  Mystik is a home for the curious, a space where local staff, passionate educators, and 
                  visitors connect. Whether you are an artist sketching a lizard or a student learning 
                  about ecosystems, you belong here.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              style={styles.pillarCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(13, 40, 24, 0.1)';
              }}
            >
              <img 
                src="https://assets.k12path.com/MystikCafe/about%20us%203.jpeg" 
                alt="Craft and Indulgence"
                style={styles.pillarImage}
              />
              <div style={styles.pillarContent}>
                <div style={styles.pillarNumber}>3</div>
                <h4 style={styles.pillarCardTitle}>Craft & Indulgence</h4>
                <p style={styles.pillarCardText}>
                  We take our food as seriously as our fauna. From bold, locally roasted coffee to our 
                  signature desserts inspired by nature and premium ice creams, every menu item is crafted 
                  to surprise and delight. We believe a great experience tastes as good as it feels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Enter the Wild?</h2>
          <p style={styles.ctaText}>
            Step through our doors and discover a world where coffee meets conservation, 
            where curiosity is celebrated, and where every visit is an adventure waiting to unfold.
          </p>
          <a 
            href="/book"
            style={styles.ctaButton}
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
          </a>
        </div>
      </section>
    </>
  );
}
