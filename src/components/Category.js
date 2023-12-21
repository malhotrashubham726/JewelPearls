import React from 'react'
import CImg1 from './CategoryImg/CategoryImg1.png';
import CImg2 from './CategoryImg/CategoryImg2.png';
import CImg3 from './CategoryImg/CategoryImg3.png';
import CImg4 from './CategoryImg/CategoryImg4.png';
import CImg5 from './CategoryImg/CategoryImg5.png';
import CImg6 from './CategoryImg/CategoryImg6.png';
import ExImg1 from './ExclusiveImg/ExImg1.png';
import ExImg2 from './ExclusiveImg/ExImg2.png';
import ExImg3 from './ExclusiveImg/ExImg3.png';

export default function Category() {
  return (
    <>
    <div className='flex-category mt-sm'>
      <img className="category-img" src={CImg1} alt="" />
      <img className="category-img" src={CImg2} alt="" />
      <img className="category-img" src={CImg3} alt="" />
      <img className="category-img" src={CImg4} alt="" />
      <img className="category-img" src={CImg5} alt="" />
      <img className="category-img" src={CImg6} alt="" />
    </div>
    <div className='flex-category frame-height frame-res'>
      <img className="category-img frame-img" src={ExImg1} alt="" />
      <img className="category-img frame-img" src={ExImg2} alt="" />
      <img className="category-img frame-img" src={ExImg3} alt="" />
    </div>
    </>
  )
}
