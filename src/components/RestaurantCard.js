import { CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;

  return (
    <motion.div
      className="card m-4 p-2 w-[237px] h-[380px] bg-white rounded-lg overflow-hidden"
      initial={{ opacity: 1 }} 
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        transition: { boxShadow: { duration: 0.3 } }
      }}
      whileTap={{ scale: 0.98 }} 
    >
      <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
        <motion.img
          className="w-full h-full object-cover absolute top-0 left-0"
          alt="restaurant"
          src={CDN_URL + cloudinaryImageId}
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="px-3 py-2">
        <motion.h3
          className="text-lg font-bold py-1 mb-2 text-gray-800 truncate"
          initial={{ opacity: 1, y: 10, scale: 1 }}
          whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
        <motion.h4
          className="text-sm text-gray-600 mb-2"
          initial={{ opacity: 1, y: 10, scale: 1 }}
          whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {cuisines.join(", ")}
        </motion.h4>
        <motion.h4
          className="text-sm text-blue-600 mb-2"
          initial={{ opacity: 1, y: 10, scale: 1 }}
          whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {avgRating} stars
        </motion.h4>
        <motion.h4
          className="text-sm text-gray-800"
          initial={{ opacity: 1, y: 10, scale: 1 }}
          whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {costForTwo}
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
