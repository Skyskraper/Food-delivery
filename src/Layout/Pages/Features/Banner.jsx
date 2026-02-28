import React from 'react';
import health from '../../../assets/About1.jpg';

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className='grid grid-cols-1'>
            <div className='col-span-1'>
                  <div className="relative w-full h-[300px]">
          
          {/* Image */}
          <img
            src={health}
            alt=" banner"
            className="w-full h-full object-cover"
          />

       

          {/* Text on image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="md:text-7xl lg:text-7xl text-5xl font-[400]">FEATURES </h1>
            <p className="mt-2 md:text-lg lg:text-lg text-md font-[600] hover:text-[#ffbd2f]">
              Home / Privacy Policy 
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
