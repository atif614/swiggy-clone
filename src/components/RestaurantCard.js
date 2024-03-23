import React from "react"

const RestaurantCard = (props) => {
    // console.log(props);
    return (
      <div className="res-card">
        <img className="img-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.cloudinaryImageId} />
        <h3>{props.resName}</h3>
        <h3>{props.cusines.slice(0,5).join(",")}</h3>
        <h3>{props.rating}</h3>
      </div>
    )
  }

export default RestaurantCard