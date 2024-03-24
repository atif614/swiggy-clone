import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {
  const [btn,setBtn]=useState("Login");
  // let btn = "Login";
  function changeButton(){
    // console.log(btn);
    // btn = "Sign up";
    // console.log(Header());;
    // console.log(btn);
    // setBtn("Sign Up");
    btn === "Login" ? setBtn("Sign Up") : setBtn("Login");
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={changeButton}>{btn}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;