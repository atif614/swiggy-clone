import React from "react";
import { IMG_URL } from "../../utils/constant";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-3">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <img src={IMG_URL + item.card.info.imageId} className="w-full" />
                        {/* <h1> {item.card.info.imageId} </h1> */}
                        <div className="relative top-0">
                            <button className="p-2 bg-slate-800  rounded-lg ml-3 w-24 shadow-lg m-auto">Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;