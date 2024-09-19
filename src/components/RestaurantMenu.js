import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState()

  if (!resInfo) return <Shimmer />;

  const restaurantDetails = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurantDetails || {};

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const categories = itemCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (!restaurantDetails) {
    return <div className="text-center">Restaurant details not available.</div>;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name || "Restaurant"}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ") || "Cuisines not available"} - {costForTwoMessage || "Cost information not available"}
      </p>
      {categories.length > 0 ? (
        categories.map((category, index) => (

          // Controlled Component
          <RestaurantCategory key={index} data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          />
        ))
      ) : (
        <div>No categories available.</div>
      )}
    </div>
  );
};

export default RestaurantMenu;