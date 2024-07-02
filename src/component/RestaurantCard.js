import { REST_CARD_CDN_URL } from "../utils/constants";

const RestaurantCard = ((props) => {
  const {resData} = props;

  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
  } = resData?.info;
  

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} >
      <img
        className="res-logo"
        alt="res-logo"
        src={REST_CARD_CDN_URL+cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      {/* <p>ID= {id}</p> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
});

export default RestaurantCard;
