'use client';

import Link from 'next/link';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  footer: {
    position: 'relative' as const,
    width: '100%',
    backgroundImage: 'url(https://assets.k12path.com/MystikCafe/footer%20background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  ctaSection: {
    position: 'relative' as const,
    zIndex: 10,
    textAlign: 'center' as const,
    padding: '80px 24px 60px 24px',
  },
  joinUsText: {
    color: 'white',
    fontSize: '24px',
    letterSpacing: '0.3em',
    fontFamily: 'Rubik Distressed, sans-serif',
    marginBottom: '48px',
  },
  ctaButton: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    fontFamily: 'Rubik Distressed, sans-serif',
    lineHeight: '1.6',
    padding: '24px 48px',
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '24px',
    cursor: lizardCursor,
    transition: 'background-color 0.3s ease',
  },
  linksSection: {
    position: 'relative' as const,
    zIndex: 10,
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  linksContainer: {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: 'clamp(24px, 5vw, 48px) clamp(16px, 3vw, 24px)',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'clamp(24px, 5vw, 48px)',
    textAlign: 'center' as const,
  },
  columnTitle: {
    color: 'white',
    fontSize: 'clamp(14px, 2vw, 18px)',
    fontFamily: 'Rubik Distressed, sans-serif',
    letterSpacing: '0.1em',
    marginBottom: 'clamp(12px, 2vw, 20px)',
    textAlign: 'center' as const,
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: 'clamp(8px, 1.5vw, 12px)',
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: 'clamp(12px, 1.8vw, 16px)',
    cursor: lizardCursor,
    transition: 'color 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    gap: 'clamp(12px, 2vw, 16px)',
    justifyContent: 'center',
  },
  socialLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    cursor: lizardCursor,
    transition: 'color 0.3s ease',
  },
  icon: {
    width: 'clamp(18px, 2.5vw, 24px)',
    height: 'clamp(18px, 2.5vw, 24px)',
  },
  contactInfo: {
    marginTop: 'clamp(12px, 2vw, 20px)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 'clamp(11px, 1.6vw, 14px)',
    lineHeight: '1.8',
  },
  schedule: {
    position: 'relative' as const,
    zIndex: 10,
    textAlign: 'center' as const,
    padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px) 0',
  },
  scheduleText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 'clamp(12px, 1.8vw, 15px)',
    fontWeight: '500',
    marginBottom: '4px',
  },
  scheduleSubtext: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 'clamp(10px, 1.5vw, 13px)',
  },
  copyright: {
    position: 'relative' as const,
    zIndex: 10,
    textAlign: 'center' as const,
    padding: 'clamp(16px, 3vw, 24px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  copyrightText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 'clamp(11px, 1.6vw, 14px)',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Dark overlay */}
      <div style={styles.overlay} />
      
      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <p style={styles.joinUsText}>JOIN US</p>
        
        <Link href="/book">
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Explorers<br />of the Wild
          </button>
        </Link>
      </div>

      {/* Footer Links Section */}
      <div style={styles.linksSection}>
        <div style={styles.linksContainer}>
          <div style={styles.linksGrid}>
            
            {/* About Us Column */}
            <div>
              <h3 style={styles.columnTitle}>About Us</h3>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <Link 
                    href="/about" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    About Mystik
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    href="/policies" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Policies
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    href="/safety" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Safety & Conduct
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work With Us Column */}
            <div>
              <h3 style={styles.columnTitle}>Work With Us</h3>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <Link 
                    href="/join" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Join Us
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    href="/sponsors" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Sponsors
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    href="/partners" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Partners
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    href="/events" 
                    style={styles.link}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 style={styles.columnTitle}>Social Media</h3>
              <div style={styles.socialIcons}>
                <a 
                  href="https://www.instagram.com/mystikcafe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@mystik.cafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/61576326151475/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <div style={styles.contactInfo}>
                <p>647-560-6524</p>
                <p>info@mystikcafe.ca</p>
                <p>56C Kensington Ave.</p>
                <p>Toronto, ON M5T 2K1</p>
              </div>
            </div>

          </div>
        </div>

        {/* Schedule */}
        <div style={styles.schedule}>
          <p style={styles.scheduleText}>Open Daily 11AM – 6:30PM</p>
          <p style={styles.scheduleSubtext}>Last Admission 6PM · Closed Wednesdays</p>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <p style={styles.copyrightText}>
            © {new Date().getFullYear()} Mystik Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
