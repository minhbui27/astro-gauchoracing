import * as React from 'react'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
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
      ? 0.0025
      : props.responsiveWidth == 'md'
      ? 0.0022
      : 0.001
  const position =
    props.responsiveWidth == 'lg'
      ? [3, -0.5, 0]
      : props.responsiveWidth == 'md'
      ? [2.5, -0.5, 0]
      : [-1.275, 1.5, 0]
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
      <group ref={carRef}>
        <ModelCar position={position} scale={scale} rotation={rotation} />
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
      camera={{ zoom: 100, position: [0, 0, 10], near: 0.1, far: 1000 }}
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
          <group position={[0, 0.5, 0]} rotation={[Math.PI / 16, 0, 0]}>
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
                position={[0, -2, -4]}
              >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
              </mesh>
            </group>
          </group>
        </Flex>
        {/* <OrbitControls/> */}
      </Suspense>
    </Canvas>
  )
}
export default function Home() {
  return (
    <div className='bg-home w-full h-screen'>
      <div className='flex flex-row w-full h-1/5'>
        <div className='flex-1 justify-center'>
          <div className='flex-none h-16'></div>
          <div className='flex flex-col flex-1 mx-auto info-text w-3/5 h-full content-center text-center text-2xl lg:text-3xl'>
            Gaucho Racing is a SAE Collegiate Design Series organization managed
            by UC Santa Barbara’s SAE Collegiate Chapter. Our mission is to
            research, build and test a Formula SAE Electric vehicle, and to
            enter it in an SAE International competition in 2022.
          </div>
        </div>
        <div className='flex-1'>test</div>
        <div className='flex-1'>test</div>
      </div>
      <div className='bg-home w-full h-3/5'>
        <Scene />
      </div>
      <div className='w-full h-1/5'></div>
    </div>
  )
}
