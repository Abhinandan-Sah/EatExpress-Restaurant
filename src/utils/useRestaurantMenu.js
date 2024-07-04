import { useState, useEffect } from "react";
import { REST_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // fetchData
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
