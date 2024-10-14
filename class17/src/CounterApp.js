import {useDispatch,useSelector} from "react-redux"
import actions from "./actions";
const CounterApp = function(){
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return state.a.count;
    });
    return <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type:actions.inc_count})}}>Increment</button>
        <button onClick={()=>{dispatch({type:actions.decre_count})}}>Decrement</button>
    </div>
}
export default CounterApp;
