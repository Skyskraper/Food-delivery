import React from 'react';

const Reastaurant = () => {

  const menu = [
    "All",
    "Pizza",
    "Pasta",
    "Sushi",
    "Vegetarian",
    "Salads",
    "Chinese",
    "Italian",
    "Desserts",
  ];

  const restaurants = [
    {
      id: 1,
      name: "Phuket",
      cuisines: ["Asian", "Thai", "Chinese"],
      category: "Chinese",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s6.jpg",
    },
    {
      id: 2,
      name: "Cook King",
      cuisines: ["Italian", "European"],
      category: "Italian",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s5.jpg",
    },
    {
      id: 3,
      name: "Fusion",
      cuisines: ["Italian", "European"],
      category: "Pasta",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s4.jpg",
    },
    {
      id: 4,
      name: "Munch",
      cuisines: ["European", "Fast Food"],
      category: "Pizza",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s3.jpg",
    },
    {
      id: 5,
      name: "Bagetci",
      cuisines: ["French", "European"],
      category: "Desserts",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s2.jpg",
    },
    {
      id: 6,
      name: "Ocean Poke",
      cuisines: ["Italian", "European"],
      category: "Sushi",
      logo: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/s1.jpg",
    },
  ];

  return (
    <>
      {/* Eight Page */}
      <section className="py-14 md:py-20 bg-[#9a9a9a1f]">
        <div className="container mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700 tracking-wide">
              TOP RESTAURANTS
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Client's Most Popular Choice
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-16">
            {menu.map((cat) => (
              <button
                key={cat}
                className={`px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm font-medium transition
                ${cat === "All"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-orange-500 hover:text-white"
                  }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Restaurants */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">

            {restaurants.map((item) => (
              <div key={item.id} className="text-center">

                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                  {item.name}
                </h4>

                <p className="text-xs sm:text-sm text-gray-400 mt-1 px-2">
                  Cuisines: {item.cuisines.join(", ")}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Reastaurant;
