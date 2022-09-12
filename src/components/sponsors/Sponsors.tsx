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
        <div className='text-center justify-center text-4xl md:text-6xl lg:text-7xl flex flex-col our-sponsors h-32 w-full'>
          Individual Donors
        </div>
        <div className='my-8 px-8 md:px-32 flex flex-row justify-center'>
          <div className='hidden space-y-2 text-2xl flex-1 md:flex flex-row justify-center'>
			<div className='flex flex-col'>
            <p>Eli Bocek-Rivele</p>
            <p>Vin Tran</p>
            <p>Alen Iqbal</p>
            <p>Kelly Yan</p>
            <p>Mark Allen</p>
            <p>Charles Evans</p>
            <p>Vedant Shah</p>
			</div>
          </div>
          <div className='hidden space-y-2 text-2xl flex-1 md:flex flex-row justify-center'>
			<div className='flex flex-col'>
            <p>Andrew Peng</p>
            <p>Stephen Rivele</p>
            <p>Jennifer Hata</p>
            <p>Collin Dunner</p>
            <p>Dylan Pratt</p>
            <p>Owen Knudsen</p>
			</div>
          </div>
          <div className='hidden space-y-2 text-2xl flex-1 md:flex flex-row justify-center'>
			<div className='flex flex-col'>
            <p>Mark Allen</p>
            <p>Appan Thirumaligai</p>
            <p>Biao Chen</p>
            <p>Dan LeVier</p>
            <p>Stephen Wong</p>
            <p>Lisa Marchese</p>
			</div>
          </div>
          <div className='md:hidden space-y-2 text-2xl flex-1 flex flex-row justify-center'>
			<div className='flex flex-col'>
            <p>Eli Bocek-Rivele</p>
            <p>Vin Tran</p>
            <p>Alen Iqbal</p>
            <p>Kelly Yan</p>
            <p>Mark Allen</p>
            <p>Charles Evans</p>
            <p>Vedant Shah</p>
            <p>Mark Allen</p>
            <p>Appan Thirumaligai</p>
            <p>Biao Chen</p>
			</div>
          </div>
          <div className='md:hidden space-y-2 text-2xl flex-1 flex flex-row justify-center'>
			<div className='flex flex-col'>
            <p>Andrew Peng</p>
            <p>Stephen Rivele</p>
            <p>Jennifer Hata</p>
            <p>Collin Dunner</p>
            <p>Dylan Pratt</p>
            <p>Owen Knudsen</p>
            <p>Dan LeVier</p>
            <p>Stephen Wong</p>
            <p>Lisa Marchese</p>
			</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
