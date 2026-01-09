'use client';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  // Hero Section
  hero: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'clamp(400px, 60vh, 600px)',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/partners.jpg)',
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

  // Vision Section
  visionSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  visionContainer: {
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
  visionText: {
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
  goalBadge: {
    display: 'inline-block',
    backgroundColor: '#0D2818',
    color: '#F5E6D3',
    padding: 'clamp(16px, 3vw, 24px) clamp(32px, 5vw, 48px)',
    borderRadius: '60px',
    marginTop: 'clamp(30px, 5vw, 50px)',
  },
  goalNumber: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(36px, 6vw, 56px)',
    display: 'block',
    color: '#4ade80',
  },
  goalText: {
    fontSize: 'clamp(14px, 1.8vw, 18px)',
    marginTop: 'clamp(4px, 1vw, 8px)',
  },

  // Why Partner Section
  whySection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  whyContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  whyHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  whyTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  whySubtitle: {
    fontSize: 'clamp(14px, 1.8vw, 17px)',
    color: 'rgba(245, 230, 211, 0.8)',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
    maxWidth: '900px',
    margin: '0 auto',
  },
  whyCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(28px, 4vw, 40px)',
    border: '1px solid rgba(245, 230, 211, 0.1)',
    textAlign: 'center' as const,
  },
  whyIcon: {
    fontSize: 'clamp(40px, 6vw, 56px)',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  whyCardTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  whyCardText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.8)',
    lineHeight: '1.8',
  },

  // Reciprocal Section
  reciprocalSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  reciprocalContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  reciprocalHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  reciprocalContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
    gap: 'clamp(40px, 6vw, 80px)',
    alignItems: 'center',
  },
  reciprocalText: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    color: '#3D3D3D',
    lineHeight: '1.9',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  reciprocalVisual: {
    backgroundColor: '#0D2818',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(30px, 5vw, 50px)',
    textAlign: 'center' as const,
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(16px, 3vw, 32px)',
    marginBottom: 'clamp(24px, 4vw, 36px)',
  },
  arrowBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'clamp(12px, 2vw, 16px)',
    padding: 'clamp(16px, 2vw, 24px)',
    minWidth: 'clamp(100px, 15vw, 140px)',
  },
  arrowBoxTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(14px, 2vw, 18px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(4px, 0.5vw, 8px)',
  },
  arrowBoxSub: {
    fontSize: 'clamp(11px, 1.4vw, 13px)',
    color: 'rgba(245, 230, 211, 0.7)',
  },
  arrowIcon: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    color: '#4ade80',
  },
  reciprocalQuote: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#F5E6D3',
    fontStyle: 'italic',
    lineHeight: '1.7',
  },

  // Ideal Partners Section
  idealSection: {
    backgroundColor: '#1B5E20',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  idealContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  idealTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  idealSubtitle: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: 'rgba(245, 230, 211, 0.85)',
    maxWidth: '700px',
    margin: '0 auto clamp(40px, 6vw, 60px)',
    lineHeight: '1.8',
  },
  idealGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: 'clamp(12px, 2vw, 20px)',
  },
  idealTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '40px',
    padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 28px)',
    fontSize: 'clamp(13px, 1.6vw, 16px)',
    color: '#F5E6D3',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(8px, 1vw, 12px)',
    border: '1px solid rgba(245, 230, 211, 0.2)',
  },

  // Growth Journey Section
  growthSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  growthContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  growthHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  growthSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
    gap: 'clamp(40px, 6vw, 60px) clamp(40px, 6vw, 60px)',
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative' as const,
  },
  growthStep: {
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  arrowRight: {
    position: 'absolute' as const,
    top: '32px',
    right: '-50px',
    fontSize: 'clamp(24px, 4vw, 36px)',
    color: '#0D2818',
  },
  arrowDown: {
    position: 'absolute' as const,
    bottom: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 'clamp(24px, 4vw, 36px)',
    color: '#0D2818',
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'clamp(48px, 7vw, 64px)',
    height: 'clamp(48px, 7vw, 64px)',
    backgroundColor: '#0D2818',
    color: '#4ade80',
    borderRadius: '50%',
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(20px, 3vw, 28px)',
    marginBottom: 'clamp(16px, 2vw, 24px)',
  },
  stepTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    color: '#0D2818',
    marginBottom: 'clamp(8px, 1.5vw, 12px)',
  },
  stepText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: '#4A4A4A',
    lineHeight: '1.7',
  },

  // Destination Section
  destinationSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
  },
  destinationContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  destinationTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(24px, 4vw, 40px)',
  },
  destinationText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: 'rgba(245, 230, 211, 0.85)',
    lineHeight: '1.9',
    marginBottom: 'clamp(20px, 3vw, 28px)',
  },
  destinationHighlight: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(22px, 3.5vw, 32px)',
    color: '#4ade80',
    marginTop: 'clamp(30px, 5vw, 50px)',
    padding: 'clamp(24px, 4vw, 40px)',
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    border: '2px solid rgba(74, 222, 128, 0.3)',
  },

  // CTA Section
  ctaSection: {
    backgroundColor: '#F5E6D3',
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
    color: '#0D2818',
    marginBottom: 'clamp(16px, 3vw, 24px)',
  },
  ctaText: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    marginBottom: 'clamp(24px, 4vw, 36px)',
  },
  ctaEmail: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(22px, 3.5vw, 32px)',
    color: '#1B5E20',
    marginBottom: 'clamp(30px, 5vw, 40px)',
    display: 'block',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#0D2818',
    color: '#F5E6D3',
    padding: 'clamp(14px, 2vw, 18px) clamp(36px, 5vw, 50px)',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontFamily: 'Rubik Distressed, sans-serif',
    cursor: lizardCursor,
    transition: 'all 0.3s ease',
    border: '2px solid #0D2818',
  },
  ctaSecondary: {
    display: 'block',
    marginTop: 'clamp(20px, 3vw, 28px)',
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#4A4A4A',
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Business Partners</h1>
          <p style={styles.heroSubtitle}>
            Join a network of like minded businesses building something extraordinary together.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section style={styles.visionSection}>
        <div style={styles.visionContainer}>
          <p style={styles.sectionLabel}>Our Shared Vision</p>
          <h2 style={styles.sectionTitle}>Growing Together, Thriving Together</h2>
          <p style={styles.visionText}>
            At Mystik Café, we believe that the strongest businesses are built on relationships. We are not looking 
            for transactions. We are looking for <span style={styles.highlight}>partnerships</span>. We are seeking 
            businesses that share our passion for creating unforgettable experiences and understand that when we 
            lift each other up, everyone rises.
          </p>
          <p style={styles.visionText}>
            Our vision is bold: to become one of Toronto's top tourist destinations, a place where locals bring 
            their out of town guests and where tourists add us to their must visit list. But we cannot achieve 
            this alone. We need partners who believe in the power of community, collaboration, and mutual growth.
          </p>
          <p style={styles.visionText}>
            <span style={styles.highlight}>When you grow, we grow. When we grow, you grow.</span> That is the foundation 
            of every partnership we build.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={styles.whySection}>
        <div style={styles.whyContainer}>
          <div style={styles.whyHeader}>
            <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>The Partnership Advantage</p>
            <h2 style={styles.whyTitle}>Why Partner With Mystik?</h2>
            <p style={styles.whySubtitle}>
              A partnership with Mystik Café opens doors to new audiences, new opportunities, and new ways to delight your customers.
            </p>
          </div>
          <div style={styles.whyGrid}>
            <div style={styles.whyCard}>
              <div style={styles.whyIcon}>🎯</div>
              <h3 style={styles.whyCardTitle}>Access to Our Audience</h3>
              <p style={styles.whyCardText}>
                Our visitors are families, tourists, nature enthusiasts, and curious explorers. They are actively 
                seeking memorable experiences and the businesses that provide them.
              </p>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyIcon}>🔄</div>
              <h3 style={styles.whyCardTitle}>Reciprocal Referrals</h3>
              <p style={styles.whyCardText}>
                We believe in giving as much as we receive. When you recommend us, we recommend you. Your success 
                is our success, and we actively work to drive value back to our partners.
              </p>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyIcon}>🌟</div>
              <h3 style={styles.whyCardTitle}>Brand Association</h3>
              <p style={styles.whyCardText}>
                Align your brand with wonder, education, and conservation. Our partners are seen as businesses 
                that care about community and creating positive impact.
              </p>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyIcon}>📈</div>
              <h3 style={styles.whyCardTitle}>Growing Network</h3>
              <p style={styles.whyCardText}>
                Join a network of 300+ businesses that support each other. The connections you make through our 
                partnership extend far beyond just Mystik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reciprocal Section */}
      <section style={styles.reciprocalSection}>
        <div style={styles.reciprocalContainer}>
          <div style={styles.reciprocalHeader}>
            <p style={styles.sectionLabel}>Mutual Success</p>
            <h2 style={styles.sectionTitle}>The Power of Reciprocal Growth</h2>
          </div>
          <div style={styles.reciprocalContent}>
            <div>
              <p style={styles.reciprocalText}>
                We are building something different here. In a world where businesses often see each other as 
                competitors, we see <span style={styles.highlight}>collaborators</span>. We believe that a rising 
                tide lifts all boats, and we are committed to being that rising tide for our partners.
              </p>
              <p style={styles.reciprocalText}>
                When you send your customers our way, we do not just say thank you. We actively look for opportunities 
                to return the favor. We mention your business to our guests. We display your materials. We become 
                your ambassador, just as you become ours.
              </p>
              <p style={styles.reciprocalText}>
                The effort you invest in our partnership will be matched and multiplied. We track, we measure, and 
                we ensure that the value flows in both directions. <span style={styles.highlight}>Your growth is woven 
                into our growth.</span>
              </p>
              <p style={styles.reciprocalText}>
                This is not a one sided relationship. This is a true partnership where both sides win.
              </p>
            </div>
            <div style={styles.reciprocalVisual}>
              <div style={styles.arrowContainer}>
                <div style={styles.arrowBox}>
                  <div style={styles.arrowBoxTitle}>Your Business</div>
                  <div style={styles.arrowBoxSub}>Customers & Referrals</div>
                </div>
                <div style={styles.arrowIcon}>⇄</div>
                <div style={styles.arrowBox}>
                  <div style={styles.arrowBoxTitle}>Mystik Café</div>
                  <div style={styles.arrowBoxSub}>Customers & Referrals</div>
                </div>
              </div>
              <p style={styles.reciprocalQuote}>
                "Together we reach audiences neither of us could reach alone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partners Section */}
      <section style={styles.idealSection}>
        <div style={styles.idealContainer}>
          <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>Like Minded Businesses</p>
          <h2 style={styles.idealTitle}>Who We Are Looking For</h2>
          <p style={styles.idealSubtitle}>
            We partner with businesses that share our values: excellence, community, and a commitment to creating 
            extraordinary experiences. If this sounds like you, we want to talk.
          </p>
          <div style={styles.idealGrid}>
            <div style={styles.idealTag}><span>🏨</span> Hotels & Accommodations</div>
            <div style={styles.idealTag}><span>✈️</span> Travel Agencies</div>
            <div style={styles.idealTag}><span>🎉</span> Event Planners</div>
            <div style={styles.idealTag}><span>🎂</span> Party Venues</div>
            <div style={styles.idealTag}><span>📸</span> Photographers</div>
            <div style={styles.idealTag}><span>🎨</span> Art Studios</div>
            <div style={styles.idealTag}><span>🏫</span> Schools & Daycares</div>
            <div style={styles.idealTag}><span>🍽️</span> Restaurants</div>
            <div style={styles.idealTag}><span>🚐</span> Tour Operators</div>
            <div style={styles.idealTag}><span>🎁</span> Gift Shops</div>
            <div style={styles.idealTag}><span>🏋️</span> Fitness & Wellness</div>
            <div style={styles.idealTag}><span>🛍️</span> Retail Stores</div>
            <div style={styles.idealTag}><span>🎪</span> Entertainment Venues</div>
            <div style={styles.idealTag}><span>🏢</span> Corporate Event Planners</div>
            <div style={styles.idealTag}><span>💼</span> Local Businesses</div>
          </div>
        </div>
      </section>

      {/* Growth Journey Section */}
      <section style={styles.growthSection}>
        <div style={styles.growthContainer}>
          <div style={styles.growthHeader}>
            <p style={styles.sectionLabel}>The Journey</p>
            <h2 style={styles.sectionTitle}>How Our Partnership Works</h2>
          </div>
          <div style={styles.growthSteps}>
            <div style={styles.growthStep}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Connect</h3>
              <p style={styles.stepText}>
                Reach out and let us know about your business. We will schedule a visit so you can experience 
                Mystik firsthand and see the magic we create.
              </p>
              <span style={styles.arrowRight}>→</span>
              <span style={styles.arrowDown}>↓</span>
            </div>
            <div style={styles.growthStep}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>Align</h3>
              <p style={styles.stepText}>
                We will discuss how our audiences overlap, identify opportunities for mutual benefit, and 
                design a partnership that works for both of us.
              </p>
              <span style={styles.arrowDown}>↓</span>
            </div>
            <div style={styles.growthStep}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Activate</h3>
              <p style={styles.stepText}>
                Start referring, start collaborating, start growing. We will provide you with materials, 
                talking points, and everything you need to succeed.
              </p>
              <span style={styles.arrowRight}>→</span>
            </div>
            <div style={styles.growthStep}>
              <div style={styles.stepNumber}>4</div>
              <h3 style={styles.stepTitle}>Expand</h3>
              <p style={styles.stepText}>
                As our partnership strengthens, so do the opportunities. The more we grow together, the more 
                value we create for each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section style={styles.destinationSection}>
        <div style={styles.destinationContainer}>
          <p style={{ ...styles.sectionLabel, color: '#4ade80' }}>The Vision</p>
          <h2 style={styles.destinationTitle}>Building Toronto's Must Visit Destination</h2>
          <p style={styles.destinationText}>
            We are on a mission to put Mystik Café on the map as one of Toronto's premier tourist attractions. 
            A place where visitors from around the world come to experience the wonder of the wild while enjoying 
            exceptional coffee and cuisine.
          </p>
          <p style={styles.destinationText}>
            Imagine being part of a network that helps shape Toronto's tourism landscape. When tourists ask locals 
            for recommendations, Mystik and our partners will be at the top of the list. When travel blogs write 
            about hidden gems, we will be featured together.
          </p>
          <p style={styles.destinationText}>
            This is not just about one café. This is about creating an ecosystem of businesses that collectively 
            offer unforgettable experiences for locals and tourists alike. <span style={{ color: '#4ade80' }}>
            And you can be part of it.</span>
          </p>
          <div style={styles.destinationHighlight}>
            "We are not just building a business. We are building a destination. Join us."
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Grow Together?</h2>
          <p style={styles.ctaText}>
            If you share our vision of collaboration, community, and creating extraordinary experiences, we want 
            to hear from you. Drop us an email to start the conversation. Better yet, come visit us. Grab a coffee, 
            meet our incredible animal ambassadors, and let us talk about how we can build something amazing together.
          </p>
          <span style={styles.ctaEmail}>info@mystikcafe.ca</span>
          <a 
            href="mailto:info@mystikcafe.ca?subject=Partnership Inquiry"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5E6D3';
              e.currentTarget.style.color = '#0D2818';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0D2818';
              e.currentTarget.style.color = '#F5E6D3';
            }}
          >
            Start the Conversation
          </a>
          <span style={styles.ctaSecondary}>
            Or visit us any day. We would love to show you around.
          </span>
        </div>
      </section>
    </>
  );
}
