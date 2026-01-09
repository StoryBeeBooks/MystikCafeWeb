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
            28 amazing animals waiting to meet you
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

      {/* Pet Detail Modal */}
      {selectedPet && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(13, 40, 24, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 4vw, 40px)',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closePetModal}
        >
          <div 
            style={{
              backgroundColor: '#0D2818',
              borderRadius: 'clamp(16px, 3vw, 32px)',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              border: '2px solid rgba(74, 222, 128, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              animation: 'scaleIn 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePetModal}
              style={{
                position: 'absolute',
                top: 'clamp(16px, 4vw, 32px)',
                right: 'clamp(16px, 4vw, 32px)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '2px solid rgba(245, 230, 211, 0.3)',
                backgroundColor: 'rgba(13, 40, 24, 0.9)',
                color: '#F5E6D3',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6b6b';
                e.currentTarget.style.borderColor = '#ff6b6b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 40, 24, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.3)';
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="modal-content" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
            }}>
              {/* Image Section */}
              <div style={{
                aspectRatio: '1',
                backgroundColor: 'rgba(245, 230, 211, 0.1)',
                backgroundImage: selectedPet.image ? `url(${selectedPet.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'clamp(16px, 3vw, 32px) 0 0 clamp(16px, 3vw, 32px)',
              }}>
                {!selectedPet.image && (
                  <span style={{ fontSize: '8rem' }}>🦎</span>
                )}
              </div>

              {/* Info Section */}
              <div style={{
                padding: 'clamp(24px, 4vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Name & Audio */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  gap: '16px',
                }}>
                  <h2 style={{
                    fontFamily: '"Rubik Distressed", cursive',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    color: '#4ade80',
                    lineHeight: '1.2',
                  }}>
                    {selectedPet.name}
                  </h2>
                  
                  {/* Audio Play Button */}
                  <button
                    onClick={() => {
                      if (selectedPet.audio) {
                        setIsPlaying(!isPlaying);
                        // Audio playback would go here
                      }
                    }}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      border: '2px solid #4ade80',
                      backgroundColor: isPlaying ? '#4ade80' : 'transparent',
                      color: isPlaying ? '#0D2818' : '#4ade80',
                      fontSize: '20px',
                      cursor: selectedPet.audio ? 'pointer' : 'not-allowed',
                      opacity: selectedPet.audio ? 1 : 0.3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                    title={selectedPet.audio ? 'Play sound' : 'Audio coming soon'}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>

                {/* Scientific Name */}
                {selectedPet.species && (
                  <p style={{
                    color: 'rgba(245, 230, 211, 0.6)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                    marginBottom: '20px',
                  }}>
                    {selectedPet.species}
                  </p>
                )}

                {/* Description */}
                {selectedPet.description && (
                  <p style={{
                    color: '#F5E6D3',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}>
                    {selectedPet.description}
                  </p>
                )}

                {/* Info Grid */}
                <div style={{
                  display: 'grid',
                  gap: '12px',
                  marginBottom: '24px',
                }}>
                  {selectedPet.origin && (
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(245, 230, 211, 0.05)',
                      borderRadius: '12px',
                    }}>
                      <span style={{ fontSize: '1.2rem' }}>🌍</span>
                      <div>
                        <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.8rem', marginBottom: '2px' }}>Origin</p>
                        <p style={{ color: '#F5E6D3', fontSize: '0.95rem' }}>{selectedPet.origin}</p>
                      </div>
                    </div>
                  )}
                  {selectedPet.diet && (
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(245, 230, 211, 0.05)',
                      borderRadius: '12px',
                    }}>
                      <span style={{ fontSize: '1.2rem' }}>🍽️</span>
                      <div>
                        <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.8rem', marginBottom: '2px' }}>Diet</p>
                        <p style={{ color: '#F5E6D3', fontSize: '0.95rem' }}>{selectedPet.diet}</p>
                      </div>
                    </div>
                  )}
                  {selectedPet.lifespan && (
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(245, 230, 211, 0.05)',
                      borderRadius: '12px',
                    }}>
                      <span style={{ fontSize: '1.2rem' }}>⏳</span>
                      <div>
                        <p style={{ color: 'rgba(245, 230, 211, 0.6)', fontSize: '0.8rem', marginBottom: '2px' }}>Lifespan</p>
                        <p style={{ color: '#F5E6D3', fontSize: '0.95rem' }}>{selectedPet.lifespan}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Fun Fact */}
                {selectedPet.funFact && (
                  <div style={{
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    borderLeft: '4px solid #4ade80',
                    padding: '16px 20px',
                    borderRadius: '0 12px 12px 0',
                    marginTop: 'auto',
                  }}>
                    <p style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>
                      ✨ Fun Fact
                    </p>
                    <p style={{ color: '#F5E6D3', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {selectedPet.funFact}
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .pets-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .modal-content {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1024px) {
          .pets-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .pets-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .modal-content {
            grid-template-columns: 1fr !important;
          }
          .modal-content > div:first-child {
            border-radius: clamp(16px, 3vw, 32px) clamp(16px, 3vw, 32px) 0 0 !important;
            max-height: 300px;
          }
        }
      `}</style>
    </main>
  );
}
