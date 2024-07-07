import { REST_CARD_CDN_API } from "../utils/constants";

const RestaurantCard = ((props) => {
  const {resData} = props;

  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;
  

  return (
    <div className="m-4 p-4  w-[250px]  rounded-md bg-gray-100 hover:bg-gray-200 hover:   res-card" >
      <img
        className="rounded-lg  res-logo"
        alt="res-logo"
        src={REST_CARD_CDN_API+cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold pb-2 text-base">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold pb-2 text-base">⭐ {avgRating}</h4>
      <h4 className="font-semibold pb-2 text-base">{costForTwo} </h4>
      <h4 className="font-semibold text-base">{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
});

// Higher Order Component

//input - RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (WrappedComponent) => {
  // returning Function (with enhance feture like promoted label)
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text text-white p-2 m-2 rounded-lg">Promoted</label>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
