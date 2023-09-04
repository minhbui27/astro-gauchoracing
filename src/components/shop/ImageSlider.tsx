import * as React from 'react'
import {motion, useAnimate} from 'framer-motion'
import {ChevronRight, ChevronLeft} from '@styled-icons/bootstrap'
/*
	This component handles the image slider in the shop page that has the option to move left or right.
	Some notes:
		- If the size of the string input array doesn't exceed 1, then the arrows will disappear
		- The array of strings passed in as props contains strings that is the exact file names of images already existing in /public/shop_images. Otherwise will throw error
*/

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
		animate(scope.current, {x: `-${(nextIdx)*100}%`},{ease: "linear", duration:0.5})
	}
	const handlePrev = () => {
		currentIdx - 1 < 0 ? setCurrentIdx(props.imgList.length - 1) : setCurrentIdx(currentIdx => currentIdx - 1)
		const prevIdx = currentIdx === 0 ? props.imgList.length-1 : currentIdx - 1
		animate(scope.current, {x: `-${(prevIdx)*100}%`},{ease: "linear", duration:0.5})
	}
	console.log(currentIdx)
	return(
		<div>
			<div className='flex overflow-hidden flex-row bg-lightgray rounded-t-md rounded-b-md'>
				<div className={`${props.imgList.length > 1 ? "opacity-100"  : "opacity-0" } z-10 flex flex-col justify-center w-8`}>
					<ChevronLeft className="cursor-pointer" onClick={handlePrev}/>
				</div>
				<div className='bg-lightgray w-56 h-64 flex flex-row justify-center'>
					<motion.div ref={scope} className='w-48 flex flex-wrap flex-col justify-start'>
					{/* Mapping over all images sent as props inside a contain with key idx. In theory this should scale */}
					{imgList.map((img,idx) => 
							<div key={idx} className='px-2 w-48'>
							<img className='object-cover w-48 h-64'src={`/shop_images/${img}`}/>
							</div>
					)}
					</motion.div>
				</div>
				<div className={`${props.imgList.length > 1 ? "opacity-100"  : "opacity-0" } z-10 flex flex-col justify-center w-8`}>
					<ChevronRight className="cursor-pointer" onClick={handleNext}/>
				</div>
			</div>
		</div>
	)
}
