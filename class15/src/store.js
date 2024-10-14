import {legacy_createStore as createStore} from "redux";
// const reducer = (state,action)=>{
//     if(action.type==="abc"){
//         return {count:state.count+1}
//     }
//     return {count:1}
// }
// const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch({type:"abc"});
// console.log(store.getState());
// console.log(store);


// const counterReducer = (state={count:10},action)=>{
//     if(action.type==="increment"){
//         return {count:state.count+1};
//     }
//     if(action.type==="decrement"){
//         return {count:state.count-1};
//     }
//     if(action.type==="increment_by_count"){
//         return {count:state.count+action.payload}
//     }
//     if(action.type==="decrement_by_count"){
//         return {count:state.count-action.payload}
//     }
//     return state;
// }
// const store = createStore(counterReducer);
// store.subscribe(()=>{
//     console.log("trigged")
// })
// console.log(store.getState());
// store.dispatch({type:"increment"});
// console.log(store.getState());
// store.dispatch({type:"increment"});
// console.log(store.getState())
// store.dispatch({type:"decrement"});
// console.log(store.getState());
// console.log(store.getState());
// console.log(store.getState());
// console.log(store.getState());
// store.dispatch({type:"decrement"});
// console.log(store.getState());
// store.dispatch({type:"increment_by_count",payload:30});
// console.log(store.getState())
// store.dispatch({type:"decrement_by_count",payload:15});
// console.log(store.getState())

// const counterReducer = (state={count:10},action)=>{
//     if(action.type==="increment"){
//         return {count:state.count+1};
//     }
//     if(action.type==="decrement"){
//         return {count:state.count-1};
//     }
//     if(action.type==="increment_by_count"){
//         return {count:state.count+action.payload}
//     }
//     if(action.type==="decrement_by_count"){
//         return {count:state.count-action.payload}
//     }
//     return state;
// }
// export const store = createStore(counterReducer);
