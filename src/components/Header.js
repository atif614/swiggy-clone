import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  let counter = 0;
  const [count,setCount] = useState(0);
  //  console.log("Header"); 
   useEffect(()=>{
    //  console.log("UseEffect");
   },[])
  //  console.log("Header 2"); 
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">Cart</Link></li>
            <button onClick={()=>setCount(count+1)}>Count Increase</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;