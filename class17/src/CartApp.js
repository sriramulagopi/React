import { useSelector } from "react-redux"

const CartApp = function(){
    const state = useSelector((state)=>{
        return state.b.cart.length
    });
    return <div>
        <p> Total number of products:{state}</p>
    </div>
}
export default CartApp;