import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col  sm:flex-row border border-gray-400 mt-5 w-11/12 mx-auto ">
      <div className=" w-full sm:w-1/2 flex  justify-center items-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-11 h-[2px] bg-[#414141]"></div>
            <span className="text-gray-600 mx-2 text-sm md:text-base">
              OUR BESTSELLERS
            </span>
            <div className="w-8 md:w-11 h-[2px] bg-[#414141]"></div>
          </div>
          <h1 className="prata-regular text-4xl sm:py-3 lg:text-5xl leading-relaxed font-light mb-4">
            Latest Arrivals
          </h1>
          <a
            className="text-gray-600 flex items-center justify-center"
            href="#"
          >
            SHOP NOW
            <div className="border-t border-gray-400 w-8 ml-2"></div>
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 bg-pink-100 flex justify-center items-center">
        <img
          alt=""
          height={600}
          src="https://storage.googleapis.com/a1aa/image/fRkpeKSPgKmnwUgXvnKiyviaTYjdfYmnoUNXusvjwdyM1QRnA.jpg"
          width={400}
        />
      </div>
    </div>
  );
};

export default Hero;
