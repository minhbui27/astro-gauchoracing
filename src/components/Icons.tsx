import * as React from 'react'
import {Instagram, Twitter} from '@styled-icons/boxicons-logos'
import {Linkedin} from '@styled-icons/bootstrap'
import styled from 'styled-components'
import {ArrowheadDown} from '@styled-icons/evaicons-solid/ArrowheadDown'
import {motion} from 'framer-motion'
const ArrowDown = styled(ArrowheadDown)`
	color:#003660;
`
export function FooterIcons() {
  return (
    <div className='space-x-1 mt-2'>
      <a href='https://www.instagram.com/sae.ucsb/'>
		<Instagram size="36"/>
      </a>
      <a href='https://www.instagram.com/sae.ucsb/'>
		<Twitter size="36"/>
      </a>
      <a href='https://www.instagram.com/sae.ucsb/'>
		<Linkedin size="36"/>
      </a>
    </div>
  )
}

export function HomeIcon() {
	return(
		<motion.div animate={{y:50}} transition={{ease:"linear", repeat:Infinity, repeatType: "loop", duration: 2}}>
			<ArrowDown size="48"/>
		</motion.div>
	)
}
