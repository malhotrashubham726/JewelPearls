import React from 'react'
import searchIcon from './search icon.png';
import bagImg from './bagImg.png';
// import JewelLogo from './jewelry-logo.jpg';
import { Link } from 'react-router-dom';
import Item from './Item';

export default function Navbar(props) {

    const {content, setContent, display, setDisplay} = props;

    const cancelButton = (() => {
        setDisplay(true);
    })

    const silverPearls = (() => {
        setDisplay(false);
        setContent([{"item": "Jhumkas", "id": "0"},{"item": "Earrings", "id": "1"},{"item": "Bracelete", "id": "2"}]);
    })

    const goldPearls = (() => {
        setDisplay(false);
        setContent([{"item": "Rings", "id": "3"},{"item": "Studs", "id": "4"},{"item": "Necklace", "id": "5"},{"item": "Chain", "id": "6"},{"item": "Pendant", "id": "7"}]);
    })

  return (
    <>
    <div className='py-sm position-sticky bg-light'>
        <div className='p-md d-flex align-items-center justify-flex-start'>
            <Link to='/' style={{color: "black"}}>
                <div className='d-flex align-items-center justify-flex-start'>
                    <div><i className='main-icon-img fa-solid fa-gem'></i></div>
                    <div className='d-flex flex-col'>
                        <div className='TitleFont'>JewelPearls</div>
                        <div id='disp-none' className='d-flex'>
                            <div className='fs-xs'>Gold-</div>
                            <div className='fs-xs'>Diamond-</div>
                            <div className='fs-xs'>Platinum-</div>
                            <div className='fs-xs'>Silver</div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='ml-lg d-flex scroll-bar'>
                <div className='p-sm'><Link onClick={goldPearls}>Gold</Link></div>
                <div id='silver' className='p-sm'><Link onClick={silverPearls}>Silver</Link></div>
                <div className='p-sm'><Link to="/load">Platinum</Link></div>
                <div className='p-sm'><Link to="/load">Diamond</Link></div>
                <div className='p-sm'><Link to="/load">Collections</Link></div>
            </div>
            <div className='position-absolute'>
                <Link to='/search'><img className='icon-img ml-auto p-sm' src={searchIcon} alt="" /></Link>
                <Link to='/cart'><img className='icon-img mr-lg p-sm' src={bagImg} alt="" /></Link>
            </div>
        </div>
        <div className={`absolute-nav d-none-${display}`} style={{backgroundColor: "white"}}>
            <div className='cross-mark' style={{padding: "5px", float: "right", cursor: "pointer"}}  onClick={cancelButton}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className='d-flex p-lg p-left'>
                <div className='expandable-nav'>
                    <div className='line'>Shop By Type</div>
                    <div id='expandCategory' className='d-flex'>
                        {Array.isArray(content) && content.map((pearls) => {
                            return <Item key={pearls.id} content={pearls.item}></Item>
                        })}
                    </div>
                </div>
                <div className='expandable-nav'>
                    <div className='line'>Shop By Price</div>
                    <div id='expandPrice' className='d-flex flex-col'>
                        <div id=''>Under &#x20B9;10k</div>
                        <div>&#x20B9;10k - &#x20B9;20k</div>
                        <div>&#x20B9;20k - &#x20B9;30k</div>
                        <div>Above &#x20B9;30k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
