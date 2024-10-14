import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import actions from "./actions";
import {thunk} from "redux-thunk";
const reducer1 = (state={count:0},action)=>{
    switch(action.type){
        case actions.incre_count:{
            return {count:state.count+1};
        }
        case actions.decre_count:{
            return {count:state.count-1};
        }
        default:{
            return state;
        }
    }
}
const reducer2 = (state={cart:[]},action)=>{
    switch(action.type){
        case actions.add_item:{
            return {cart:[action.payload.productId,...state.cart]}
        }
        case actions.remove_item:{
            return {cart:state.cart.filter(id=>id!==action.payload.productId)}
        }
        default:{
            return state;
        }
    }
}
const rootReducer = combineReducers({a:reducer1,b:reducer2});
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;