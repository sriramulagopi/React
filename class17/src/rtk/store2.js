import {configureStore, createSlice} from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        inc:(state,action)=>{
            state.count+=1;
        },
        dec:(state,action)=>{
            state.count-=1;
        }
    }
})
const cartSlice = createSlice({
    name:"cart",
    initialState:{cart:[]},
    reducers:{
        addItem:(state,action)=>{
            state.cart.push(action.payload.productID);
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter(pdi=>pdi!==action.payload.productID);
        }
    }
})
export const {addItem,removeItem}=cartSlice.actions;
export const {inc,dec}=counterSlice.actions;
const store2 = configureStore({
    reducer:{
        a:counterSlice.reducer,
        b:cartSlice.reducer
    }
})
export default store2;