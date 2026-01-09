'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

// 1. The Chameleon Model Component
function ChameleonModel() {
  const { scene } = useGLTF('https://assets.k12path.com/MystikCafe/chameleon.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={0.05}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

// 2. Loading indicator
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#8B5CF6" wireframe />
    </mesh>
  );
}

// 3. Scroll stripe overlay for mobile
function ScrollStripe() {
  return (
    <>
      {/* Right side scroll stripe */}
      <div 
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '60px',
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.08), transparent)',
          zIndex: 25,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Scroll down icon */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.6 }}
        >
          <path 
            d="M12 5v14M5 12l7 7 7-7" 
            stroke="#1B5E20" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

// 4. The Main Scene
export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-white">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="h-full w-full" 
      style={{ 
        position: 'relative',
        cursor: 'move',
        touchAction: 'pan-y',
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 45 }}
        style={{ touchAction: isMobile ? 'pan-y' : 'none' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Environment preset="forest" />

        <Suspense fallback={<Loader />}>
          <ChameleonModel />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate={true}
          autoRotateSpeed={0.5}
          touches={{
            ONE: 0,   // Disable one-finger rotate (allows scroll)
            TWO: 1    // Two fingers to rotate
          }}
        />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
      
      {/* Show scroll stripe on mobile */}
      {isMobile && <ScrollStripe />}
    </div>
  );
}
