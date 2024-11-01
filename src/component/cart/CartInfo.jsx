import React from "react";
import { useDispatch } from "react-redux";
import { orderCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const CartInfo = ({ cart }) => {
  const dispatch = useDispatch();
  const cartTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 25;
  const total = cartTotal + shipping;
  return (
    <div>
      <p className="flex justify-between text-gray-500 font-semibold text-base">
        <span> Sepet Tutarı</span>
        <span>{cartTotal}₺</span>
      </p>
      <p className="flex justify-between pt-1 pb-2 text-gray-500 font-semibold text-base">
        <span>Kargo</span>
        <span>{shipping}₺</span>
      </p>
      <p className="flex justify-between">
        <span className="text-gray-900 font-semibold">Toplam</span>
        <span className="font-semibold">{total}₺</span>
      </p>
      <button
        onClick={() => {
          dispatch(orderCart());
          toast.success("Sipariş tamamlandı");
        }}
        className="mt-2 w-full bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-xl"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default CartInfo;
