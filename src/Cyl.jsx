import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import  * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { Group } from 'three/examples/jsm/libs/tween.module.js';

const Cyl = () => {
    let tex = useTexture("./Frame 4.png");
    let cyl =  useRef(null);
    useFrame((state,delta)=>{
      cyl.current.rotation.y += delta;
    })

  return (
    <group rotation={[0, 1, 0.2]} >
   <mesh ref={cyl}>
     <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
     <meshBasicMaterial map={tex} side={THREE.DoubleSide} />
    </mesh>
    </group>
  )
}

export default Cyl