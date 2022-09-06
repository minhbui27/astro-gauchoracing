import * as React from 'react'
import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Preload } from '@react-three/drei'
import { ArrowheadDown } from '@styled-icons/evaicons-solid/ArrowheadDown'
import * as THREE from 'three'
import '../../styles/Home.scss'
import { Model } from './Sae'
import { motion } from 'framer-motion'
import { LoadingScreen } from './HomeHelpers'
export function Car(props) {
  const scale =
    props.responsiveWidth == 'lg'
      ? 0.12
      : props.responsiveWidth == 'md'
      ? 0.1
      : 0.05
  return (
    <group>
      <pointLight position={[3, 5, 3]} color={'#003660'} intensity={10} />
      <pointLight position={[-3, 5, 3]} color={'#FEBC11'} intensity={2} />
      <group>
        <group>
          <Model scale={scale}/>
        </group>
        {/* <OrbitControls/> */}
      </group>
    </group>
  )
}
function HtmlContent() {
  return (
    <Html
      args={[0, 0]}
      zIndexRange={[20, 0]}
      fullscreen
      style={{ width: '100vw', height: '100vh' }}
      className='absolute'
    >
      <div className='h-full bg-transparent flex flex-col justify-start'>
        <div className='h-20 md:h-24 w-full'></div>
        <div className='md:space-x-4 text-6xl lg:text-7xl select-none home-toptext flex flex-col md:flex-wrap md:flex-row justify-center'>
          <div className='text-5xl sm:text-6xl lg:text-7xl basis-auto flex flex-col text-start justify-center'>
            WELCOME TO
          </div>
          <div className='basis-auto flex flex-col text-start justify-center'>
            <a className='ucsb-link' href='https://www.ucsb.edu/'>
              {' '}
              UCSB{' '}
            </a>
          </div>
          <div className='text-5xl sm:text-6xl lg:text-7xl basis-auto flex flex-col text-start justify-center'>
            GAUCHO RACING
          </div>
        </div>
        <div className='hidden flex-1 md:flex flex-col justify-end'>
          <div className='flex flex-row space-x-4 justify-center'>
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: 5 }}
              className='select-none rotate-text flex flex-col text-xl justify-center'
            >
              Try rotating the car!
            </motion.div>
          </div>
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
              <ArrowheadDown size='48' />
            </motion.div>
          </div>
        </div>
      </div>
    </Html>
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
          <HtmlContent />
          <group
			rotation={responsiveWidth == 'sm' ? 
				[Math.PI/2,0,0] : 
				[0,-Math.PI/2,0]
			}
            position={
              responsiveWidth == 'sm'
                ? height > 825
                  ? [0, 0, 0]
                  : [0, 0.25, 0]
                : [0, 0, 0]
            }
          >
            {/* This is a pink box used to debug and calibrate the center of the canvas, because the car model is off center, and upright */}
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
              <Car castShadow rotation={[0,0,0]} responsiveWidth={responsiveWidth} />
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
        <Preload all />
        <OrbitControls
          camera={camera}
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
      <div className='bg-home w-full h-5/6 md:h-full'>
        <Scene />
      </div>
      <div className='flex flex-1 md:hidden flex-col h-1/6 justify-start'>
        <div className='flex flex-row space-x-2 justify-center'>
          <motion.div
            animate={{ opacity: 0 }}
            transition={{ duration: 2, delay: 5 }}
            className='select-none rotate-text flex flex-col text-xl justify-center'
          >
            Try rotating the car!
          </motion.div>
        </div>
        <motion.div
          className='flex flex-row justify-center'
          animate={{ y: 50 }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
          }}
        >
          <ArrowheadDown size='36' />
        </motion.div>
      </div>
    </div>
  )
}
