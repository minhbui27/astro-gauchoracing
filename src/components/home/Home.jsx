import * as React from 'react'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Preload } from '@react-three/drei'
import * as THREE from 'three'
import '../../styles/Home.scss'
import { ModelCar } from './Model_car'
import { Flex, Box } from '@react-three/flex'
const Loading = () => {
  return <div>Loading...</div>
}
export function Car(props) {
  // const camera = new THREE.PerspectiveCamera(40, 1 ,1, 10000)
  // camera.position.set(50,5,40)
  // console.log(props.responsiveWidth)
  const carRef = useRef(null)
  // useFrame((state, delta) => {
  //   carRef.current.rotation.y -= delta
  // })
  const scale =
    props.responsiveWidth == 'lg'
      ? 0.0035
      : props.responsiveWidth == 'md'
      ? 0.0025
      : 0.0015
  const rotation =
    props.responsiveWidth == 'lg'
      ? [0, -Math.PI / 2, 0]
      : props.responsiveWidth == 'md'
      ? [0, -Math.PI / 2, 0]
      : [Math.PI/2, 0, 0]
  const position =
    props.responsiveWidth == 'lg' || props.responsiveWidth == 'md'
      ? [
          (1.25 * scale) / 0.001,
          (-0.175 * scale) / 0.001,
          (-0.775 * scale) / 0.001,
        ]
      : [-1.665, 3, -0.5]
  return (
    <group position={[0,-1,0]}>
      <pointLight position={[3, 5, 3]} color={'#003660'} intensity={10} />
      <pointLight position={[-3, 5, 3]} color={'#FEBC11'} intensity={2} />
      <group position={position} ref={carRef}>
        <ModelCar scale={scale} rotation={rotation} />
      </group>
      {/* <OrbitControls/> */}
    </group>
  )
}
const Scene = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const responsiveWidth = width > 1024 ? 'lg' : width > 768 ? 'md' : 'sm'
  return (
    <Canvas
      shadows
      orthographic
      camera={{ zoom: 100, position: [0, 2, 10], near: 0.1, far: 1000 }}
    >
      <Suspense
        fallback={
          <Html>
            <Loading />
          </Html>
        }
      >
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Html zIndexRange={[10, 0]} fullscreen className='absolute z-0'>
            <div className='z-0 flex-1 flex-col justify-center w-full h-1/5'>
              <div className='flex-1 h-16 w-full'></div>
              <div className='flex-1 hidden sm:block h-8 w-full'></div>
              <div className='select-none home-toptext text-6xl md:text-7xl flex flex-1 flex-row justify-center'>
                Welcome to UCSB Gaucho Racing
              </div>
            </div>
          </Html>
          <group position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
            <mesh position={[0, 0, 0]}>
              <boxBufferGeometry args={[0.1, 0.1, 0.1]} attach='geometry' />
              <meshBasicMaterial color='hotpink' attach='material' />
            </mesh>
            <fog attach='fog' args={['white', 0, 40]} />
            <ambientLight intensity={0.1} />
            <directionalLight
              intensity={0.5}
              castShadow
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
            />
            <Box width='auto' height='auto' centerAnchor>
              <Car responsiveWidth={responsiveWidth} />
            </Box>
            <group>
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={responsiveWidth == "sm" ? [0,-4,-4] : [0, -2, -4]}
              >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
              </mesh>
            </group>
          </group>
        </Flex>
        <Preload all />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  )
}
export default function Home() {
  return (
    <div className='bg-home w-full h-screen'>
      {/*     <div className='flex-1 flex-col justify-center w-full h-1/5'> */}
      {/* <div className='flex-1 h-16 w-full'></div> */}
      {/* <div className='flex-1 hidden sm:block h-8 w-full'></div> */}
      {/* <div className='big-text flex flex-1 flex-row justify-center'> */}
      {/* Welcome to UCSB Gaucho Racing */}
      {/* </div> */}
      {/*     </div> */}
      <div className='bg-home w-full h-full'>
        <Scene />
      </div>
    </div>
  )
}
