import React from 'react'
import icon1 from './Icon1.png';
import icon2 from './Icon2.png';
import icon3 from './Icon3.png'

export default function Comments() {

    const commentsBtn1 = ((buttonCheck) => {
        let b = document.getElementsByClassName('comments-flex')[0];
        b.classList.add(buttonCheck);
        b.classList.remove('comments-animation');
    })

    const commentsBlur1 = (() => {
        let b = document.getElementsByClassName('comments-flex')[0];
        b.classList.remove('stop-btn1');
        b.classList.remove('stop-btn2');
        b.classList.remove('stop-btn3');
        b.classList.add('comments-animation');
        console.log("comments-blur")
    })

  return (
    <div className='comments-wrapper pb-md'>
        <div className='comments-flex comments-animation'>
            <div>
                <div>Team Jewel One, I just wanted to let you know how delighted I was with the Kasuluaperu (Necklace) that was designed and produced. Your craftsmanship is simply superb, my wife and all my near ones are so pleased and proud of the outcome. Special thanks to Mr. Lakshman Rao and his staff for their time and patience working out the design and discussing concerns.</div>
                <div style={{margin: "15px 40%"}}>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-regular fa-star" style={{color: "#def910"}}></i>
                </div>
                <div style={{margin: "15px 40%"}}>
                    <img style={{height: "34px", borderRadius: "50%"}} src={icon1} alt="" />
                    <span className='p-xs'>~Sneha</span>
                </div>
            </div>
            <div>
                <div>Have been buying from them for 2 years. Always great service and beautiful jewellery. The best jewellers and jewellery designs have been seen so far in Brindavan collection and Lakshmi devi designs. Nice designer collection in platinum and good quality of the diamond collection. Amazing hospitality provided by the staff during every visit.</div>
                <div style={{margin: "15px 40%"}}>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-regular fa-star" style={{color: "#def910"}}></i>
                </div>
                <div style={{margin: "15px 40%"}}>
                    <img style={{height: "34px", borderRadius: "50%"}} src={icon2} alt="" />
                    <span className='p-xs'>~Naveen</span>
                </div>
            </div>
            <div>
                <div>I am a regular customer for Jewel One for the last 2 years .. I should appreciate the staff for the hospitality rendering by them ..The designs are very unique and I am finding new designs whenever I visit the showroom ..I am also having monthly saving scheme with them ..Once I purchased Zilara silver jewellery which finishing is excellent and this collection looks like Platinum jewellery..</div>
                <div style={{margin: "15px 40%"}}>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-solid fa-star" style={{color: "#def910"}}></i>
                    <i class="fa-regular fa-star" style={{color: "#def910"}}></i>
                </div>
                <div style={{margin: "15px 40%"}}>
                    <img style={{height: "34px", borderRadius: "50%"}} src={icon3} alt="" />
                    <span className='p-xs'>~Daniel</span>
                </div>
            </div>
        </div>
        <div className='d-flex'>
            <span tabIndex={0} className='comments-btn comments-btn1' onFocus={(() => {commentsBtn1('stop-btn1')})} onBlur={commentsBlur1}></span>
            <span tabIndex={0} className='comments-btn comments-btn2' onFocus={(() => {commentsBtn1('stop-btn2')})} onBlur={commentsBlur1}></span>
            <span tabIndex={0} className='comments-btn comments-btn3' onFocus={(() => {commentsBtn1('stop-btn3')})} onBlur={commentsBlur1}></span>
        </div> 
    </div>
  )
}
