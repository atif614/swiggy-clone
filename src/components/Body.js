import RestaurantCard from "./RestaurantCard";
import React, { useState,useEffect } from "react";

const Body = () => {
    const [resData, setResData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    async function getData() {
        const result = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await result.json();
        console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setResData(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log(resData);
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {
                    resData.map((res) => {
                        return <RestaurantCard key={res.info.id} resName={res.info.name} cusines={res.info.cuisines} rating={res.info.avgRating} cloudinaryImageId={res.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;