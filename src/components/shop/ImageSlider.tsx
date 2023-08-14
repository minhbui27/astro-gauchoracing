import * as React from 'react'
import {motion, useAnimate} from 'framer-motion'
import {ChevronRight} from '@styled-icons/bootstrap/ChevronRight'
interface ImageProps {
	imgList: string[]
}
// taking a list of image names as props
export const ImageSlider = (props:ImageProps):JSX.Element => {
	const [scope, animate] = useAnimate()
	// setting current index and on button click update idx appropriately
	const [currentIdx,setCurrentIdx] = React.useState<number | null>(0)
	const imgList = props.imgList
	// logic to move between the images, accessing via index
	const handleNext = () => {
		currentIdx + 1 >= props.imgList.length ? setCurrentIdx(0) : setCurrentIdx(currentIdx => currentIdx + 1)
		animate(scope.current, {x: `-${currentIdx*100}px`})
	}
	const handlePrev = () => {
		currentIdx - 1 < 0 ? setCurrentIdx(props.imgList.length - 1) : setCurrentIdx(currentIdx => currentIdx - 1)
		animate(scope.current, {x: `${currentIdx*100}px`})
	}
	return(
		<div>
			<button onClick={handleNext}>next</button>
			<button onClick={handlePrev}>prev</button>
			<div className='bg-cyan w-64 h-64 flex flex-row'>
				<motion.div ref={scope} className='flex flex-row justify-start'>
				{imgList.map((img,idx) => 
						<div className='w-48'>
						<img className='object-cover w-48 h-64' key={idx} src={`/shop_images/${img}`}/>
						</div>
				)}
				</motion.div>
			</div>
		</div>
	)
}
