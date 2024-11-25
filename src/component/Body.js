import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useBodyRestaurantCard from "../utils/useBodyRestaurantCard.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {

  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant] = useBodyRestaurantCard();
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(UserContext)

  if(onlineStatus === false){ 
    return (<h1>Looks like you are offline!! Please check you internet connection</h1>);
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body flex flex-col justify-center items-center mt-[6rem]">
        <div className="filter flex justify-center bg-white fixed top-20 w-full z-50">
          <div className="search  p-4">
            <input
              type="text"
              className="search-box border border-solid h-9 border-black rounded-lg"
              value={searchText}
              onChange={(e) => {
                // e.preventDefault();
                setSearchText(e.target.value);
              }}
            />
            <button className="px-4 py-2 mx-4 bg-green-300 rounded-lg"
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
          <div className="flex items-center">
          <button
            className="filter-btn px-4 py-2  bg-blue-200 rounded-lg"
            onClick={() => {
              filterList = listOfRestaurants.filter((res) => res.info.avgRating > 3
              );
              setListOfRestaurants(filterList);
            }}
            onChange={setListOfRestaurants}
          >
            Top Rated Restaurants
          </button>
          </div>
          {/* <div className="px-6 flex items-center">
            <label className="pr-1  font-semibold">Change Username:</label> 
            <input className="bg-white border border-black p-2 rounded-lg h-9" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
          </div> */}
          
        </div>

        <div className="flex flex-wrap justify-center mt-12  res-container">
          {/* {" "} */}
          {/* res=  restaurant*/}
          {filteredRestaurant?.map((restaurant) => {
            // console.log({ restaurant });
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {/*  if the resstaurant is promoted then add a promoted label to it  */}
                {restaurant?.info?.promoted ? (  <RestaurantCardPromoted resData={restaurant}  />) : ( <RestaurantCard resData={restaurant} />)}
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
