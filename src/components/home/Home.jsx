import * as React from 'react'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Preload } from '@react-three/drei'
import { ArrowheadDown } from '@styled-icons/evaicons-solid/ArrowheadDown'
import * as THREE from 'three'
import '../../styles/Home.scss'
import { ModelCar } from './Model_car'
import { Flex, Box } from '@react-three/flex'
import { motion } from 'framer-motion'
import { LoadingScreen } from './HomeHelpers'
export function Car(props) {
  // const camera = new THREE.PerspectiveCamera(40, 1 ,1, 10000)
  // camera.position.set(50,5,40)
  // console.log(props.responsiveWidth)
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
      : [Math.PI / 2, 0, 0]
  const position =
    props.responsiveWidth == 'lg' || props.responsiveWidth == 'md'
      ? [
          (1.25 * scale) / 0.001,
          (-0.175 * scale) / 0.001,
          (-0.775 * scale) / 0.001,
        ]
      : [-1.665, 3, -0.5]
  return (
    <group position={[0, -1, 0]}>
      <pointLight position={[3, 5, 3]} color={'#003660'} intensity={10} />
      <pointLight position={[-3, 5, 3]} color={'#FEBC11'} intensity={2} />
      <group position={position}>
        <ModelCar scale={scale} rotation={rotation} />
      </group>
      {/* <OrbitControls/> */}
    </group>
  )
}
function HtmlContent() {
  return (
    <div className='h-full bg-transparent flex flex-col justify-start'>
      <div className='h-16 w-full'></div>
      <div className='select-none home-toptext text-6xl md:text-7xl flex flex-1 flex-row justify-center'>
        <p>Welcome to Gaucho Racing</p>
      </div>
      <div className='hidden flex-1 md:flex flex-col justify-end'>
        <div className=' h-32 flex flex-row justify-center'>
          <motion.div
            animate={{ y: 50 }}
            transition={{
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
            }}
          >
            <ArrowheadDown size="48" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
function Scene() {
  const height =
    window.height ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const responsiveWidth = width > 1024 ? 'lg' : width > 768 ? 'md' : 'sm'
  const camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / 2,
    0.1,
    1000
  )
  camera.position.set(0, 2, 10)
  camera.zoom = 100
  return (
    <Canvas shadows camera={camera}>
      <Suspense
        fallback={
          <Html>
            <LoadingScreen />
          </Html>
        }
      >
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Html
            args={[0, 0]}
            zIndexRange={[20, 0]}
            fullscreen
            style={{ width: '100vw', height: '100vh' }}
            className='absolute'
          >
            <HtmlContent />
          </Html>
          <group
            position={responsiveWidth == 'sm' ? [0, 0, 0] : [0, 0.5, 0]}
            rotation={[0, 0, 0]}
          >
            {/* <mesh position={[0, 0, 0]}> */}
            {/*   <boxBufferGeometry args={[0.1, 0.1, 0.1]} attach='geometry' /> */}
            {/*   <meshBasicMaterial color='hotpink' attach='material' /> */}
            {/* </mesh> */}
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
                position={responsiveWidth == 'sm' ? [0, -3, -4] : [0, -2.5, -4]}
              >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
              </mesh>
            </group>
          </group>
        </Flex>
        <Preload all />
        <OrbitControls
          maxPolarAngle={1.5}
          minPolarAngle={1.5}
          enablePan={false}
          enableZoom={false}
        />
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
      <div className='bg-home w-full h-4/5 md:h-full'>
        <Scene />
      </div>
      <div className='flex flex-1 md:hidden flex-col h-1/5 justify-end'>
        <div className='h-32 flex flex-row justify-center'>
          <motion.div
            animate={{ y: 50 }}
            transition={{
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
            }}
          >
            <ArrowheadDown size="36" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
