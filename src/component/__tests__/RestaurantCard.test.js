 import {render, screen} from "@testing-library/react"
 import RestaurantCard from "../RestaurantCard.js"

 it("Should render RestaurantCard component with props", ()=>{
    render(
        <RestaurantCard resData={} />
    );
 });