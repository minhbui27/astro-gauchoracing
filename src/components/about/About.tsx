import * as React from 'react'
import '../../styles/about.scss'
// imgs 1,2,3 are placeholder ones used to test display
import img1 from '/about_images/img1.jpg'
import img2 from '/about_images/img2.jpg'
import img3 from '/about_images/img3.jpg'

import img4 from '/about_images/img4.jpg'
import img5 from '/about_images/img5.jpg'
import img6 from '/about_images/img6.jpg'
import img7 from '/about_images/img7.jpg'
import img8 from '/about_images/img8.jpg'
import img9 from '/about_images/img9.jpg'
import img10 from '/about_images/img10.jpg'
import img11 from '/about_images/img11.jpg'
import img12 from '/about_images/img12.jpg'
import our_officers from '/our_officers.jpg'
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
              Gaucho Racing is the continuation of a long history of motorsports
              in Santa Barbara. Though teams have come and gone, it is our goal
              to create something that is lasting and will persevere through the
              years to highlight the engineering and business prowess of UC
              Santa Barbara Students. We put a strong focus on educating new
              members, providing them with the tools they need to succeed, both
              in school and outside.
            </p>
            <br></br>
            <p>
              Gaucho Racing strives to build a diverse and multidisciplinary
              team, able to challenge each other&apos;s ideas and assumptions,
              as we believe this leads to the best work, innovation and growth.
            </p>
          </div>
        </div>
        <div className='order-first flex flex-row flex-wrap w-full lg:w-1/2'>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img6} />
            <img src={img7} />
            <img src={img10} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img9} />
            <img src={img8} />
            <img src={img11} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img4} />
            <img src={img5} />
            <img src={img12} />
          </div>
        </div>
      </div>
      <div className='mt-4 about-text text-7xl flex justify-center px-4 flex-row w-full'>
        Mission
      </div>
      <div className='py-8 flex flex-col sm:flex-row h-full w-full'>
        <div className='mx-4 sm:mx-12 md:mx-32 content-text text-xl md:text-3xl text-start flex justify-start px-4 flex-col'>
          <p>
						Gaucho Racing aims to enable students to gain hands-on experience in all phases of the engineering process and propel them forward into their careers.
          </p>

          {/* <p>While we will be reviving a UCSB Engineering tradition after a five-year hiatus, we wish to make it clear that participation in our team is not limited to engineering students.</p> */}
        </div>
      </div>
      <div className='bg-officers min-h-screen w-full'>
        <div className='flex flex-col w-full h-full'>
          <div className='mx-4 my-4 text-officers text-7xl flex flex-row justify-center'>
            Our Officers
          </div>
          <div className='text-officers-info text-xl md:text-3xl mx-4 md:mx-16 mb-4 flex flex-row justify-center'>
            From Left to Right: Amitha Bhat, Andrew Peng, Dylan Pratt, Tien Nguyen, Cesar Castillo, Jason Wei, Aran Sandhu, Nicholas Rivelle, Raaghav Thirumaligai, Joshua Thomas, Thomas Yu, Anirudh Kumar, Stephen Wong, Roger Torres Aguilar, Sabrina Fox.
          </div>
					<div className='flex flex-col justify-center p-8 md:p-16 h-1/3'>
						<img className='object-scale-down' src={our_officers}/>
					</div>
        </div>
      </div>
    </div>
  )
}
