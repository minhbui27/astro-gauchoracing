import * as React from 'react'
import '../../styles/FSAE.scss'
import img1 from '/fsae_images/img1.jpeg'
export default function FormulaElectric(): JSX.Element {
	return(
		<div className='w-full min-h-screen bg-fsae'>
			<div className='h-full pt-16 flex flex-col justify-center lg:flex-row w-full'>
				<div className='min-h-screen py-8 order-2 lg:order-1 flex flex-col justify-center bg-text basis-1/2'>
					<div className='text-about text-center text-7xl'>About FSAE</div>
					<div className='h-16 w-full'></div>
					<div className='flex flex-row'>
					<div className='basis-1/5'></div>
					<div className='text-content basis-3/5 text-2xl'>Formula SAE is a collegiate engineering competitions with over 500 participating schools that challenges teams of students to design and build a formula style car. The car is evaluated in automotive design and performance through a series of intensive events which focus on safety, handling and speed. Members on each team must develop and practice engineering, leadership, communication and marketing skills to be successful in this ever evolving competition.</div>
					<div className='basis-1/5'></div>
					</div>
				</div>
				<div className='order-1 lg:order-2 bg-image flex p-16 flex-col justify-center basis-1/2'>
					<img src={img1}/>
				</div>
			</div>
		</div>
	)
}

