import { useState } from "react";
import ItemList from "./ItemList";

// here showItems is passed as a prop from parent RestaurantMenu
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);


  const handleClick = ()=>{
    setShowIndex();
  };

  return (
    <div className="w-8/12 bg-gray-150 shadow-lg p-4 mx-auto ">
      {/* Accordion Header */}
      <div className="flex gap-4 justify-between px-9 cursor-pointer " onClick={handleClick} >
        <span className="font-bold text-lg" >{data.title} ({data.itemCards.length}) </span>
        <span >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
            />
          </svg>
        </span>
      </div>
      {/* Accordion Body */}

{/* here items is prop */}
      {showItems && <ItemList items = {data.itemCards} />}
    
    </div>
  );
};

export default RestaurantCategory;
