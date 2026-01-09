'use client';

import { useState } from 'react';
import Link from 'next/link';

const lizardCursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer';

const styles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#FDF8F4',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(139, 69, 69, 0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    cursor: lizardCursor,
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  scheduleSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    color: '#8B4545',
    fontSize: '13px',
    lineHeight: '1.4',
  },
  scheduleMain: {
    fontWeight: 'bold',
    color: '#6B2D2D',
  },
  scheduleSub: {
    color: '#8B4545',
    fontSize: '12px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1B5E20',
    cursor: lizardCursor,
    transition: 'color 0.3s ease',
    position: 'relative' as const,
  },
  icon: {
    width: '28px',
    height: '28px',
  },
  tooltip: {
    position: 'absolute' as const,
    bottom: '-35px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#1B5E20',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    whiteSpace: 'nowrap' as const,
    opacity: 0,
    pointerEvents: 'none' as const,
    transition: 'opacity 0.2s ease',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column' as const,
    gap: '5px',
    cursor: lizardCursor,
    padding: '8px',
  },
  hamburgerLine: {
    width: '24px',
    height: '2px',
    backgroundColor: '#6B2D2D',
    transition: 'all 0.3s ease',
  },
  mobileMenu: {
    position: 'fixed' as const,
    top: '74px',
    left: 0,
    right: 0,
    backgroundColor: '#FDF8F4',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
    borderBottom: '1px solid rgba(139, 69, 69, 0.1)',
  },
  mobileLink: {
    color: '#6B2D2D',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '12px 24px',
    cursor: lizardCursor,
  },
  desktopOnly: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingHover, setBookingHover] = useState(false);
  const [signInHover, setSignInHover] = useState(false);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          {/* Logo */}
          <Link href="/" style={styles.logoSection}>
            <img 
              src="https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png" 
              alt="Mystik Cafe" 
              style={styles.logo}
            />
          </Link>

          {/* Schedule - Desktop */}
          <div style={styles.scheduleSection} className="desktop-schedule">
            <span style={styles.scheduleMain}>Open Daily 11AM – 6:30PM</span>
            <span style={styles.scheduleSub}>Last Admission 6PM · Closed Wednesdays</span>
          </div>

          {/* Right Section - Desktop */}
          <div style={styles.rightSection} className="desktop-nav">
            {/* Booking Link */}
            <Link 
              href="/book"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0D3D0D';
                setBookingHover(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1B5E20';
                setBookingHover(false);
              }}
            >
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span style={{...styles.tooltip, opacity: bookingHover ? 1 : 0}}>Booking</span>
            </Link>

            {/* Sign In Link */}
            <Link 
              href="/signin"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0D3D0D';
                setSignInHover(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1B5E20';
                setSignInHover(false);
              }}
            >
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span style={{...styles.tooltip, opacity: signInHover ? 1 : 0}}>Sign Up / Sign In</span>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button 
            className="hamburger-btn"
            style={{
              display: 'none',
              flexDirection: 'column' as const,
              gap: '5px',
              cursor: lizardCursor,
              padding: '8px',
              background: 'none',
              border: 'none',
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B2D2D" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <>
                <span style={styles.hamburgerLine} />
                <span style={styles.hamburgerLine} />
                <span style={styles.hamburgerLine} />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={styles.mobileMenu} className="mobile-menu">
          <div style={{...styles.scheduleSection, marginBottom: '10px'}}>
            <span style={styles.scheduleMain}>Open Daily 11AM – 6:30PM</span>
            <span style={styles.scheduleSub}>Last Admission 6PM · Closed Wednesdays</span>
          </div>
          <Link 
            href="/book" 
            style={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            📅 Booking
          </Link>
          <Link 
            href="/signin" 
            style={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            👤 Sign Up / Sign In
          </Link>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div style={{ height: '74px' }} />

      <style jsx global>{`
        .desktop-schedule,
        .desktop-nav {
          display: flex;
        }
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: ${lizardCursor};
          padding: 8px;
          background: none;
          border: none;
        }
        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-schedule,
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
