import react from "react";
import ReactDOM from "react-dom/client";
import {Provider, useDispatch, useSelector} from "react-redux";
import { store } from "./store";
// import "./store.js"
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = function(){
    const dispatch = useDispatch();
    const state = useSelector((reduxState)=>{
        return reduxState.count;
    })
    return <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
}

const Test = function(){
    const dispatch = useDispatch()
    return <div>
        <button onClick={()=>{dispatch({type:"increment"})}}>Incrementing from test component</button>
    </div>
}
root.render(<>
<Provider store={store}>
    <App/>
    <Test/>
</Provider>
</>)