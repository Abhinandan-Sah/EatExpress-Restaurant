import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
import Loading from 'react-loading';

const RestaurantMenu = () => {
  const[showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading type="spin" color="#000" height={50} width={50} />
      </div>
    );
  }

  // console.log(resInfo);
  
    const { id, name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info ||
      resInfo?.cards[1]?.card?.card?.info;

    // const { itemCards } =
    //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card ||
    //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card;
    const  itemCards  = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories =
      itemCards?.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    return (
      <div className="text-center mt-[7rem]">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        
        {categories && categories.length > 0 && categories.map((category, index)=>(
          // controlled component
          <RestaurantCategory key={category?.card?.card?.title} dataRes={category?.card?.card} showItems={index == showIndex? true: false} setShowIndex={() => setShowIndex(index)} />
        ))}
        
      </div>
    );
  
  
};

export default RestaurantMenu;
