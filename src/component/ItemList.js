import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { REST_CARD_CDN_API } from "../utils/constants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item))
  };

  return (
    <div>
      {items?.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 mr-2 mt-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
                <span className="font-semibold text-md">{item.card.info.name}</span>
                <span className="font-bold text-md "> - ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                <p className="text-sm mt-4">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
                <div className="absolute text-center">
                    <button className="p-2 shadow-lg rounded-lg ml-[5.2rem]  bg-black text-white  top-0 text-cen" onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img src={REST_CARD_CDN_API+ item.card.info.imageId} />
            </div>
            
        </div>
      ))}
    </div>
  );
};

export default ItemList;
