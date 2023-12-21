import React from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <div style={{height: "45vh", textAlign: "center"}} className='d-flex justify-center align-items-center'>
      <div>
        <input type="text" style={{borderRadius: "10px"}} className='p-md m-sm' name="" id="" placeholder='Search'/>
        <Link to='/load'><button style={{backgroundColor: "#3468ab", color: "white", borderRadius: "15px"}} className='p-md m-sm'>Search</button></Link>
      </div>
    </div>
  )
}
