import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [count,setCount] = useState(0);
    useEffect(()=>{
    //  console.log("UseEffect");
   },[])
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // selector
    const cart = useSelector((store)=> store.cart.items);
    console.log(cart);
    
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
            <li className="px-2"><Link to="/cart">Cart({cart.length})</Link></li>
            {/* <button onClick={()=>setCount(count+1)}>Count Increase</button> */}
            <li className="px-2"><Link to="/about">{loggedInUser}</Link></li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;