import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/restaurantList";
import {useEffect, useState} from "react"

const Body = () => {

  const [Restaurants, setRestaurants] = useState(RestaurantList)

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data.cards[2].data.data.cards)
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterList= Restaurants.filter(
              (res) => res.data.avgRating >4
            );
            setRestaurants(filterList);
          }}

          onChange={setRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {" "}
        {/* res=  restaurant*/}
        {Restaurants .map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
