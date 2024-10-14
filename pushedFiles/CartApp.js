import { useSelector } from "react-redux";

const CartApp = function(){
    const state = useSelector(state=>state.b.cart.length);
    return <div>
        <p>Total number of products were into list:{state}</p>
    </div>
}
export default CartApp;