import React, {useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../../utils/constant";

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
       fetchMenu();  
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=408185&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    } 
     if(resInfo===null){
        return "Wait........"
     }
      const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
      console.log(itemCards);
      const {name,cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info;
     return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwo/100}</h2> 
          {itemCards.map((item)=> {
             return <li key={item.card.info.id}>{item.card.info.category} - Rs {item.card.info.defaultPrice}</li>
          } )}
        </div>
    )
}

export default RestaurantMenu;