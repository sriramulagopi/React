import { Provider, useDispatch, useSelector } from "react-redux"
import store2, { addItem, inc } from "./store2"
import { asyncIncrement } from "./thunk";


const Counter = function(){
    const count = useSelector(state=>state.a.count);
    const dispatch = useDispatch();
    const incre = function(){
        dispatch(asyncIncrement)
    }
    return <div>
        <h1>Count:{count}</h1>
        <button onClick={incre}>Async Update Count</button>
    </div>
}
const Cart = function(){
    const state = useSelector(state=>state.b.cart);
    console.log(state)
    const dispatch = useDispatch()
    const addItem1 = function(){
        dispatch(addItem({productID:1003}))
    }
    return <div>
        {state.map(item=><p>{item}</p>)}
        <button onClick={addItem1}>Add Product</button>
    </div>
}
export const ReduxToolKit = ()=>{
    return <div>
        <Provider store={store2}>
            <Counter/>
            <Cart/>
        </Provider>
    </div>
}