import React from "react"
import { CDN_URL } from "../../utils/constant"

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img className="img-logo" src={CDN_URL + "/" + props.cloudinaryImageId} />
      <h3>{props.resName}</h3>
      <h3>{props.cusines.slice(0, 5).join(",")}</h3>
      <h3>{props.rating}</h3>
    </div>
  )
}

export default RestaurantCard