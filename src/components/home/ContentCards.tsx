import * as React from 'react'
import img1 from '/home_images/img1.jpg'
export default function ContentCards(): JSX.Element {
  return (
    <div className='bg-about-boxes p-16 w-full h-[50rem] flex flex-col sm:flex-row'>
      <div className='rounded-3xl mx-8 h-full w-1/3 flex flex-col bg-box'>
        <div className='rounded-3xl w-full h-2/5 bg-green-300'>
          <img
            className='rounded-3xl object-cover w-full h-full'
            src={img1}
            alt=''
          />
        </div>
        <div className='w-full h-3/5 flex flex-col justify-center'>
          <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
            <div className='w-1/5 h-full'></div>
            <div className='w-3/5 h-full'>
              <p className='w-full h-full break-words'>
                testtesttesttesttesttesttesttesttesttest
              </p>
            </div>
            <div className='w-1/5 h-full'></div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl mx-8 h-full w-1/3 flex flex-col bg-box'>
        <div className='rounded-3xl w-full h-2/5 bg-green-300'>
          <img
            className='rounded-3xl object-cover w-full h-full'
            src={img1}
            alt=''
          />
        </div>
        <div className='w-full h-3/5 flex flex-col justify-center'>
          <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
            <div className='w-1/5 h-full'></div>
            <div className='w-3/5 h-full'>
              <p className='w-full h-full break-words'>
                testtesttesttesttesttesttesttesttesttest
              </p>
            </div>
            <div className='w-1/5 h-full'></div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl mx-8 h-full w-1/3 flex flex-col bg-box'>
        <div className='rounded-3xl w-full h-2/5 bg-green-300'>
          <img
            className='rounded-3xl object-cover w-full h-full'
            src={img1}
            alt=''
          />
        </div>
        <div className='w-full h-3/5 flex flex-col justify-center'>
          <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
            <div className='w-1/5 h-full'></div>
            <div className='w-3/5 h-full'>
              <p className='w-full h-full break-words'>
                testtesttesttesttesttesttesttesttesttest
              </p>
            </div>
            <div className='w-1/5 h-full'></div>
          </div>
        </div>
      </div>
   </div>
  )
}
