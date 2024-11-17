import { useState, useEffect } from "react";
import dataDb from "./data.js";

const useBodyRestaurantCard = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
console.log(dataDb);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const data = await fetch(dataDb);
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    // const json = await data.json();
    const json = dataDb;

    // console.log(json);
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // Optional Chaining
    // setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  return [listOfRestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant];
};

export default useBodyRestaurantCard;
