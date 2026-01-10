'use client';

import { LizardIcon, GlobeIcon, LeafIcon, PalmTreeIcon } from '@/components/icons';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  // Hero Section
  hero: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'clamp(400px, 60vh, 600px)',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/sponsorship.jpeg)',
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

  // Why Sponsors Matter Section
  whySection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  whyContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  sectionLabel: {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    color: '#1B5E20',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    marginBottom: 'clamp(12px, 2vw, 16px)',
    fontWeight: '600',
  },
  sectionTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#0D2818',
    marginBottom: 'clamp(24px, 4vw, 40px)',
    lineHeight: '1.2',
  },
  whyText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#3D3D3D',
    lineHeight: '1.9',
    marginBottom: 'clamp(20px, 3vw, 28px)',
    maxWidth: '850px',
    margin: '0 auto clamp(20px, 3vw, 28px)',
  },
  highlight: {
    color: '#1B5E20',
    fontWeight: '600',
  },

  // Impact Grid Section
  impactSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  impactContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  impactHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  impactTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  impactSubtitle: {
    fontSize: 'clamp(14px, 1.8vw, 17px)',
    color: 'rgba(245, 230, 211, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  impactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
    maxWidth: '900px',
    margin: '0 auto',
  },
  impactCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(28px, 4vw, 40px)',
    border: '1px solid rgba(245, 230, 211, 0.1)',
    textAlign: 'center' as const,
  },
  impactIcon: {
    fontSize: 'clamp(40px, 6vw, 56px)',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  impactCardTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  impactCardText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.8)',
    lineHeight: '1.8',
  },

  // Environmental Crisis Section
  crisisSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  crisisContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  crisisHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  crisisContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    gap: 'clamp(30px, 5vw, 50px)',
    alignItems: 'center',
  },
  crisisText: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    color: '#3D3D3D',
    lineHeight: '1.9',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  crisisStats: {
    backgroundColor: '#0D2818',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(30px, 5vw, 50px)',
  },
  statItem: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(24px, 4vw, 32px)',
  },
  statNumber: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(36px, 6vw, 52px)',
    color: '#4ade80',
    marginBottom: 'clamp(4px, 1vw, 8px)',
  },
  statLabel: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.8)',
  },

  // Sponsorship Levels Section
  levelsSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  levelsContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  levelsTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  levelsSubtitle: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: 'rgba(245, 230, 211, 0.85)',
    maxWidth: '700px',
    margin: '0 auto clamp(40px, 6vw, 60px)',
    lineHeight: '1.8',
  },
  levelsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  levelCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(30px, 5vw, 45px)',
    border: '2px solid rgba(245, 230, 211, 0.2)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  levelIcon: {
    fontSize: 'clamp(48px, 7vw, 64px)',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  levelName: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(22px, 3vw, 28px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  levelDescription: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.8)',
    lineHeight: '1.7',
  },

  // Gratitude Section
  gratitudeSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  gratitudeContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  gratitudeTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#0D2818',
    marginBottom: 'clamp(24px, 4vw, 40px)',
  },
  gratitudeText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#3D3D3D',
    lineHeight: '1.9',
    marginBottom: 'clamp(20px, 3vw, 28px)',
  },
  gratitudeQuote: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(20px, 3vw, 28px)',
    color: '#1B5E20',
    fontStyle: 'italic',
    marginTop: 'clamp(30px, 5vw, 50px)',
    padding: 'clamp(24px, 4vw, 40px)',
    backgroundColor: 'rgba(27, 94, 32, 0.08)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    borderLeft: '4px solid #1B5E20',
  },

  // CTA Section
  ctaSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
    textAlign: 'center' as const,
  },
  ctaContainer: {
    maxWidth: '800px',
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
    color: 'rgba(245, 230, 211, 0.85)',
    lineHeight: '1.8',
    marginBottom: 'clamp(24px, 4vw, 36px)',
  },
  ctaHighlight: {
    fontSize: 'clamp(16px, 2.2vw, 20px)',
    color: '#4ade80',
    marginBottom: 'clamp(30px, 5vw, 40px)',
    display: 'block',
  },
  ctaEmail: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(22px, 3.5vw, 32px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(30px, 5vw, 40px)',
    display: 'block',
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
  ctaSecondary: {
    display: 'block',
    marginTop: 'clamp(20px, 3vw, 28px)',
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: 'rgba(245, 230, 211, 0.7)',
  },
};

export default function SponsorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Become a Sponsor</h1>
          <p style={styles.heroSubtitle}>
            Partner with us to inspire the next generation of nature lovers and conservation champions.
          </p>
        </div>
      </section>

      {/* Why Sponsors Matter Section */}
      <section style={styles.whySection}>
        <div style={styles.whyContainer}>
          <p style={styles.sectionLabel}>Why Your Support Matters</p>
          <h2 style={styles.sectionTitle}>Together, We Can Change the World</h2>
          <p style={styles.whyText}>
            At Mystik Café, we are on a mission to reconnect people with nature. But we cannot do it alone. 
            <span style={styles.highlight}> Your sponsorship is the fuel that powers our dream.</span> Every dollar you contribute 
            helps us create more magical moments for children, more educational programs that spark lifelong curiosity, 
            and more opportunities for families to discover the wonder of the wild.
          </p>
          <p style={styles.whyText}>
            When you sponsor Mystik, you are not just supporting a café. You are investing in a movement. 
            A movement that teaches children to love what they might otherwise fear. A movement that transforms 
            a simple cup of coffee into a lesson about ecosystems, biodiversity, and the delicate balance of our planet.
          </p>
          <p style={styles.whyText}>
            We are deeply, profoundly grateful for every sponsor who believes in our vision. You make it possible for us 
            to keep our doors open, our animals thriving, and our community growing. 
            <span style={styles.highlight}> You are the reason we can dream bigger.</span>
          </p>
        </div>
      </section>

      {/* Impact Grid Section */}
      <section style={styles.impactSection}>
        <div style={styles.impactContainer}>
          <div style={styles.impactHeader}>
            <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>Your Impact</p>
            <h2 style={styles.impactTitle}>What Your Sponsorship Creates</h2>
            <p style={styles.impactSubtitle}>
              Every contribution ripples outward, creating lasting change in our community and beyond.
            </p>
          </div>
          <div style={styles.impactGrid}>
            <div style={styles.impactCard}>
              <div style={styles.impactIcon}>👧</div>
              <h3 style={styles.impactCardTitle}>Joy for Children</h3>
              <p style={styles.impactCardText}>
                Fund interactive experiences that bring squeals of delight and wide eyed wonder. 
                Watch a child hold a gecko for the first time and you will understand why this matters.
              </p>
            </div>
            <div style={styles.impactCard}>
              <div style={styles.impactIcon}>📚</div>
              <h3 style={styles.impactCardTitle}>Educational Programs</h3>
              <p style={styles.impactCardText}>
                Support school field trips, weekend workshops, and summer camps that teach children 
                about habitats, conservation, and the incredible diversity of life on Earth.
              </p>
            </div>
            <div style={styles.impactCard}>
              <div style={{ ...styles.impactIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LizardIcon size={48} color="#4ade80" />
              </div>
              <h3 style={styles.impactCardTitle}>Animal Welfare</h3>
              <p style={styles.impactCardText}>
                Ensure our reptile residents receive the best veterinary care, enrichment activities, 
                and habitats that allow them to thrive and teach.
              </p>
            </div>
            <div style={styles.impactCard}>
              <div style={{ ...styles.impactIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GlobeIcon size={48} color="#4ade80" />
              </div>
              <h3 style={styles.impactCardTitle}>Conservation Awareness</h3>
              <p style={styles.impactCardText}>
                Help us spread the message that every creature matters. Your support funds programs 
                that inspire real action to protect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Crisis Section */}
      <section style={styles.crisisSection}>
        <div style={styles.crisisContainer}>
          <div style={styles.crisisHeader}>
            <p style={styles.sectionLabel}>The Urgent Reality</p>
            <h2 style={styles.sectionTitle}>Why This Matters Now More Than Ever</h2>
          </div>
          <div style={styles.crisisContent}>
            <div>
              <p style={styles.crisisText}>
                Our planet is facing an environmental crisis unlike anything in human history. Species are disappearing 
                at an alarming rate. Habitats are being destroyed. Climate change threatens ecosystems that took millions 
                of years to develop.
              </p>
              <p style={styles.crisisText}>
                The truth is hard to hear: <span style={styles.highlight}>we, as humans, have not been good stewards of our Earth.</span> We have 
                taken more than we have given. We have prioritized convenience over conservation. And now, the creatures 
                we share this planet with are paying the price.
              </p>
              <p style={styles.crisisText}>
                But here is the beautiful thing about humans: we can change. We can learn. And when we teach our children 
                to love nature, to see animals not as strange or scary but as wondrous and worth protecting, we plant seeds 
                of hope for the future.
              </p>
              <p style={styles.crisisText}>
                <span style={styles.highlight}>That is what Mystik Café is all about.</span> We believe that the child who holds a turtle today 
                will fight to protect wetlands tomorrow. The teenager who learns about chameleon camouflage will grow up 
                to support wildlife corridors. Connection leads to compassion. Compassion leads to action.
              </p>
            </div>
            <div style={styles.crisisStats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>1M+</div>
                <div style={styles.statLabel}>Species at risk of extinction</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>68%</div>
                <div style={styles.statLabel}>Wildlife populations lost since 1970</div>
              </div>
              <div style={{ ...styles.statItem, marginBottom: 0 }}>
                <div style={styles.statNumber}>∞</div>
                <div style={styles.statLabel}>Potential for change when we work together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels Section */}
      <section style={styles.levelsSection}>
        <div style={styles.levelsContainer}>
          <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>Partnership Opportunities</p>
          <h2 style={styles.levelsTitle}>Sponsorship Levels</h2>
          <p style={styles.levelsSubtitle}>
            We offer multiple levels of sponsorship to fit every budget and vision. From individual supporters 
            to corporate partners, there is a place for you in the Mystik family. Each level comes with unique 
            benefits and recognition opportunities.
          </p>
          <div style={styles.levelsGrid}>
            <div 
              style={styles.levelCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#F5F5F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.2)';
              }}
            >
              <div style={styles.levelIcon}>🌱</div>
              <h3 style={styles.levelName}>Seedling</h3>
              <p style={styles.levelDescription}>
                Perfect for individuals who want to make a difference. Your support helps nurture our programs from the ground up.
              </p>
            </div>
            <div 
              style={styles.levelCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#F5F5F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.2)';
              }}
            >
              <div style={{ ...styles.levelIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LeafIcon size={48} color="#4ade80" />
              </div>
              <h3 style={styles.levelName}>Explorer</h3>
              <p style={styles.levelDescription}>
                For families and small businesses ready to explore new ways of giving back. Includes special recognition and perks.
              </p>
            </div>
            <div 
              style={styles.levelCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#F5F5F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.2)';
              }}
            >
              <div style={styles.levelIcon}>🌳</div>
              <h3 style={styles.levelName}>Guardian</h3>
              <p style={styles.levelDescription}>
                A substantial commitment for those who want to be pillars of our community. Major visibility and naming opportunities.
              </p>
            </div>
            <div 
              style={styles.levelCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#F5F5F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.2)';
              }}
            >
              <div style={{ ...styles.levelIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PalmTreeIcon size={48} color="#4ade80" />
              </div>
              <h3 style={styles.levelName}>Rainforest</h3>
              <p style={styles.levelDescription}>
                Our highest tier for corporate partners and philanthropists. Transform our mission with your visionary support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section style={styles.gratitudeSection}>
        <div style={styles.gratitudeContainer}>
          <p style={styles.sectionLabel}>From Our Hearts</p>
          <h2 style={styles.gratitudeTitle}>A Message of Gratitude</h2>
          <p style={styles.gratitudeText}>
            To every sponsor who has believed in us, supported us, and championed our cause: thank you. 
            Thank you for seeing the potential in a little café with big dreams. Thank you for trusting us 
            with your resources. Thank you for caring about a future you may never see.
          </p>
          <p style={styles.gratitudeText}>
            Your generosity does not go unnoticed. It lives in the smile of every child who discovers the 
            magic of nature for the first time. It echoes in the questions young minds ask about the world 
            around them. It grows in the hearts of a new generation of conservationists.
          </p>
          <p style={styles.gratitudeText}>
            We do not take a single dollar for granted. We know that when you choose to sponsor Mystik, 
            you are choosing to believe in something greater than profit. You are choosing hope. 
            You are choosing the wild. You are choosing the future.
          </p>
          <div style={styles.gratitudeQuote}>
            "The greatest gift we can give our children is not a perfect world, but the tools and passion to make it better."
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Let Us Start a Conversation</h2>
          <p style={styles.ctaText}>
            We would love to share our vision with you in person. Come visit Mystik Café for a complimentary 
            cup of coffee and a behind the scenes tour. See the wonder of the wild up close. Meet our incredible 
            animal ambassadors. And let us show you exactly how your sponsorship can make a difference.
          </p>
          <span style={styles.ctaHighlight}>
            Email us to learn about our sponsorship levels, benefits, and opportunities tailored just for you.
          </span>
          <span style={styles.ctaEmail}>info@mystikcafe.ca</span>
          <a 
            href="mailto:info@mystikcafe.ca?subject=Sponsorship Inquiry"
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
            Get in Touch
          </a>
          <span style={styles.ctaSecondary}>
            Or simply walk in. The coffee is always brewing and the chameleons are always curious.
          </span>
        </div>
      </section>
    </>
  );
}
