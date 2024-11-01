import React from "react";
import { useSelector } from "react-redux";

import { IoClose, IoIceCreamOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";

const Modal = ({ isOpen, close }) => {
  const { cart } = useSelector((store) => store.cartReducer);

  return (
    isOpen && (
      <div
        data-testid="modal"
        className="fixed inset-0 bg-black/30 grid place-items-center text-black backdrop-blur-sm"
      >
        <div className=" bg-white p-5 rounded-lg shadow-lg md:w-[600px] w-[90%] ">
          <div className="w-full flex justify-between items-center my-5 border-b pb-2 max-md:text-lg fs-5">
            <h1 className=" font-semibold  ">SİPARİŞ</h1>
            <button
              datatest-id="close"
              className="border border-gray-200 rounded-xl p-2 hover:bg-gray-100 transition"
              onClick={close}
            >
              <IoClose />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[500px]">
            {cart.length === 0 ? (
              <div className="grid size-52 place-items-center mx-auto">
                <span>
                  <IoIceCreamOutline size={60} />
                </span>
                <h1 className="text-black text-2xl">Sepetiniz boş</h1>
              </div>
            ) : (
              cart && cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>
          {cart.length !== 0 && (
            <div className="fs-5 p-5 text max-md:text-xl">
              <CartInfo cart={cart} />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
