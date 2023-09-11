import * as React from 'react'
import '../../styles/Shop.scss'
import {ShopCard} from './ShopCard'
export default function Shop(): JSX.Element {
  return (
    <div className='pt-20 w-full min-h-screen bg-navy'>
			<div className='welcome-text text-3xl flex flex-row justify-center'>
				Welcome to our shop!
			</div>
			 <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
			<div className='px-16 min-h-screen w-full flex flex-row justify-center'>
				<div className='space-y-8 md:space-y-0 flex row flex-wrap p-8 min-h-screen bg-navy'>
					{/*images must already be present in /public/shop_images*/}
					<ShopCard name={'Gaucho Racing Black Hoodie'} price={40} imgList={['hoodie_1.jpg','hoodie_2.jpg','hoodie_3.jpg']}/>
					<ShopCard name={'Gaucho Racing Logo Sticker'} price={2} imgList={['sticker_1.jpg']}/>
					<ShopCard name={'Gaucho Racing Sunset Sticker'} price={2} imgList={['sticker_2.jpg']}/>
					<ShopCard name={'College of Engineering Sticker'} price={2} imgList={['coe_sticker.jpg']}/>
				</div>
			</div>
    </div>
  )
}
