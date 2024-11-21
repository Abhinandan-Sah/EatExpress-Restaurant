import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js"
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);
  const navigate= useNavigate();

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart())
  }

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="mt-[9rem] text-center">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        <div className="flex justify-end">
        <button className="mt-2  bg-red-500 font-semibold p-2 text-white rounded-lg " onClick={handleClear}>Clear Cart</button>
        </div>
          {cartItems.length==0 && <h1 className="mt-2 font-semibold text-lg">Cart is empty!. Please Add items to cart🙏</h1>}
          <ItemList items={cartItems}/>
      </div>
      <div className="w-6/12 m-auto bg-orange-400 px-2 py-4 flex justify-between text-2xl font-bold text-slate-100">
        <div>Total</div>
        <div className="mr-2">
        ₹ {cartItems.reduce((total, individul) => total + (individul.card.info.price ? individul.card.info.price / 100 : individul.card.info.defaultPrice / 100), 0).toFixed(2)}        
        </div>
      </div>
      <div className="w-6/12 m-auto flex justify-end mt-4">
    <button className="bg-green-500 font-semibold p-2 text-white rounded-lg" onClick={handleCheckout}>Checkout</button>
  </div>
    </div>
  );
};

export default Cart;
