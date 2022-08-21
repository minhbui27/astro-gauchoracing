import * as React from 'react'
import {Instagram, Twitter} from '@styled-icons/boxicons-logos'
import {Linkedin} from '@styled-icons/bootstrap'
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
