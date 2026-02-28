import React from "react";
import health from "../../../assets/About1.jpg";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[400px]">

        {/* Image */}
        <img
          src={health}
          alt="About banner"
          className="w-full h-full object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium">
            ABOUT
          </h1>

          <p className="mt-3 text-xs sm:text-sm lg:text-base">
            Home / About
          </p>

        </div>
      </div>
    </section>
  );
};

export default Banner;
