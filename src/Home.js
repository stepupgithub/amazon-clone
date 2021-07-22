import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
     return (
          <div className="home">
               <div className="home__container">
                    <img className="home__image"
                    alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
               
                    <div className="home__row">

                         <Product
                         id="12321341" 
                         title="The lean Startup" 
                         price={29.99}
                         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                         rating={5}/>

                         <Product
                         id="49538094" 
                         title="Cosmic Byte GS430 Gaming Headphone, 7 Color RGB LED and Microphone for PC, PS5, Xbox, Mobiles, Tablets, Laptops (Black)" 
                         price={230.0}
                         image="https://images-eu.ssl-images-amazon.com/images/I/7154EWu-5LL._AC_UL500_SR500,400_.jpg"
                         rating={4}/>

                    </div>

                    <div className="home__row">
                         <Product
                         id="25455334" 
                         title="BenQ 28-inch UHD 4K HDR,1ms Response Time Console Gaming Monitor with Free Sync" 
                         price={3434.92}
                         image="https://m.media-amazon.com/images/I/61ReawFyVvL._AC_UY218_.jpg"
                         rating={5}/>

                         <Product
                         id="53534534" 
                         title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" 
                         price={3333.35}
                         image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                         rating={2}/>

                         <Product
                         id="34533434" 
                         title="Samsung Galaxy S21 Ultra 5G (Phantom Silver, 12GB, 256GB Storage) + Galaxy Buds Pro @990" 
                         price={2332.0}
                         image="https://m.media-amazon.com/images/I/91dLTREdG1L._AC_UY218_.jpg"
                         rating={3}/>
                    </div>

                    <div className="home__row">
                         <Product
                         id="23426478" 
                         title="pTron Atom in-Ear Mono Bluetooth 5.0 Wireless Headphone, Built-in Mic, Clear Calls" 
                         price={68.33}
                         image="https://images-eu.ssl-images-amazon.com/images/I/51I3LKQqqgL._AC_UL275_SR275,275_.jpg"
                         rating={3}/>

                         <Product
                         id="96853245" 
                         title="RYLAN Multi-Purpose Laptop Desk for Study and Reading with Foldable Non-Slip Legs Reading Table Tray" 
                         price={999.99}
                         image="https://images-eu.ssl-images-amazon.com/images/I/71I4pdMuyAS._AC_UL200_SR200,200_.jpg"
                         rating={5}/>
                    </div>
               </div>

               
          </div>
     )
}

export default Home
