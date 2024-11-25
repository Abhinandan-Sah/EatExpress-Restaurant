import ItemList from "./ItemList.js";

const RestaurantCategory = ({dataRes, showItems, setShowIndex}) => {
    const handleClick = (() => {
        setShowIndex();
    });

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 p-4  bg-gray-50  shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{dataRes?.title} ({dataRes?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                { showItems && <ItemList items={dataRes?.itemCards} />}
            </div>
        </div> 
    );
};

export default RestaurantCategory;