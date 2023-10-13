import React from "react";
import image from "../images/sectionImage.png";

const Section = () => {
  return (
    <div>
      <div className="relative w-[1440px] h-[1024px] bg-white">
        <div className="absolute w-[922px] h-[672px] top-[205px] left-[120px]">
          <div className="absolute w-[922px] h-[613px] top-0 left-0">
            <div
              className="relative w-[920px] h-[613px]"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="absolute top-[24px] left-[31px] [font-family:'Outfit-SemiBold',Helvetica] font-normal text-white text-[48px] tracking-[4.80px] leading-[normal]">
                <span className="font-semibold">
                  Modern
                  <br />
                  BUSINESS
                  <br />
                </span>
                <span className="[font-family:'Outfit-ExtraBold',Helvetica] font-extrabold">
                  <br />
                </span>
                <span className="[font-family:'Outfit-Regular',Helvetica]">
                  requires
                  <br />
                  <br />
                </span>
                <span className="font-semibold">
                  Modern
                  <br />
                  DESIGN
                </span>
              </p>
            </div>
          </div>
          <div className="absolute w-[128px] top-[335px] left-[783px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#00000099] text-[36px] text-right tracking-[0] leading-[normal]">
            digital
            <br />
            product
            <br />
            content
            <br />
            web
          </div>
          <div className="absolute top-[612px] left-0 [font-family:'Outfit-Bold',Helvetica] font-bold text-[#f3ae3d] text-[48px] tracking-[0] leading-[normal]">
            incredible growth awaits.
          </div>
        </div>
        <div className="absolute w-[266px] top-[540px] left-[1046px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-black text-[36px] tracking-[0] leading-[normal]">
          MARKETING
          <br />
          BRANDING
          <br />
          CREATION
          <br />
          DEVELOPMENT
        </div>
      </div>
    </div>
  );
};

export default Section;
