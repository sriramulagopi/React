import { useDispatch, useSelector } from "react-redux";
import actions from "./actions";

const CounterApp1 = function(){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.a.count);
    return <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type:actions.incre_count})}}>Increment</button>
        <button onClick={()=>{dispatch({type:actions.decre_count})}}>Decrement</button>
    </div>
}
export default CounterApp1;