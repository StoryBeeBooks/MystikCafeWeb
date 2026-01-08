'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';

// 1. The Chameleon Model Component
function ChameleonModel() {
  // Load the GLB from your URL
  const { scene } = useGLTF('https://assets.k12path.com/MystikCafe/chameleon.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={2} // Adjust this number to make it bigger/smaller
      position={[0, -1, 0]} // Move it down slightly so it's centered
      rotation={[0, Math.PI / 4, 0]} // Slight initial turn
    />
  );
}

// 2. The Main Scene
export default function HeroScene() {
  return (
    <div className="h-full w-full cursor-move">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting: Makes it look realistic, not flat */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Environment: Adds jungle-like reflections on the skin */}
        <Environment preset="forest" />

        <Suspense fallback={null}>
          <ChameleonModel />
        </Suspense>

        {/* Controls: Rotate YES, Zoom NO */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} // Prevent looking from underneath
          maxPolarAngle={Math.PI / 1.5} // Prevent looking from too high above
          autoRotate={true} // Optional: Slowly spins by itself until user grabs it
          autoRotateSpeed={0.5}
        />
        
        {/* Shadows: Adds a nice shadow on the "floor" */}
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
