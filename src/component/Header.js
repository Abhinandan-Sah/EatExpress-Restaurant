import { useEffect, useState } from "react";
import { Header_LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
let btnName = "LOGIN"
const Header = () => {
  const [BtnName, setBtnName] = useState(btnName);

  const onlineStatus = useOnlineStatus();
  
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
          <li>Online Status: {onlineStatus? "✅": "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
          <button onClick={btnChange}>{BtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
