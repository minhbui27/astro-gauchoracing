import * as React from 'react'
import { ImageSlider } from './ImageSlider'
import './ShopCard.scss'
interface ShopProps {
	name: string,
	price: number,
	imgList: string[]
}
export const ShopCard = (props:ShopProps):JSX.Element => {
	return(
		<div className='w-72 h-96 rounded-t-md bg-lightgray mx-0 md:mx-8'>
			<div className='flex flex-row justify-center'>
				<ImageSlider imgList={props.imgList}/>
			</div>
			<div className='flex flex-col'>
				<div className='pl-2 text-xl text-item font-black'>{props.name}</div>
			</div>
			<div className='flex flex-col'>
				<div className='pl-2 text-xl text-item'>${props.price}</div>
			</div>
		</div>
	)
}
