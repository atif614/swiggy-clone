import React from "react"
import { CDN_URL } from "../../utils/constant"
import { Link } from "react-router-dom"

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <Link to={"/restaurant/"+props.resId}><img className="img-logo" src={CDN_URL + "/" + props.cloudinaryImageId} /></Link>
      <h3>{props.resName}</h3>
      <h3>{props.cusines.slice(0, 5).join(",")}</h3>
      <h3>{props.rating}</h3>
    </div>
  )
}

export default RestaurantCard