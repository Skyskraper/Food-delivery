import React, { useRef } from "react";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdPhoneIphone,
} from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaStore, FaTruckFast } from "react-icons/fa6";

const Banner = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slides = [
    {
      image: slide1,
      title: "ORDER FOOD DELIVERY",
    },
    {
      image: slide3,
      title: "WE GET WHAT YOU LOVE",
    },
    {
      image: slide2,
      title: "ORDER TAKEAWAY ONLINE",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="relative">

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="relative w-full h-[420px] sm:h-[550px] lg:h-[700px]">

                {/* Image  */}
                <img
                  src={slide.image}
                  alt="slide"
                  className="w-full h-full object-cover brightness-95"
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6 max-w-4xl">

                    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-sm sm:text-lg lg:text-xl">
                      From Your Favorite Restaurants!
                    </p>

                    <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition text-white font-bold py-3 px-8 sm:px-12 rounded-full shadow-xl">
                      MENU
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Arrows*/}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-4 bg-white/20 backdrop-blur-md text-white rounded-full p-2"
        >
          <MdKeyboardArrowLeft size={35} />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-4 bg-white/20 backdrop-blur-md text-white rounded-full p-2"
        >
          <MdOutlineKeyboardArrowRight size={35} />
        </button>

        {/* Bottom Features (Desktop Only) */}
        <div className="hidden lg:block absolute bottom-8 w-full">
          <div className="flex items-center justify-center gap-14 text-white">

            <div className="flex items-center gap-3">
              <FiClock size={24} />
              <p className="font-semibold">24/7 DELIVERY</p>
            </div>

            <div className="h-6 w-px bg-white/40"></div>

            <div className="flex items-center gap-3">
              <FaStore size={24} />
              <p className="font-semibold">2500 RESTAURANTS</p>
            </div>

            <div className="h-6 w-px bg-white/40"></div>

            <div className="flex items-center gap-3">
              <MdPhoneIphone size={24} />
              <p className="font-semibold">ORDER WITH APP</p>
            </div>

            <div className="h-6 w-px bg-white/40"></div>

            <div className="flex items-center gap-3">
              <FaTruckFast size={24} />
              <p className="font-semibold">FAST DELIVERY</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
