import React from 'react'

export default function Contact() {
  return (
    <div className='back-img-about'>
      <div className='fs-md p-xl'>Contact Sales</div>
      <form action="">
        <div className='d-flex flex-col align-items-center justify-center'>
            <div className='d-flex flex-row form-width' style={{flexWrap: "nowrap"}}>
                {/* <div className='form-divide' style={{width: "46%", marginRight: "20px"}}> */}
                <div className='form-divide mr-20'>
                    <label className='p-md' htmlFor="Fname">First Name</label><br/>
                    {/* <input style={{padding: "8px", width: "100%"}} className='' type="text" name="Fname" /> */}
                    <input className='textbox' type="text" name="Fname" />
                </div>
                {/* <div className='form-divide' style={{width: "46%", marginLeft: "20px"}}> */}
                <div className='form-divide ml-20'>
                    <label className='p-md' htmlFor="Lname">Last Name</label><br />
                    {/* <input style={{padding: "8px", width: "100%"}} className='' type="text" name="Lname"/> */}
                    <input className='textbox' type="text" name="Lname"/>
                </div>
            </div>
            <div className='form-width'>
                <label className='p-md' htmlFor="Company">Company</label><br />
                <input className='textbox' type="text" name="Company"/>
            </div>
            <div className='form-width'>
                <label className='p-md' htmlFor="Email">Email</label><br />
                <input className='textbox' type="email" name="Email"/>
            </div>
            <div className='form-width'>
                <label className='p-md' htmlFor="phoneno">Phone number</label><br />
                <input className='textbox' type="number" name="phoneno"/>
            </div>
            <div className='form-width'>
                <label className='p-md' htmlFor="message">Message</label><br />
                <textarea className='textbox' name="message" cols="30" rows="8"></textarea>
            </div>
            <div className='form-width'>
              <button style={{backgroundColor: "#3468ab", color: "white", cursor: "pointer"}} className='form-btn textbox'>Let's talk</button>
            </div>
        </div>
      </form>
    </div>
  )
}
