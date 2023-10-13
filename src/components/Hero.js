import React, { useState } from "react";
import group from "../images/Group 2.png";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    setEmail(e.target.value);
    console.log(`email: ${email}`);
  };

  const gradientBackground = {
    background: "linear-gradient(to top, #EAA550 50%, transparent 50%)",
    display: "inline",
  };

  const commonStyles =
    "text-white font-outfit text-right font-normal font-style-normal font-weight-400 leading-normal";

  const highlightedStyles = "text-2xl md:text-[72px] font-bold";

  return (
    <>
      <div className="relative bg-[#9858ff] min-h-[120vh]">
        <div className="px-4 md:px-24 lg:pt-16">
          <h1 className="text-4xl lg:w-2/3 leading-10 md:text-6xl lg:text-7xl text-white">
            Bring your{" "}
            <span className="font-bold" style={gradientBackground}>
              BUSINESS
            </span>{" "}
            and the{" "}
            <span className="font-bold" style={gradientBackground}>
              INTERNET
            </span>{" "}
            together
          </h1>
          <h1
            className={`px-4 md:px-24 ${commonStyles} text-2xl md:text-7xl`}
            style={{
              color: "rgba(255, 255, 255, 0.35)",
            }}
          >
            with
            <span className={highlightedStyles}> DESIGN</span> and{" "}
            <span className={highlightedStyles}>MARKETING</span>
          </h1>
          <div className="w-[604px] h-[72px] border-2 border-solid border-white rounded-[50px] flex items-center justify-center">
            <div className="flex ">
              <div className="pl-4">
                <input
                  type="text"
                  className="bg-[#9858ff] border border-gray-300 rounded-l flex-1 border-none text-2xl focus:border-none p-2 text-white"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-[200px] h-13 flex-shrink-0 rounded-full bg-white shadow-2xl"
              >
                <span className="font-bold">{"GET STARTED"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-200px] left-0 ml-[320px] z-40">
          <img src={group} alt="author" />
        </div>
      </div>
    </>
  );
};

export default Hero;
