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

              {/* Ticket Tiers */}
              <div style={{ marginTop: '32px' }}>
                <p style={{
                  color: '#F5E6D3',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  lineHeight: '1.9',
                  marginBottom: '24px',
                }}>
                  Mystik Café offers four tiers of ticketed experiences for Reptile Jungle:
                </p>

                {/* Tier 1 */}
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.05)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  borderLeft: '3px solid #4ade80',
                }}>
                  <h5 style={{ color: '#4ade80', fontWeight: '700', marginBottom: '8px', fontSize: '1.1rem' }}>
                    Tier 1 – Sneak Peak (15 minutes):
                  </h5>
                  <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '8px' }}>
                    A quick glimpse into the Mystik world. Meet a few of our animal ambassadors, enjoy the immersive ambiance, and capture a moment of wonder before deciding to stay longer.
                  </p>
                  <p style={{ color: 'rgba(245, 230, 211, 0.7)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                    (Guests may extend their visit on-site; see "Time Extensions" below.)
                  </p>
                </div>

                {/* Tier 2 */}
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.05)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  borderLeft: '3px solid #4ade80',
                }}>
                  <h5 style={{ color: '#4ade80', fontWeight: '700', marginBottom: '8px', fontSize: '1.1rem' }}>
                    Tier 2 – Wander Pass (30 minutes):
                  </h5>
                  <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    General admission to the Reptile Jungle. Explore terrariums and meet our reptile residents.
                  </p>
                </div>

                {/* Tier 3 */}
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.05)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  borderLeft: '3px solid #4ade80',
                }}>
                  <h5 style={{ color: '#4ade80', fontWeight: '700', marginBottom: '8px', fontSize: '1.1rem' }}>
                    Tier 3 – Sips & Senses (60 minutes):
                  </h5>
                  <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    Includes guided reptile encounters and one signature drink.
                  </p>
                </div>

                {/* Tier 4 */}
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.05)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                  borderLeft: '3px solid #4ade80',
                }}>
                  <h5 style={{ color: '#4ade80', fontWeight: '700', marginBottom: '8px', fontSize: '1.1rem' }}>
                    Tier 4 – Ultimate Mystik Experience (60 minutes):
                  </h5>
                  <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    Includes guided interactive encounters, a signature drink, and a take-home Polaroid photo.
                  </p>
                </div>

                {/* Time Extensions */}
                <div style={{
                  backgroundColor: 'rgba(245, 230, 211, 0.05)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginTop: '24px',
                }}>
                  <h5 style={{ color: '#4ade80', fontWeight: '700', marginBottom: '12px', fontSize: '1.1rem' }}>
                    Time Extensions:
                  </h5>
                  <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '12px' }}>
                    Guests may extend their booked experience on-site, subject to availability and capacity.
                  </p>
                  <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '12px' }}>
                    <li style={{ marginBottom: '6px' }}>+10 minutes — $6.99</li>
                    <li style={{ marginBottom: '6px' }}>+20 minutes — $11.99</li>
                    <li>+30 minutes — $15.99</li>
                  </ul>
                  <p style={{ color: 'rgba(245, 230, 211, 0.8)', lineHeight: '1.8', fontSize: '0.9rem' }}>
                    Extensions may only be purchased during your visit and must be confirmed by staff before the next session begins. Extended time applies to the same ticket tier and access level.
                  </p>
                </div>
              </div>
            </div>

            {/* B. Capacity & Confirmation */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                B. Capacity & Confirmation
              </h4>
              
              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Strict Capacity Limit:</strong> Our animal interaction areas (Reptile Jungle) are limited to a maximum of 16 people at a time to ensure safety and comfort for both guests and animals.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Booking Confirmation:</strong> An automated confirmation email is sent immediately upon successful booking. It is your responsibility to check your confirmation email for booking details; this email will be the sole reference for your reservation. If you do not receive a confirmation, please check your SPAM or JUNK folder, as all confirmations are sent automatically to the email you provided.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Customer Responsibility for Details:</strong> The customer is fully responsible for verifying their reservation details. We are not liable for any errors in reservation times if they were incorrectly entered by the customer.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <strong style={{ color: '#4ade80' }}>Walk-in Access:</strong> For walk-in guests, any available seating and animal interaction spots are offered on a first-come, first-served basis. Reservations are the only way to secure your spot.
              </p>
            </div>

            {/* C. Time Limit & Arrival */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                C. Time Limit & Arrival
              </h4>
              
              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Session Duration:</strong> Each reservation grants access to the designated animal interaction area, beginning precisely on the hour.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Punctuality:</strong> Please arrive at least 10 minutes before your scheduled session. No extra time will be provided for late arrivals; your session will conclude at its scheduled end time regardless of your arrival time.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Food & Drink Policy:</strong> For the safety and hygiene of our animals, food and drinks are strictly not permitted within any animal interaction area. We kindly ask you to plan your visit accordingly, enjoying your refreshments in the café area before or after your reserved time in Reptile Jungle.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem' }}>
                You are welcome to spend additional time in the general café area if space is available before or after your booked animal experience.
              </p>
            </div>

            {/* D. Children & Guardians */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                D. Children & Guardians
              </h4>
              
              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                Children of any age are permitted on the Premises; however, guests aged 12 and under must be accompanied by at least one parent or legal guardian aged 18 or older to enter the animal interaction area.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Guardian's Sole Responsibility:</strong> The accompanying Guardian(s) are solely responsible for supervising the child or children under their care at all times. Guardian(s) must ensure that children comply with all Mystik Café policies and rules, including those specifically for animal interaction, as stated herein and by staff.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                <strong style={{ color: '#4ade80' }}>Health & Safety Confirmation:</strong> Guardian(s) must confirm that the child or children under their supervision have no known allergies, phobias, or medical/sensory conditions (e.g., asthma, epilepsy, extreme sensitivities to dim lighting, fog effects, or soundscapes) that could adversely affect their safe participation or endanger themselves, the animals, or other guests.
              </p>

              <div style={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: '3px solid #ff6b6b',
              }}>
                <p style={{ color: '#F5E6D3', fontWeight: '600', marginBottom: '12px' }}>
                  For safety reasons, interactive reptile experiences are NOT available to:
                </p>
                <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '12px' }}>
                  <li style={{ marginBottom: '6px' }}>Children under 5 years old</li>
                  <li style={{ marginBottom: '6px' }}>Guests who are pregnant</li>
                  <li>Seniors over the age of 65</li>
                </ul>
                <p style={{ color: 'rgba(245, 230, 211, 0.8)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  These guidelines help protect both you and our animals. Observation and photo opportunities are still fully welcome!
                </p>
              </div>
            </div>

            {/* E. Reservation Modifications, Refunds & Rescheduling */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                E. Reservation Modifications, Refunds & Rescheduling
              </h4>
              
              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong style={{ color: '#4ade80' }}>Reservation Modifications:</strong> Any changes to your confirmed appointment must be made via the Mystik Café website at least 24 hours in advance of your scheduled time. No changes can be accommodated within 24 hours of your reservation.
              </p>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#4ade80', fontWeight: '700', marginBottom: '12px', fontSize: '1rem' }}>
                  Refund Policy:
                </p>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '12px' }}>
                  <strong style={{ color: '#4ade80' }}>Full Refund:</strong> Refunds are available if cancellations are communicated via email at least 24 hours prior to your scheduled session. A 5% service fee will be deducted from all refunds. To initiate a refund, please email us at info@mystikcafe.ca. Canceling a reservation directly on the website does NOT automatically trigger a refund.
                </p>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem' }}>
                  <strong style={{ color: '#4ade80' }}>No Refund:</strong> No refund will be issued for cancellations made within 24 hours of the scheduled appointment time or for any no-shows.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#4ade80', fontWeight: '700', marginBottom: '12px', fontSize: '1rem' }}>
                  Rescheduling Policy:
                </p>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '12px' }}>
                  <strong style={{ color: '#4ade80' }}>Advance Notice:</strong> We require at least 24 hours' notice to reschedule your appointment. Rescheduling requests made within 24 hours of your reservation time cannot be accommodated.
                </p>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                  <strong style={{ color: '#4ade80' }}>Rescheduling Limit:</strong> You may reschedule your appointment one (1) time per original reservation. Any subsequent rescheduling attempts for the same reservation will be treated as a cancellation without a refund.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(74, 222, 128, 0.08)',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  <strong style={{ color: '#4ade80' }}>How to Request a Refund or Reschedule:</strong> To request a refund or reschedule, please contact our customer support team via email at <a href="mailto:info@mystikcafe.ca" style={{ color: '#4ade80', textDecoration: 'underline' }}>info@mystikcafe.ca</a>. Include your full name, original appointment details (date, time, booking ID), and a clear reason for your request. We will process your request as quickly as possible.
                </p>
              </div>
            </div>

            {/* II. Mystik Café Conduct & Animal Interaction Rules */}
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
                marginBottom: '16px',
                fontWeight: '700',
              }}>
                II. Mystik Café Conduct & Animal Interaction Rules
              </h3>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                Your strict adherence to these rules and all staff instructions is essential for maintaining a safe, peaceful, and respectful environment for all guests, our staff, and the welfare of our animals. Failure to comply will result in immediate removal from the premises without refund.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                A. General Conduct:
              </h4>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}>Behavior that is loud, disruptive, or causes distress to other guests or the overall café ambiance is strictly prohibited.</li>
                <li style={{ marginBottom: '12px' }}>Disregarding rules or instructions provided by Mystik Café staff will not be tolerated.</li>
                <li style={{ marginBottom: '12px' }}>Damage to Mystik Café property, displays, furnishings, or animal enclosures is strictly forbidden.</li>
                <li>Any conduct that creates an unsafe situation or environment for yourself, other guests, staff, or animals will lead to immediate removal.</li>
              </ul>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                B. Animal Interaction Rules:
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                All animal interactions may only occur under the direct and explicit instruction and supervision of Mystik Café staff.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px', fontStyle: 'italic' }}>
                Reptiles, amphibians, and aquatic animals are highly sensitive creatures. Improper handling, unauthorized touching, or causing stress can result in serious injury, illness, or even death to the animal, and potential harm to guests.
              </p>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}>Absolutely NO tapping, grabbing, poking, cornering, chasing, or forceful interaction with any animals.</li>
                <li style={{ marginBottom: '12px' }}>Never bring outside food, treats, or lures into Reptile Jungle or other animal interaction areas. This is critical for the animals' health and safety.</li>
                <li style={{ marginBottom: '12px' }}>Do NOT place hands, fingers, or any objects into animal enclosures or aquatic habitats unless specifically directed and supervised by a Mystik Café staff member.</li>
                <li style={{ marginBottom: '12px' }}>Loud behavior, running, yelling, or any other disruptive conduct is strictly prohibited in or near animal interaction areas.</li>
                <li style={{ marginBottom: '12px' }}>Touching or playing with the animals' food or water bowls is prohibited.</li>
                <li>Violators of these animal interaction rules will be immediately removed from the experience and the premises without refund.</li>
              </ul>

              <div style={{
                backgroundColor: 'rgba(74, 222, 128, 0.08)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: '3px solid #4ade80',
              }}>
                <p style={{ color: '#F5E6D3', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  Please help us maintain a peaceful, respectful, and safe space for animals and visitors alike. For urgent inquiries or assistance during your visit, please speak directly with a Mystik Café staff member. For non-urgent inquiries, the quickest way to reach us is by emailing <a href="mailto:info@mystikcafe.ca" style={{ color: '#4ade80', textDecoration: 'underline' }}>info@mystikcafe.ca</a>.
                </p>
              </div>
            </div>

            {/* Gift Card Terms */}
            <div style={{
              backgroundColor: 'rgba(245, 230, 211, 0.03)',
              borderRadius: '20px',
              padding: 'clamp(25px, 5vw, 40px)',
              marginBottom: '32px',
              border: '1px solid rgba(245, 230, 211, 0.08)',
            }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                Gift Card Terms:
              </h4>
              
              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '10px' }}>Valid for 1 year from purchase date</li>
                <li style={{ marginBottom: '10px' }}>Gift cards are redeemable online</li>
                <li style={{ marginBottom: '10px' }}>Gift cards cannot be exchanged for cash</li>
                <li style={{ marginBottom: '10px' }}>Gift cards are not refundable</li>
                <li>Gift cards are not replaceable if lost or stolen</li>
              </ul>
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
