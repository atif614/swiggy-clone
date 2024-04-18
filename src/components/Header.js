import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  let counter = 0;
  const [count,setCount] = useState(0);
  //  console.log("Header"); 
   useEffect(()=>{
    //  console.log("UseEffect");
   },[])
  //  console.log("Header 2"); 
   const onlineStatus = useOnlineStatus();
    return (
      <div className="header justify-between flex bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="w-20 logo" src={LOGO_URL} />
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2">Status : {onlineStatus ? "✔":"😡"}</li>
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2"><Link to="/about">Cart</Link></li>
            <button onClick={()=>setCount(count+1)}>Count Increase</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;