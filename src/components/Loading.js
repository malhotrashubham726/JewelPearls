import React from 'react'
// import spinner from './Spinner-3.gif'

export default function Loading() {
  return (
    <div>
      {/* <div className='loading' style={{textAlign: "center"}}><img src={spinner} alt="" /></div> */}
      <div className='loading'><i style={{color: "#24385b"}} className="fa-solid fa-circle-notch fa-spin fa-2xl"></i></div>
    </div>
  )
}
