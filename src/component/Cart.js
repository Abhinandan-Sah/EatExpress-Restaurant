import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart())
  }

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
    </div>
  );
};

export default Cart;
