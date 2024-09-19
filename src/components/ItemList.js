import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();


  const handleAddItem = (item)=>{
    // Dispatch an action
    dispatch(addItem(item));
  };


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-[14px]">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
          <div className="absolute">
          <button className="p-2 mx-5 my-20 rounded-lg bg-black text-white shadow-xl " onClick={() => handleAddItem(item)} > Add + </button>
          </div>
            <img className="w-24 h-24 object-cover" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;