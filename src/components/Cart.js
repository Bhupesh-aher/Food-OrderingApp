import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const disPatch = useDispatch();

    const handleClearCart = () => {
        disPatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-14">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-3 bg-black text-white rounded-lg"
                onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Cart is empty. Add Items to the cart!</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
 
export default Cart;
   