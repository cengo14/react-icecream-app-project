import React from "react";

const TrendButton = () => {
  return (
    <div className="flex justify-end ">
      <button className="flex items-center gap-2 bg-white rounded-full py-3 px-4 pr-16 text-xl lg:text-2xl font-medium text-black relative hover:bg-white/75 transition">
        Trendler{" "}
        <img
          className="absolute right-0 bottom-1 size-16"
          src="fire.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default TrendButton;
