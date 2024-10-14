import { useDispatch } from "react-redux";
import actions from "./actions";
import CartApp from "./CartApp.js"
import { asyncIncrement } from "./thunk.js";
const CounterApp2 = function(){
    const dispatch = useDispatch();
    const AddItem = function(){
        dispatch({type:actions.add_item,payload:{productId:1045}});
        dispatch(asyncIncrement)
    }
    return <div>
        <button onClick={()=>{dispatch({type:actions.incre_count})}}>Increment</button>
        <button onClick={AddItem}>AddItem</button>
    </div>
}
export default CounterApp2;