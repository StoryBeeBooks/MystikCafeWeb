'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { LizardIcon, SoundIcon, PauseIcon, ResetIcon } from '@/components/icons';

// Chevron icons for carousel
const ChevronLeftIcon = ({ size = 24, color = '#1A1A1A' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = ({ size = 24, color = '#1A1A1A' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Pet data - images and audio will be added later
interface Pet {
  id: number;
  name: string;
  nickname: string;
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
  { id: 1, name: 'Bearded Dragon', nickname: 'Mango', image: 'https://assets.k12path.com/MystikCafe/pets/bearded%20dragon.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Mango%20-%20Bearded%20Dragon.mp3', species: 'Pogona vitticeps', origin: 'Australia', habitat: 'Arid woodlands, scrublands, deserts', size: '18-24 inches', temperature: '75-85°F (basking: 100-110°F)', humidity: '30-40%', diet: 'Omnivore - insects, vegetables, fruits', lifespan: '10-15 years', funFact: 'Mango waves their arms to say hello!', description: 'Meet Mango, our gentle and charismatic bearded dragon! Known for their calm demeanor and adorable "beard" that puffs up when excited to see visitors, Mango is always ready for a photo op.' },
  { id: 2, name: 'Malagasy Three-Eyed Lizard', nickname: 'Mystik', image: 'https://assets.k12path.com/MystikCafe/pets/Malagasy%20Three-Eyed%20Lizard.jpg?v=2', audio: 'https://assets.k12path.com/MystikCafe/pets/Mystik%20Malagasy%20Three-Eyed%20Lizard.mp3', species: 'Chalarodon madagascariensis', origin: 'Madagascar', habitat: 'Sandy coastal areas, dry forests', size: '6-8 inches', temperature: '75-85°F (basking: 95°F)', humidity: '40-60%', diet: 'Insectivore', lifespan: '5-8 years', funFact: 'Mystik has a "third eye" on top of their head that detects light!', description: 'Say hello to Mystik, our magical namesake! This extraordinary lizard has a photosensitive pineal eye on top of their head. Mystik is the spiritual guardian of our café and loves basking under warm lights.' },
  { id: 3, name: 'Green Iguana', nickname: 'Sultan', image: 'https://assets.k12path.com/MystikCafe/pets/Green%20Iguana.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Sultan%20Green%20Iguana.mp3', species: 'Iguana iguana', origin: 'Central & South America', habitat: 'Tropical rainforests, near water sources', size: '4-6 feet', temperature: '75-85°F (basking: 95-100°F)', humidity: '65-75%', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Sultan can drop from 40 feet and land unharmed!', description: 'Introducing Sultan, our majestic green iguana and undisputed king of the Reptile Jungle! With impressive size and regal presence, Sultan surveys their domain with calm confidence. A true gentle giant who loves leafy greens.' },
  { id: 4, name: 'Red Iguana', nickname: 'Jerico', image: 'https://assets.k12path.com/MystikCafe/pets/Red%20Iguana.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Red%20Iguana%20%E2%80%A2%20Iguana%20iguana%20(color%20morph).mp3', species: 'Iguana iguana (color morph)', origin: 'Central & South America', habitat: 'Tropical rainforests, near water sources', size: '4-6 feet', temperature: '75-85°F (basking: 95-100°F)', humidity: '65-75%', diet: 'Herbivore - leaves, flowers, fruits', lifespan: '15-20 years', funFact: 'Jerico\'s fiery colors were selectively bred over generations!', description: 'Meet Jerico, our stunning red iguana with a personality as vibrant as their scales! This beautiful color morph showcases nature\'s artistry. Jerico is the social butterfly of our iguana family and loves attention.' },
  { id: 5, name: 'Uromastyx', nickname: 'Brick', image: 'https://assets.k12path.com/MystikCafe/pets/Uromastyx.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Uromastyx%20Uromastyx%20sp%20Brick.mp3', species: 'Uromastyx sp.', origin: 'North Africa & Middle East', habitat: 'Rocky deserts, arid scrublands', size: '10-18 inches', temperature: '80-90°F (basking: 120-130°F)', humidity: '10-25%', diet: 'Herbivore - seeds, vegetables, flowers', lifespan: '15-20 years', funFact: 'Brick\'s spiky tail is their secret weapon!', description: 'This is Brick, our tough-as-nails uromastyx! Named for their solid, sturdy build, Brick is a desert warrior who loves soaking up heat. Don\'t let the spiky tail fool you – Brick is a total sweetheart who enjoys veggie treats.' },
  { id: 6, name: 'Emerald Swift', nickname: 'Zella', image: 'https://assets.k12path.com/MystikCafe/pets/Emerald%20Swift.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Emerald%20Swift%20%E2%80%A2%20Sceloporus%20malachiticus.mp3', species: 'Sceloporus malachiticus', origin: 'Central America', habitat: 'Mountain cloud forests, rocky areas', size: '6-8 inches', temperature: '75-82°F (basking: 90°F)', humidity: '60-80%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Zella displays brilliant emerald colors when showing off!', description: 'Zella is our dazzling emerald swift, a living jewel! With iridescent green-blue scales that shimmer like precious gems, Zella is always the center of attention. Quick and curious, this little beauty loves to explore.' },
  { id: 7, name: 'Leopard Gecko', nickname: 'Sahara', image: 'https://assets.k12path.com/MystikCafe/pets/Leopard%20Gecko.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Leopard%20Gecko%20%E2%80%A2%20Eublepharis%20macularius.mp3', species: 'Eublepharis macularius', origin: 'Pakistan, India, Afghanistan', habitat: 'Rocky grasslands, desert edges', size: '7-10 inches', temperature: '75-85°F (basking: 90°F)', humidity: '30-40%', diet: 'Insectivore', lifespan: '15-20 years', funFact: 'Sahara can chirp and vocalize!', description: 'Say hi to Sahara, our sweet leopard gecko! With their adorable spotted pattern and friendly disposition, Sahara is a guest favorite. Known for their gentle nature and occasional chirping sounds, Sahara loves evening hangouts.' },
  { id: 8, name: 'Crested Gecko', nickname: 'Jumper', image: 'https://assets.k12path.com/MystikCafe/pets/Crested%20Gecko.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Crested%20Gecko%20%E2%80%A2%20Correlophus%20ciliatus.mp3', species: 'Correlophus ciliatus', origin: 'New Caledonia', habitat: 'Tropical rainforests, on trees', size: '6-10 inches', temperature: '72-78°F', humidity: '60-80%', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Jumper\'s species was thought extinct until 1994!', description: 'Meet Jumper, our acrobatic crested gecko! Famous for their "eyelash" crests and incredible leaping abilities, Jumper lives up to their name. This little adventurer can stick to any surface and loves fruit-flavored treats.' },
  { id: 9, name: 'Gargoyle Gecko', nickname: 'Cassian', image: 'https://assets.k12path.com/MystikCafe/pets/Gargoyle%20Gecko.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Gargoyle%20Gecko%20%E2%80%A2%20Rhacodactylus%20auriculatus.mp3', species: 'Rhacodactylus auriculatus', origin: 'New Caledonia', habitat: 'Tropical forests, shrublands', size: '7-9 inches', temperature: '72-78°F', humidity: '60-70%', diet: 'Omnivore - fruit, nectar, insects', lifespan: '15-20 years', funFact: 'Cassian is named for their gothic horn-like bumps!', description: 'Cassian is our mysterious gargoyle gecko, looking like they stepped out of a gothic cathedral! With unique cranial bumps and a chunky build, Cassian has an air of ancient wisdom. Don\'t worry – despite the name, Cassian is incredibly docile.' },
  { id: 10, name: 'Panther Chameleon', nickname: 'Chami', image: 'https://assets.k12path.com/MystikCafe/pets/Panther%20Chameleon.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Panther%20Chameleon%20%E2%80%A2%20Furcifer%20pardalis.mp3', species: 'Furcifer pardalis', origin: 'Madagascar', habitat: 'Tropical forests, coastal lowlands', size: '12-20 inches', temperature: '72-80°F (basking: 85-90°F)', humidity: '50-70%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Chami can move each eye independently 360 degrees!', description: 'Chami is our rainbow superstar! As one of the most colorful reptiles on Earth, Chami displays incredible patterns that change with mood. Watch those eyes move independently – it\'s like having two personalities in one adorable chameleon!' },
  { id: 11, name: 'Nosy Be Panther Chameleon', nickname: 'Blueberry', image: 'https://assets.k12path.com/MystikCafe/pets/Nosy%20Be%20Panther%20Chameleon.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Nosy%20Be%20Panther%20Chameleon%20%E2%80%A2%20Furcifer%20pardalis.mp3', species: 'Furcifer pardalis', origin: 'Nosy Be Island, Madagascar', habitat: 'Tropical island forests', size: '12-18 inches', temperature: '72-80°F (basking: 85-90°F)', humidity: '50-70%', diet: 'Insectivore', lifespan: '5-7 years', funFact: 'Blueberry comes from the beautiful Nosy Be Island!', description: 'Blueberry is our stunning Nosy Be locale panther chameleon! Named for their gorgeous blue coloration, Blueberry is a true island beauty from Madagascar. Their vibrant turquoise and green hues are absolutely breathtaking.' },
  { id: 12, name: 'Veiled Chameleon', nickname: 'Stella', image: 'https://assets.k12path.com/MystikCafe/pets/Veiled%20Chameleon.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Veiled%20Chameleon%20%E2%80%A2%20Chamaeleo%20calyptratus.mp3', species: 'Chamaeleo calyptratus', origin: 'Yemen, Saudi Arabia', habitat: 'Mountain valleys, plateaus with vegetation', size: '14-24 inches', temperature: '72-80°F (basking: 85-95°F)', humidity: '50-70%', diet: 'Insectivore - also eats some plants', lifespan: '5-8 years', funFact: 'Stella\'s tongue can be twice their body length!', description: 'Stella is our elegant veiled chameleon, wearing a magnificent casque (helmet) like a crown! This fashionable reptile changes colors based on mood and temperature. Stella\'s lightning-fast tongue is a marvel to witness during feeding time.' },
  { id: 13, name: 'Giant Leaf-Tailed Gecko', nickname: 'Alastor', image: 'https://assets.k12path.com/MystikCafe/pets/Giant%20Leaf-Tailed%20Gecko.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Giant%20Leaf-Tailed%20Gecko%20%E2%80%A2%20Uroplatus%20fimbriatus.mp3', species: 'Uroplatus fimbriatus', origin: 'Madagascar', habitat: 'Primary rainforests, on tree trunks', size: '9-12 inches', temperature: '70-75°F', humidity: '70-80%', diet: 'Insectivore', lifespan: '8-10 years', funFact: 'Alastor is a master of camouflage – nearly invisible against bark!', description: 'Meet Alastor, our phantom of the forest! This incredible gecko is a master of disguise with a flat, leaf-shaped tail and cryptic coloration. Finding Alastor in their enclosure is like a real-life game of hide and seek!' },
  { id: 14, name: 'White-Eyed Crocodile Skink', nickname: 'Gremlin', image: 'https://assets.k12path.com/MystikCafe/pets/White-Eyed%20Crocodile%20Skink.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/White-Eyed%20Crocodile%20Skink%20%E2%80%A2%20Tribolonotus%20gracilis.mp3', species: 'Tribolonotus gracilis', origin: 'New Guinea', habitat: 'Tropical rainforests, near streams', size: '8-10 inches', temperature: '72-78°F', humidity: '70-90%', diet: 'Insectivore', lifespan: '10-12 years', funFact: 'Gremlin can vocalize – one of few lizards that do!', description: 'Gremlin is our adorable dragon-in-miniature! With armored scales and distinctive white rings around their eyes, Gremlin looks like they belong in a fantasy movie. Despite the mischievous name, Gremlin is shy and sweet.' },
  { id: 15, name: 'Northern Blue-Tongued Skink', nickname: 'Burrito', image: 'https://assets.k12path.com/MystikCafe/pets/Northern%20Blue-Tongued%20Skink.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Northern%20Blue-Tongued%20Skink%20%E2%80%A2%20Tiliqua%20scincoides%20intermedia.mp3', species: 'Tiliqua scincoides intermedia', origin: 'Australia', habitat: 'Grasslands, woodlands, semi-arid areas', size: '18-24 inches', temperature: '75-85°F (basking: 95-100°F)', humidity: '40-60%', diet: 'Omnivore - snails, insects, fruits, vegetables', lifespan: '15-20 years', funFact: 'Burrito\'s blue tongue scares away predators!', description: 'Burrito is our chunky, lovable blue-tongued skink! Named for their adorable sausage-shaped body, Burrito loves to flash their bright blue tongue. This friendly goofball is always down for snacks and chin scratches.' },
  { id: 16, name: 'Clown Ball Python', nickname: 'Leona', image: 'https://assets.k12path.com/MystikCafe/pets/Clown%20Ball%20Python.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Clown%20Ball%20Python%20%E2%80%A2%20Python%20regius.mp3', species: 'Python regius', origin: 'West Africa', habitat: 'Grasslands, open forests, agricultural areas', size: '3-5 feet', temperature: '78-80°F (basking: 88-92°F)', humidity: '50-60%', diet: 'Carnivore - rodents', lifespan: '20-30 years', funFact: 'Leona curls into a ball when scared – hence "ball python"!', description: 'Leona is our beautiful clown ball python with stunning golden patterns! Despite the "clown" in her name, Leona is elegant and graceful. She loves to curl up in cozy spots and is surprisingly gentle for photo sessions.' },
  { id: 17, name: 'Mexican Black Kingsnake', nickname: 'King T\'Challa', image: 'https://assets.k12path.com/MystikCafe/pets/Mexican%20Black%20Kingsnake.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Mexican%20Black%20Kingsnake%20%E2%80%A2%20Lampropeltis%20getula%20nigrita.mp3', species: 'Lampropeltis getula nigrita', origin: 'Mexico', habitat: 'Desert scrublands, rocky hillsides', size: '3-4 feet', temperature: '75-85°F (basking: 88°F)', humidity: '40-60%', diet: 'Carnivore - rodents, other snakes', lifespan: '15-20 years', funFact: 'King T\'Challa is immune to rattlesnake venom!', description: 'All hail King T\'Challa, our magnificent Mexican black kingsnake! With jet-black scales that shimmer with an iridescent purple sheen, this royal serpent rules with quiet dignity. True to their name, King T\'Challa is noble and docile.' },
  { id: 18, name: 'Yellow Quince Monitor', nickname: 'Passionfruit', image: 'https://assets.k12path.com/MystikCafe/pets/Yellow%20Quince%20Monitor.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Yellow%20Quince%20Monitor%20%E2%80%A2%20Varanus%20melinus.mp3', species: 'Varanus melinus', origin: 'Indonesia', habitat: 'Tropical forests, mangroves', size: '3-4 feet', temperature: '80-85°F (basking: 95-100°F)', humidity: '70-80%', diet: 'Carnivore - insects, eggs, small animals', lifespan: '15-20 years', funFact: 'Passionfruit is one of the most colorful monitors in the world!', description: 'Passionfruit is our intelligent and curious yellow quince monitor! With striking yellow and black coloration, Passionfruit is always investigating their surroundings. This clever reptile recognizes their keepers and loves enrichment activities.' },
  { id: 19, name: 'Milk Frog', nickname: 'Caramilk', image: 'https://assets.k12path.com/MystikCafe/pets/milk%20frog.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Milk%20Frog%20%E2%80%A2%20Trachycephalus%20resinifictrix.mp3', species: 'Trachycephalus resinifictrix', origin: 'Amazon Rainforest', habitat: 'Tropical rainforest canopy, near water', size: '2.5-4 inches', temperature: '75-82°F', humidity: '70-80%', diet: 'Insectivore', lifespan: '8-10 years', funFact: 'Caramilk secretes a milky substance when stressed!', description: 'Caramilk is our charming Amazon milk frog with gorgeous blue and brown bands! Named after the chocolate bar (because milk frog + caramel colors = Caramilk!), this tree-dwelling cutie is most active at night and loves the humidity.' },
  { id: 20, name: 'Axolotl', nickname: 'Ashton', image: 'https://assets.k12path.com/MystikCafe/pets/Axolotl.jpg', audio: 'https://assets.k12path.com/MystikCafe/pets/Axolotl%20%E2%80%A2%20Ambystoma%20mexicanum.mp3', species: 'Ambystoma mexicanum', origin: 'Lake Xochimilco, Mexico', habitat: 'Freshwater lakes, canals (aquatic)', size: '9-12 inches', temperature: '60-68°F (cool water)', humidity: 'N/A (fully aquatic)', diet: 'Carnivore - worms, small fish, insects', lifespan: '10-15 years', funFact: 'Ashton can regenerate entire limbs, heart, and even brain parts!', description: 'Ashton is our amazing axolotl – the "walking fish" that\'s actually a salamander! With their permanent smile and feathery gills, Ashton is absolutely adorable. This aquatic wonder is critically endangered in the wild, making Ashton extra special.' },
];

export default function PetsPage() {
  const [selectedPet, setSelectedPet] = useState<Pet>(pets[0]); // Default to Mango
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const selectPet = (pet: Pet) => {
    setSelectedPet(pet);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleAudio = () => {
    if (audioRef.current && selectedPet?.audio) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

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
          Meet Our Residents
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#4A4A4A',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Come and meet all of our residents in person!
        </p>
      </section>

      {/* Pet Detail Section - Above Cards */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 32px)',
        backgroundColor: '#FFFFFF',
      }}>
        <div className="detail-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 'clamp(32px, 5vw, 60px)',
          alignItems: 'center',
        }}>
          {/* Left: Image */}
          <div style={{
            position: 'relative',
          }}>
            <div style={{
              aspectRatio: '4/5',
              backgroundColor: '#F8F9FA',
              backgroundImage: selectedPet.image ? `url(${selectedPet.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}>
              {!selectedPet.image && (
                <LizardIcon size={120} color="#E0E0E0" />
              )}
            </div>
            
            {/* Audio Controls */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              display: 'flex',
              gap: '12px',
            }}>
              <button
                onClick={toggleAudio}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: isPlaying ? '#0D2818' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: isPlaying ? '#FFFFFF' : '#0D2818',
                  cursor: selectedPet.audio ? 'pointer' : 'default',
                  opacity: selectedPet.audio ? 1 : 0.4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                }}
                title={selectedPet.audio ? 'Play/Pause sound' : 'Audio coming soon'}
                disabled={!selectedPet.audio}
              >
                {isPlaying ? <PauseIcon size={24} color="#FFFFFF" /> : <SoundIcon size={24} color={selectedPet.audio ? '#0D2818' : '#0D281866'} />}
              </button>
              {selectedPet.audio && (
                <button
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = 0;
                      audioRef.current.play();
                      setIsPlaying(true);
                    }
                  }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  }}
                  title="Restart sound"
                >
                  <ResetIcon size={24} color="#0D2818" />
                </button>
              )}
            </div>
            
            {selectedPet.audio && (
              <audio
                ref={audioRef}
                src={selectedPet.audio}
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />
            )}
          </div>

          {/* Right: Info */}
          <div>
            {selectedPet.species && (
              <p style={{
                color: '#0D2818',
                fontStyle: 'italic',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                marginBottom: '8px',
                fontWeight: '500',
              }}>
                {selectedPet.name} • {selectedPet.species}
              </p>
            )}
            <h2 style={{
              fontFamily: '"Rubik Distressed", cursive',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#1A1A1A',
              lineHeight: '1.1',
              marginBottom: 'clamp(16px, 2vw, 24px)',
            }}>
              {selectedPet.nickname}
            </h2>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #0D2818, transparent)',
              marginBottom: 'clamp(16px, 2vw, 24px)',
              borderRadius: '2px',
            }} />
            {selectedPet.description && (
              <p style={{
                color: '#4A4A4A',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                lineHeight: '1.7',
                marginBottom: 'clamp(20px, 3vw, 32px)',
              }}>
                {selectedPet.description}
              </p>
            )}

            {/* Info Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '16px',
            }}>
              {selectedPet.origin && (
                <div style={{ padding: '12px 14px', backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.7rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🌍 Origin</p>
                  <p style={{ color: '#1A1A1A', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.origin}</p>
                </div>
              )}
              {selectedPet.lifespan && (
                <div style={{ padding: '12px 14px', backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.7rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>⏳ Lifespan</p>
                  <p style={{ color: '#1A1A1A', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.lifespan}</p>
                </div>
              )}
              {selectedPet.size && (
                <div style={{ padding: '12px 14px', backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.7rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>📏 Size</p>
                  <p style={{ color: '#1A1A1A', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.size}</p>
                </div>
              )}
              {selectedPet.diet && (
                <div style={{ padding: '12px 14px', backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
                  <p style={{ color: '#6B7280', fontSize: '0.7rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🍽️ Diet</p>
                  <p style={{ color: '#1A1A1A', fontSize: '0.85rem', fontWeight: '500' }}>{selectedPet.diet}</p>
                </div>
              )}
            </div>

            {selectedPet.funFact && (
              <div style={{
                padding: '16px 20px',
                backgroundColor: '#FFF8E1',
                borderRadius: '12px',
              }}>
                <p style={{ color: '#0D2818', fontSize: '0.75rem', fontWeight: '600', marginBottom: '4px', letterSpacing: '0.05em' }}>✨ FUN FACT</p>
                <p style={{ color: '#1A1A1A', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic' }}>"{selectedPet.funFact}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pets Carousels - Two Separate Rows */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 32px) clamp(40px, 8vw, 80px)',
        backgroundColor: '#FFFFFF',
      }}>
        {/* Row 1 - First 10 pets */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          {/* Left Arrow */}
          <button
            className="carousel-arrow"
            onClick={() => {
              const container = document.getElementById('pets-row-1');
              if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
            }}
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F5F0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeftIcon size={24} color="#1A1A1A" />
          </button>

          {/* Right Arrow */}
          <button
            className="carousel-arrow"
            onClick={() => {
              const container = document.getElementById('pets-row-1');
              if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
            }}
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F5F0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRightIcon size={24} color="#1A1A1A" />
          </button>

          {/* Row 1 Cards */}
          <div
            id="pets-row-1"
            className="pets-row"
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {pets.slice(0, 10).map((pet) => (
              <div
                key={pet.id}
                onClick={() => selectPet(pet)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  backgroundColor: selectedPet.id === pet.id ? '#0D2818' : '#F8F9FA',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: selectedPet.id === pet.id ? '0 4px 24px rgba(13, 40, 24, 0.3)' : '0 2px 16px rgba(0, 0, 0, 0.04)',
                  scrollSnapAlign: 'start',
                  minWidth: '200px',
                  maxWidth: '200px',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (selectedPet.id !== pet.id) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPet.id !== pet.id) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.04)';
                  }
                }}
              >
                <div style={{
                  aspectRatio: '1',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundImage: pet.image ? `url(${pet.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {!pet.image && <span style={{ fontSize: '3rem' }}>🦎</span>}
                </div>
                <p style={{
                  color: selectedPet.id === pet.id ? '#FFFFFF' : '#1A1A1A',
                  textAlign: 'center',
                  marginTop: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-antonio), sans-serif',
                }}>
                  {pet.nickname}
                </p>
                <p style={{
                  color: selectedPet.id === pet.id ? 'rgba(255,255,255,0.7)' : '#6B7280',
                  textAlign: 'center',
                  marginTop: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  lineHeight: '1.3',
                }}>
                  {pet.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Last 10 pets */}
        <div style={{ position: 'relative' }}>
          {/* Left Arrow */}
          <button
            className="carousel-arrow"
            onClick={() => {
              const container = document.getElementById('pets-row-2');
              if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
            }}
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F5F0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeftIcon size={24} color="#1A1A1A" />
          </button>

          {/* Right Arrow */}
          <button
            className="carousel-arrow"
            onClick={() => {
              const container = document.getElementById('pets-row-2');
              if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
            }}
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F5F0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRightIcon size={24} color="#1A1A1A" />
          </button>

          {/* Row 2 Cards */}
          <div
            id="pets-row-2"
            className="pets-row"
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {pets.slice(10, 20).map((pet) => (
              <div
                key={pet.id}
                onClick={() => selectPet(pet)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  backgroundColor: selectedPet.id === pet.id ? '#0D2818' : '#F8F9FA',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: selectedPet.id === pet.id ? '0 4px 24px rgba(13, 40, 24, 0.3)' : '0 2px 16px rgba(0, 0, 0, 0.04)',
                  scrollSnapAlign: 'start',
                  minWidth: '200px',
                  maxWidth: '200px',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (selectedPet.id !== pet.id) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPet.id !== pet.id) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.04)';
                  }
                }}
              >
                <div style={{
                  aspectRatio: '1',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundImage: pet.image ? `url(${pet.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {!pet.image && <span style={{ fontSize: '3rem' }}>🦎</span>}
                </div>
                <p style={{
                  color: selectedPet.id === pet.id ? '#FFFFFF' : '#1A1A1A',
                  textAlign: 'center',
                  marginTop: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-antonio), sans-serif',
                }}>
                  {pet.nickname}
                </p>
                <p style={{
                  color: selectedPet.id === pet.id ? 'rgba(255,255,255,0.7)' : '#6B7280',
                  textAlign: 'center',
                  marginTop: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  lineHeight: '1.3',
                }}>
                  {pet.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: 'clamp(60px, 8vw, 100px)',
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
            There are a lot more Mystik residents waiting to meet you!
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#4A4A4A',
            marginBottom: 'clamp(24px, 4vw, 36px)',
          }}>
            Come and meet them in person
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

      {/* Styles */}
      <style jsx>{`
        .pets-row {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .pets-row::-webkit-scrollbar {
          display: none;
        }
        .detail-layout {
          grid-template-columns: 1fr 1.2fr;
        }
        .carousel-arrow {
          display: flex;
        }
        @media (max-width: 1024px) {
          .detail-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .carousel-arrow {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
