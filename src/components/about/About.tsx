import * as React from 'react'
import '../../styles/about.scss'
const About = (): JSX.Element => {
  return (
    <div className='w-full h-screen bg-about'>
      <div className='h-20 w-full'></div>
      <div className='flex flex-row h-full w-full'>
		<div className='flex flex-col h-full flex-1'>
        <div className='about-text text-7xl flex justify-start px-4 flex-row w-full'>
          What we are about
        </div>
        <div className='about-text text-4xl flex justify-start px-4 flex-row w-full'>
          We envision the current academic year, 2020-2021, as a period of
          organization and resource-building. This will include assembling a
          team, holding regular meetings in consultation with faculty advisors,
          finding the necessary fiscal and material resources, and undertaking
          the research and development phase of our project. In the academic
          year 2021/2022, we plan to design and construct and test a fully
          electric vehicle within the FSAE framework and to enter it in the
          intercollegiate SAE Electric competition.
        </div>
		</div>
		<div className='flex flex-col h-full flex-1'>
		</div>
      </div>
    </div>
  )
}

export default About
