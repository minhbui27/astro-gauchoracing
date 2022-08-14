import * as React from 'react'
interface ImagesProps {
  images?: string[]
}
export default function ScrollingImages(props: ImagesProps): JSX.Element {
  return (
    <div className="h-1/3 flex flex-row">
      {props.images.map((e: string): JSX.Element => {
        return <img src={`/home_images/${e}.jpg`} alt={`${e}`} />
      })}
    </div>
  )
}
