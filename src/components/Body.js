import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State variables
  const [listofRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered", listofRestaurants);

  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.44250&lng=81.85170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      // Optional Chaining
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurant(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleSearch = () => {
    const filteredRestaurant = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex mt-6 mb-4 justify-between">
        <div className="mx-4 flex items-center justify-between space-x-2">
          <div className="relative">
            <input
              type="text"
              className="border w-auto border-solid border-gray-300 rounded-lg p-2 pl-10 focus:outline-none focus:border-blue-500 shadow-sm"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder=" Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <button
            onClick={handleSearch}
            className="bg-purple-500 text-md font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-500 text-md font-bold text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mr-5"
          onClick={handleTopRatedFilter}
        >
          Top-Rated Restaurant
        </button>
      </div>

      <div className="search m-4 p-4 flex items-center">
        <label>Username:</label>
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto max-w-screen">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant.info.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
