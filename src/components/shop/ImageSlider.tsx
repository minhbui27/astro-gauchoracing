import * as React from 'react'
import {motion} from 'framer-motion'
interface ImageProps {
	imgList: string[]
}
// taking a list of image names as props
export const ImageSlider = (props:ImageProps):JSX.Element => {
	// setting current index and on button click update idx appropriately
	const [currentIdx,setCurrentIdx] = React.useState<number | null>(0)
	const imgList = props.imgList
	// logic to move between the images, accessing via index
	const handleNext = () => {
		currentIdx + 1 >= props.imgList.length ? setCurrentIdx(0) : setCurrentIdx(currentIdx => currentIdx + 1)
	}
	const handlePrev = () => {
		currentIdx - 1 < 0 ? setCurrentIdx(props.imgList.length - 1) : setCurrentIdx(currentIdx => currentIdx - 1)
	}
	return(
		<div>
			<button onClick={handleNext}>next</button>
			<button onClick={handlePrev}>prev</button>
			<div className='overflow-hidden w-32 flex flex-row'>
				{imgList.map((img,idx) => currentIdx === imgList.indexOf(`${img}`) ? 
					<motion.img className='object-cover' animate={{x:`-${idx*100}%`, opacity: 1}} 
						transition={{ease:'linear', duration: 0.5/idx,}}
						key={idx} src={`/shop_images/${img}`}/> :
					<motion.img animate={{x:`-${idx*100}%`, opacity: 0}} key={idx} src={`/shop_images/${img}`}/>) }
			</div>
		</div>
	)
}
