'use client';

export default function EventsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0D2818',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Hero Section with Image */}
      <section style={{
        position: 'relative',
        height: 'clamp(400px, 60vh, 600px)',
        backgroundImage: 'url(https://assets.k12path.com/MystikCafe/event.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(13, 40, 24, 0.6)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 clamp(16px, 5vw, 40px)',
          maxWidth: '900px',
        }}>
          <h1 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#F5E6D3',
            marginBottom: '24px',
            textShadow: '3px 3px 12px rgba(0,0,0,0.5)',
          }}>
            Private Events
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#F5E6D3',
            lineHeight: '1.7',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}>
            Transform your special event into an experience everyone remembers
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          backgroundColor: 'rgba(245, 230, 211, 0.05)',
          borderRadius: '24px',
          padding: 'clamp(30px, 6vw, 60px)',
          border: '1px solid rgba(245, 230, 211, 0.1)',
        }}>
          <p style={{
            color: '#F5E6D3',
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}>
            Mystik Café offers a range of private event experiences tailored for celebrations and special moments. Whether you're planning a birthday, anniversary, engagement party, or a corporate team-building session, our space transforms into an immersive reptile-and-ocean themed venue designed to spark connection and curiosity.
          </p>
          <p style={{
            color: '#4ade80',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
            lineHeight: '1.8',
            fontWeight: '600',
            fontStyle: 'italic',
          }}>
            Looking for a unique venue that feels unforgettable, immersive, and unlike anything else in Toronto?
          </p>
        </div>
      </section>

      {/* Experience Description */}
      <section style={{
        padding: '0 clamp(16px, 5vw, 40px) clamp(60px, 10vw, 100px)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          backgroundColor: 'rgba(245, 230, 211, 0.03)',
          borderRadius: '24px',
          padding: 'clamp(30px, 6vw, 60px)',
          border: '1px solid rgba(245, 230, 211, 0.08)',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#4ade80',
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            An Unforgettable Experience
          </h2>
          
          <p style={{
            color: '#F5E6D3',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}>
            Transform your special event into an experience everyone remembers by hosting it at Mystik. Your guests can enjoy their drinks in our glowing Ocean World Café, surrounded by illuminated aquatic displays, then step into the Reptile Jungle for a guided encounter with rare and exotic reptiles in their beautifully crafted habitats.
          </p>

          <p style={{
            color: '#F5E6D3',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: '1.9',
          }}>
            Your guests can enjoy handcrafted coffees, specialty lattes, refreshing teas, and curated pastries in our glowing Ocean World Café, surrounded by illuminated aquatic displays. Then step into the Reptile Jungle for a guided encounter with rare and exotic reptiles in their immersive, custom-built habitats.
          </p>
        </div>

        {/* Event Types Grid */}
        <h2 style={{
          fontFamily: '"Rubik Distressed", cursive',
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          color: '#F5E6D3',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
          Event Types We Host
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {/* Birthday Parties */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>🎂</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Birthday Parties
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Celebrate your special day with reptile encounters, custom decorations, and an immersive experience your guests will never forget.
            </p>
          </div>

          {/* Corporate Events */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>💼</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Corporate Events
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Host client meetings, product launches, or company celebrations in a unique environment that leaves a lasting impression.
            </p>
          </div>

          {/* Team Building */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>🤝</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Team Building
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Strengthen team bonds through interactive animal experiences, collaborative challenges, and shared moments of discovery.
            </p>
          </div>

          {/* Anniversaries */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>💍</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Anniversaries & Engagements
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Celebrate love milestones in an intimate, enchanting setting perfect for couples and their closest friends and family.
            </p>
          </div>

          {/* Educational Groups */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>📚</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Educational Groups
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Bring school groups, camps, or youth organizations for an educational adventure featuring hands-on learning about reptile conservation.
            </p>
          </div>

          {/* Social Gatherings */}
          <div style={{
            backgroundColor: 'rgba(74, 222, 128, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px',
              textAlign: 'center',
            }}>🎉</div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              color: '#4ade80',
              marginBottom: '12px',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              Social Gatherings
            </h3>
            <p style={{
              color: '#F5E6D3',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}>
              Host baby showers, graduation parties, family reunions, or any celebration in a venue that offers conversation starters at every turn.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          backgroundColor: 'rgba(74, 222, 128, 0.1)',
          borderRadius: '24px',
          padding: 'clamp(40px, 6vw, 60px)',
          textAlign: 'center',
          border: '2px solid #4ade80',
        }}>
          <h2 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#4ade80',
            marginBottom: '20px',
          }}>
            Ready to Book Your Event?
          </h2>
          <p style={{
            color: '#F5E6D3',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: '1.8',
            marginBottom: '32px',
            maxWidth: '700px',
            margin: '0 auto 32px',
          }}>
            For private event bookings and inquiries, please contact us and we'll help you create an unforgettable experience for your guests.
          </p>
          <a
            href="mailto:info@mystikcafe.ca"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#4ade80',
              color: '#0D2818',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              fontWeight: '700',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(74, 222, 128, 0.3)',
            }}
          >
            📧 info@mystikcafe.ca
          </a>
        </div>
      </section>
    </main>
  );
}
