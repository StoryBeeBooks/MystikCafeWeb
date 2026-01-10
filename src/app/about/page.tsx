'use client';

import Link from 'next/link';
import { LizardIcon } from '@/components/icons';

export default function AboutPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      fontFamily: '"Questrial", sans-serif',
    }}>
      {/* Header Section */}
      <section style={{
        backgroundColor: '#F5F5F0',
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 5vw, 40px) clamp(40px, 6vw, 60px)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: '"Rubik Distressed", cursive',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#1A1A1A',
          marginBottom: '12px',
        }}>
          About Mystik Café
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#4A4A4A',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
          Where the aroma of ethically sourced coffee blends with the quiet wonder of nature. 
          A sanctuary for the curious, a haven for the wild at heart.
        </p>
      </section>

      {/* Our Story Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 32px)',
        backgroundColor: '#FFFFFF',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <div>
            <p style={{
              fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
              color: '#0D2818',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontWeight: '600',
            }}>
              Our Story
            </p>
            <h2 style={{
              fontFamily: '"Rubik Distressed", cursive',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: '#1A1A1A',
              marginBottom: 'clamp(20px, 3vw, 32px)',
              lineHeight: '1.2',
            }}>
              Reimagining the Café Experience
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#4A4A4A',
              lineHeight: '1.8',
              marginBottom: 'clamp(16px, 2vw, 24px)',
            }}>
              Mystik Café was born from a simple yet powerful idea: <strong style={{ color: '#1A1A1A' }}>What if a coffee shop could be a portal to the wild?</strong>
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#4A4A4A',
              lineHeight: '1.8',
              marginBottom: 'clamp(16px, 2vw, 24px)',
            }}>
              We didn't just want to serve coffee. We wanted to spark curiosity. We believed that in a busy world, 
              people needed a place to pause, breathe, and reconnect—not just with each other, but with the 
              fascinating creatures we share this planet with.
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#4A4A4A',
              lineHeight: '1.8',
            }}>
              From that seed, Mystik grew into a sanctuary. A place where you can sip a latte while watching a 
              chameleon change colors, or enjoy a fresh pastry in the company of ancient reptiles.
            </p>
          </div>
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}>
            <video 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://assets.k12path.com/MystikCafe/Mauritius_Gecko.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{
        backgroundColor: '#F5F5F0',
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 32px)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
          }}>
            {/* Mission */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(30px, 5vw, 50px)',
              boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
            }}>
              <p style={{
                fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
                color: '#0D2818',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '12px',
                fontWeight: '600',
              }}>
                Our Mission
              </p>
              <h3 style={{
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#1A1A1A',
                marginBottom: 'clamp(16px, 2vw, 20px)',
              }}>
                Inspire Curiosity & Compassion
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                color: '#4A4A4A',
                lineHeight: '1.8',
                marginBottom: '16px',
              }}>
                To inspire curiosity, compassion, and a deeper connection to the natural world.
                We are more than a café—we are a living classroom.
              </p>
              <p style={{
                color: '#0D2818',
                fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                fontWeight: '500',
                borderLeft: '3px solid #0D2818',
                paddingLeft: '16px',
              }}>
                "Understanding leads to caring. Caring leads to conservation."
              </p>
            </div>

            {/* Vision */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(30px, 5vw, 50px)',
              boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
            }}>
              <p style={{
                fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
                color: '#0D2818',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '12px',
                fontWeight: '600',
              }}>
                Our Vision
              </p>
              <h3 style={{
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#1A1A1A',
                marginBottom: 'clamp(16px, 2vw, 20px)',
              }}>
                Wonder & Respect for All Creatures
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                color: '#4A4A4A',
                lineHeight: '1.8',
                marginBottom: '16px',
              }}>
                A world where every creature is viewed with wonder and respect.
                We envision a community that dares to look closer, where fear is replaced by fascination.
              </p>
              <p style={{
                color: '#0D2818',
                fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                fontWeight: '500',
                borderLeft: '3px solid #0D2818',
                paddingLeft: '16px',
              }}>
                "Where fear becomes fascination, and strangers become family."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 32px)',
        backgroundColor: '#FFFFFF',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(40px, 6vw, 60px)',
        }}>
          <p style={{
            fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
            color: '#0D2818',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontWeight: '600',
          }}>
            What Drives Us
          </p>
          <h2 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#1A1A1A',
          }}>
            The Three Pillars of Mystik
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(24px, 4vw, 40px)',
        }}>
          {/* Pillar 1 */}
          <div 
            style={{
              backgroundColor: '#F8F9FA',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img 
              src="https://assets.k12path.com/MystikCafe/about%20us%201.jpeg" 
              alt="Compassion and Care"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#0D2818',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '36px',
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}>1</div>
              <h4 style={{
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                color: '#1A1A1A',
                marginBottom: '12px',
              }}>
                Compassion & Care
              </h4>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: '#4A4A4A',
                lineHeight: '1.7',
              }}>
                Our animals are family. We uphold the highest standards of ethical care and enrichment, 
                ensuring every resident thrives in a habitat designed for their wellbeing.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            style={{
              backgroundColor: '#F8F9FA',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img 
              src="https://assets.k12path.com/MystikCafe/about%20us%202.jpeg" 
              alt="Community and Connection"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#0D2818',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '36px',
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}>2</div>
              <h4 style={{
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                color: '#1A1A1A',
                marginBottom: '12px',
              }}>
                Community & Connection
              </h4>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: '#4A4A4A',
                lineHeight: '1.7',
              }}>
                Mystik is a home for the curious—a space where local staff, passionate educators, and 
                visitors connect. Whether you're an artist or a student, you belong here.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            style={{
              backgroundColor: '#F8F9FA',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img 
              src="https://assets.k12path.com/MystikCafe/about%20us%203.jpeg" 
              alt="Craft and Indulgence"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#0D2818',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '36px',
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}>3</div>
              <h4 style={{
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                color: '#1A1A1A',
                marginBottom: '12px',
              }}>
                Craft & Indulgence
              </h4>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: '#4A4A4A',
                lineHeight: '1.7',
              }}>
                We take our food as seriously as our fauna. From bold, locally roasted coffee to our 
                signature desserts, every menu item is crafted to surprise and delight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 32px) clamp(60px, 8vw, 100px)',
        backgroundColor: '#FFFFFF',
      }}>
        <div style={{
          textAlign: 'center',
          padding: 'clamp(40px, 6vw, 60px)',
        }}>
          <p style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#1A1A1A',
            marginBottom: '12px',
            fontWeight: '600',
            lineHeight: '1.4',
          }}>
            Ready to Enter the Wild?
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#4A4A4A',
            marginBottom: 'clamp(24px, 4vw, 36px)',
            maxWidth: '600px',
            margin: '0 auto clamp(24px, 4vw, 36px)',
          }}>
            Step through our doors and discover a world where coffee meets conservation.
          </p>
          <Link 
            href="/book"
            style={{
              display: 'inline-block',
              padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
              backgroundColor: '#0D2818',
              color: '#FFFFFF',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              fontWeight: '700',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0D2818';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Book Your Visit <LizardIcon size={20} color="#FFFFFF" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
