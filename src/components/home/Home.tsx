import * as React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import '../../styles/Home.scss'
import { ModelCar } from './Model_car'
export function Car(): JSX.IntrinsicElements['group'] {
  // const camera = new THREE.PerspectiveCamera(40, 1 ,1, 10000)
  // camera.position.set(50,5,40)
  return (
    <group>
      <Canvas shadows>
        <Suspense fallback={<Html>loading...</Html>}>
          <ambientLight intensity={1} />
          <pointLight position={[1.5, 5, 1]} color={"#003660"} intensity={10} />
          <pointLight position={[-3, 6, 1]} color={"#FEBC11"} intensity={5} />
          <ModelCar scale={0.001} position={[1.5, 0, 1]} rotation={[0, -Math.PI/2, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </group>
  )
}
export default function Home() {
  return (
    <div className='bg-home w-full h-screen'>
      <Car />
    </div>
  )
}
