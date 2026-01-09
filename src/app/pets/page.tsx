'use client';

import { useState } from 'react';

// Pet data - images and audio will be added later
interface Pet {
  id: number;
  name: string;
  image: string;
  audio?: string;
  species?: string;
  origin?: string;
  diet?: string;
  lifespan?: string;
  funFact?: string;
  description?: string;
}

const pets: Pet[] = [
  { id: 1, name: 'Bearded Dragon', image: '', species: 'Pogona vitticeps', origin: 'Australia', diet: 'Omnivore - insects, vegetables, fruits', lifespan: '10-15 years', funFact: 'They wave their arms to communicate!', description: 'Known for their calm demeanor and distinctive "beard" that puffs up when threatened or excited.' },
  { id: 2, name: 'Jesus Lizard', image: '', species: 'Basiliscus basiliscus', origin: 'Central America', diet: 'Omnivore - insects, small vertebrates, plants', lifespan: '7-10 years', funFact: 'Can run on water at speeds up to 5 mph!', description: 'Named for their miraculous ability to run across water surfaces using their specially adapted feet.' },
  { id: 3, name: 'Malagasy Three-Eyed Lizard', image: '', species: 'Chalarodon madagascariensis', origin: 'Madagascar', diet: 'Insectivore', lifespan: '5-8 years', funFact: 'Has a "third eye" on top of its head that detects light!', description: 'A unique species with a photosensitive pineal eye used to regulate circadian rhythms.' },
  { id: 4, name: 'Green Iguana', image: '', species: 'Iguana iguana', origin: 'Central & South America', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Can drop from 40 feet and land unharmed!', description: 'One of the largest lizards in the Americas, known for their impressive size and vibrant green color.' },
  { id: 5, name: 'Green, Red, Lime Iguana', image: '', species: 'Iguana iguana (color morphs)', origin: 'Central & South America', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Color morphs are selectively bred for unique appearances!', description: 'Beautiful color variations of the classic green iguana, showcasing nature\'s diversity.' },
  { id: 6, name: 'Uromastyx', image: '', species: 'Uromastyx sp.', origin: 'North Africa & Middle East', diet: 'Herbivore - seeds, vegetables, flowers', lifespan: '15-20 years', funFact: 'Their spiky tail is used as a defensive weapon!', description: 'Also called spiny-tailed lizards, they thrive in desert environments and love basking in heat.' },
  { id: 7, name: 'Emerald Swift', image: '', species: 'Sceloporus malachiticus', origin: 'Central America', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Males display brilliant emerald colors to attract mates!', description: 'A stunningly beautiful lizard with iridescent green-blue scales that shimmer in the light.' },
  { id: 8, name: 'Leopard Gecko', image: '', species: 'Eublepharis macularius', origin: 'Pakistan, India, Afghanistan', diet: 'Insectivore', lifespan: '15-20 years', funFact: 'They can vocalize and make chirping sounds!', description: 'One of the most popular pet reptiles, known for their spotted pattern and friendly nature.' },
  { id: 9, name: 'Crested Gecko', image: '', species: 'Correlophus ciliatus', origin: 'New Caledonia', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Once thought extinct until rediscovered in 1994!', description: 'Famous for their "eyelash" crests and ability to climb smooth surfaces with specialized toe pads.' },
  { id: 10, name: 'Gargoyle Gecko', image: '', species: 'Rhacodactylus auriculatus', origin: 'New Caledonia', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Named for the horn-like bumps on their head!', description: 'A chunky, docile gecko with unique cranial bumps resembling gargoyle sculptures.' },
  { id: 11, name: 'Panther Chameleon', image: '', species: 'Furcifer pardalis', origin: 'Madagascar', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Can move each eye independently 360 degrees!', description: 'One of the most colorful reptiles on Earth, with males displaying incredible rainbow patterns.' },
  { id: 12, name: 'Nosy Be Panther Chameleon', image: '', species: 'Furcifer pardalis', origin: 'Nosy Be Island, Madagascar', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Named after the island they originate from!', description: 'A stunning locale of panther chameleon known for their vibrant blue and green coloration.' },
  { id: 13, name: 'Veiled Chameleon', image: '', species: 'Chamaeleo calyptratus', origin: 'Yemen, Saudi Arabia', diet: 'Insectivore - also eats some plants', lifespan: '5-8 years', funFact: 'Their tongue can be twice their body length!', description: 'Named for the tall casque (helmet-like structure) on their head that collects morning dew.' },
  { id: 14, name: 'Veiled Chameleon', image: '', species: 'Chamaeleo calyptratus', origin: 'Yemen, Saudi Arabia', diet: 'Insectivore - also eats some plants', lifespan: '5-8 years', funFact: 'Can change color based on mood and temperature!', description: 'Our second veiled chameleon - each one has a unique personality and color pattern!' },
  { id: 15, name: 'White-Eyed Crocodile Skink', image: '', species: 'Tribolonotus gracilis', origin: 'New Guinea', diet: 'Insectivore', lifespan: '10-12 years', funFact: 'They can vocalize when stressed - one of few lizards that do!', description: 'A dragon-like skink with armored scales and distinctive white rings around their eyes.' },
  { id: 16, name: 'Northern Blue-Tongued Skink', image: '', species: 'Tiliqua scincoides intermedia', origin: 'Australia', diet: 'Omnivore - snails, insects, fruits, vegetables', lifespan: '15-20 years', funFact: 'Their blue tongue is used to scare predators!', description: 'A friendly, robust lizard known for flashing their bright blue tongue as a defense mechanism.' },
  { id: 17, name: 'Clown Ball Python', image: '', species: 'Python regius', origin: 'West Africa', diet: 'Carnivore - rodents', lifespan: '20-30 years', funFact: 'Called "ball" python because they curl into a ball when scared!', description: 'A beautiful morph of ball python with reduced pattern and golden coloration.' },
  { id: 18, name: 'Mexican Black Kingsnake', image: '', species: 'Lampropeltis getula nigrita', origin: 'Mexico', diet: 'Carnivore - rodents, other snakes', lifespan: '15-20 years', funFact: 'Immune to rattlesnake venom and eats other snakes!', description: 'A stunning jet-black snake with an iridescent sheen, known for their docile nature.' },
  { id: 19, name: 'Yellow Quince Monitor', image: '', species: 'Varanus melinus', origin: 'Indonesia', diet: 'Carnivore - insects, eggs, small animals', lifespan: '15-20 years', funFact: 'One of the most beautifully colored monitor lizards!', description: 'A striking yellow and black monitor known for their intelligence and curious personality.' },
  { id: 20, name: 'Mangrove Monitor', image: '', species: 'Varanus indicus', origin: 'Australia, Southeast Asia', diet: 'Carnivore - fish, crabs, small mammals', lifespan: '15-20 years', funFact: 'Excellent swimmers that hunt in water!', description: 'A semi-aquatic monitor lizard that thrives in coastal mangrove habitats.' },
  { id: 21, name: 'Elongated Tortoise', image: '', species: 'Indotestudo elongata', origin: 'Southeast Asia', diet: 'Herbivore - leafy greens, fruits, flowers', lifespan: '40-50 years', funFact: 'Males have pink coloring around their nose during breeding season!', description: 'A beautiful tortoise with an elongated shell and yellow-brown coloring.' },
  { id: 22, name: 'Sulcata Tortoise', image: '', species: 'Centrochelys sulcata', origin: 'Sahara Desert, Africa', diet: 'Herbivore - grasses, hay, leafy greens', lifespan: '70+ years', funFact: 'Third largest tortoise species in the world!', description: 'Also called African spurred tortoise, they can grow over 100 pounds!' },
  { id: 23, name: 'Leopard Tortoise', image: '', species: 'Stigmochelys pardalis', origin: 'Eastern & Southern Africa', diet: 'Herbivore - grasses, succulents, fruits', lifespan: '50-100 years', funFact: 'Named for their beautiful spotted shell pattern!', description: 'One of the most attractive tortoises with distinctive black and yellow markings.' },
  { id: 24, name: 'Dumpy White Tree Frog', image: '', species: 'Litoria caerulea', origin: 'Australia, New Guinea', diet: 'Insectivore', lifespan: '15-20 years', funFact: 'Also called "smiling frog" due to their expression!', description: 'A chunky, adorable frog with a perpetual smile and waxy skin coating.' },
  { id: 25, name: 'Milk Frog', image: '', species: 'Trachycephalus resinifictrix', origin: 'Amazon Rainforest', diet: 'Insectivore', lifespan: '8-10 years', funFact: 'Secretes a milky substance when stressed - hence the name!', description: 'A striking frog with beautiful blue and brown banded pattern.' },
  { id: 26, name: 'Axolotl', image: '', species: 'Ambystoma mexicanum', origin: 'Lake Xochimilco, Mexico', diet: 'Carnivore - worms, small fish, insects', lifespan: '10-15 years', funFact: 'Can regenerate entire limbs, heart, and even parts of their brain!', description: 'The "walking fish" that\'s actually a salamander - critically endangered in the wild.' },
  { id: 27, name: 'Ocellated Skink', image: '', species: 'Chalcides ocellatus', origin: 'Mediterranean, North Africa', diet: 'Insectivore', lifespan: '10-15 years', funFact: 'Their legs are so small they move like snakes!', description: 'A fascinating skink with tiny legs and eye-like spots (ocelli) along their body.' },
  { id: 28, name: 'White-Spotted Gecko', image: '', species: 'Tarentola annularis', origin: 'North Africa', diet: 'Insectivore', lifespan: '8-10 years', funFact: 'Known as "crocodile gecko" due to their bumpy skin texture!', description: 'A robust gecko with distinctive white spots and prehistoric-looking scales.' },
];

export default function PetsPage() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const closePetModal = () => {
    setSelectedPet(null);
    setIsPlaying(false);
  };

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
        backgroundImage: 'url(https://assets.k12path.com/MystikCafe/Pets.jpg)',
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
        }}>
          <h1 style={{
            fontFamily: '"Rubik Distressed", cursive',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#F5E6D3',
            marginBottom: '16px',
            textShadow: '3px 3px 12px rgba(0,0,0,0.5)',
          }}>
            Meet Our Residents
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#F5E6D3',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Come and meet all of our residents in person!
          </p>
        </div>
      </section>

      {/* Pets Grid */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 32px)',
      }}>
        <div className="pets-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(12px, 2vw, 24px)',
        }}>
          {pets.map((pet) => (
            <div
              key={pet.id}
              onClick={() => setSelectedPet(pet)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(74, 222, 128, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Square Image Card */}
              <div style={{
                aspectRatio: '1',
                backgroundColor: 'rgba(245, 230, 211, 0.1)',
                borderRadius: 'clamp(12px, 2vw, 20px)',
                overflow: 'hidden',
                backgroundImage: pet.image ? `url(${pet.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(245, 230, 211, 0.15)',
              }}>
                {!pet.image && (
                  <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>🦎</span>
                )}
              </div>
              {/* Pet Name */}
              <p style={{
                color: '#F5E6D3',
                textAlign: 'center',
                marginTop: 'clamp(8px, 1.5vw, 14px)',
                fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                fontWeight: '600',
                lineHeight: '1.3',
              }}>
                {pet.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pet Detail Modal - Elegant Fullscreen Design */}
      {selectedPet && (
        <div 
          className="pet-modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#0D2818',
            zIndex: 2000,
            overflow: 'auto',
            animation: 'fadeIn 0.4s ease',
          }}
        >
          {/* Decorative Background */}
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 20%, rgba(74, 222, 128, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(74, 222, 128, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />

          {/* Close Button - Floating */}
          <button
            onClick={closePetModal}
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(245, 230, 211, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#F5E6D3',
              fontSize: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(245, 230, 211, 0.1)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            ×
          </button>

          {/* Main Content Container */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div className="modal-layout" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              {/* Left: Image with elegant frame */}
              <div style={{
                position: 'relative',
                animation: 'slideInLeft 0.5s ease',
              }}>
                {/* Decorative frame */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  right: '12px',
                  bottom: '12px',
                  border: '2px solid rgba(74, 222, 128, 0.3)',
                  borderRadius: '24px',
                }} />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  right: '-12px',
                  bottom: '-12px',
                  border: '2px solid rgba(74, 222, 128, 0.15)',
                  borderRadius: '24px',
                }} />
                
                {/* Main Image */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  backgroundColor: 'rgba(245, 230, 211, 0.05)',
                  backgroundImage: selectedPet.image ? `url(${selectedPet.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                }}>
                  {!selectedPet.image && (
                    <span style={{ fontSize: 'clamp(6rem, 15vw, 10rem)', opacity: 0.5 }}>🦎</span>
                  )}
                  
                  {/* Audio Button - Floating on image */}
                  <button
                    onClick={() => {
                      if (selectedPet.audio) {
                        setIsPlaying(!isPlaying);
                      }
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: isPlaying ? '#4ade80' : 'rgba(13, 40, 24, 0.85)',
                      backdropFilter: 'blur(10px)',
                      color: isPlaying ? '#0D2818' : '#4ade80',
                      fontSize: '24px',
                      cursor: selectedPet.audio ? 'pointer' : 'default',
                      opacity: selectedPet.audio ? 1 : 0.4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                    title={selectedPet.audio ? 'Play sound' : 'Audio coming soon'}
                  >
                    {isPlaying ? '⏸' : '🔊'}
                  </button>
                </div>
              </div>

              {/* Right: Info with elegant typography */}
              <div style={{
                animation: 'slideInRight 0.5s ease',
              }}>
                {/* Scientific Name - Above title */}
                {selectedPet.species && (
                  <p style={{
                    color: '#4ade80',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                    marginBottom: '8px',
                    letterSpacing: '0.05em',
                  }}>
                    {selectedPet.species}
                  </p>
                )}

                {/* Name */}
                <h2 style={{
                  fontFamily: '"Rubik Distressed", cursive',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: '#F5E6D3',
                  lineHeight: '1.1',
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                }}>
                  {selectedPet.name}
                </h2>

                {/* Elegant divider */}
                <div style={{
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #4ade80, transparent)',
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                  borderRadius: '2px',
                }} />

                {/* Description */}
                {selectedPet.description && (
                  <p style={{
                    color: 'rgba(245, 230, 211, 0.85)',
                    fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                    lineHeight: '1.8',
                    marginBottom: 'clamp(28px, 4vw, 40px)',
                  }}>
                    {selectedPet.description}
                  </p>
                )}

                {/* Info Cards - Horizontal elegant style */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: 'clamp(28px, 4vw, 40px)',
                }}>
                  {selectedPet.origin && (
                    <div style={{
                      padding: '16px 24px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '16px',
                      flex: '1 1 140px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Origin</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.95rem', fontWeight: '500' }}>{selectedPet.origin}</p>
                    </div>
                  )}
                  {selectedPet.lifespan && (
                    <div style={{
                      padding: '16px 24px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '16px',
                      flex: '1 1 140px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lifespan</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.95rem', fontWeight: '500' }}>{selectedPet.lifespan}</p>
                    </div>
                  )}
                </div>

                {/* Diet with icon */}
                {selectedPet.diet && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: 'clamp(28px, 4vw, 40px)',
                    padding: '16px 20px',
                    backgroundColor: 'rgba(245, 230, 211, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(245, 230, 211, 0.08)',
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🍽️</span>
                    <div>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Diet</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.95rem' }}>{selectedPet.diet}</p>
                    </div>
                  </div>
                )}

                {/* Fun Fact - Elegant quote style */}
                {selectedPet.funFact && (
                  <div style={{
                    position: 'relative',
                    padding: '24px 28px',
                    background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.02) 100%)',
                    borderRadius: '20px',
                    border: '1px solid rgba(74, 222, 128, 0.2)',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '24px',
                      backgroundColor: '#0D2818',
                      padding: '4px 12px',
                    }}>
                      <span style={{ color: '#4ade80', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em' }}>✨ FUN FACT</span>
                    </div>
                    <p style={{ 
                      color: '#F5E6D3', 
                      fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', 
                      lineHeight: '1.7',
                      fontStyle: 'italic',
                    }}>
                      "{selectedPet.funFact}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .pets-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .modal-layout {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1024px) {
          .pets-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .modal-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .pets-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
