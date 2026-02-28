import React from "react";
import woman from "../../../assets/bg_woman.png";
import marker from "../../../assets/marker-2.png";
import { FaMobileAlt, FaStore } from "react-icons/fa";

const Welcome = () => {
  return (
    <section className="relative ">
      <div className="container">
          {/* BACKGROUND IMAGE */}
      <img
        src={woman}
        alt="woman"
        className="absolute inset-0   object-contain"
      />

  
      <div className="relative z-10 top-[71px] left-[-339px] flex flex-col items-center justify-center  min-h-auto px-3 py-3 text-center">

        <h1 className="text-[#3f4346] text-5xl font-serif leading-[1.05]">
          Welcome!
        </h1>

        <p className="mt-1 text-[#9a9a9a] text-sm">
          Who We Are
        </p>

        <p className="mt-6 max-w-[600px] text-[#9a9a9a] text-[17px] leading-[32px]">
          “Fooddy 24/7 is young fast growing company that works to make your life
          easier. We take responsibility for making sure that your orders from
          restaurants are delivered to you safely and quickly.”
        </p>

        <div className="mt-8">
          <img src={marker} alt="signature" className="w-[180px]" />
        </div>

        {/* BOTTOM ICONS */}
        <div className="mt-20 flex ">

          <div className="flex items-center gap-3 text-[#9a9a9a]">
            <FaStore className="text-[#ffb400] text-3xl" />
            <span className="uppercase text-sm tracking-wide">
              2500 Restaurants
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#9a9a9a]">
            <FaMobileAlt className="text-[#ffb400] text-3xl" />
            <span className="uppercase text-sm tracking-wide">
              Order with App
            </span>
          </div>

        </div>

      </div>

      </div>

    

    </section>
  );
};

export default Welcome;
