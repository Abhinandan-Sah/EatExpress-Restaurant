import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/restaurantList";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [Restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // Optional Chaining
    // setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return Restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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

              const filterRestaurant = Restaurants.filter((res) =>
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
            filterList = Restaurants.filter((res) => res.info.avgRating > 4);
            setRestaurants(filterList);
          }}
          onChange={setRestaurants}
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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
