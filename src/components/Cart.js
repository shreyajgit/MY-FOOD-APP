import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
 
  // Whenever u r subscribing to the store , alwats subscibe the right side and the small portion of the store , bcoz if we subscribe the whole store , any small changes happening in the app , our store will get effected which we don't want. Can Refer Lect 12 -> 1:52:00
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  };

  return (
     <div className="text-center m-4 p-4">
    <h1 className ="text-2xl font-bold">Cart</h1>
    <div className="w-9/12 mx-auto">
    <button className="p-2 m-2 bg-black text-white rounded-lg " onClick={handleClearCart} >Clear Cart</button>
    {cartItems.length===0 && <h1>Cart is empty. Add items to the cart!</h1>}
      <ItemList items={cartItems}/>
    </div>
  </div>
  );
};

export default Cart;