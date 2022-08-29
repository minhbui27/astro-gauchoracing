import * as React from 'react'
import '../../styles/about.scss'
import img1 from '/about_images/img1.jpg'
import img2 from '/about_images/img2.jpg'
import img3 from '/about_images/img3.jpg'
export default function About(): JSX.Element {
  return (
    <div className='w-full min-h-screen bg-about'>
      <div className='h-20 w-full'></div>
      <div className='my-4 about-text text-7xl flex justify-center px-4 flex-row w-full'>
        What we are about
      </div>
      <div className='flex flex-col sm:flex-row h-full w-full'>
        <div className='flex flex-col w-full sm:w-1/2'>
          <div className='content-text text-4xl text-center flex justify-start px-4 flex-col w-full'>
            <p>
              We envision the current academic year, 2020-2021, as a period of
              organization and resource-building.
            </p>
            <p>
              This will include assembling a team, holding regular meetings in
              consultation with faculty advisors, finding the necessary fiscal
              and material resources, and undertaking the research and
              development phase of our project.
            </p>
            <p>
              In the academic year 2021/2022, we plan to design and construct
              and test a fully electric vehicle within the FSAE framework and to
              enter it in the intercollegiate SAE Electric competition.
            </p>
          </div>
        </div>
        <div className='order-first flex flex-row flex-wrap w-full sm:w-1/2'>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img2} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img1} />
            <img src={img2} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img1} />
            <img src={img3} />
          </div>
        </div>
      </div>
    </div>
  )
}
