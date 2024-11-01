import React, { useState } from "react";
import Selector from "./Selector";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const Card = ({ item }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart({ item, selectedType }));
    setSelectedType(null);
    toast.success("Sepete eklendi");
  };
  return (
    <div className="bg-black/20 border border-white/50 rounded-3xl ps-5 pe-8 py-6 lg:ps-10 lg:pe-16 lg:py-8">
      <div className="flex items-center gap-12">
        <img
          className="size-32 lg:size-48 drop-shadow-2xl"
          src={item.image}
          alt=""
        />
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-2xl font-medium">{item.name}</h2>
          <p className="mt-5">Sipariş Tipi:</p>
          <Selector
            setSelectedType={setSelectedType}
            selectedType={selectedType}
          />
          <div className="mt-6 flex justify-between items-center">
            <p>{item.price}₺/top</p>

            <button
              className={`border rounded-md flex justify-center items-center px-5 py-1 ${
                !selectedType && "invisible"
              }`}
              onClick={handleClick}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
