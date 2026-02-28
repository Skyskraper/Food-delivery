import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';

const Dishes = () => {

  const juices = [
    {
      id: 1,
      name: "Strawberry Daiquiri",
      price: "$7.00",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2021/09/product-18-copyright-540x440.jpg",
    },
    {
      id: 2,
      name: "Singapore Sling",
      price: "$8.00",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2021/09/product-19-copyright-540x440.jpg",
    },
    {
      id: 3,
      name: "Innocent Mojito",
      price: "$8.00",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2021/09/product-20-copyright-540x440.jpg",
    },
  ];

  return (
    <>
      {/* Seventh Page */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] text-[#414549] font-light">
              NEW DISHES
            </h1>
            <p className="text-[#9a9a9a] text-sm mt-2">
              Clients’ Most Popular Choice
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">

            {juices.map((itm) => (
              <div
                key={itm.id}
                className="flex flex-col items-center text-center"
              >

                {/* Image  */}
                <div className="relative group overflow-hidden rounded-3xl w-full max-w-[280px]">
                  <img
                    src={itm.image}
                    alt={itm.name}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition
                flex items-center justify-center gap-4 sm:gap-6">

                    {/* Shopping Cart Button */}
                    <button
                      className="px-2 py-2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10
               border-2 border-yellow-500 
               flex items-center justify-center
               text-yellow-500 hover:bg-yellow-500 hover:text-white
               transition"
                    >
                      <FaShoppingCart className="-rotate-45 text-xs sm:text-sm md:text-base lg:text-lg" />
                    </button>

                    {/* Link Button */}
                    <button
                      className="px-2 py2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10
               border-2 border-yellow-500 rotate-45
               flex items-center justify-center
               text-yellow-500 hover:bg-yellow-500 hover:text-white
               transition"
                    >
                      <FaLink className="-rotate-45 text-xs sm:text-sm md:text-base lg:text-lg" />
                    </button>

                  </div>
                </div>

                {/* Info */}
                <div className="mt-6">
                  <p className="text-lg sm:text-xl text-[#414549]">
                    {itm.name}
                  </p>
                  <span className="block text-orange-500 text-base sm:text-lg mt-1">
                    {itm.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full lg:max-w-[380px] max-w-[100px] justify-center">
                  <button className="flex items-center justify-center gap-2 bg-yellow-500 text-xs py-2 px-3 lg:text-md lg:px-6 lg:py-3 rounded-full text-white hover:bg-yellow-600 transition">
                    <FaShoppingCart />
                    ORDER
                  </button>

                  <button className="bg-yellow-500 lg:px-6  lg:py-3 text-xs  py-2 px-3 lg:text-md rounded-full text-white hover:bg-yellow-600 transition">
                    QUICK VIEW
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Dishes;
