import * as React from 'react'
import '../../styles/Sponsors.scss'
import autodesk from '/sponsors_images/autodesk_logo.png'
import chassissim from '/sponsors_images/chassissim_logo.png'
import solidworks from '/sponsors_images/solidworks.png'
import ansys from '/sponsors_images/ansys_logo.png'

const Sponsors = (): JSX.Element => {
  return (
    <div className='pt-16 w-full min-h-screen bg-sponsors'>
      <div className='w-full h-full flex flex-col'>
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Our Sponsors
        </div>
        <div className='px-12 md:px-20 lg:px-32 w-full'>
          <img src={autodesk} alt='autodesk' />
        </div>
        <div className='h-32 md:h-64 md:mt-16 px-8 flex flex-row md:px-16 lg:px-24 w-full'>
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
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Individual Donors
        </div>
        <div className='px-32 flex flex-row'>
          <div className='space-y-2 text-2xl flex-1 flex flex-col text-center justify-center'>
            <p>Eli Bocek-Rivele</p>

            <p>Vin Tran</p>

            <p>Alen Iqbal</p>

            <p>Kelly Yan</p>

            <p>Mark Allen</p>

            <p>Charles Evans</p>

            <p>Vedant Shah</p>
          </div>
          <div className='space-y-2 flex-1 text-2xl flex flex-col text-center justify-center'>
            <p>Andrew Peng</p>

            <p>Stephen Rivele</p>

            <p>Jennifer Hata</p>

            <p>Collin Dunner</p>

            <p>Dylan Pratt</p>

            <p>Owen Knudsen</p>
          </div>
          <div className='space-y-2 flex-1 text-2xl flex flex-col text-center justify-center'>
            <p>Mark Allen</p>

            <p>Appan Thirumaligai</p>

            <p>Biao Chen</p>

            <p>Dan LeVier</p>

            <p>Stephen Wong</p>

            <p>Lisa Marchese</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
