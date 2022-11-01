/* This file contains all the sponsors information. */
/* The logos are inputted manually, but the individual sponsors are pulled from a list of individual sponsors */
/* on a google sheet, the sheet_id of which is in the .env.local file and the file that handles that section */
/* is IndividualSponsors.astro, which calls the async function in SponsorSheets.ts */
import * as React from 'react'
import '../../styles/Sponsors.scss'
import autodesk from '/sponsors_images/autodesk_logo.png'
import chassissim from '/sponsors_images/chassissim_logo.png'
import solidworks from '/sponsors_images/solidworks.png'
import ansys from '/sponsors_images/ansys_logo.png'
import tesla from '/sponsors_images/tesla_logo.png'
import milpasmotors from '/sponsors_images/milpas_logo.png'
import nativelab from '/sponsors_images/nativelab_logo.png'
const Sponsors = (): JSX.Element => {
  return (
    <div className='pt-16 w-full bg-sponsors'>
      <div className='w-full h-full flex flex-col'>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Platinum Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={autodesk}
              className='object-contain'
              alt='chassis sim'
            />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={tesla} className='object-contain' alt='solidworks' />
          </div>
        </div>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Gold Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={milpasmotors} className='object-contain' alt='ansys' />
          </div>
        </div>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Silver Sponsors
        </div>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Bronze Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={nativelab} className='object-contain' alt='ansys' />
          </div>
        </div>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Software Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={chassissim}
              className='object-contain'
              alt='chassis sim'
            />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={solidworks} className='object-contain' alt='solidworks' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={ansys} className='object-contain' alt='ansys' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
