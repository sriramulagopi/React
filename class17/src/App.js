import actions from "./actions.js";
import CounterApp from "./CounterApp.js";
import store from "./store.js";
import CartApp from "./CartApp.js"
import {Provider, useDispatch} from "react-redux";
import { asyncIncrement } from "./thunk.js";
const CounterApp2 = function(){
  const dispatch = useDispatch();
  const AddItem = function(){
    dispatch({type:actions.add_item,payload:{productId:107}})
    dispatch(asyncIncrement)
  }
  return <div>
    <button onClick={()=>{dispatch({type:actions.inc_count})}}>Increment</button>
    <button onClick={AddItem}>AddItem</button>
  </div>
}
const App = function(){
  return <Provider store={store}>
    <CounterApp/>
    <CounterApp2/>
    <CartApp/>
  </Provider>
}
export default App;