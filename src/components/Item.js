import React from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
    const {content} = props; 

  return (
    <div>
      <div className='link-color render-item'><Link to='/load'>{content}</Link></div>
    </div>
  )
}
