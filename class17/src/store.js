import {combineReducers, legacy_createStore as createStore,applyMiddleware} from "redux";
import actions from "./actions.js"
import {thunk} from "redux-thunk";
const reducer1 = (state={count:1},action)=>{
    switch(action.type){
        case actions.inc_count:{
            return {count:state.count+1};
        }
        case actions.decre_count:{
            return {count:state.count-1};
        }
        default:{
            return state
        }
    }
} 
const reducer2 = (state={cart:[]},action)=>{
    switch(action.type){
        case actions.add_item:{
            // state.cart.push(action.payload.productId);
            return {cart:[...state.cart,action.payload.productId]};
        }
        case actions.remove_item:{
            return {cart:state.cart.filter(item=>!item==action.payload.productId)}
        }
        default:{
            return state;
        }
    }
}
const rootReducer = combineReducers({a:reducer1,b:reducer2})
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;