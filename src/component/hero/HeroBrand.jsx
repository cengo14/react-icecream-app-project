import React from "react";

const HeroBrand = () => {
  return (
    <div className="max-w-[660px] flex flex-col gap-[25px] ">
      <h1 className="fs-1 font-semibold ">Yaban Mersinili Dondurma</h1>
      <p className="text-white/75 font-medium fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim
        ab dicta corporis, temporibus consectetur adipisci sequi labore earum
        quasi.
      </p>
      <div className="flex gap-10">
        <button className="border rounded-[10px] fs-5 w-[40%] py-3 hover:bg-white/30 transition">
          Sipariş Ver
        </button>
        <button className="w-[40%] rounded-[10px] fs-5 bg-white/15 py-3 hover:bg-white/30 transition">
          Rezervasyon
        </button>
      </div>
    </div>
  );
};

export default HeroBrand;
