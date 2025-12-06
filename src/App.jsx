import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './Style.css'
import Cyl from './Cyl'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
        <Canvas camera={{ fov: 35 }}>
          <ambientLight />
          <Cyl/>
          <EffectComposer>
          <Bloom
        mipmapBlur
        intensity={7.0} // The bloom intensity.
        luminanceThreshold={0.14} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={2.5} // smoothness of the luminance threshold. Range is [0, 1]
      />
        </EffectComposer>
        </Canvas>

          <div className='w-full portfolio.'>
           <h1> welcome to my portfolio </h1>
          </div>
    </>
  );
};

export default App