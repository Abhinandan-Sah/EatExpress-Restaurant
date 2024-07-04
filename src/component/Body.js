import RestaurantCard from "./RestaurantCard";
 import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyRestaurantCard from "../utils/useBodyRestaurantCard.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant] = useBodyRestaurantCard();
  console.log("This is listRestaurant");
  console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){ 
    return (<h1>Looks like you are offline!! Please check you internet connection</h1>);
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                // e.preventDefault();
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                //Filter the restraunt cards and update the UI
                //searchText
                // console.log(searchText);

                const filterRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filterRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filterList);
            }}
            onChange={setListOfRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {/* {" "} */}
          {/* res=  restaurant*/}
          {filteredRestaurant.map((restaurant) => {
            // console.log({ restaurant });
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />{" "}
              </Link>
            );
          })}
          ;
        </div>
      </div>
    );
  }
};

export default Body;
