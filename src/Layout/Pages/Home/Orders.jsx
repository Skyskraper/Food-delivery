import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaApple, FaGooglePlay, FaUtensils } from 'react-icons/fa6';
import { IoFastFood } from 'react-icons/io5';
import { MdDeliveryDining } from 'react-icons/md';
import forth from "../../../assets/forth-page.jpg";
import mobile from "../../../assets/image-53.png";

const Orders = () => {
  return (
    <>
      {/*  SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl  text-[#54595f]">
              HOW TO ORDER ?
            </h1>
            <p className="font-semibold text-[#9a9a9a] mt-2">
              Follow the steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {/* Step 1 */}
            <div>
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt size={70} className="text-[#465058]" />
              </div>
              <div className="py-6">
                <span className="w-12 h-12 text-lg mx-auto rounded-full bg-yellow-400 text-white flex items-center justify-center font-semibold">
                  1
                </span>
              </div>
              <p className="text-[#54595f] font-medium text-lg md:text-xl">
                Choose your <br /> location
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center justify-center">
                <FaUtensils size={70} className="text-[#465058]" />
              </div>
              <div className="py-6">
                <span className="w-12 h-12 text-lg mx-auto rounded-full bg-yellow-400 text-white flex items-center justify-center font-semibold">
                  2
                </span>
              </div>
              <p className="text-[#54595f] font-medium text-lg md:text-xl">
                Choose <br /> restaurant
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center justify-center">
                <IoFastFood size={70} className="text-[#465058]" />
              </div>
              <div className="py-6">
                <span className="w-12 h-12 text-lg mx-auto rounded-full bg-yellow-400 text-white flex items-center justify-center font-semibold">
                  3
                </span>
              </div>
              <p className="text-[#54595f] font-medium text-lg md:text-xl">
                Make your <br /> order
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-center justify-center">
                <MdDeliveryDining size={70} className="text-[#465058]" />
              </div>
              <div className="py-6">
                <span className="w-12 h-12 text-lg mx-auto rounded-full bg-yellow-400 text-white flex items-center justify-center font-semibold">
                  4
                </span>
              </div>
              <p className="text-[#54595f] font-medium text-lg md:text-xl">
                Food is on <br /> the way
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION */}
      <section className="relative py-12 md:py-20">
        {/* Background image */}
        <img
          src={forth}
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover"
        />

     

        <div className="relative z-10 container mx-auto px-6 lg:px-20">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Text Content */}
            <div className="text-white text-center lg:text-left max-w-xl">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl  mb-6 ">
                Get Your Favorite <br/> Food Fast with <br/> the App
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-6 text-sm">

                <a className="flex items-center gap-3 font-semibold uppercase tracking-wide hover:opacity-80 cursor-pointer">
                  <FaApple size={28} />
                  Download on the App Store
                </a>

                <a className="flex items-center gap-3 font-semibold uppercase tracking-wide hover:opacity-80 cursor-pointer">
                  <FaGooglePlay size={28} />
                  Android app on Google Play
                </a>

              </div>
            </div>

            {/* Mobile Image */}
            <div className="w-60 sm:w-72 md:w-80 lg:w-96">
              <img src={mobile} alt="App" className="w-full " />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
