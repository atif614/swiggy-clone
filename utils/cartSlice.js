import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        // reducer takes an actions
        // these are actions
        // basically these are the reducer function
        addItem:(state,action)=>{
           state.items.push(action.payload) 
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;