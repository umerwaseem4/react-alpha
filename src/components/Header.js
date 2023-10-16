import React from "react";
import logo from "../images/Alpha.png";
import vector from "../images/Vector 1.png";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <div>
      <div className="bg-[#9858FF] px-4 sm:px-24 pt-6">
        <nav className="p-4 rounded-full border-2 border-white">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="rounded-full h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center p-2">
                <img src={vector} alt="Vector" className="w-4/5" />
                <img src={logo} alt="Alpha" className="w-4/5 sm:w-24" />
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
            <CustomButton />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
