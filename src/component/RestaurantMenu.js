import Shimmer from "./Shimmer.js";
import { useParams  } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js"

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    <Shimmer />;
  } else {
    const {id, name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[1]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>ID= {id}</h2>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
