import React from "react";

const HeroCard = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div>
          <div className="bg-white rounded-2xl p-[30px_25px_40px_30px] text-black">
            <div className="flex gap-[20px] items-center">
              <img src="profile.png" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Uzi Nexus</h3>
                <div className="flex gap-1">
                  <img src="star.svg" alt="" />
                  <img src="star.svg" alt="" />
                  <img src="star.svg" alt="" />
                  <img src="star.svg" alt="" />
                  <img src="star.svg" alt="" />
                </div>
              </div>
            </div>
            <p className="mt-4 lg:max-w-[276px]">
              Indulge in frozen bliss with our irressistible ice cream delights!
            </p>
          </div>
          <div className="bg-white/75 rounded-b-2xl h-4 w-[94%] mx-auto"></div>
          <div className="bg-white/50 rounded-b-2xl h-4 w-[90%] mx-auto"></div>
        </div>
        <img src="dots.svg" alt="dots" />
      </div>
      <div className="lg:mt-[84px] mt-[36px]">
        <h3 className="mb-[15px] fs-5 font-medium">Kategori Seçiniz</h3>
        <div className="flex gap-10">
          <button className="bg-white/15 border border-white/50 rounded-2xl p-[14px] hover:bg-white/40 transition">
            <img src="icon-3.svg" alt="icon3" />
          </button>
          <button className="bg-white/15 border border-white/50 rounded-2xl p-[14px] hover:bg-white/40 transition">
            <img src="icon-2.svg" alt="icon2" />
          </button>
          <button className="bg-white/15 border border-white/50 rounded-2xl p-[14px] hover:bg-white/40 transition">
            <img src="icon-1.svg" alt="icon1" />
          </button>
          <button className="bg-white/15 border border-white/50 rounded-2xl p-[14px] hover:bg-white/40 transition">
            <img src="icon-4.svg" alt="icon4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
