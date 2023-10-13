import React from "react";
import logo from "../images/Alpha.png";
import vector from "../images/Vector 1.png";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <div>
      <div className="bg-[#9858FF] px-24 pt-6">
        <nav className="p-4 rounded-full border-2 border-white">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 flex items-center justify-center">
                <img
                  src={vector}
                  alt="Logo"
                  className="lg:h-10 md:h-1 sm:h-1 lg:w-10"
                />
                <img
                  src={logo}
                  alt="Logo"
                  className="lg:h-10 md:h-1 sm:h-1 lg:w-10"
                />
              </div>
            </div>
            <div className="flex-grow text-center">
              <a href="#" className="text-white mr-4">
                About
              </a>
              <a href="#" className="text-white">
                Services
              </a>
            </div>
            <div>
              <CustomButton />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
