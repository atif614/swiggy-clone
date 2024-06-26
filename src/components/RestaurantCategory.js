import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ title, length, item,showItem,showIndex,dummyData }) => {
  console.log(showItem)
  // const [showItem,setShowItems] = useState(false);
  console.log(item);
  const handleClick = ()=>{
    // setShowItems(!showItem)
    showIndex();
    console.log(showItem);
  }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{title} ({length})</span>
          <span>🔽</span>
        </div>
         { showItem &&  <ItemList items={item} dummyData={dummyData} />}
      </div>
      {/* Accordian Body */}
    </div>
  )
}

export default RestaurantCategory;