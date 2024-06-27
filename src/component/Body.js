import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/restaurantData";

const Body = () => {
    return (
      <div className="body">
  
        <div className="search">Search</div>
  
        <div className="res-container"> {/* res=  restaurant*/} 
          {restaurantData.map((restaurant) => {
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
          })};
          
          
        </div> 
  
      </div>
    );
  };

  export default Body;