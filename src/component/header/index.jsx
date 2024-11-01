import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center  text-[14px] sm:text-base md:text-[18px] lg:text-xl 2xl:text-[28px] ">
      <div className="flex gap-[18px] items-center">
        <img
          className="size-11 lg:size-14 2xl:size-[78px]"
          src="ice-cream.svg"
          alt="logo"
        />
        <h2 className="font-black max-sm:hidden">
          Drop <br />
          Cream
        </h2>
      </div>
      <nav className="flex items-center gap-[12px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[50px]">
        <Link to="/">Anasayfa</Link>
        <Link to="/aboutus">Hakkımızda</Link>
        <Link to="nearby">Yakındakiler</Link>
        <Link to="/search">
          <img
            className="size-4 2xl:size-[30px]"
            src="search.svg"
            alt="search"
          />
        </Link>
      </nav>
      <button>
        <CgMenuRightAlt className="2xl:size-[30px] size-6" />
      </button>
    </header>
  );
};

export default Header;
