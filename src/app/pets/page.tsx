'use client';

import { useState } from 'react';
import Link from 'next/link';

// Pet data - images and audio will be added later
interface Pet {
  id: number;
  name: string;
  image: string;
  audio?: string;
  species?: string;
  origin?: string;
  habitat?: string;
  size?: string;
  temperature?: string;
  humidity?: string;
  diet?: string;
  lifespan?: string;
  funFact?: string;
  description?: string;
}

const pets: Pet[] = [
  { id: 1, name: 'Bearded Dragon', image: 'https://assets.k12path.com/MystikCafe/pets/bearded%20dragon.jpg', species: 'Pogona vitticeps', origin: 'Australia', habitat: 'Arid woodlands, scrublands, deserts', size: '18-24 inches', temperature: '75-85°F (basking: 100-110°F)', humidity: '30-40%', diet: 'Omnivore - insects, vegetables, fruits', lifespan: '10-15 years', funFact: 'They wave their arms to communicate!', description: 'Known for their calm demeanor and distinctive "beard" that puffs up when threatened or excited.' },
  { id: 2, name: 'Malagasy Three-Eyed Lizard', image: 'https://assets.k12path.com/MystikCafe/pets/Malagasy%20Three-Eyed%20Lizard.jpg', species: 'Chalarodon madagascariensis', origin: 'Madagascar', habitat: 'Sandy coastal areas, dry forests', size: '6-8 inches', temperature: '75-85°F (basking: 95°F)', humidity: '40-60%', diet: 'Insectivore', lifespan: '5-8 years', funFact: 'Has a "third eye" on top of its head that detects light!', description: 'A unique species with a photosensitive pineal eye used to regulate circadian rhythms.' },
  { id: 3, name: 'Green Iguana', image: 'https://assets.k12path.com/MystikCafe/pets/Green%20Iguana.jpg', species: 'Iguana iguana', origin: 'Central & South America', habitat: 'Tropical rainforests, near water sources', size: '4-6 feet', temperature: '75-85°F (basking: 95-100°F)', humidity: '65-75%', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Can drop from 40 feet and land unharmed!', description: 'One of the largest lizards in the Americas, known for their impressive size and vibrant green color.' },
  { id: 4, name: 'Red Iguana', image: 'https://assets.k12path.com/MystikCafe/pets/Red%20Iguana.jpg', species: 'Iguana iguana (color morph)', origin: 'Central & South America', habitat: 'Tropical rainforests, near water sources', size: '4-6 feet', temperature: '75-85°F (basking: 95-100°F)', humidity: '65-75%', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Color morphs are selectively bred for unique appearances!', description: 'Beautiful color variations of the classic green iguana, showcasing nature\'s diversity.' },
  { id: 5, name: 'Uromastyx', image: 'https://assets.k12path.com/MystikCafe/pets/Uromastyx.jpg', species: 'Uromastyx sp.', origin: 'North Africa & Middle East', habitat: 'Rocky deserts, arid scrublands', size: '10-18 inches', temperature: '80-90°F (basking: 120-130°F)', humidity: '10-25%', diet: 'Herbivore - seeds, vegetables, flowers', lifespan: '15-20 years', funFact: 'Their spiky tail is used as a defensive weapon!', description: 'Also called spiny-tailed lizards, they thrive in desert environments and love basking in heat.' },
  { id: 6, name: 'Emerald Swift', image: 'https://assets.k12path.com/MystikCafe/pets/Emerald%20Swift.jpg', species: 'Sceloporus malachiticus', origin: 'Central America', habitat: 'Mountain cloud forests, rocky areas', size: '6-8 inches', temperature: '75-82°F (basking: 90°F)', humidity: '60-80%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Males display brilliant emerald colors to attract mates!', description: 'A stunningly beautiful lizard with iridescent green-blue scales that shimmer in the light.' },
  { id: 7, name: 'Leopard Gecko', image: 'https://assets.k12path.com/MystikCafe/pets/Leopard%20Gecko.jpg', species: 'Eublepharis macularius', origin: 'Pakistan, India, Afghanistan', habitat: 'Rocky grasslands, desert edges', size: '7-10 inches', temperature: '75-85°F (basking: 90°F)', humidity: '30-40%', diet: 'Insectivore', lifespan: '15-20 years', funFact: 'They can vocalize and make chirping sounds!', description: 'One of the most popular pet reptiles, known for their spotted pattern and friendly nature.' },
  { id: 8, name: 'Crested Gecko', image: 'https://assets.k12path.com/MystikCafe/pets/Crested%20Gecko.jpg', species: 'Correlophus ciliatus', origin: 'New Caledonia', habitat: 'Tropical rainforests, on trees', size: '6-10 inches', temperature: '72-78°F', humidity: '60-80%', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Once thought extinct until rediscovered in 1994!', description: 'Famous for their "eyelash" crests and ability to climb smooth surfaces with specialized toe pads.' },
  { id: 9, name: 'Gargoyle Gecko', image: 'https://assets.k12path.com/MystikCafe/pets/Gargoyle%20Gecko.jpg', species: 'Rhacodactylus auriculatus', origin: 'New Caledonia', habitat: 'Tropical forests, shrublands', size: '7-9 inches', temperature: '72-78°F', humidity: '60-70%', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Named for the horn-like bumps on their head!', description: 'A chunky, docile gecko with unique cranial bumps resembling gargoyle sculptures.' },
  { id: 10, name: 'Panther Chameleon', image: 'https://assets.k12path.com/MystikCafe/pets/Panther%20Chameleon.jpg', species: 'Furcifer pardalis', origin: 'Madagascar', habitat: 'Tropical forests, coastal lowlands', size: '12-20 inches', temperature: '72-80°F (basking: 85-90°F)', humidity: '50-70%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Can move each eye independently 360 degrees!', description: 'One of the most colorful reptiles on Earth, with males displaying incredible rainbow patterns.' },
  { id: 11, name: 'Nosy Be Panther Chameleon', image: 'https://assets.k12path.com/MystikCafe/pets/Nosy%20Be%20Panther%20Chameleon.jpg', species: 'Furcifer pardalis', origin: 'Nosy Be Island, Madagascar', habitat: 'Tropical island forests', size: '12-18 inches', temperature: '72-80°F (basking: 85-90°F)', humidity: '50-70%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Named after the island they originate from!', description: 'A stunning locale of panther chameleon known for their vibrant blue and green coloration.' },
  { id: 12, name: 'Veiled Chameleon', image: 'https://assets.k12path.com/MystikCafe/pets/Veiled%20Chameleon.jpg', species: 'Chamaeleo calyptratus', origin: 'Yemen, Saudi Arabia', habitat: 'Mountain valleys, plateaus with vegetation', size: '14-24 inches', temperature: '72-80°F (basking: 85-95°F)', humidity: '50-70%', diet: 'Insectivore - also eats some plants', lifespan: '5-8 years', funFact: 'Their tongue can be twice their body length!', description: 'Named for the tall casque (helmet-like structure) on their head that collects morning dew.' },
  { id: 13, name: 'Veiled Chameleon', image: 'https://assets.k12path.com/MystikCafe/pets/Veiled%20Chameleon.jpg', species: 'Chamaeleo calyptratus', origin: 'Yemen, Saudi Arabia', habitat: 'Mountain valleys, plateaus with vegetation', size: '14-24 inches', temperature: '72-80°F (basking: 85-95°F)', humidity: '50-70%', diet: 'Insectivore - also eats some plants', lifespan: '5-8 years', funFact: 'Can change color based on mood and temperature!', description: 'Our second veiled chameleon - each one has a unique personality and color pattern!' },
  { id: 14, name: 'White-Eyed Crocodile Skink', image: 'https://assets.k12path.com/MystikCafe/pets/White-Eyed%20Crocodile%20Skink.jpg', species: 'Tribolonotus gracilis', origin: 'New Guinea', habitat: 'Tropical rainforests, near streams', size: '8-10 inches', temperature: '72-78°F', humidity: '70-90%', diet: 'Insectivore', lifespan: '10-12 years', funFact: 'They can vocalize when stressed - one of few lizards that do!', description: 'A dragon-like skink with armored scales and distinctive white rings around their eyes.' },
  { id: 15, name: 'Northern Blue-Tongued Skink', image: 'https://assets.k12path.com/MystikCafe/pets/Northern%20Blue-Tongued%20Skink.jpg', species: 'Tiliqua scincoides intermedia', origin: 'Australia', habitat: 'Grasslands, woodlands, semi-arid areas', size: '18-24 inches', temperature: '75-85°F (basking: 95-100°F)', humidity: '40-60%', diet: 'Omnivore - snails, insects, fruits, vegetables', lifespan: '15-20 years', funFact: 'Their blue tongue is used to scare predators!', description: 'A friendly, robust lizard known for flashing their bright blue tongue as a defense mechanism.' },
  { id: 16, name: 'Clown Ball Python', image: 'https://assets.k12path.com/MystikCafe/pets/Clown%20Ball%20Python.jpg', species: 'Python regius', origin: 'West Africa', habitat: 'Grasslands, open forests, agricultural areas', size: '3-5 feet', temperature: '78-80°F (basking: 88-92°F)', humidity: '50-60%', diet: 'Carnivore - rodents', lifespan: '20-30 years', funFact: 'Called "ball" python because they curl into a ball when scared!', description: 'A beautiful morph of ball python with reduced pattern and golden coloration.' },
  { id: 17, name: 'Mexican Black Kingsnake', image: 'https://assets.k12path.com/MystikCafe/pets/Mexican%20Black%20Kingsnake.jpg', species: 'Lampropeltis getula nigrita', origin: 'Mexico', habitat: 'Desert scrublands, rocky hillsides', size: '3-4 feet', temperature: '75-85°F (basking: 88°F)', humidity: '40-60%', diet: 'Carnivore - rodents, other snakes', lifespan: '15-20 years', funFact: 'Immune to rattlesnake venom and eats other snakes!', description: 'A stunning jet-black snake with an iridescent sheen, known for their docile nature.' },
  { id: 18, name: 'Yellow Quince Monitor', image: 'https://assets.k12path.com/MystikCafe/pets/Yellow%20Quince%20Monitor.jpg', species: 'Varanus melinus', origin: 'Indonesia', habitat: 'Tropical forests, mangroves', size: '3-4 feet', temperature: '80-85°F (basking: 95-100°F)', humidity: '70-80%', diet: 'Carnivore - insects, eggs, small animals', lifespan: '15-20 years', funFact: 'One of the most beautifully colored monitor lizards!', description: 'A striking yellow and black monitor known for their intelligence and curious personality.' },
  { id: 19, name: 'Milk Frog', image: 'https://assets.k12path.com/MystikCafe/pets/milk%20frog.jpg', species: 'Trachycephalus resinifictrix', origin: 'Amazon Rainforest', habitat: 'Tropical rainforest canopy, near water', size: '2.5-4 inches', temperature: '75-82°F', humidity: '70-80%', diet: 'Insectivore', lifespan: '8-10 years', funFact: 'Secretes a milky substance when stressed - hence the name!', description: 'A striking frog with beautiful blue and brown banded pattern.' },
  { id: 20, name: 'Axolotl', image: 'https://assets.k12path.com/MystikCafe/pets/Axolotl.jpg', species: 'Ambystoma mexicanum', origin: 'Lake Xochimilco, Mexico', habitat: 'Freshwater lakes, canals (aquatic)', size: '9-12 inches', temperature: '60-68°F (cool water)', humidity: 'N/A (fully aquatic)', diet: 'Carnivore - worms, small fish, insects', lifespan: '10-15 years', funFact: 'Can regenerate entire limbs, heart, and even parts of their brain!', description: 'The "walking fish" that\'s actually a salamander - critically endangered in the wild.' },
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
      fontFamily: '"Questrial", sans-serif',
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

        {/* CTA Section */}
        <div style={{
          marginTop: 'clamp(60px, 8vw, 100px)',
          textAlign: 'center',
          padding: 'clamp(40px, 6vw, 60px)',
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(74, 222, 128, 0.02) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(74, 222, 128, 0.15)',
        }}>
          <p style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#F5E6D3',
            marginBottom: '12px',
            fontWeight: '600',
            lineHeight: '1.4',
          }}>
            There are a lot more Mystik pet residents waiting to meet you!
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(245, 230, 211, 0.7)',
            marginBottom: 'clamp(24px, 4vw, 36px)',
          }}>
            Come and meet them in person
          </p>
          <Link 
            href="/book"
            style={{
              display: 'inline-block',
              padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
              backgroundColor: '#4ade80',
              color: '#0D2818',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              fontWeight: '700',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(74, 222, 128, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#22c55e';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(74, 222, 128, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4ade80';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(74, 222, 128, 0.3)';
            }}
          >
            Book Your Visit 🦎
          </Link>
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

                {/* Info Cards - Grid layout */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  marginBottom: 'clamp(20px, 3vw, 28px)',
                }}>
                  {selectedPet.origin && (
                    <div style={{
                      padding: '14px 18px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '12px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🌍 Origin</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.origin}</p>
                    </div>
                  )}
                  {selectedPet.lifespan && (
                    <div style={{
                      padding: '14px 18px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '12px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>⏳ Lifespan</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.lifespan}</p>
                    </div>
                  )}
                  {selectedPet.size && (
                    <div style={{
                      padding: '14px 18px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '12px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>📏 Size</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.size}</p>
                    </div>
                  )}
                  {selectedPet.diet && (
                    <div style={{
                      padding: '14px 18px',
                      backgroundColor: 'rgba(245, 230, 211, 0.03)',
                      border: '1px solid rgba(245, 230, 211, 0.1)',
                      borderRadius: '12px',
                    }}>
                      <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🍽️ Diet</p>
                      <p style={{ color: '#F5E6D3', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.diet}</p>
                    </div>
                  )}
                </div>

                {/* Habitat Section */}
                {selectedPet.habitat && (
                  <div style={{
                    padding: '14px 18px',
                    backgroundColor: 'rgba(245, 230, 211, 0.03)',
                    border: '1px solid rgba(245, 230, 211, 0.1)',
                    borderRadius: '12px',
                    marginBottom: '12px',
                  }}>
                    <p style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🏠 Habitat</p>
                    <p style={{ color: '#F5E6D3', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.habitat}</p>
                  </div>
                )}

                {/* Environmental Requirements */}
                {(selectedPet.temperature || selectedPet.humidity) && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    marginBottom: 'clamp(20px, 3vw, 28px)',
                  }}>
                    {selectedPet.temperature && (
                      <div style={{
                        padding: '14px 18px',
                        backgroundColor: 'rgba(74, 222, 128, 0.05)',
                        border: '1px solid rgba(74, 222, 128, 0.15)',
                        borderRadius: '12px',
                      }}>
                        <p style={{ color: 'rgba(74, 222, 128, 0.7)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🌡️ Temperature</p>
                        <p style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.temperature}</p>
                      </div>
                    )}
                    {selectedPet.humidity && (
                      <div style={{
                        padding: '14px 18px',
                        backgroundColor: 'rgba(74, 222, 128, 0.05)',
                        border: '1px solid rgba(74, 222, 128, 0.15)',
                        borderRadius: '12px',
                      }}>
                        <p style={{ color: 'rgba(74, 222, 128, 0.7)', fontSize: '0.7rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>💧 Humidity</p>
                        <p style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.humidity}</p>
                      </div>
                    )}
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
