import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import '../../styles/Shop.scss'
export default function Shop(): JSX.Element {
  //Creating variables to indicate the visibility of the image carousel of each item
  const [hoodie, showHoodie] = useState<boolean | null>(false)
  const [keychain, showKeychain] = useState<boolean | null>(false)
  const [sticker, showSticker] = useState<boolean | null>(false)

	//functions to show the current item while hiding the other items
	const handleHoodie = (e) => {
		e.preventDefault();
		showHoodie(!hoodie);
		showKeychain(false);
		showSticker(false);
	}
	const handleSticker = (e) => {
		e.preventDefault();
		showSticker(!sticker);
		showHoodie(false);
		showKeychain(false);
	}
	const handleKeychain = (e) => {
		e.preventDefault();
		showKeychain(!keychain);
		showHoodie(false);
		showSticker(false);
	}
  return (
    <div className='pt-20 w-full min-h-screen bg-shop'>
      {/* This div below is made to change the visibility of everything to false, to allow for an option where
			clicking anywhere off the items will turn of the visibility*/}
      <div
        onClick={() => {
          showHoodie(false)
          showKeychain(false)
          showSticker(false)
        }}
        className='absolute w-full h-screen'
      ></div>

      <div className='justify-center min-h-screen w-full flex flex-wrap'>
        {/*These divs are small boxes showing the item, upon clicking will show the larger box with the image
				carousel of the items*/}
        <div
          onClick={handleHoodie}
          className='m-8 rounded-xl h-72 w-72 bg-gray drop-shadow-lg cursor-pointer'
        ></div>
        <div
          onClick={handleSticker}
          className='m-8 rounded-xl h-72 w-72 bg-gray drop-shadow-lg'
        ></div>
        <div
          onClick={handleKeychain}
          className='m-8 rounded-xl h-72 w-72 bg-gray drop-shadow-lg'
        ></div>

        {hoodie ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute h-96 w-96 bg-navy'
          >hoodie</motion.div>
        ) : (
          <div> </div>
        )}
        {sticker ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute h-96 w-96 bg-navy'
          >sticker</motion.div>
        ) : (
          <div> </div>
        )}
        {keychain ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute h-96 w-96 bg-navy'
          >keychain</motion.div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  )
}
