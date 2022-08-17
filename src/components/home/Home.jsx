import * as React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import '../../styles/Home.scss'
import { ModelCar } from './Model_car'
const Loading = () => {
  return <div>Loading...</div>
}
export function Car(props) {
  // const camera = new THREE.PerspectiveCamera(40, 1 ,1, 10000)
  // camera.position.set(50,5,40)
  console.log(props.responsiveWidth)
  const scale =
    props.responsiveWidth == 'lg'
      ? 0.0015
      : props.responsiveWidth == 'md'
      ? 0.0012
      : 0.001
  const position =
    props.responsiveWidth == 'lg'
      ? [2, -0.5, 0]
      : props.responsiveWidth == 'md'
      ? [1.8, -0.5, 0]
      : [-0.8, 1.5, 0]
  const rotation =
    props.responsiveWidth == 'lg'
      ? [0, -Math.PI / 2, 0]
      : props.responsiveWidth == 'md'
      ? [0, -Math.PI / 2, 0]
      : [Math.PI / 2, 0, 0]
  return (
    <group>
      {/* <mesh position={[0,0,0]}> */}
      {/*   <boxBufferGeometry attach='geometry' /> */}
      {/*   <meshBasicMaterial color='hotpink' attach='material' /> */}
      {/* </mesh> */}
      <pointLight position={[3, 5, 3]} color={'#003660'} intensity={10} />
      <pointLight position={[-3, 5, 3]} color={'#FEBC11'} intensity={2} />
      <ModelCar position={position} scale={scale} rotation={rotation} />
    </group>
  )
}
export default function Home() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const responsiveWidth = width > 1024 ? 'lg' : width > 768 ? 'md' : 'sm'
  return (
    <div className='bg-home w-full h-screen'>
      <Canvas shadows camera={{ fov: 90 }}>
        <Suspense
          fallback={
            <Html>
              <Loading />
            </Html>
          }
        >
          <fog attach='fog' args={['white', 0, 40]} />
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={0.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <Car responsiveWidth={responsiveWidth} />
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2, 0]}
            >
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={0.3} />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
