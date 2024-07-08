import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";


const RestaurantMenu = () => {
  const[showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  
    const { id, name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info ||
      resInfo?.cards[1]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    // console.log("This is recommended data")
    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(categories);

    return (
      <div className="text-center mt-[10rem]">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        
        {categories?.map((category, index)=>(
          // controlled component
          <RestaurantCategory key={category?.card?.card?.title} dataRes={category?.card?.card} showItems={index == showIndex? true: false} setShowIndex={() => setShowIndex(index)} />
        ))}
        
      </div>
    );
  
  
};

export default RestaurantMenu;
