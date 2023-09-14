import * as React from 'react'
const ourteam = '/home_images/ourteam.jpg'
const sponsorships = '/home_images/sponsorships.jpg'
const newsletter = '/home_images/newsletter.jpg'
import '../../styles/Home.scss'
export default function ContentCards(): JSX.Element {
  return (
    <div className='bg-about-boxes py-4 px-4 lg:px-32 justify-between w-full min-h-[45rem] md:h-[50rem] flex flex-col md:flex-row'>
      <div className='rounded-3xl px-8 md:px-2 lg:px-8 py-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-col'>
          <div className='rounded-3xl w-full'>
            <img
              className='rounded-3xl object-cover w-full h-64'
              src={newsletter}
              alt=''
            />
          </div>
          <div className='flex flex-row justify-center pt-4 text-white text-4xl'>
						Newsletter 
          </div>
          <div className='overflow-y-auto w-full h-full md:h-3/5 flex flex-col justify-start'>
            <div className='text-xl text-white w-full flex flex-row'>
              <div className='px-8 py-8 h-full'>
                <p className='w-full h-full'>
                  In order to stay updated on our team, please be sure to sign
                  up for our quarterly newsletter! This newsletter features
                  progress from our subteams, exclusive pictures and videos, and
                  other information regarding the Gaucho Racing Project.
                </p>
              </div>
            </div>
						<div className="self-center box-signup p-2"><a href='https://forms.gle/mAoygCjFCafnCUuW8'>Click here to sign up!</a></div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl px-8 md:px-2 lg:px-8 py-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-col'>
          <div className='rounded-3xl w-full h-64'>
            <img
              className='rounded-3xl object-cover w-full h-64'
              src={ourteam}
              alt=''
            />
          </div>
          <div className='flex flex-row justify-center pt-4 text-white text-4xl'>
            Our team
          </div>
          <div className='overflow-y-auto w-full h-full md:h-3/5 flex flex-col justify-start'>
            <div className='text-xl text-white w-full flex flex-row'>
              <div className='px-8 py-8 h-full'>
                <p className='w-full h-full'>
                  Gaucho Racing is part of UCSB’s official SAE International
                  Student Chapter and uses this connection to connect students
                  with industry professionals, build relationships, and perform
                  educational outreach. To learn more about our officers and
                  current members, click here!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl px-8 md:px-2 lg:px-8 py-8 h-full w-full md:w-1/3'>
        <div className='rounded-3xl bg-box h-full flex flex-col'>
          <div className='rounded-3xl w-full h-64'>
            <img
              className='rounded-3xl object-cover w-full h-64'
              src={sponsorships}
              alt=''
            />
          </div>
          <div className='flex flex-row justify-center pt-4 text-white text-4xl'>
            Sponsorships
          </div>
          <div className='overflow-y-auto w-full h-full md:h-3/5 flex flex-col justify-start'>
            <div className='text-xl text-white w-full flex flex-row'>
              <div className='px-8 py-8 h-full'>
                <p className='w-full h-full'>
                  Our sponsorships are integral to our team. We are immensely
                  grateful for the support of our sponsors, as they have and
                  will continue to allow for us to apply our passion and
                  knowledge of automotive engineering outside of the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
