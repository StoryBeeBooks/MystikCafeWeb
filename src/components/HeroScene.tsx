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
      gap: '8px',
      zIndex: 30,
      fontSize: '12px',
      color: '#4A4A4A',
    }}>
      {/* Scroll icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 12l7 7 7-7" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontWeight: '500' }}>Scroll to explore</span>
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
        cursor: isMobile ? 'default' : 'move',
        touchAction: 'pan-y',
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 45 }}
        style={{ touchAction: 'pan-y' }}
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
          enabled={!isMobile}
        />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
      
      {/* Show touch instructions on mobile */}
      {isMobile && <TouchInstructionIcon />}
    </div>
  );
}
