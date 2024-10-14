import CounterApp1 from "./CounterApp1.js";
import CounterApp2 from "./CounterApp2.js";
import {Provider} from "react-redux";
import store from "./store.js"
import CartApp from "./CartApp.js";
const App = function(){
    return <Provider store={store}>
        <CounterApp1/>
        <CounterApp2/>
        <CartApp/>
    </Provider>
}
export default App