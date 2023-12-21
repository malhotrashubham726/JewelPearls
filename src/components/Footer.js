import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='p-xl back-img'>
        <div className='d-grid grid-col'>
            <div className='d-grid grid-row my-sm'>
                <div style={{color: "white", fontSize: "16px"}}>Gold</div>
                <div><Link to="/load">Gold Rings</Link></div>
                <div><Link to="/load">Stud Drops</Link></div>
                <div><Link to="/load">Bracelete</Link></div>
                <div><Link to="/load">Chain</Link></div>
            </div>
            <div className='d-grid grid-row my-sm'>
                <div style={{color:"white", fontSize: "16px"}}>Silver</div>
                <div><Link to="/load">Bracelet</Link></div>
                <div><Link to="/load">Jhumkas</Link></div>
                <div><Link to="/load">Earrings</Link></div>
            </div>
            <div className='d-grid grid-row my-sm'>
                <div style={{color: "white", fontSize: "16px"}}>JewelPearls</div>
                <div><Link to="/about">About</Link></div>
                <div>Diamond Guide</div>
                <div>JewelPearls Stores</div>
                <div>Finger Ring Sizes</div>
            </div>
            <div className='d-grid grid-row my-sm'>
                <div style={{color: "white", fontSize: "16px"}}>Customer Service</div>
                <div className=''><Link to='/contact'>Contact</Link></div>
                <div>Cancellation Policy</div>
                <div>Payment Policy</div>
                <div>Privacy Policy</div>
                <div>Terms</div>
            </div>
        </div>
        <div className='mt-sm'>&copy; 2023 JewelPearls - All rights reserved</div>
    </div>
  )
}
