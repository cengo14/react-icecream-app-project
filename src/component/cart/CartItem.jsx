import React from "react";
import AmountPicker from "./Amount";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center overflow-auto border-b py-2 md:py-4">
      <div className="flex items-center gap-2">
        <img className="size-32" src={item.image} alt={item.name} />
        <div>
          <h1 className="font-semibold md:text-xl">{item.name}</h1>
          <p className="text-gray-600">{item.selectedType}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 md:text-xl">
        <AmountPicker item={item} />
        <p className="min-w-16 text-center">
          {" "}
          {item.price * item.quantity + "₺"}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
