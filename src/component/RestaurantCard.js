import { REST_CARD_CDN_API } from "../utils/constants";
import { Star, Clock, DollarSign, Utensils, IndianRupee } from 'lucide-react';


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
    <div className="w-72 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white m-4">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-md">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={REST_CARD_CDN_API+cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">
          {name}
        </h3>

        {/* Cuisines */}
        <div className="flex items-center gap-2 mb-2">
          <Utensils className="w-4 h-4 text-gray-600" />
          <p className="text-sm text-gray-600 line-clamp-1">
            {cuisines.join(", ")}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="font-semibold text-sm text-gray-700">
              {avgRating}
            </span>
          </div>
        </div>

        {/* Cost and Time Container */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          {/* Cost For Two */}
          <div className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {costForTwo}
            </span>
          </div>

          {/* Delivery Time */}
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
            {resData?.info?.sla?.deliveryTime}  mins
            </span>
          </div>
        </div>
      </div>
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
