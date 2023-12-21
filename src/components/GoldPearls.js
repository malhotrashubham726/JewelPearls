import React from 'react'
// import { Link } from 'react-router-dom';
import Item from './Item';

export default function GoldPearls(props) {

  const {content,display,setDisplay} = props;

  const cancelButton = (() => {
    // let a = document.getElementsByClassName('absolute-nav')[0];
    // a.classList.add('d-none-true');
    setDisplay(true);
  })

  return (
    <div id='' className={`absolute-nav d-none-${display}`} style={{backgroundColor: "white"}}>
      <i className="fa-solid fa-xmark" style={{float: "right"}} onClick={cancelButton}></i>
      <div className='d-flex expandable-nav'>
            <div className='line'>Shop By Type</div>
            <div className='line'>Shop By Price</div>
      </div>
        <div className='flex-nav'>
            <div id='expandCategory' className='d-flex'>
              {content.map((pearls) => {
                return <Item key={pearls.id} content={pearls.item}/>
                // return <div><Link to='/load'>{item}</Link></div>
              })}
                {/* <div>Bracelete</div>
                <div>Jhumkas</div>
                <div>Earrings</div> */}
            </div>
            <div id='expandCategory' className='d-flex flex-col'>
                <div>Under &#x20B9;10k</div>
                <div>&#x20B9;10k to &#x20B9;20k</div>
                <div>&#x20B9;20k to &#x20B9;30k</div>
                <div>Above &#x20B9;30k</div>
            </div>
        </div>
    </div>
  )
}
