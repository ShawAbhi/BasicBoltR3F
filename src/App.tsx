import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Box } from 'lucide-react';
import { ScrollContent } from './components/ScrollContent';

export function App() {
  return (
    <>
      <div className="relative w-full h-[500vh]">
        <div className="fixed top-0 left-0 w-full h-screen">
          <div className="absolute top-4 left-4 z-10 text-white flex items-center gap-2">
            <Box className="w-6 h-6" />
            <h1 className="text-xl font-bold">R3F Scene</h1>
          </div>
          
          <Canvas
            shadows
            camera={{
              position: [-6, 4, 8],
              fov: 45,
              near: 0.1,
              far: 200
            }}
            gl={{ antialias: true }}
          >
            <Scene />
          </Canvas>
        </div>
        <ScrollContent />
      </div>
    </>
  );
}

export default App;