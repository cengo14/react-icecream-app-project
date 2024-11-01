import React, { useState } from "react";
import Modal from "./Modal";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-4 left-1 -mb-[50px] z-[999]">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white rounded-full py-3 px-4 pr-16 text-xl lg:text-2xl font-medium text-black relative hover:bg-gray-200 transition"
      >
        <img
          className="absolute right-0 bottom-1 size-16"
          src="cart-1.png"
          alt=""
        />
        Sepet
      </button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Cart;
