import * as React from 'react'
import '../../styles/Shop.scss'
import { ImageSlider } from './ImageSlider'
export default function Shop(): JSX.Element {
  return (
    <div className='pt-20 w-full min-h-screen bg-shop'>
			<div className='min-h-screen w-full flex-row'>
				<div className='flex-1 p-8 min-h-screen w-1/3 bg-lightpink'>
					<ImageSlider imgList={['hoodie_1.jpg','hoodie_2.jpg','hoodie_3.jpg']}/>
				</div>
			</div>
    </div>
  )
}
