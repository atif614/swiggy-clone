import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";


function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        console.log("cartItems", cartItems);
        dispatch(clearCart());
    }
    console.log(cartItems);

    return <div className="text-center m-13 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {
                cartItems.length > 0 ? <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button> :
                    <h3>Add items to Cart</h3>
            }
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;