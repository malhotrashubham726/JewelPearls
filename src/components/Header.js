//https://www.geeksforgeeks.org/how-to-make-a-carousel-using-css/
import React from 'react'
import jewel1 from './JewelleryImg/Jewellery-images1.jpeg';
import jewel2 from './JewelleryImg/Jewellery-images2.jpeg';
import jewel3 from './JewelleryImg/Jewellery-images3.jpeg';
import jewel4 from './JewelleryImg/Jewellery-images4.png';
import jewel5 from './JewelleryImg/Jewellery-images5.png';

export default function Header() {

  const btnFocus = ((stopBtn) => {
    let a = document.getElementsByClassName('slideshow-wrapper')[0];
    a.classList.remove('slideshow-animation')
    a.classList.add(stopBtn)
  })

  const btnBlur = ((stopBtn) => {
    let a = document.getElementsByClassName('slideshow-wrapper')[0];
    a.classList.add('slideshow-animation');
    a.classList.remove(stopBtn);
  })

  return (
    <div className='slideshow'>
      {/* <div className='d-flex'>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-1' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn1')})} onBlur={(() => {btnBlur('stop-btn1')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-2' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn2')})} onBlur={(() => {btnBlur('stop-btn2')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-3' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn3')})} onBlur={(() => {btnBlur('stop-btn3')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-4' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn4')})} onBlur={(() => {btnBlur('stop-btn4')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-5' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn5')})} onBlur={(() => {btnBlur('stop-btn5')})}></span>
      </div>
      <div className='slideshow-wrapper slideshow-animation'>
        <img className='slide-img' src={jewel3} alt="" />
        <img className='slide-img' src={jewel2} alt="" />
        <img className='slide-img' src={jewel1} alt="" />
        <img className='slide-img' src={jewel4} alt="" />
        <img className='slide-img' src={jewel5} alt="" /> 
      </div> */}
      <div className='slideshow-wrapper slideshow-animation'>
        <img className='slide-img' src={jewel3} alt="" />
        <img className='slide-img' src={jewel2} alt="" />
        <img className='slide-img' src={jewel1} alt="" />
        <img className='slide-img' src={jewel4} alt="" />
        <img className='slide-img' src={jewel5} alt="" />
      </div>
      <div className='d-flex'>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-1' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn1')})} onBlur={(() => {btnBlur('stop-btn1')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-2' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn2')})} onBlur={(() => {btnBlur('stop-btn2')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-3' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn3')})} onBlur={(() => {btnBlur('stop-btn3')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-4' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn4')})} onBlur={(() => {btnBlur('stop-btn4')})}></span>
        <span id='slideBtn' tabIndex="0" className='comments-btn slide-btn-5' style={{zIndex: "1"}} onFocus={(() => {btnFocus('stop-btn5')})} onBlur={(() => {btnBlur('stop-btn5')})}></span>
      </div>
    </div>
  )
}
