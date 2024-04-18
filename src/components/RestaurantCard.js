import React from "react"
import { CDN_URL } from "../../utils/constant"

const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-52 rounded-xl bg-gray-100 hover:bg-gray-300">
      <img className="img-logo rounded-xl" src={CDN_URL + "/" + props.cloudinaryImageId} />
      <h3 className="font-bold py-4">{props.resName}</h3>
      <h3>{props.cusines.slice(0, 5).join(",")}</h3>
      <h3>{props.rating}</h3>
    </div>
  )
}

export default RestaurantCard