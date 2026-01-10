'use client';

import { GlobeIcon, LizardIcon, SparklesIcon } from '@/components/icons';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  // Hero Section
  hero: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'clamp(400px, 60vh, 600px)',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/Join%20us.jpeg)',
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

  // Culture Section
  cultureSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  cultureContainer: {
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
  cultureText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    marginBottom: 'clamp(20px, 3vw, 32px)',
    maxWidth: '800px',
    margin: '0 auto clamp(20px, 3vw, 32px)',
  },
  cultureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
    marginTop: 'clamp(40px, 6vw, 60px)',
    maxWidth: '800px',
    margin: 'clamp(40px, 6vw, 60px) auto 0',
  },
  cultureCard: {
    backgroundColor: 'white',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(24px, 4vw, 40px)',
    boxShadow: '0 8px 30px rgba(13, 40, 24, 0.08)',
    textAlign: 'center' as const,
  },
  cultureIcon: {
    fontSize: 'clamp(36px, 5vw, 48px)',
    marginBottom: 'clamp(12px, 2vw, 20px)',
  },
  cultureCardTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(18px, 2.5vw, 22px)',
    color: '#0D2818',
    marginBottom: 'clamp(8px, 1.5vw, 12px)',
  },
  cultureCardText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: '#4A4A4A',
    lineHeight: '1.7',
  },

  // Leadership Principles Section
  principlesSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  principlesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  principlesHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  principlesTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  principlesSubtitle: {
    fontSize: 'clamp(14px, 1.8vw, 17px)',
    color: 'rgba(245, 230, 211, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  principlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
  },
  principleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'clamp(12px, 2vw, 20px)',
    padding: 'clamp(24px, 4vw, 36px)',
    border: '1px solid rgba(245, 230, 211, 0.1)',
    display: 'flex',
    gap: 'clamp(16px, 2vw, 20px)',
    alignItems: 'flex-start',
  },
  principleNumber: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 4vw, 36px)',
    color: '#4ade80',
    lineHeight: '1',
    minWidth: 'clamp(36px, 5vw, 48px)',
  },
  principleContent: {
    flex: 1,
  },
  principleTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(18px, 2.5vw, 22px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(8px, 1vw, 12px)',
  },
  principleText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.75)',
    lineHeight: '1.7',
  },

  // Code of Conduct Section
  conductSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  conductContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  conductHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  conductGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(24px, 4vw, 40px)',
  },
  conductCard: {
    backgroundColor: '#0D2818',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(28px, 4vw, 40px)',
    color: '#F5E6D3',
  },
  conductIcon: {
    fontSize: 'clamp(32px, 4vw, 42px)',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  conductCardTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(20px, 3vw, 26px)',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  conductCardText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.85)',
    lineHeight: '1.8',
  },

  // Responsibilities Section
  responsibilitiesSection: {
    backgroundColor: '#1B5E20',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  responsibilitiesContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  responsibilitiesTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(24px, 4vw, 40px)',
  },
  responsibilitiesList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: 'clamp(12px, 2vw, 20px)',
    marginBottom: 'clamp(30px, 5vw, 50px)',
  },
  responsibilityItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '40px',
    padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 28px)',
    fontSize: 'clamp(13px, 1.6vw, 16px)',
    color: '#F5E6D3',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(8px, 1vw, 12px)',
  },
  responsibilityCheck: {
    color: '#4ade80',
    fontSize: 'clamp(16px, 2vw, 20px)',
  },
  responsibilitiesText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: 'rgba(245, 230, 211, 0.9)',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
  },

  // Open Roles Section
  rolesSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  rolesContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  rolesHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  rolesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 'clamp(24px, 4vw, 36px)',
  },
  roleCard: {
    backgroundColor: 'white',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(13, 40, 24, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  roleHeader: {
    backgroundColor: '#0D2818',
    padding: 'clamp(24px, 4vw, 32px)',
    textAlign: 'center' as const,
  },
  roleIcon: {
    fontSize: 'clamp(40px, 6vw, 56px)',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  roleTitle: {
    fontFamily: '"Antonio", sans-serif',
    fontSize: 'clamp(20px, 3vw, 26px)',
    color: '#F5E6D3',
  },
  roleBody: {
    padding: 'clamp(24px, 4vw, 32px)',
  },
  roleDescription: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: '#4A4A4A',
    lineHeight: '1.8',
    marginBottom: 'clamp(20px, 3vw, 28px)',
  },
  roleHighlights: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  roleHighlight: {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    color: '#1B5E20',
    padding: 'clamp(6px, 1vw, 10px) 0',
    borderBottom: '1px solid rgba(13, 40, 24, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(8px, 1vw, 12px)',
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
    marginBottom: 'clamp(24px, 4vw, 36px)',
  },
  ctaEmail: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(20px, 3vw, 28px)',
    color: '#4ade80',
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
};

export default function JoinPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Join the Mystik Family</h1>
          <p style={styles.heroSubtitle}>
            More than a job. A chance to inspire wonder, nurture curiosity, and be part of something wild.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section style={styles.cultureSection}>
        <div style={styles.cultureContainer}>
          <p style={styles.sectionLabel}>Our Culture</p>
          <h2 style={styles.sectionTitle}>Where Passion Meets Purpose</h2>
          <p style={styles.cultureText}>
            At Mystik Café, we believe that the best teams are built on trust, creativity, and a shared love for what we do. 
            Our workplace is not just friendly, it is a family. We celebrate each other, learn from our creatures, and grow together 
            every single day. Here, your voice matters, your ideas are valued, and your growth is our priority.
          </p>
          <div style={styles.cultureGrid}>
            <div style={styles.cultureCard}>
              <div style={styles.cultureIcon}>🤝</div>
              <h3 style={styles.cultureCardTitle}>Collaborative Spirit</h3>
              <p style={styles.cultureCardText}>
                We work as one team, supporting each other through busy mornings and quiet afternoons alike.
              </p>
            </div>
            <div style={styles.cultureCard}>
              <div style={styles.cultureIcon}>🌱</div>
              <h3 style={styles.cultureCardTitle}>Growth Mindset</h3>
              <p style={styles.cultureCardText}>
                We invest in your development with ongoing training, mentorship, and opportunities to expand your skills.
              </p>
            </div>
            <div style={styles.cultureCard}>
              <div style={styles.cultureIcon}>🎉</div>
              <h3 style={styles.cultureCardTitle}>Fun Environment</h3>
              <p style={styles.cultureCardText}>
                Laughter is part of our daily routine. When you work with chameleons and coffee, every day brings a smile.
              </p>
            </div>
            <div style={styles.cultureCard}>
              <div style={styles.cultureIcon}>💚</div>
              <h3 style={styles.cultureCardTitle}>Purpose Driven</h3>
              <p style={styles.cultureCardText}>
                Every role contributes to our mission of inspiring compassion and connection with the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles Section */}
      <section style={styles.principlesSection}>
        <div style={styles.principlesContainer}>
          <div style={styles.principlesHeader}>
            <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>How We Lead</p>
            <h2 style={styles.principlesTitle}>Our Leadership Principles</h2>
            <p style={styles.principlesSubtitle}>
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>
          <div style={styles.principlesGrid}>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>01</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Lead with Empathy</h3>
                <p style={styles.principleText}>
                  We listen first, understand deeply, and respond with compassion. Every team member and every creature deserves kindness.
                </p>
              </div>
            </div>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>02</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Embrace Curiosity</h3>
                <p style={styles.principleText}>
                  We ask questions, seek to understand, and never stop learning. Curiosity fuels our innovation and growth.
                </p>
              </div>
            </div>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>03</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Take Ownership</h3>
                <p style={styles.principleText}>
                  We own our work, our mistakes, and our victories. When something needs doing, we step up without being asked.
                </p>
              </div>
            </div>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>04</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Inspire Wonder</h3>
                <p style={styles.principleText}>
                  We create moments of magic for our guests and each other. Every interaction is an opportunity to spark joy.
                </p>
              </div>
            </div>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>05</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Protect What Matters</h3>
                <p style={styles.principleText}>
                  The wellbeing of our animals, team, and community comes first. We never compromise on safety or ethics.
                </p>
              </div>
            </div>
            <div style={styles.principleCard}>
              <div style={styles.principleNumber}>06</div>
              <div style={styles.principleContent}>
                <h3 style={styles.principleTitle}>Build Together</h3>
                <p style={styles.principleText}>
                  We succeed as a team. We celebrate wins together, learn from setbacks together, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section style={styles.conductSection}>
        <div style={styles.conductContainer}>
          <div style={styles.conductHeader}>
            <p style={styles.sectionLabel}>Our Standards</p>
            <h2 style={styles.sectionTitle}>Code of Conduct</h2>
          </div>
          <div style={styles.conductGrid}>
            <div style={styles.conductCard}>
              <div style={styles.conductIcon}>🛡️</div>
              <h3 style={styles.conductCardTitle}>Integrity Always</h3>
              <p style={styles.conductCardText}>
                We are honest, transparent, and ethical in everything we do. We keep our promises and admit when we are wrong. 
                Trust is the foundation of our team.
              </p>
            </div>
            <div style={styles.conductCard}>
              <div style={{ ...styles.conductIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GlobeIcon size={48} color="#4ade80" />
              </div>
              <h3 style={styles.conductCardTitle}>Respect for All</h3>
              <p style={styles.conductCardText}>
                We treat every person, guest, and creature with dignity and respect. Discrimination, harassment, and unkindness 
                have no place at Mystik.
              </p>
            </div>
            <div style={styles.conductCard}>
              <div style={styles.conductIcon}>🔒</div>
              <h3 style={styles.conductCardTitle}>Safety First</h3>
              <p style={styles.conductCardText}>
                The safety of our animals, team, and guests is non negotiable. We follow protocols, speak up about concerns, 
                and never take shortcuts that risk wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Responsibilities Section */}
      <section style={styles.responsibilitiesSection}>
        <div style={styles.responsibilitiesContainer}>
          <h2 style={styles.responsibilitiesTitle}>What It Means to Be on Our Team</h2>
          <div style={styles.responsibilitiesList}>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Show up ready to make a difference
            </div>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Treat every guest like family
            </div>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Care for our animals with love
            </div>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Support your teammates always
            </div>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Keep learning and growing
            </div>
            <div style={styles.responsibilityItem}>
              <span style={styles.responsibilityCheck}>✓</span>
              Represent Mystik with pride
            </div>
          </div>
          <p style={styles.responsibilitiesText}>
            When you join Mystik, you become part of something bigger than yourself. You become a guardian of wonder, 
            a creator of memories, and an ambassador for the wild. It is a responsibility we take seriously, and we 
            know you will too.
          </p>
        </div>
      </section>

      {/* Open Roles Section */}
      <section style={styles.rolesSection}>
        <div style={styles.rolesContainer}>
          <div style={styles.rolesHeader}>
            <p style={styles.sectionLabel}>Now Hiring</p>
            <h2 style={styles.sectionTitle}>Open Positions</h2>
          </div>
          <div style={styles.rolesGrid}>
            {/* Coffee Barista */}
            <div 
              style={styles.roleCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(13, 40, 24, 0.1)';
              }}
            >
              <div style={styles.roleHeader}>
                <div style={styles.roleIcon}>☕</div>
                <h3 style={styles.roleTitle}>Coffee Barista</h3>
              </div>
              <div style={styles.roleBody}>
                <p style={styles.roleDescription}>
                  Craft exceptional beverages while creating warm, memorable experiences for our guests. You are the heart 
                  of our café, serving up smiles with every cup. If you love the art of coffee and connecting with people, 
                  this role is for you.
                </p>
                <ul style={styles.roleHighlights}>
                  <li style={styles.roleHighlight}>
                    <span>☕</span> Master latte art and specialty drinks
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>💬</span> Create welcoming guest experiences
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>🧹</span> Maintain a clean, organized workspace
                  </li>
                  <li style={{ ...styles.roleHighlight, borderBottom: 'none' }}>
                    <span>📚</span> Learn about our ethically sourced beans
                  </li>
                </ul>
              </div>
            </div>

            {/* Animal Ambassador */}
            <div 
              style={styles.roleCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(13, 40, 24, 0.1)';
              }}
            >
              <div style={styles.roleHeader}>
                <div style={{ ...styles.roleIcon, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LizardIcon size={48} color="#4ade80" />
                </div>
                <h3 style={styles.roleTitle}>Animal Ambassador</h3>
              </div>
              <div style={styles.roleBody}>
                <p style={styles.roleDescription}>
                  Be the voice for our incredible reptile residents. You will educate guests, ensure animal welfare, and 
                  create magical interactions between humans and creatures. This is a dream role for anyone passionate 
                  about wildlife and education.
                </p>
                <ul style={styles.roleHighlights}>
                  <li style={styles.roleHighlight}>
                    <span>🐢</span> Care for reptiles daily
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>🎤</span> Lead educational presentations
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>👀</span> Monitor animal health and behavior
                  </li>
                  <li style={{ ...styles.roleHighlight, borderBottom: 'none' }}>
                    <span>❤️</span> Create safe guest and animal interactions
                  </li>
                </ul>
              </div>
            </div>

            {/* Marketing Manager */}
            <div 
              style={styles.roleCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(13, 40, 24, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(13, 40, 24, 0.1)';
              }}
            >
              <div style={styles.roleHeader}>
                <div style={styles.roleIcon}>📱</div>
                <h3 style={styles.roleTitle}>Marketing Manager</h3>
              </div>
              <div style={styles.roleBody}>
                <p style={styles.roleDescription}>
                  Tell the Mystik story to the world. You will craft compelling campaigns, manage our social media presence, 
                  and build partnerships that spread our mission far and wide. If you are creative, strategic, and love 
                  building brands, we want you.
                </p>
                <ul style={styles.roleHighlights}>
                  <li style={styles.roleHighlight}>
                    <span>📸</span> Create engaging social content
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>📊</span> Develop marketing strategies
                  </li>
                  <li style={styles.roleHighlight}>
                    <span>🤝</span> Build community partnerships
                  </li>
                  <li style={{ ...styles.roleHighlight, borderBottom: 'none' }}>
                    <span style={{ display: 'inline-flex' }}><SparklesIcon size={20} color="#4ade80" /></span> Grow our brand awareness
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Join the Wild Side?</h2>
          <p style={styles.ctaText}>
            If you are passionate about creating extraordinary experiences and believe in our mission, 
            we would love to hear from you. Send your resume and tell us why you belong at Mystik.
          </p>
          <span style={styles.ctaEmail}>info@mystikcafe.ca</span>
          <a 
            href="mailto:info@mystikcafe.ca?subject=Application for Mystik Café"
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
            Send Your Resume
          </a>
        </div>
      </section>
    </>
  );
}
