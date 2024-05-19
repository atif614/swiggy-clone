import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const App = () => (
  
  <Provider store={appStore}>
  <div className="app">
    <Header />
    {/* <Body /> */}
     <Outlet/>
  </div>
  </Provider>
)

const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ]
  },
  // {
  //   path:"/about",
  //   element:<About/>
  // },
  // {
  //   path:"/contact",
  //   element:<Contact/>
  // }
]) 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);

