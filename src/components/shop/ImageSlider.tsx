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
		// making sure that on the last element in the image the overflow goes back to zero index
		const nextIdx = currentIdx === props.imgList.length-1 ? 0 : currentIdx + 1
		animate(scope.current, {x: `-${(nextIdx)*100/props.imgList.length}%`},{ease: "linear", duration:0.25*nextIdx})
	}
	const handlePrev = () => {
		currentIdx - 1 < 0 ? setCurrentIdx(props.imgList.length - 1) : setCurrentIdx(currentIdx => currentIdx - 1)
		const prevIdx = currentIdx === 0 ? props.imgList.length-1 : currentIdx - 1
		animate(scope.current, {x: `-${(prevIdx)*100/props.imgList.length}%`},{ease: "linear", duration:0.25*prevIdx})
	}
	console.log(currentIdx)
	return(
		<div>
			<button onClick={handleNext}>next</button>
			<button onClick={handlePrev}>prev</button>
			<div className='bg-cyan w-64 h-64 flex flex-row'>
				<motion.div ref={scope} className='flex flex-row justify-start'>
				{imgList.map((img,idx) => 
						<div key={idx} className='w-48'>
						<img className='object-cover w-48 h-64'src={`/shop_images/${img}`}/>
						</div>
				)}
				</motion.div>
			</div>
		</div>
	)
}
