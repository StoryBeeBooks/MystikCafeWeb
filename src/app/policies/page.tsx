'use client';

import { useState } from 'react';

export default function PoliciesPage() {
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    { id: 'terms', label: 'Terms & Waiver' },
    { id: 'webterms', label: 'Web Terms of Use' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'disclaimer', label: 'Disclaimer' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'cookies', label: 'Cookies Policy' },
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0D2818',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, #0D2818 0%, #1B5E20 100%)',
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: '"Rubik Distressed", cursive',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#F5E6D3',
          marginBottom: '16px',
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        }}>
          Policies & Terms
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(245, 230, 211, 0.8)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Everything you need to know about visiting Mystik Café
        </p>
      </section>

      {/* Navigation Tabs */}
      <nav style={{
        backgroundColor: '#0D2818',
        borderBottom: '1px solid rgba(245, 230, 211, 0.2)',
        padding: '0 clamp(16px, 5vw, 40px)',
        position: 'sticky',
        top: '0',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          padding: '16px 0',
        }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: activeSection === section.id ? '#4ade80' : 'transparent',
                color: activeSection === section.id ? '#0D2818' : '#F5E6D3',
                fontWeight: activeSection === section.id ? '700' : '500',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px)',
      }}>

        {/* Section 1: Terms, Policies & Waiver Agreements */}
        {activeSection === 'terms' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            {/* Main Title Card */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                Mystik Café – Terms, Policies & Waiver Agreements
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                textAlign: 'center',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.8',
                textAlign: 'center',
                marginBottom: '16px',
              }}>
                Welcome to Mystik Café, an immersive café and animal experience located in Kensington Market.
              </p>
              <p style={{
                color: '#4ade80',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                fontWeight: '600',
                textAlign: 'center',
              }}>
                56C Kensington Ave. Toronto, ON M5T 2K1
              </p>
            </div>

            {/* Agreement Notice */}
            <div style={{
              backgroundColor: 'rgba(74, 222, 128, 0.1)',
              borderRadius: '16px',
              padding: 'clamp(20px, 4vw, 30px)',
              marginBottom: '32px',
              borderLeft: '4px solid #4ade80',
            }}>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.8',
              }}>
                By visiting our café, making a booking, purchasing our products (online or in-store), or interacting with our website or animals, you agree to abide by the following Terms and Conditions:
              </p>
            </div>

            {/* Policy & Waiver Section */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                color: '#4ade80',
                marginBottom: '20px',
                fontWeight: '700',
              }}>
                Mystik Café Policy and Waiver
              </h3>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                Welcome to Mystik Café! We are dedicated to providing a unique, immersive, and safe interactive experience with our live reptiles, amphibians, and aquatic animals. To ensure the well-being of our animals, our valued guests, and our dedicated staff, please carefully review and adhere to the following policies and the Waiver and Release of Liability and Indemnification Agreement. Your entry into and participation in any Mystik Café experience constitutes your agreement to be legally bound by these terms.
              </p>
            </div>

            {/* General Visit Policies */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                color: '#F5E6D3',
                marginBottom: '8px',
                fontWeight: '700',
              }}>
                I. Mystik Café General Visit Policies
              </h3>
              
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                A. Booking & Entry
              </h4>
              
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                Online reservations are strongly encouraged and are given priority. While walk-in guests are welcome, please understand that we cannot guarantee a table or a spot in our animal interaction areas, especially during peak hours, due to limited capacity.
              </p>

              <div style={{
                backgroundColor: 'rgba(74, 222, 128, 0.08)',
                borderRadius: '12px',
                padding: '20px',
                marginTop: '16px',
              }}>
                <p style={{
                  color: '#F5E6D3',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  lineHeight: '1.8',
                }}>
                  <span style={{ color: '#4ade80', fontWeight: '600' }}>🎟️ Ticket Policy:</span> A ticket must be purchased for each person wishing to access the Reptile Jungle area (children aged 3 and under enter free).
                </p>
              </div>
            </div>

            {/* More Sections Coming Soon */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              textAlign: 'center',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
              }}>
                Additional policy sections (Cancellation, Refunds, Animal Interaction Guidelines, etc.) continue below...
              </p>
            </div>
          </div>
        )}

        {/* Section 2: Web Terms of Use */}
        {activeSection === 'webterms' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Web Terms of Use
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                By accessing and using the Mystik Café website (mystikcafe.ca), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
              </p>
              <div style={{
                borderTop: '1px solid rgba(245, 230, 211, 0.1)',
                paddingTop: '24px',
                marginTop: '24px',
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Use of Website</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  This website is provided for informational purposes and to facilitate bookings. You agree to use this website only for lawful purposes.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Intellectual Property</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  All content on this website, including text, graphics, logos, and images, is the property of Mystik Café and protected by copyright laws.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>User Accounts</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8' }}>
                  If you create an account, you are responsible for maintaining the confidentiality of your account information and for all activities under your account.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Web Privacy Policy */}
        {activeSection === 'privacy' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Web Privacy Policy
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                At Mystik Café, we are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
              <div style={{
                borderTop: '1px solid rgba(245, 230, 211, 0.1)',
                paddingTop: '24px',
                marginTop: '24px',
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Information We Collect</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  We collect information you provide directly (name, email, phone number for bookings) and automatically (IP address, browser type, pages visited).
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>How We Use Your Information</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  We use your information to process bookings, communicate with you, improve our services, and send promotional materials (with your consent).
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Data Protection</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Contact Us</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8' }}>
                  For questions about our privacy practices, contact us at <a href="mailto:info@mystikcafe.ca" style={{ color: '#4ade80' }}>info@mystikcafe.ca</a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Disclaimer */}
        {activeSection === 'disclaimer' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Web Disclaimer
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <div style={{
                borderTop: '1px solid rgba(245, 230, 211, 0.1)',
                paddingTop: '24px',
                marginTop: '24px',
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>General Disclaimer</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>External Links</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  Our website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Limitation of Liability</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8' }}>
                  Mystik Café shall not be liable for any damages arising from the use of this website or the information contained herein.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 5: Accessibility */}
        {activeSection === 'accessibility' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Accessibility
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                Mystik Café is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
              </p>
              <div style={{
                borderTop: '1px solid rgba(245, 230, 211, 0.1)',
                paddingTop: '24px',
                marginTop: '24px',
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Our Commitment</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  We strive to ensure our website meets WCAG 2.1 Level AA standards. Our efforts include keyboard navigation, screen reader compatibility, and appropriate color contrast.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Physical Accessibility</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  Our Kensington Market location is wheelchair accessible. Service animals are welcome. Please contact us in advance if you require any accommodations.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Feedback</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8' }}>
                  We welcome your feedback on the accessibility of our website. Please contact us at <a href="mailto:info@mystikcafe.ca" style={{ color: '#4ade80' }}>info@mystikcafe.ca</a> if you encounter any barriers.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Cookies Policy */}
        {activeSection === 'cookies' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Cookies Policy
              </h2>
              <p style={{
                color: 'rgba(245, 230, 211, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '24px',
              }}>
                Last updated: Nov. 2, 2025
              </p>
              <p style={{
                color: '#F5E6D3',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.9',
                marginBottom: '20px',
              }}>
                This Cookies Policy explains how Mystik Café uses cookies and similar technologies when you visit our website.
              </p>
              <div style={{
                borderTop: '1px solid rgba(245, 230, 211, 0.1)',
                paddingTop: '24px',
                marginTop: '24px',
              }}>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>What Are Cookies?</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>How We Use Cookies</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  We use cookies for essential website functionality, analytics (to understand how visitors use our site), and to remember your preferences.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Managing Cookies</h4>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', marginBottom: '16px' }}>
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
                <h4 style={{ color: '#4ade80', marginBottom: '12px', fontWeight: '600' }}>Types of Cookies We Use</h4>
                <ul style={{ color: '#F5E6D3', lineHeight: '1.8', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}><strong style={{ color: '#4ade80' }}>Essential:</strong> Required for the website to function properly</li>
                  <li style={{ marginBottom: '8px' }}><strong style={{ color: '#4ade80' }}>Analytics:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong style={{ color: '#4ade80' }}>Preference:</strong> Remember your settings and choices</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
