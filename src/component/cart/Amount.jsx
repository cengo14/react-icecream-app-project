import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const AmountPicker = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);

  return (
    <div className={`border rounded-xl flex justify-center items-center `}>
      <button
        onClick={() => {
          dispatch(deleteFromCart(item));
          toast.info("Miktar Güncellendi");
        }}
        className={`px-3 py-1 border-r rounded-l-xl font-bold `}
      >
        {item.quantity === 1 ? <FaTrash data-testid="trash-icon" /> : "-"}
      </button>
      <span className="w-10 text-center">{item.quantity}</span>
      <button
        className={`px-3 py-1 border-l rounded-r-xl font-bold `}
        onClick={() => {
          {
            dispatch(addToCart({ item, selectedType: item.selectedType }));
            toast.info("Miktar Güncellendi");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
