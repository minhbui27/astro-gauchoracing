import * as React from 'react'
import '../../styles/Sponsors.scss'
import autodesk from '/sponsors_images/autodesk_logo.png'
import chassissim from '/sponsors_images/chassissim_logo.png'
import solidworks from '/sponsors_images/solidworks.png'
import ansys from '/sponsors_images/ansys_logo.png'
const Sponsors = (): JSX.Element => {
  return (
    <div className='pt-16 w-full bg-sponsors'>
      <div className='w-full h-full flex flex-col'>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Our Sponsors
        </div>
        <div className='px-4 md:px-20 lg:px-32 w-full'>
          <img src={autodesk} alt='autodesk' />
        </div>
        <div className='md:h-64 mt-8 md:mt-16 px-8 flex flex-col md:flex-row md:px-16 lg:px-24 w-full'>
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
