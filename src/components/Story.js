import React from 'react'
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div style={{height: "70vh", padding: "30px"}} className='d-flex flex-col justify-center align-items-center'>
      <div className='fs-sm' style={{color: "blue"}}>404</div>
      <div className='fs-lg'>Page not found</div>
      <div className='fs-sm'>Sorry, we couldn't find the page you're looking for.</div>
      <div style={{textAlign: "center"}}>
        <button className='link-btn' style={{backgroundColor: "#3468ab"}}><Link style={{color: "white"}} to='/'>Go back &larr;</Link></button>
        <button className='link-btn' style={{backgroundColor: "white", border: "2px solid white"}}><Link to='/contact'>Contact support &rarr;</Link></button>
      </div>
    </div>
  )
}
