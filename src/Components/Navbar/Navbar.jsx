import './Navbar.css'
import logo from '../Assests/shoppingbag bg remove.png'
import cart_icon from '../Assests/cart1.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[menu,setMenu]=useState('shop')
    
    
  return (
    <div className='navbar'>
       <div className='nav-logo'>
           <img src={logo} width={100} height={50} alt='' />
           <p>SHOPPER</p>           
       </div>        
         <ul className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu=='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:"none"}} to="/mens">Men</Link>{menu=='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:"none"}} to="/womens">Women</Link>{menu=="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:"none"}} to="/kids">Kid</Link>{menu=="kids"?<hr/>:<></>}</li>
         </ul>
         <div className='nav-login-cart'>
           <Link to="/login"><button>Login</button></Link>
           <Link to="/cart"><img src={cart_icon} width={50} height={50}/></Link>
           <div className='nav-cart-count'>0</div>
         </div>
       
    </div>
  );
};

export default Navbar;
