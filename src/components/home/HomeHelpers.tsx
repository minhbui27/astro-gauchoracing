import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
interface ImagesProps {
  images?: string[]
  // direction 0 is to the left, 1 is to the right
  direction?: number
  duration?: number
}
interface SideLinesProps {
  repeat?: number
}
export default function ScrollingImages(props: ImagesProps): JSX.Element {
  return (
    <motion.div className='h-1/3 overflow-hidden w-full flex'>
      {props.images.map((e: string, i: number): JSX.Element => {
        return (
          <div key={i} className='flex-none shrink-0 w-1/2 lg:w-1/3 h-full'>
            <motion.img
              initial={{ x: props.direction ? "-400%" : 0 }}
              animate={{ x: props.direction ? 0 : "-400%"}}
              transition={{
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                duration: props.duration,
              }}
              className='p-2 object-cover h-full w-full'
              src={`/home_images/${e}.jpg`}
              alt={`${e}`}
            />
          </div>
        )
      })}
    </motion.div>
  )
}

export function SideLines(props: SideLinesProps): JSX.Element {
  return (
    <div className='flex flex-row overflow-hidden space-x-6 bg-white h-1/5 w-full'>
      {Array(props.repeat)
        .fill(0)
        .map((e: number, i: number) => {
          return (
            <div
              key={e + i}
              className='flex-none shrink-0 bg-red-600 h-full w-6'
            ></div>
          )
        })}
    </div>
  )
}

export function LoadingScreen(): JSX.Element {
  return <div>Loading...</div>
}
