'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, useProgress } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

// Preload the model
useGLTF.preload('https://assets.k12path.com/MystikCafe/chameleon.glb');

// 1. The Chameleon Model Component
function ChameleonModel({ onLoaded }: { onLoaded?: () => void }) {
  const { scene } = useGLTF('https://assets.k12path.com/MystikCafe/chameleon.glb');
  
  useEffect(() => {
    if (scene && onLoaded) {
      // Small delay to ensure textures are fully processed
      setTimeout(() => onLoaded(), 100);
    }
  }, [scene, onLoaded]);
  
  return (
    <primitive 
      object={scene} 
      scale={0.05}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

// 2. Loading Progress Tracker
function LoadingTracker({ onReady }: { onReady: () => void }) {
  const { progress, loaded, total } = useProgress();
  const [assetsReady, setAssetsReady] = useState(false);
  
  useEffect(() => {
    // Wait until progress reaches 100% and stays there
    if (progress >= 100 && !assetsReady) {
      // Additional delay to ensure everything is rendered
      const timer = setTimeout(() => {
        setAssetsReady(true);
        onReady();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, assetsReady, onReady]);
  
  return null;
}

// 3. Loading indicator (3D fallback inside canvas)
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
      {/* Right side scroll stripe - touchable area for scrolling */}
      <div 
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '70px',
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), transparent)',
          zIndex: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          touchAction: 'pan-y',
        }}
      >
        {/* Scroll down icon with animation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s infinite',
        }}>
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 5v14M5 12l7 7 7-7" 
              stroke="#1B5E20" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </>
  );
}

// 5. The Main Scene
export default function HeroScene({ onLoaded }: { onLoaded?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

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

  const handleReady = () => {
    setIsReady(true);
    if (onLoaded) onLoaded();
  };

  if (!mounted) {
    return null;
  }

  return (
    <div 
      className="h-full w-full" 
      style={{ 
        position: 'relative',
        cursor: 'move',
        touchAction: 'pan-y',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s ease',
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
          <ChameleonModel onLoaded={handleReady} />
          <LoadingTracker onReady={handleReady} />
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
