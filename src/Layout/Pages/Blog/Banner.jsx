import React from 'react';
import health from '../../../assets/About1.jpg';

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px]">
              
              {/* Image */}
              <img
                src={health}
                alt="banner"
                className="w-full h-full object-cover"
              />

              {/* O */}
              

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal">
                  BLOG
                </h1>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold hover:text-[#ffbd2f] transition">
                  HOME / BLOG
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
