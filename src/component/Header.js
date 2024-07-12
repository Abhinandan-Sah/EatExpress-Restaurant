import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import EatExpressLogo from "../../public/img/EatExpress-Logo.png"
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

// Header Component
let btnName = "Login"
const Header = () => {
  const [BtnName, setBtnName] = useState(btnName);

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //Selector
  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  let btnChange = (() =>{
    if(BtnName == "Login"){
      setBtnName("Logout");
    }
    else{
      setBtnName("Login");
    }
  });


  return (
    <div className="flex justify-between items-center bg-white fixed top-0 w-full header z-50 ">
      <div className="logo-container">
        <img className="w-36 logo ml-12" src={EatExpressLogo}></img>
      </div>

      <div className="flex items-center nav-items">
        <ul className="flex p-4 m-4 text-lg">
          <li className="px-4">Online Status: {onlineStatus? "✅": "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">🛒{cartItems.length} items</Link></li>
          <div className="flex">
            <button className=" bg-orange-300 px-4 py-1 items-start -mt-1 rounded-lg" onClick={btnChange}>{BtnName}</button>
          </div>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
