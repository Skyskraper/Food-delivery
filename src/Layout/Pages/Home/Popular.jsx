import React from 'react';
import clock from "../../../assets/hot-1.jpg";
import { FaStar } from 'react-icons/fa6';

const Popular = () => {

  const dishes = [
    {
      id: 1,
      head: "PIZZA,VEGETARIAN",
      title: "Pizza Margherita",
      description: "With basil, mozzarella, tomatoes",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-22-540x440.jpg",
    },
    {
      id: 2,
      head: "PASTA,VEGETARIAN",
      title: "Ravioli with Spinach and Ricotta cheese",
      description: "With spinach, basil, garlic and ricotta cheese",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-20-540x440.jpg",
    },
    {
      id: 3,
      head: "MEAT",
      title: "Three meat special lasagma",
      description: "With special garlic cream sauce, ricotta cheese and tomatoes.",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-61-540x440.jpg",
    },
    {
      id: 4,
      head: "FISH",
      title: "California roll with black seasme",
      description: "With cream cheese, salmon and black sesame",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-19-540x440.jpg",
    },
  ];

  return (
    <>
      {/* Fifth Page */}
      <section className="py-14 md:py-20 bg-[#f3f3f3]">
        <div className="container mx-auto px-4">

          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#414549]">
              WHAT&apos;S POPULAR
            </h1>
            <p className="text-[#9a9a9a] text-sm sm:text-md mt-2">
              Client&apos;s Most Popular Choice
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-3 sm:px-0">
            {dishes.map((itm) => (
              <div
                key={itm.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden text-center w-full max-w-[300px] mx-auto"
              >
                <img
                  src={itm.image}
                  alt={itm.title}
                  className="w-full h-[250px] object-cover"
                />

                <div className="px-9 py-9">
                  <p className="text-xs sm:text-sm text-gray-500 uppercase bg-[#f3f3f3] mb-2">
                    {itm.head}
                  </p>

                  <h3 className="text-base sm:text-lg font-medium text-[#465058] mb-2">
                    {itm.title}
                  </h3>

                  <div className="flex justify-center mb-4 text-[#f4b22a]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p className="text-sm text-gray-500 mb-6">
                    {itm.description}
                  </p>

                  <button className="bg-[#f4b22a] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    QUICK VIEW
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Sixth Page */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">

          <div className="relative">

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={clock}
                alt="image"
                className="w-full max-w-4xl object-cover"
              />
            </div>

            {/* Text Over Image */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-3">
              <div className="bg-white/80 p-6 sm:p-8 rounded-lg">

                <h1 className="text-sm sm:text-md font-semibold text-[#9a9a9a]">
                  Restaurant "Fusion"
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl text-[#414549] mt-2">
                  Vegetarian Pasta
                  <span className="line-through ml-2">$22.00</span>
                  <span className="text-orange-500 ml-2">$19.00</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center">
                  <p className="text-[#9a9a9a] cursor-pointer">
                    View Info
                  </p>

                  <button className="bg-yellow-400 px-6 py-2 rounded-full text-white font-semibold">
                    ORDER DEAL!
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Popular;
