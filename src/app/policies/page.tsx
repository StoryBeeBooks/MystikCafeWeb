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
      fontFamily: '"Questrial", sans-serif',
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

            {/* III. Adult Waiver and Release of Liability */}
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
                III. Adult Waiver and Release of Liability and Indemnification Agreement
              </h3>

              <div style={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
                borderLeft: '3px solid #ff6b6b',
              }}>
                <p style={{ color: '#F5E6D3', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                  PLEASE READ CAREFULLY. THIS IS A LEGALLY BINDING DOCUMENT. BY ENTERING MYSTIK CAFÉ OR PARTICIPATING IN ITS ACTIVITIES, YOU ARE WAIVING CERTAIN LEGAL RIGHTS.
                </p>
              </div>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I hereby certify that I am over eighteen (18) years of age, of sound mind, and legally competent to execute this Waiver and Release of Liability and Indemnification Agreement (hereinafter "Release"). I acknowledge and agree to the following terms as a condition of my entry into and participation in any activities at Mystik Café. I further certify that I am not pregnant at the time of participation, I am under the age of 65, and I understand that interactive reptile experiences are not available to individuals who are pregnant and over the age of 65 for safety reasons.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                Mystik Café is an immersive experience offering interactive encounters with live reptiles, amphibians, and aquatic animals (collectively, the "Animals") under staff supervision. For safety reasons, interactive reptile experiences are not available to guests who are pregnant. Observation and non-contact participation remain welcome. My participation is voluntary, and Mystik Café has agreed to permit me to participate in such activities only upon the condition that I execute this Release and agree to be bound by its terms.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                A. Assumption of Inherent Risks
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                I am fully aware of and understand that interacting with, observing, or being in the proximity of live Animals involves inherent and unavoidable risks, including but not limited to:
              </p>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Physical harm:</strong> Bites, scratches, allergic reactions, illness, disease transmission, and other forms of bodily injury (including serious injury, disability, or death).</li>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Emotional distress:</strong> Reactions such as fright, anxiety, or phobias, potentially exacerbated by an immersive environment (e.g., fog effects, dim lighting, soundscapes).</li>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Property damage:</strong> To my personal property or the property of others.</li>
              </ul>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                I acknowledge that Animals are highly sensitive to stress, and improper behavior by guests or unforeseen animal reactions can result in animal harm or death, or harm to persons. I understand that while Mystik Café staff will be present to monitor the experience and offer guidance, full-time, moment-to-moment, individualized supervision cannot be guaranteed at all times for every participant. I freely and voluntarily execute this Release with such knowledge, accepting and assuming full and sole responsibility for all risks of death, personal injury, illness, emotional distress, and/or property loss arising from or in any way connected with my presence at Mystik Café and my participation in the activities provided.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                B. Acknowledgment of Medical & Sensory Considerations
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I confirm that I have no medical, physical, mental, or emotional condition (including but not limited to known allergies to animals, asthma, sensory sensitivities, epilepsy, or phobias) that would adversely affect my ability to safely participate, or that would endanger myself, the Animals, or other guests. I understand that the immersive environment, including potential fog effects, dim lighting, and soundscapes, may impact certain medical or sensory conditions, and I assume all risks associated therewith.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                C. No Insurance Coverage
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I acknowledge that Mystik Café does not provide any medical, liability, or accident insurance coverage for guests, and that my participation is at my own risk. I further acknowledge that participants in such activities and other persons involved in these activities may not be covered under any insurance policy maintained by Mystik Café or its affiliates. I hereby expressly waive any right to make a claim against any such insurance policy maintained by Mystik Café or its affiliates for any injury, loss, or damage arising from my participation.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                D. Voluntary Participation & Release of Liability
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I agree to abide by all rules and regulations set forth by Mystik Café, including those communicated by staff, posted signage, or outlined in this Policy and Waiver. I agree to follow all rules and to undertake all activities in a responsible manner. If I am unwilling or unable to follow any rules, Mystik Café reserves the right to terminate my continuation of such activities and remove me from the premises, and I will not be entitled to any refund of my fees. I hereby release and forever discharge, and agree to hold harmless and indemnify Mystik Café, its owners, employees, volunteers, affiliates, agents, contractors, rescue partners, and representatives, and their respective sureties, insurers, successors, assigns, and legal representatives (collectively, the "Released Parties"), from any and all liability, claim, cause of action, demand, and damages for injury, illness, loss, emotional distress, property damage, or death arising from or related to my participation, whether such injury, death, or property damage is caused by the negligence or intentional act or omission on the part of (i) any other customer of Mystik Café, (ii) any employee, agent, owner, rescue partner, or independent contractor of Mystik Café, or (iii) any other person at Mystik Café, excluding only gross negligence or willful misconduct of the Released Parties.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                E. Indemnification and Legal Defense
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                Furthermore, I agree to defend with counsel chosen by the indemnified party, indemnify, and hold harmless the Released Parties from any and all claims, demands, liabilities, damages, losses, and expenses (including, without limitation, all legal fees and costs on a solicitor-client basis) arising from:
              </p>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}>My actions or omissions, including any failure to comply with Mystik Café policies or staff directions;</li>
                <li style={{ marginBottom: '12px' }}>Any injury or damage caused by me to other guests, Animals, or property within Mystik Café; or</li>
                <li style={{ marginBottom: '12px' }}>Any claim brought by a third party arising from my conduct or presence at Mystik Café.</li>
              </ul>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I agree to provide said defense and indemnity regardless of the merit of the claim. I further agree to pay any and all legal fees and costs of the Released Parties if I bring any action, claim, or demand against any of the Released Parties for any reason for which this Release applies.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                F. Termination of Access
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I understand that any failure to follow Mystik Café rules, staff direction, or safe conduct protocols will result in my immediate removal from the premises without refund.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                G. Binding Effect and Governing Law
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I agree to and hereby bind myself, my heirs, executors, administrators, assigns, and all other legal representatives by executing this Release. If any portion of this Release is found or declared to be invalid or unenforceable, such invalidity shall not affect the remainder of this Release not found to be invalid, and the remainder of this Release shall remain in full force and effect. This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada (without regard to its conflict of laws principles). Any and all disputes arising from or relating to this Release or my participation at Mystik Café shall be subject to litigation exclusively within the courts of Toronto, Ontario, Canada.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                H. Final Consent
              </h4>

              <div style={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: '3px solid #ff6b6b',
              }}>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', fontWeight: '600' }}>
                  BY EXECUTING THIS RELEASE (WHICH MAY INCLUDE ACCEPTANCE VIA ELECTRONIC SIGNATURE, CHECKBOX, OR PHYSICAL SIGNATURE), I ACKNOWLEDGE THAT I HAVE READ THIS RELEASE IN ITS ENTIRETY, FULLY UNDERSTAND THE CONTENTS HEREOF, HAVE BEEN ADVISED AND HAD THE OPPORTUNITY TO SEEK INDEPENDENT LEGAL COUNSEL OF MY CHOICE, AND CERTIFY THAT I HAVE FREELY AND VOLUNTARILY EXECUTED THIS RELEASE. I FURTHER ACKNOWLEDGE THAT, BUT FOR THE EXECUTION OF THIS RELEASE AND MY AGREEMENT TO BE BOUND BY THE TERMS HEREOF, MYSTIK CAFÉ WOULD NOT AUTHORIZE ME TO ENTER OR PARTICIPATE IN ANY ACTIVITIES AT MYSTIK CAFÉ.
                </p>
              </div>
            </div>

            {/* IV. Minor Waiver and Release of Liability */}
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
                IV. Minor Waiver and Release of Liability and Indemnification Agreement
              </h3>

              <div style={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
                borderLeft: '3px solid #ff6b6b',
              }}>
                <p style={{ color: '#F5E6D3', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                  PLEASE READ CAREFULLY. THIS IS A LEGALLY BINDING DOCUMENT. BY EXECUTING THIS ON BEHALF OF A MINOR, YOU ARE WAIVING CERTAIN LEGAL RIGHTS ON BEHALF OF THE MINOR AND YOURSELF.
                </p>
              </div>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I am the parent or legal guardian of the minor named below and I hereby certify that I am legally competent to execute this Waiver and Release of Liability and Indemnification Agreement (hereinafter "Release") on behalf of the minor. I acknowledge and agree to the following terms as a condition of the minor's entry into and participation in any activities at Mystik Café.
              </p>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                Mystik Café offers interactive encounters involving live reptiles, amphibians, and aquatic animals (collectively, the "Animals"). My child will be participating in activities that carry inherent risks. I acknowledge that the minor named below is at least five (5) years of age. For safety reasons, interactive reptile experiences are not permitted for children under the age of 5. Observation and guided non-contact experiences may still be available. Mystik Café has agreed to permit my child to participate in these experiences only upon the condition that I execute this Release on their behalf and agree to be bound by its terms.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                A. Assumption of Inherent Risks for the Minor
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                I am fully aware of and understand that the minor interacting with, observing, or being in the proximity of live Animals involves inherent and unavoidable risks, including but not limited to:
              </p>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Physical harm:</strong> Bites, scratches, allergic reactions, illness, disease transmission, and other forms of bodily injury (including serious injury, disability, or death).</li>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Emotional distress:</strong> Reactions such as fright, anxiety, or phobias, potentially exacerbated by an immersive environment (e.g., fog effects, dim lighting, soundscapes).</li>
                <li style={{ marginBottom: '12px' }}><strong style={{ color: '#4ade80' }}>Property damage:</strong> To the minor's personal property or the property of others.</li>
              </ul>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                I acknowledge, on behalf of the minor, that Animals are highly sensitive to stress, and improper behavior by guests or unforeseen animal reactions can result in animal harm or death, or harm to persons. I understand that while Mystik Café staff will be present to monitor the experience and offer guidance, full-time, moment-to-moment, individualized supervision cannot be guaranteed at all times for every participant. On behalf of the minor, I freely and voluntarily execute this Release with such knowledge, accepting and assuming full and sole responsibility for all risks of death, personal injury, illness, emotional distress, and/or property loss arising from or in any way connected with the minor's presence at Mystik Café and their participation in the activities provided.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                B. Acknowledgment of Medical & Sensory Considerations for the Minor
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I confirm that the minor has no medical, physical, mental, or emotional issue(s), including but not limited to known allergies to animals, asthma, sensory sensitivities, epilepsy, or phobias, that would adversely affect their ability to safely participate, or that would endanger themselves, the Animals, or other guests. I understand that the immersive environment, including potential fog effects, dim lighting, and soundscapes, may impact certain medical or sensory conditions, and I assume all risks associated therewith on behalf of the minor.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                C. No Insurance Coverage
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I understand that the minor is not covered under any medical, accident, or liability insurance maintained by Mystik Café, and I, on behalf of the minor, acknowledge that participants in such activities and other persons involved in these activities may not be covered under any insurance policy maintained by Mystik Café or its affiliates. I hereby expressly waive any right to make a claim under any such insurance policy maintained by Mystik Café or its affiliates for any injury, loss, or damage arising from the minor's participation.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                D. Voluntary Participation & Release of Liability (on Behalf of Minor)
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I, on behalf of the minor, agree to abide by all rules and regulations set forth by Mystik Café, including those communicated by staff, posted signage, or outlined in this Policy and Waiver. I, on behalf of the minor, agree to follow all rules and to undertake all activities in a responsible manner. If I or the minor am/are unwilling or unable to follow any rules, Mystik Café reserves the right to terminate my or the minor's continuation of such activities and remove us from the premises, and we will not be entitled to any refund of our fees. I, on behalf of the minor, hereby release and forever discharge, and agree to hold harmless and indemnify Mystik Café and all Released Parties (as defined in the Adult Waiver) from any and all liability, claim, cause of action, demand, and damages for injury, illness, loss, emotional distress, property damage, or death arising from or related to the minor's participation, whether such injury, death, or property damage is caused by the negligence or intentional act or omission on the part of (i) any other customer of Mystik Café, (ii) any employee, agent, owner, rescue partner, or independent contractor of Mystik Café, or (iii) any other person at Mystik Café, excluding only gross negligence or willful misconduct of the Released Parties.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                E. Indemnification and Legal Defense (on Behalf of Minor)
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '16px' }}>
                Furthermore, I, on behalf of the minor, agree to defend with counsel chosen by the indemnified party, indemnify, and hold harmless Mystik Café and the Released Parties from any and all claims, demands, liabilities, damages, losses, and expenses (including, without limitation, all legal fees and costs on a solicitor-client basis) arising from:
              </p>

              <ul style={{ color: '#F5E6D3', paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.9' }}>
                <li style={{ marginBottom: '12px' }}>The minor's actions or omissions, including any failure to comply with Mystik Café policies or staff directions;</li>
                <li style={{ marginBottom: '12px' }}>Any injury or damage caused by the minor to other guests, Animals, or property within Mystik Café; or</li>
                <li style={{ marginBottom: '12px' }}>Any claim brought by a third party arising from the minor's conduct or presence at Mystik Café.</li>
              </ul>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I agree to provide said defense and indemnity regardless of the merit of the claim. I further agree to pay any and all legal fees and costs of the Released Parties if I or the minor bring any action, claim, or demand against any of the Released Parties for any reason for which this Release applies.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                F. Termination of Access
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I understand that failure to follow Mystik Café's rules, instructions, or animal safety policies may result in immediate removal of the minor and myself from the premises without refund.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                G. Binding Effect and Governing Law
              </h4>

              <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '24px' }}>
                I, on behalf of the minor, agree to and hereby bind our respective heirs, executors, administrators, assigns, and all other legal representatives by executing this Release. If any portion of this Release is found or declared to be invalid or unenforceable, such invalidity shall not affect the remainder of this Release not found to be invalid, and the remainder of this Release shall remain in full force and effect. This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada (without regard to its conflict of laws principles). Any and all disputes arising from or relating to this Release or the minor's participation at Mystik Café shall be subject to litigation exclusively within the courts of Toronto, Ontario, Canada.
              </p>

              <h4 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#4ade80',
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
              }}>
                H. Final Consent (on Behalf of Minor)
              </h4>

              <div style={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: '3px solid #ff6b6b',
              }}>
                <p style={{ color: '#F5E6D3', lineHeight: '1.9', fontSize: '0.95rem', fontWeight: '600' }}>
                  BY EXECUTING THIS RELEASE (WHICH MAY INCLUDE ACCEPTANCE VIA ELECTRONIC SIGNATURE, CHECKBOX, OR PHYSICAL SIGNATURE), I ACKNOWLEDGE THAT I, ON BEHALF OF THE MINOR, HAVE READ THIS RELEASE IN ITS ENTIRETY, FULLY UNDERSTAND THE CONTENTS HEREOF, HAVE BEEN ADVISED AND HAD THE OPPORTUNITY TO SEEK INDEPENDENT LEGAL COUNSEL OF MY CHOICE, AND CERTIFY THAT I HAVE FREELY AND VOLUNTARILY EXECUTED THIS RELEASE ON BEHALF OF THE MINOR. I ACKNOWLEDGE THAT I HAVE THE AUTHORITY TO SIGN THIS RELEASE ON BEHALF OF THE MINOR. I FURTHER ACKNOWLEDGE THAT, BUT FOR THE EXECUTION OF THIS RELEASE AND MY AGREEMENT TO BE BOUND BY THE TERMS HEREOF, MYSTIK CAFÉ WOULD NOT AUTHORIZE THE MINOR TO ENTER OR PARTICIPATE IN ANY ACTIVITIES AT MYSTIK CAFÉ.
                </p>
              </div>
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
