'use client';

import { useState } from 'react';

export default function BookPage() {
  const [activeTab, setActiveTab] = useState<'tickets' | 'policies'>('tickets');

  const tickets = [
    {
      name: 'Sneak Peak',
      tagline: 'A quick glimpse into the Mystik world',
      duration: '15 min',
      price: '$15.99',
      availability: 'Walk-ins only',
      image: 'https://assets.k12path.com/MystikCafe/Plan1.jpg',
      description: 'Step inside Mystik Café\'s Reptile Jungle for a quick 15-minute glimpse into our hidden world. Meet a few of our animal ambassadors, enjoy the ambiance, and capture a moment of wonder before you decide to stay longer.',
      includes: [
        '🌿 Access to the Reptile Jungle',
        '🦎 Meet a few animal ambassadors',
        '📸 Photo opportunities',
      ],
      extensions: [
        '+10 min for $6.99',
        '+20 min for $11.99',
        '+30 min for $15.99',
      ],
      perfectFor: 'Quick visits, curious first-timers, and those testing the waters',
      note: 'Walk-in only. Online booking is not available for this experience. Admission depends on available space at the time of visit.',
      bookable: false,
    },
    {
      name: 'Wander Pass',
      tagline: 'Self-guided general admission to the Reptile Jungle',
      duration: '30 min',
      price: '$25.99',
      availability: 'Walk-ins only',
      image: 'https://assets.k12path.com/MystikCafe/Plan2.jpg',
      description: 'Stroll through our immersive environment and observe snakes, lizards, turtles, frogs, and more in beautifully designed, naturalistic terrariums.',
      includes: [
        '🐍 Access to the Reptile Jungle — observe snakes, lizards, turtles, frogs in naturalistic terrariums',
        '🌊 Entry to the Ocean Café — relax surrounded by glowing exotic fish tanks',
        '🎭 Ambient experience only — this pass is non-interactive; no direct animal handling included',
      ],
      perfectFor: 'First-time guests, casual visits, and those seeking a peaceful, aesthetic escape',
      note: 'Walk-in only. Online booking is not available for this experience.',
      bookable: false,
    },
    {
      name: 'Sips & Senses',
      tagline: 'Includes guided reptile moments and a complimentary refreshment',
      duration: '1 hour',
      price: 'From $28.99',
      availability: 'Mon, Tue, Thu, Fri, Sat, Sun',
      image: 'https://assets.k12path.com/MystikCafe/Plan3.jpg',
      description: 'A magical 1-hour escape with a personal touch, featuring guided experiences and a signature drink.',
      includes: [
        '🧜‍♀️ Access to the Ocean Café — serene, sea-inspired space with exotic fish and ambient lighting',
        '🌿 Entry to the Reptile Jungle — explore immersive sanctuary with custom-built habitats',
        '🧑‍🌾 Guided experience led by a knowledgeable Animal Ambassador',
        '🧉 One signature drink included',
      ],
      perfectFor: 'Curious explorers, families, casual dates, and sensory seekers looking for a magical 1-hour escape',
      bookable: true,
    },
    {
      name: 'Ultimate Mystik Experience',
      tagline: 'Interactive guided reptile moments, a refreshment, and a take-home Polaroid',
      duration: '1 hour',
      price: 'From $33.99',
      availability: 'Mon, Tue, Thu, Fri, Sat, Sun',
      image: 'https://assets.k12path.com/MystikCafe/Plan4.jpg',
      description: 'The complete Mystik experience with interactive encounters, a signature drink, and a keepsake photo.',
      includes: [
        '🌿 Full access to Mystik\'s immersive environment for 60min — Ocean Café & Reptile Jungle',
        '✋ Interactive reptile encounters — safely guided by our animal experience hosts',
        '🧉 One signature drink of your choice',
        '🖼️ Take-home Polaroid print — a keepsake of you and your reptile companion',
      ],
      perfectFor: 'Special occasions, birthdays, couples, and content creators seeking a one-of-a-kind memory',
      bookable: true,
    },
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0D2818',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: 'clamp(350px, 50vh, 500px)',
        backgroundImage: 'url(https://assets.k12path.com/MystikCafe/booking%20background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(13, 40, 24, 0.65)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 clamp(16px, 5vw, 40px)',
        }}>
          <h1 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#F5E6D3',
            marginBottom: '16px',
            textShadow: '3px 3px 12px rgba(0,0,0,0.5)',
          }}>
            Book Your Experience
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#F5E6D3',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}>
            Choose your journey into the Mystik world
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav style={{
        backgroundColor: '#0D2818',
        borderBottom: '1px solid rgba(245, 230, 211, 0.2)',
        padding: '0 clamp(16px, 5vw, 40px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px 0',
        }}>
          <button
            onClick={() => setActiveTab('tickets')}
            style={{
              padding: '12px 32px',
              borderRadius: '30px',
              border: 'none',
              backgroundColor: activeTab === 'tickets' ? '#4ade80' : 'transparent',
              color: activeTab === 'tickets' ? '#0D2818' : '#F5E6D3',
              fontWeight: activeTab === 'tickets' ? '700' : '500',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            🎟️ Tickets
          </button>
          <button
            onClick={() => setActiveTab('policies')}
            style={{
              padding: '12px 32px',
              borderRadius: '30px',
              border: 'none',
              backgroundColor: activeTab === 'policies' ? '#4ade80' : 'transparent',
              color: activeTab === 'policies' ? '#0D2818' : '#F5E6D3',
              fontWeight: activeTab === 'policies' ? '700' : '500',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            📋 Rules & Policies
          </button>
        </div>
      </nav>

      {/* Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px)',
      }}>

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            {/* Intro */}
            <div style={{
              textAlign: 'center',
              marginBottom: '48px',
            }}>
              <h2 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#4ade80',
                marginBottom: '16px',
              }}>
                Choose Your Adventure
              </h2>
            </div>

            {/* Ticket Cards */}
            <div style={{
              display: 'grid',
              gap: '32px',
            }}>
              {tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="ticket-card"
                  style={{
                    backgroundColor: 'rgba(245, 230, 211, 0.03)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(245, 230, 211, 0.1)',
                  }}
                >
                  {/* Image - Desktop Only (side panel) */}
                  <div 
                    className="ticket-image-desktop"
                    style={{
                      backgroundImage: `url(${ticket.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '300px',
                    }} 
                  />
                  
                  {/* Image - Mobile Only (compact header) */}
                  <div 
                    className="ticket-image-mobile"
                    style={{
                      backgroundImage: `url(${ticket.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                      height: '180px',
                      position: 'relative',
                    }}
                  >
                    {/* Gradient overlay for text readability */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '80px',
                      background: 'linear-gradient(to top, rgba(13, 40, 24, 0.95), transparent)',
                    }} />
                    {/* Price badge on mobile image */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(13, 40, 24, 0.9)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <span style={{ color: '#4ade80', fontWeight: '700', fontSize: '1.1rem' }}>{ticket.price}</span>
                    </div>
                    {/* Duration badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      backgroundColor: '#4ade80',
                      padding: '6px 14px',
                      borderRadius: '15px',
                    }}>
                      <span style={{ color: '#0D2818', fontWeight: '700', fontSize: '0.85rem' }}>⏱️ {ticket.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '16px',
                      marginBottom: '16px',
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          color: '#4ade80',
                          fontWeight: '700',
                          marginBottom: '8px',
                        }}>
                          {ticket.name}
                        </h3>
                        <p style={{
                          color: 'rgba(245, 230, 211, 0.8)',
                          fontSize: '1rem',
                        }}>
                          {ticket.tagline}
                        </p>
                      </div>
                      <div className="price-desktop" style={{ textAlign: 'right' }}>
                        <p style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          color: '#F5E6D3',
                          fontWeight: '700',
                        }}>
                          {ticket.price}
                        </p>
                        <p style={{
                          color: '#4ade80',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                        }}>
                          {ticket.duration}
                        </p>
                      </div>
                    </div>

                    {/* Availability Badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      backgroundColor: ticket.bookable ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255, 193, 7, 0.2)',
                      borderRadius: '20px',
                      marginBottom: '16px',
                    }}>
                      <span style={{
                        color: ticket.bookable ? '#4ade80' : '#ffc107',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                      }}>
                        {ticket.availability}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{
                      color: '#F5E6D3',
                      lineHeight: '1.8',
                      fontSize: '0.95rem',
                      marginBottom: '20px',
                    }}>
                      {ticket.description}
                    </p>

                    {/* Includes */}
                    <div style={{ marginBottom: '20px' }}>
                      <p style={{
                        color: '#4ade80',
                        fontWeight: '600',
                        marginBottom: '10px',
                        fontSize: '0.95rem',
                      }}>
                        Includes:
                      </p>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}>
                        {ticket.includes.map((item, i) => (
                          <li key={i} style={{
                            color: '#F5E6D3',
                            fontSize: '0.9rem',
                            lineHeight: '1.8',
                            marginBottom: '6px',
                          }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Extensions (if any) */}
                    {ticket.extensions && (
                      <div style={{
                        backgroundColor: 'rgba(74, 222, 128, 0.08)',
                        borderRadius: '12px',
                        padding: '16px',
                        marginBottom: '20px',
                      }}>
                        <p style={{
                          color: '#4ade80',
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '0.9rem',
                        }}>
                          ⏰ Time Extensions Available:
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                          {ticket.extensions.map((ext, i) => (
                            <span key={i} style={{
                              color: '#F5E6D3',
                              fontSize: '0.85rem',
                              backgroundColor: 'rgba(245, 230, 211, 0.1)',
                              padding: '4px 12px',
                              borderRadius: '15px',
                            }}>
                              {ext}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Perfect For */}
                    <p style={{
                      color: 'rgba(245, 230, 211, 0.7)',
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                      marginBottom: '16px',
                    }}>
                      <strong style={{ color: '#F5E6D3' }}>Perfect for:</strong> {ticket.perfectFor}
                    </p>

                    {/* Note (if any) */}
                    {ticket.note && (
                      <p style={{
                        color: '#ffc107',
                        fontSize: '0.85rem',
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        marginBottom: '20px',
                      }}>
                        ⚠️ {ticket.note}
                      </p>
                    )}

                    {/* Book Button */}
                    {ticket.bookable && (
                      <a
                        href="https://www.mystikcafe.ca/book-online"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '14px 32px',
                          backgroundColor: '#4ade80',
                          color: '#0D2818',
                          fontWeight: '700',
                          fontSize: '1rem',
                          borderRadius: '30px',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(74, 222, 128, 0.3)',
                        }}
                      >
                        Book Now →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Policies Tab */}
        {activeTab === 'policies' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontFamily: '"Rubik Distressed", cursive',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#4ade80',
              marginBottom: '40px',
              textAlign: 'center',
            }}>
              Rules & Policies
            </h2>

            {/* Booking & Admission */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                🎟️ Booking & Admission
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}><strong style={{ color: '#4ade80' }}>Ocean World:</strong> Free entry with any purchase</li>
                <li style={{ marginBottom: '10px' }}><strong style={{ color: '#4ade80' }}>Reptile Jungle:</strong> Choose from 4 different experiences</li>
                <li style={{ marginBottom: '10px' }}>Ticket required per person</li>
                <li style={{ marginBottom: '10px' }}>No food/drinks allowed in Reptile Jungle to ensure animal safety</li>
                <li style={{ marginBottom: '10px' }}>Reservations are strongly recommended, walk-ins are accommodated subject to availability</li>
                <li>Confirm correct participant count when booking</li>
              </ul>
            </div>

            {/* Age & Accessibility */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                👶 Age & Accessibility
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Children under 3 enter free; standard rates apply to all other guests</li>
                <li style={{ marginBottom: '10px' }}>Guests under 12 must be accompanied by an adult (18+)</li>
                <li style={{ marginBottom: '10px' }}>We currently have stair access only; please contact us ahead of time if assistance is required for accessibility</li>
                <li style={{ marginBottom: '10px' }}>
                  <strong style={{ color: '#ff6b6b' }}>For safety reasons, Interactive reptile encounters are NOT available to:</strong>
                  <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                    <li>Children under 5 years old</li>
                    <li>Guests who are pregnant</li>
                    <li>Seniors over age of 65</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Arrival & Time Limits */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                ⏰ Arrival & Time Limits
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Arrivals over 15 minutes late without notice may forfeit their spot to waiting guests</li>
                <li style={{ marginBottom: '10px' }}>Please arrive 10 minutes early for our info session so you know what to expect. Experiences start and end exactly on time</li>
                <li style={{ marginBottom: '10px' }}>Session durations are strictly enforced; no additional time is granted for late arrivals</li>
                <li>Guests may extend their stay in Ocean World post-session if café space allows</li>
              </ul>
            </div>

            {/* Cancellation & Refund Policy */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                💸 Cancellation & Refund Policy
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Refunds are available if cancellations are communicated via email at least 24 hours prior to your scheduled session. A 5% service fee will be deducted from all refunds</li>
                <li style={{ marginBottom: '10px' }}>Alternatively, guests may choose to reschedule or receive full store credit at no additional cost or fees</li>
                <li style={{ marginBottom: '10px' }}>No refunds for cancellations made within 24 hours, no-shows, or late arrivals</li>
                <li style={{ marginBottom: '10px' }}>Rescheduling permitted once with 24+ hours notice; additional changes are treated as cancellations without refund</li>
                <li>All payments made in-store for walk-in sessions are strictly non-refundable</li>
              </ul>
            </div>

            {/* Waitlist Policy */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                📋 Waitlist Policy
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Join waitlist if slots are full; you'll be contacted in order if spots open</li>
                <li>Waitlist does not guarantee entry until confirmed</li>
              </ul>
            </div>

            {/* Guest Conduct & Animal Safety */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '24px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                🦎 Guest Conduct & Animal Safety
              </h3>
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Interactive reptile encounters allowed only during special staff-supervised sessions</li>
                <li style={{ marginBottom: '10px' }}>Respectful behavior toward animals, staff, and visitors is required</li>
                <li style={{ marginBottom: '10px' }}>Disruptive guests may be removed without refund</li>
                <li>Check out our <a href="/safety" style={{ color: '#4ade80', textDecoration: 'underline' }}>rules page</a> to help you have the best possible experience at Mystik</li>
              </ul>
            </div>

            {/* Agreement Notice */}
            <div style={{
              backgroundColor: 'rgba(74, 222, 128, 0.1)',
              borderRadius: '16px',
              padding: '20px 24px',
              marginBottom: '32px',
              borderLeft: '4px solid #4ade80',
            }}>
              <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                <strong style={{ color: '#4ade80' }}>Booking confirms your agreement to these terms.</strong><br />
                For the complete policy details, please visit the <a href="/policies" style={{ color: '#4ade80', textDecoration: 'underline' }}>Policy page</a>.
              </p>
            </div>

            {/* Contact Information */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.05)',
              borderRadius: '24px',
              padding: 'clamp(30px, 5vw, 50px)',
              textAlign: 'center',
              border: '2px solid #4ade80',
            }}>
              <h3 style={{
                fontFamily: '"Rubik Distressed", cursive',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#4ade80',
                marginBottom: '24px',
              }}>
                Contact Us
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                <div>
                  <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.85rem', marginBottom: '4px' }}>Address</p>
                  <p style={{ color: '#F5E6D3', fontWeight: '600' }}>56C Kensington Avenue<br />Toronto, ON, Canada</p>
                </div>
                <div>
                  <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.85rem', marginBottom: '4px' }}>Phone</p>
                  <p style={{ color: '#F5E6D3', fontWeight: '600' }}>647-560-6524</p>
                </div>
                <div>
                  <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.85rem', marginBottom: '4px' }}>Email</p>
                  <a href="mailto:bookings@mystikcafe.ca" style={{ color: '#4ade80', fontWeight: '600', textDecoration: 'none' }}>bookings@mystikcafe.ca</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile-Responsive Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ticket-card {
          display: grid;
          grid-template-columns: clamp(200px, 30%, 350px) 1fr;
        }
        .ticket-image-desktop {
          display: block;
        }
        .ticket-image-mobile {
          display: none;
        }
        .price-desktop {
          display: block;
        }
        @media (max-width: 768px) {
          .ticket-card {
            grid-template-columns: 1fr !important;
          }
          .ticket-image-desktop {
            display: none !important;
          }
          .ticket-image-mobile {
            display: block !important;
          }
          .price-desktop {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
