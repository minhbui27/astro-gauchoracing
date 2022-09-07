import * as React from 'react'
import img1 from '/home_images/img1.jpg'
export default function ContentCards(): JSX.Element {
  return (
    <div className='bg-about-boxes py-4 px-4 md:px-32 justify-between w-full h-[50rem] flex flex-col md:flex-row'>
      <div className='rounded-3xl p-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-row md:flex-col'>
          <div className='rounded-3xl w-2/5 md:w-full h-full md:h-2/5 bg-green-300'>
            <img
              className='rounded-3xl object-cover w-full h-full'
              src={img1}
              alt=''
            />
          </div>
          <div className='w-3/5 md:w-full h-full md:h-3/5 flex flex-col justify-center'>
            <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
              <div className='w-1/5 h-full'></div>
              <div className='w-3/5 h-full'>
                <p className='w-full h-full'>
                  test test test test test test test test
                </p>
              </div>
              <div className='w-1/5 h-full'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl p-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-row md:flex-col'>
          <div className='rounded-3xl w-2/5 md:w-full h-full md:h-2/5 bg-green-300'>
            <img
              className='rounded-3xl object-cover w-full h-full'
              src={img1}
              alt=''
            />
          </div>
          <div className='w-3/5 md:w-full h-full md:h-3/5 flex flex-col justify-center'>
            <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
              <div className='w-1/5 h-full'></div>
              <div className='w-3/5 h-full'>
                <p className='w-full h-full'>
                  test test test test test test test test
                </p>
              </div>
              <div className='w-1/5 h-full'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl p-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-row md:flex-col'>
          <div className='rounded-3xl w-2/5 md:w-full h-full md:h-2/5 bg-green-300'>
            <img
              className='rounded-3xl object-cover w-full h-full'
              src={img1}
              alt=''
            />
          </div>
          <div className='w-3/5 md:w-full h-full md:h-3/5 flex flex-col justify-center'>
            <div className='text-3xl text-white w-full h-3/5 flex flex-row'>
              <div className='w-1/5 h-full'></div>
              <div className='w-3/5 h-full'>
                <p className='w-full h-full'>
                  test test test test test test test test
                </p>
              </div>
              <div className='w-1/5 h-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
