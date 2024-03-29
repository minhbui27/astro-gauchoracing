/* This file contains all the sponsors information. */
/* The logos are inputted manually, but the individual sponsors are pulled from a list of individual sponsors */
/* on a google sheet, the sheet_id of which is in the .env.local file and the file that handles that section */
/* is IndividualSponsors.astro, which calls the async function in SponsorSheets.ts */
import * as React from 'react'
import '../../styles/Sponsors.scss'
const autodesk = '/sponsors_images/autodesk_logo.png'
const chassissim = '/sponsors_images/chassissim_logo.png'
const solidworks = '/sponsors_images/solidworks.png'
const ansys = '/sponsors_images/ansys_logo.png'
const tesla = '/sponsors_images/tesla_logo.png'
const milpasmotors = '/sponsors_images/milpas_logo.png'
const nativelab = '/sponsors_images/nativelab_logo.png'
const haas = '/sponsors_images/haas_logo.png'
const vi_grade = '/sponsors_images/vi-grade_red_logo.png'
const ucsbfinance = '/sponsors_images/ucsbfinanceandbusiness.png'
const hesse_mechatronics = '/sponsors_images/hesse_mechatronics.png'
const pepsico_logo = '/sponsors_images/pepsico_logo.png'
const woodstocks_logo = '/sponsors_images/woodstocks_logo.png'
const anguiano_racing = '/sponsors_images/anguiano_racing.jpg'
const dtac = '/sponsors_images/dtac_logo.png'
const freestyletrailerco_logo = '/sponsors_images/freestyletrailerco_logo.png'
const noctunalwelding_logo = '/sponsors_images/noctunalwelding_logo.png'
const singlestore_logo = '/sponsors_images/singlestore_logo.png'
const firefly_aerospace_logo = '/sponsors_images/firefly_aerospace.png'
const Sponsors = (): JSX.Element => {
  return (
    <div className='pt-16 w-full bg-sponsors'>

      {/* Platinum sponsors */}
      <div className='w-full h-full flex flex-col'>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Platinum Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={autodesk} className='object-contain' alt='chassis sim' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={tesla} className='object-contain' alt='tesla' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={haas}
              className='object-contain'
              alt='Gene Haas Foundation'
            />
          </div>
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={ucsbfinance}
              className='object-contain'
              alt='UCSB Finance & Business Committee'
            />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={anguiano_racing}
              className='object-contain'
              alt='Anguiano Racing'
            />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={singlestore_logo}
              className='object-contain'
              alt='SingleStore'
            />
          </div>
        </div>
				<div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img
              src={firefly_aerospace_logo}
              className='object-contain'
              alt='FireFly Aerospace'
            />
          </div>
        </div>
        {/* Gold sponsors */}
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Gold Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={milpasmotors} className='object-contain' alt='milpasmotors' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={hesse_mechatronics} className='object-contain' alt='hesse mechatronics' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={woodstocks_logo} className='object-contain' alt='woodstocks pizza' />
          </div>
        </div>

        {/* Silver sponsors */}
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Silver Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={freestyletrailerco_logo} className='object-contain' alt='Freestyle Trailer Co' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={noctunalwelding_logo} className='object-contain' alt='noctunal welding' />
          </div>
        </div>

        {/* Bronze sponsors */}
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Bronze Sponsors
        </div>
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <img src={nativelab} className='object-contain' alt='ansys' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={pepsico_logo} className='object-contain' alt='pepsico' />
          </div>
          <div className='flex flex-row justify-center flex-1'>
            <img src={dtac} className='object-contain' alt='Drive Toward a Cure' />
          </div>
        </div>

        {/* Software sponsors */}
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
        <div className='md:h-48 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
          <div className='flex flex-row justify-center flex-1'>
            <a href='https://www2.news.vi-grade.com/e/832623/2022-11-09/24trtt/436609038?h=nfhr6jCYOA4bfgdveSLQnsc6RY4tWNSiFz6E204pYgc'>
              <img src={vi_grade} className='h-full w-full' alt='vi-grade' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
