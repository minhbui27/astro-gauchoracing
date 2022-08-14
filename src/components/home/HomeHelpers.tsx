import * as React from 'react'
import img1 from '/home_images/img1.jpg'
import img2 from '/home_images/img2.jpg'
interface ImagesProps {
  images?: string[]
}
export default function ScrollingImages(props: ImagesProps): JSX.Element {
  props.images.forEach((e) => {
	return <p> e </p>
  })
}
