import { useState } from "react";
import { Header_LOGO_URL } from "../utils/constants";

// Header Component
let btnName = "LOGIN"
const Header = () => {
  const [BtnName, setBtnName] = useState(btnName);
  
  let btnChange = (() =>{
    if(BtnName == "LOGIN"){
      setBtnName("LOGOUT");
    }
    else{
      setBtnName("LOGIN");
    }
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Header_LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={btnChange}>{BtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
