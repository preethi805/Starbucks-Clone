import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


export default function Navbar() {

const [isChecked, setIsChecked] = useState(false);





const toggleSearch = () => {
setIsChecked(!isChecked);
 
};




  return (
    <div>
      <nav  className="navbar">
        {/* <img className="logo" src="./Assets/starbucks.logo.jpeg" alt="Starbucks Logo" /> */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Gift">Gift</Link>
          <Link to="/Drinks">Drinks</Link>
          <Link to="/Cart">Cart</Link>
          <Link to="/Checkout">Checkout</Link>     
          
        </div>


        <div className="box">
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={toggleSearch}
          />
          <div className={`search-box ${isChecked ? 'expanded' : ''}`}>
            <input type="text" placeholder="Type here..." />
            <label htmlFor="check" className={`icon ${isChecked ? 'active' : ''}`}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
          </div>
        </div>
      </nav>
      <nav className="subnav">
      <Link style={{textDecoration:"none",color:"inherit"}} to='Formlogin'>
    

       <h4 className='browse'>Sign In</h4>
         
          
      
        </Link>
      </nav>
      
 </div>
  );
}