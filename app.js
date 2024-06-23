import React from "react";
import ReactDom from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "I am Iron Man");

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/4/20906824/2b9662d8c384376c1665e3795602ec93_o2_featured_v2.jpg?output-format=webp"></img>
            <h3>Avi Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>5.0 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">

      <div className="search">Search</div>

      <div className="res-container"> {/* res=  restaurant*/} 
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div> 

    </div>
  );
};

// Application Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
