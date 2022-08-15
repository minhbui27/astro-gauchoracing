import * as React from 'react'
import { motion } from 'framer-motion'
interface ImagesProps {
  images?: string[]
}

export default function ScrollingImages(props: ImagesProps): JSX.Element {
  return (
    <motion.div className='h-1/3 overflow-hidden w-full flex'>
      {props.images.map((e: string): JSX.Element => {
        return (
          <div className='flex-none shrink-0 w-[22rem] h-full'>
            <motion.img
              // initial={{x: -100}}
              //     animate={{ x: 200 }}
              //     transition={{ ease:"linear", repeat: Infinity, repeatType: "reverse", duration: 2 }}
              className='object-contain h-full w-full'
              src={`/home_images/${e}.jpg`}
              alt={`${e}`}
            />
          </div>
        )
      })}
    </motion.div>
  )
}
