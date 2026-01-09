'use client';

const styles = {
  // Page Container
  page: {
    backgroundColor: '#F5E6D3',
    minHeight: '100vh',
  },

  // Header Section
  headerSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 24px) clamp(30px, 5vw, 50px)',
    textAlign: 'center' as const,
  },
  headerContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerIcon: {
    fontSize: 'clamp(36px, 6vw, 48px)',
    marginBottom: 'clamp(12px, 2vw, 20px)',
  },
  headerTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(32px, 6vw, 52px)',
    color: '#0D2818',
    marginBottom: 'clamp(8px, 1.5vw, 12px)',
    lineHeight: '1.2',
  },
  headerSubtitle: {
    fontSize: 'clamp(14px, 2vw, 18px)',
    color: '#1B5E20',
    marginBottom: 'clamp(20px, 4vw, 32px)',
  },
  headerIntro: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    maxWidth: '650px',
    margin: '0 auto',
  },

  // Main Content Grid
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 clamp(16px, 4vw, 24px)',
  },

  // Do Not Section
  doNotSection: {
    backgroundColor: 'white',
    padding: 'clamp(30px, 5vw, 50px)',
  },
  doNotTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(24px, 4vw, 32px)',
    color: '#0D2818',
    marginBottom: 'clamp(20px, 3vw, 32px)',
  },
  doNotHighlight: {
    color: '#dc2626',
  },
  rulesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  ruleItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'clamp(10px, 1.5vw, 14px)',
    marginBottom: 'clamp(14px, 2vw, 20px)',
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#3D3D3D',
    lineHeight: '1.6',
  },
  ruleIconNo: {
    color: '#dc2626',
    fontSize: 'clamp(16px, 2vw, 20px)',
    flexShrink: 0,
    marginTop: '2px',
  },

  // Welcome Section
  welcomeSection: {
    backgroundColor: 'white',
    padding: 'clamp(30px, 5vw, 50px)',
  },
  welcomeTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(24px, 4vw, 32px)',
    color: '#0D2818',
    marginBottom: 'clamp(20px, 3vw, 32px)',
  },
  ruleIconYes: {
    color: '#1B5E20',
    fontSize: 'clamp(16px, 2vw, 20px)',
    flexShrink: 0,
    marginTop: '2px',
  },

  // Jungle Banner
  jungleBanner: {
    width: '100%',
    height: 'clamp(60px, 10vw, 100px)',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/jungle-landscape-cartoon.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  // Remember Section
  rememberSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(50px, 8vw, 80px) clamp(16px, 4vw, 24px)',
  },
  rememberContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  rememberHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(12px, 2vw, 16px)',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  },
  rememberIcon: {
    fontSize: 'clamp(28px, 4vw, 36px)',
  },
  rememberTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 40px)',
    color: '#0D2818',
  },
  rememberContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
    gap: 'clamp(30px, 5vw, 50px)',
    alignItems: 'start',
  },
  rememberIntro: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    color: '#3D3D3D',
    lineHeight: '1.9',
  },
  rememberEmoji: {
    color: '#4ade80',
  },
  rememberList: {
    listStyle: 'disc',
    paddingLeft: 'clamp(20px, 3vw, 28px)',
    margin: 0,
  },
  rememberListItem: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },

  // For Everyone Section
  everyoneSection: {
    backgroundColor: '#0D2818',
    padding: 'clamp(50px, 8vw, 80px) clamp(16px, 4vw, 24px)',
  },
  everyoneContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  everyoneHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
  },
  everyoneTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(28px, 5vw, 40px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  everyoneSubtitle: {
    fontSize: 'clamp(14px, 1.8vw, 17px)',
    color: 'rgba(245, 230, 211, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  everyoneGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
  },
  everyoneCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    padding: 'clamp(28px, 4vw, 40px)',
    border: '1px solid rgba(245, 230, 211, 0.1)',
  },
  everyoneCardIcon: {
    fontSize: 'clamp(36px, 5vw, 48px)',
    marginBottom: 'clamp(16px, 2vw, 20px)',
  },
  everyoneCardTitle: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(20px, 3vw, 26px)',
    color: '#F5E6D3',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  everyoneCardText: {
    fontSize: 'clamp(13px, 1.6vw, 15px)',
    color: 'rgba(245, 230, 211, 0.8)',
    lineHeight: '1.8',
  },

  // Closing Section
  closingSection: {
    backgroundColor: '#F5E6D3',
    padding: 'clamp(50px, 8vw, 80px) clamp(16px, 4vw, 24px)',
    textAlign: 'center' as const,
  },
  closingContainer: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  closingText: {
    fontSize: 'clamp(16px, 2.2vw, 20px)',
    color: '#3D3D3D',
    lineHeight: '1.8',
    marginBottom: 'clamp(20px, 3vw, 28px)',
  },
  closingHighlight: {
    fontFamily: 'Rubik Distressed, sans-serif',
    fontSize: 'clamp(22px, 3.5vw, 32px)',
    color: '#1B5E20',
  },
};

export default function SafetyPage() {
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <section style={styles.headerSection}>
        <div style={styles.headerContainer}>
          <div style={styles.headerIcon}>📝</div>
          <h1 style={styles.headerTitle}>Rules of the "Reptile Jungle"</h1>
          <p style={styles.headerSubtitle}>@Mystikcafe</p>
          <p style={styles.headerIntro}>
            To keep things magical (and safe), our team gently enforces a few simple rules. 
            These help ensure a positive experience for you, our animals, and everyone around you.
          </p>
        </div>
      </section>

      {/* Main Two Column Content */}
      <div style={styles.mainContent}>
        {/* Please Do NOT Section */}
        <section style={styles.doNotSection}>
          <h2 style={styles.doNotTitle}>
            Please <span style={styles.doNotHighlight}>Do NOT</span>:
          </h2>
          <ul style={styles.rulesList}>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Tap on the glass or bang on enclosures</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Pick up or grab animals yourself — all interactions are staff guided</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Shine lights or use flash photography</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Bring food or drinks into the Jungle Lounge</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Leave children unsupervised or allow them to run</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Make sudden loud noises or scream near the animals</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconNo}>🚫</span>
              <span>Reach into enclosures without permission</span>
            </li>
          </ul>
        </section>

        {/* You're Welcome To Section */}
        <section style={styles.welcomeSection}>
          <h2 style={styles.welcomeTitle}>You're Welcome To:</h2>
          <ul style={styles.rulesList}>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Take beautiful, non-flash photos and tag us @Mystikcafe</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Join our staff-led reptile experiences</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Ask questions! We love sharing facts and stories</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Explore each zone at your own pace and enjoy the ambiance</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Request a closer look at your favorite animal (when available)</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Share your experience on social media and spread the wonder</span>
            </li>
            <li style={styles.ruleItem}>
              <span style={styles.ruleIconYes}>✅</span>
              <span>Bring your curiosity and sense of adventure</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Just Remember Section */}
      <section style={styles.rememberSection}>
        <div style={styles.rememberContainer}>
          <div style={styles.rememberHeader}>
            <span style={styles.rememberIcon}>💡</span>
            <h2 style={styles.rememberTitle}>Just Remember:</h2>
          </div>
          <div style={styles.rememberContent}>
            <div>
              <p style={styles.rememberIntro}>
                Mystik is not a zoo. It is a sanctuary of design, discovery, and respect — for animals 
                and humans alike. Thanks for being part of the magic. <span style={styles.rememberEmoji}>💚</span>
              </p>
            </div>
            <ul style={styles.rememberList}>
              <li style={styles.rememberListItem}>
                Reptiles can be shy — if they walk away or hide, that is their way of saying "not right now"
              </li>
              <li style={styles.rememberListItem}>
                Touch only when invited by staff, and always with gentle hands
              </li>
              <li style={styles.rememberListItem}>
                This is a calm, immersive space — let us keep noise low and vibes high
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* For Everyone Section */}
      <section style={styles.everyoneSection}>
        <div style={styles.everyoneContainer}>
          <div style={styles.everyoneHeader}>
            <h2 style={styles.everyoneTitle}>Safety Tips for Everyone</h2>
            <p style={styles.everyoneSubtitle}>
              Whether you are 5 or 95, these friendly reminders help us all have the best experience together.
            </p>
          </div>
          <div style={styles.everyoneGrid}>
            {/* For Kids */}
            <div style={styles.everyoneCard}>
              <div style={styles.everyoneCardIcon}>👧</div>
              <h3 style={styles.everyoneCardTitle}>For Our Little Explorers</h3>
              <p style={styles.everyoneCardText}>
                Stay close to your grown-ups at all times. Use your "inside voice" so you do not startle our 
                animal friends. Walking feet only, please! If you want to see an animal up close, just ask 
                a staff member — we love showing off our scaly friends. Remember, gentle touches only, and 
                always wash your hands after saying hello to our reptiles.
              </p>
            </div>

            {/* For Adults */}
            <div style={styles.everyoneCard}>
              <div style={styles.everyoneCardIcon}>👨‍👩‍👧</div>
              <h3 style={styles.everyoneCardTitle}>For Parents & Guardians</h3>
              <p style={styles.everyoneCardText}>
                Please keep children within arm's reach at all times. Help your little ones understand that 
                our animals are living creatures who need space and quiet. Model calm behavior — kids follow 
                your lead! If your child is nervous, that is okay. Watching from a distance is always an option. 
                Let us know if you have any concerns and we will make sure everyone feels comfortable.
              </p>
            </div>

            {/* For Accessibility */}
            <div style={styles.everyoneCard}>
              <div style={styles.everyoneCardIcon}>♿</div>
              <h3 style={styles.everyoneCardTitle}>For Guests with Disabilities</h3>
              <p style={styles.everyoneCardText}>
                Our space is wheelchair accessible and we are happy to accommodate any needs. If you require 
                extra time, a quieter experience, or any other assistance, please let us know. Our staff can 
                bring animals to you if mobility is a concern. Sensory-sensitive guests are welcome to request 
                quieter times or a more gradual introduction to our space. Your comfort matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section style={styles.closingSection}>
        <div style={styles.closingContainer}>
          <p style={styles.closingText}>
            These rules exist because we care — about you, about our animals, and about creating a 
            space where wonder can happen safely. When everyone follows these simple guidelines, 
            magic happens.
          </p>
          <p style={styles.closingHighlight}>
            Thank you for respecting the wild. 🦎
          </p>
        </div>
      </section>
    </div>
  );
}
