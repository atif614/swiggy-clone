import { API_URL } from "../../utils/constant";
import RestaurantCard from "./RestaurantCard";
import React, { useState,useEffect, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

export const Body = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      let [loading, setLoading] = useState(true);
      let [color, setColor] = useState("#ffffff");
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText,setsearchText] = useState();
    useEffect(() => {
        getData();
    }, [])
    async function getData() {
        console.log("API Chala");
        const result = await fetch(API_URL);
        const data = await result.json();
        // console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setResData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(resData);

    function filterRestaurant(){
        const filter = resData.filter((item) => item.info.avgRating > 4.2 );
    //     console.log(filter);
    //     setResData(filter);
    }
    if(resData.length===null){
        // const heading = <h1 style={{textAlign:"center"}}>Wait ..............</h1>
        // return heading
       return <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }
    function searchTextRestaurant(){
        console.log(searchText);
        const searchTextedRestaurant = resData.filter((res)=>{
            // console.log(res.info.name);
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        console.log(searchTextedRestaurant);
        setFilteredData(searchTextedRestaurant);
    }
    return (
        <div className="body">
            {console.log("Render Hua")}
            <div className="filter">
                <div className="searchText">
                    <input type="text" className="searchText-box" value={searchText} onChange={(e)=>setsearchText(e.target.value)} />
                    <button onClick={searchTextRestaurant}>search</button> 
                </div>
                <button className="filter-btn" onClick={filterRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredData.map((res) => {
                        return <RestaurantCard key={res.info.id} resName={res.info.name} cusines={res.info.cuisines} rating={res.info.avgRating} cloudinaryImageId={res.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;