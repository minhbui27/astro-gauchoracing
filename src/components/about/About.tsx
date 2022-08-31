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
      <div className='px-4 sm:px-16 md:px-32 flex flex-col lg:flex-row h-full w-full'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <div className='content-text text-xl md:text-2xl text-start flex justify-start px-4 flex-col'>
            <p>
              We envision the current academic year, 2020-2021, as a period of
              organization and resource-building.
            </p>
            <br></br>
            <p>
              This will include assembling a team, holding regular meetings in
              consultation with faculty advisors, finding the necessary fiscal
              and material resources, and undertaking the research and
              development phase of our project.
            </p>
            <br></br>
            <p>
              In the academic year 2021/2022, we plan to design and construct
              and test a fully electric vehicle within the FSAE framework and to
              enter it in the intercollegiate SAE Electric competition.
            </p>
          </div>
        </div>
        <div className='order-first flex flex-row flex-wrap w-full lg:w-1/2'>
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
      <div className='mt-4 about-text text-7xl flex justify-center px-4 flex-row w-full'>
        Mission
      </div>
      <div className='py-8 flex flex-col sm:flex-row h-full w-full'>
        <div className='mx-4 sm:mx-12 md:mx-32 content-text text-xl md:text-3xl text-start flex justify-start px-4 flex-col'>
          <p>
            Our Gaucho Racing project will enable students to gain hands-on
            experience in all phases of automotive design and construction,
            offering opportunities to acquire skills and knowledge beyond the
            theoretical, and to test the product of their learning against teams
            from around the country and across the globe.
          </p>

          {/* <p>While we will be reviving a UCSB Engineering tradition after a five-year hiatus, we wish to make it clear that participation in our team is not limited to engineering students.</p> */}
          <br></br>
          <p>
            All UCSB students are invited to contribute their skills, ideas,
            energy, and enthusiasm to our effort to keep alive the spirit of
            innovation and success which has characterized Gaucho Racing.
          </p>
        </div>
      </div>
      <div className='bg-officers h-screen w-full'>
        <div className='flex flex-col w-full h-full'>
          <div className='mx-4 my-8 text-officers text-7xl flex flex-row justify-center'>
            Our Officers
          </div>
          <div className='text-officers-info text-xl md:text-3xl mx-4 md:mx-16 my-8 flex flex-row justify-center'>
            From Left to Right: Torin Schlunk (Secretary). Cesar Castillo (Vice
            President), Nicholas Rivelle (President), Andrew Peng (Treasurer)
          </div>
        </div>
      </div>
    </div>
  )
}
