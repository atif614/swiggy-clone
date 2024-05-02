import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../../utils/constant";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
   //  const [resInfo,setResInfo] = useState(null);
   const { resId } = useParams();

   const resInfo = useRestaurantMenu(resId);
   console.log(resInfo);

   //   useEffect(()=>{
   //     fetchMenu();  
   //  },[])

   //  const fetchMenu = async ()=>{
   //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
   //   const json = await data.json();
   //   console.log(json);
   //   setResInfo(json.data);
   //  } 

   if (resInfo === null) {
      return "Wait........"
   }
   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
   console.log(itemCards);
   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((item) => {
      return item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
   })
   console.log(categories);
   const { name, cuisines, costForTwo, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
   return (
      <div className="text-center">
         <h1 className="font-bold my-4 text-2xl">{name}</h1>
         <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
         </p>
         {/* {itemCards.map((item)=> {
             return <li key={item.card.info.id}>{item.card.info.category} - Rs {item.card.info.defaultPrice || item.card.info.price}</li>
          } )} */}
         {/* Categories */}
         {categories.map((category) => <RestaurantCategory title={category.card.card.title} length={category.card.card.itemCards.length} item={category.card.card.itemCards} />)}
      </div>
   )
}

export default RestaurantMenu;