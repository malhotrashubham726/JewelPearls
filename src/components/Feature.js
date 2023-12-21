import React from 'react'
import { Link } from 'react-router-dom'

export default function Feature() {
  return (
    <>
    <div className='d-flex align-items-center adv-features' style={{backgroundColor: "rgba(124, 128, 127, 0.396)"}}>
        <img src="https://c0.wallpaperflare.com/preview/984/867/753/jewellery-gold-wedding-indian.jpg" alt="" />
        <div className='banner-section'>
            <div>Story of JewelPearls Jewellery</div>
            <img src="https://clipart-library.com/image_gallery2/Decorative-Line-Black-Free-Download-PNG.png" alt="" />
            <button><Link to="/story">Know More</Link></button>
        </div>
    </div>
    <div className='d-flex align-items-center adv-features my-img' style={{backgroundColor: "rgb(238, 218, 132)"}}>
        <img src="https://cdn.zeebiz.com/sites/default/files/2021/03/14/145049-goldpersonalloan.jpg" alt="" />
        <div className='banner-section'>
            <div>Introducing Swarna Sakthi Scheme</div>
            <img src="https://clipart-library.com/image_gallery2/Decorative-Line-Black-Free-Download-PNG.png" alt="" />
            <p style={{marginTop: "0px"}}>Your hard earned money gets the best reward! Save smart with JewelPearls Swarna Shakti Savings Scheme</p>
            <button><Link to="/story">Know More</Link></button>
        </div>
    </div>
    <div className='d-flex' style={{backgroundColor: "#8e2e2e"}}>
      <div className='flex-feature'>
        <img className='float-left gif-resize1' src="https://media.giphy.com/media/PCZXNDTV5YCAjVXs0m/giphy.gif" alt="" />
        <div className='feature-content'>
            <div>100% Certified and Free Shipping</div>
            <div>Our Jewellery always comes with a certificate of authentication.</div>
        </div>
      </div>
      <div className='flex-feature'>
        <img className='float-left gif-resize2' src="https://media.giphy.com/media/oCQhZ0bOTon64VOmDb/giphy.gif" alt="" />
        <div className='feature-content'>
            <div>15 Day Money-Back</div>
            <div>Get 100% Refund if you don't like your jewellery.</div>
        </div>
      </div>
      <div className='flex-feature'>
        <img className='float-left gif-resize3' src="https://media.giphy.com/media/H4P81xdAeAw6aEVJgN/giphy.gif" alt="" />
        <div className='feature-content'>
            <div>LifeTime Exchange</div>
            <div>Exchange your old designs anytime if you want an upgrade.</div>
        </div>
      </div>
      <div className='flex-feature'>
        <img className='float-left gif-resize2' src="https://media.giphy.com/media/vw0viLEP2fbtQ5pldZ/giphy.gif" alt="" />
        <div className='feature-content'>
            <div>One year Warranty</div>
            <div>If your Jewellery had a defect, we will fix it.</div>
        </div>
      </div>
    </div>
    </>
  )
}
