import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
       <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8JIwobDv1bDxu1v2Nver2VKYMxm3zdU_wg&usqp=CAU" />
      </div>
      <div className="nav-items"> 
         <ul>
          <li>Home</li> 
          <li>About Us</li>         
          <li>Contact Us</li>          
          <li>Cart</li>
         </ul>
      </div>
    </div>
  )
}

const App = () => (
  <div className="app">
    <Header/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

