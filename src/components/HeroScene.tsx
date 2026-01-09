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

// 3. Touch instruction icon for mobile
function TouchInstructionIcon() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      padding: '10px 14px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 30,
      fontSize: '12px',
      color: '#4A4A4A',
    }}>
      {/* Two finger rotate icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="8" r="3" stroke="#1B5E20" strokeWidth="1.5" fill="none"/>
          <circle cx="15" cy="8" r="3" stroke="#1B5E20" strokeWidth="1.5" fill="none"/>
          <path d="M9 11v6M15 11v6" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 14c-1.5 1.5-1.5 3 0 4.5M18 14c1.5 1.5 1.5 3 0 4.5" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span style={{ fontWeight: '500' }}>Rotate</span>
      </div>
      <div style={{ width: '1px', height: '20px', backgroundColor: '#ddd' }} />
      {/* One finger scroll icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" stroke="#1B5E20" strokeWidth="1.5" fill="none"/>
          <path d="M12 11v8" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 16l3 4 3-4" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontWeight: '500' }}>Scroll</span>
      </div>
    </div>
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
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches || 'ontouchstart' in window);
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
    <div className="h-full w-full cursor-move" style={{ position: 'relative' }}>
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
            ONE: 0, // Disable one-finger rotate (allows scroll)
            TWO: 1  // Two fingers to rotate (TOUCH.ROTATE = 1)
          }}
        />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
      
      {/* Show touch instructions on mobile */}
      {isMobile && <TouchInstructionIcon />}
    </div>
  );
}
