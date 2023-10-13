import React from "react";
import ellipse3 from "../images/Ellipse 3.png";
import ellipse2 from "../images/Ellipse 2.png";
import ellipse1 from "../images/Ellipse 1.png";
import linkedin from "../images/LinkedIn.png";
import facebook from "../images/Facebook.png";
import twitter from "../images/TwitterX.png";
import instagram from "../images/Instagram Old.png";
import hand from "../images/hand.png";

export const Footer = () => {
  return (
    <div className="bg-[#9858ff] relative w-full h-[1024px]">
      <div className="absolute w-[864px] h-[324px] top-[139px] left-[120px]">
        <p className="absolute w-[762px] top-0 left-0 [font-family:'Outfit-Medium',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[normal]">
          Our
          team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of{" "}
          <br />
          problem solvers is ready to
        </p>
        <div className="absolute w-[191px] h-[81px] top-[2px] left-[300px]">
          <div className="relative h-[81px]">
            <img
              className="left-[110px] absolute w-[81px] h-[81px] top-0 object-cover"
              alt="Ellipse"
              src={ellipse3}
            />
            <img
              className="left-[55px] absolute w-[81px] h-[81px] top-0 object-cover"
              alt="Ellipse"
              src={ellipse2}
            />
            <img
              className="left-0 absolute w-[81px] h-[81px] top-0 object-cover"
              alt="Ellipse"
              src={ellipse1}
            />
          </div>
        </div>
        <p className="absolute top-[192px] left-0 [font-family:'Outfit-Medium',Helvetica] font-medium text-[#ffffff59] text-[64px] tracking-[0] leading-[normal]">
          create digital experiences that
          <br />
          SATISFY you and your clients.
        </p>
      </div>
      <p className="absolute top-[463px] left-[120px] [font-family:'Outfit-Medium',Helvetica] font-medium text-[#ffffff0d] text-[64px] tracking-[0] leading-[normal]">
        Are you ready to unleash
        <br />
        your true potential?
      </p>
      <div className="absolute w-[615px] h-[90px] top-[794px] left-[707px]">
        <img
          className="absolute w-[90px] h-[90px] top-0 left-0"
          alt="Linked in"
          src={linkedin}
        />
        <img
          className="absolute w-[90px] h-[90px] top-0 left-[175px]"
          alt="Facebook"
          src={facebook}
        />
        <img
          className="absolute w-[90px] h-[90px] top-0 left-[350px]"
          alt="Instagram old"
          src={instagram}
        />
        <img
          className="absolute w-[90px] h-[90px] top-0 left-[525px]"
          alt="Twitter x"
          src={twitter}
        />
      </div>
      <div className="absolute top-[838px] left-[120px] [font-family:'Outfit-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
        Alpha Digital Labs, 2023.
      </div>
    </div>
  );
};
