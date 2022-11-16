import * as React from 'react'
import {Instagram, Twitter} from '@styled-icons/boxicons-logos'
import {Linkedin} from '@styled-icons/bootstrap'
export function FooterIcons() {
  return (
    <div className='space-x-1 mt-2'>
      <a href='https://www.instagram.com/gauchoracingucsb/'>
		<Instagram size="36"/>
      </a>
      <a href='https://www.instagram.com/gauchoracingucsb/'>
		<Twitter size="36"/>
      </a>
      <a href='https://www.linkedin.com/company/gaucho-racing-at-uc-santa-barbara/mycompany/'>
		<Linkedin size="36"/>
      </a>
    </div>
	)
}
