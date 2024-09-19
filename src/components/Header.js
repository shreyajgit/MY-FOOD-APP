// Header.js
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import img1 from '../../image/logo.png';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 px-7 mx-[-62px] flex justify-between items-center ">
      <div className="flex items-center">
        <img className="w-[140px]" src={img1} alt="Logo" />
      </div>
      <div className="flex items-center space-x-8 text-lg font-semibold">
        <div className="flex items-center">
          {onlineStatus ? (
            <span className="text-green-500">🟢 Online</span>
          ) : (
            <span className="text-red-500">🔴 Offline</span>
          )}
        </div>
        <nav className="flex space-x-8">
          <Link className="text-gray-700 hover:text-blue-600 transition duration-300" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition duration-300" to="/about">About Us</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition duration-300" to="/contact">Contact Us</Link>
          {/* <Link className="text-gray-700 hover:text-blue-600 transition duration-300" to="/grocery">Grocery</Link> */}
          <Link className="text-gray-700 hover:text-blue-600 transition duration-300" to="/cart">Cart ({cartItems.length}) </Link>
          <span className="text-gray-700 font-bold">{loggedInUser}</span>
        </nav>
        <button
          className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300 font-semibold"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </header>
  );
};

export default Header;