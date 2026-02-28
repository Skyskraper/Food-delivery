import React from 'react';

const Menu = () => {
     const categories = [
    {
      id: 1,
      title: "SUSHI",
      description: "More Than 50 Kinds of Sushi",
      image:
        "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-19-540x440.jpg",
    },
    {
      id: 2,
      title: "PIZZA",
      description: "Choose Your Favorite Pizza",
      image:
        "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-22-540x440.jpg",
    },
    {
      id: 3,
      title: "BURGERS",
      description: "From Vegetarian to Three-Meat",
      image:
        "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-52-540x440.jpg",
    },
    {
      id: 4,
      title: "DESSERTS",
      description: "Find Desserts or Every Taste",
      image:
        "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-51-540x440.jpg",
    },
  ];
  return (
    <>
      {/* second page */}
    
          <section className="lg:py-20 py-15 bg-[#9a9a9a1f]">
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
              {/* Heading */}
              <div className="text-center mb-16">
                <h1 className="lg:text-6xl md:text-4xl text-4xl text-[#54595f] ">
                  More Than <span className="text-yellow-500">20,000 <br/> dishes </span>  to
                  order!
                </h1>
                <p className="mt-3 text-[#9a9a9a] text-sm font-bold">
                  Welcome to The Biggest Network of Food <br/> Ordering & Delivery
                </p>
              </div>
    
              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-6 lg:px-25">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-4xl shadow-md overflow-hidden text-center w-full mx-auto  max-w-xs max-w-[240px]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-55 sm:h-44 lg:h-50  object-cover"
                    />
    
                    <div className="p-8">
                      <h3 className="text-lg sm:text-lg text-[#54595f]  font-semibold text-[#2f2f2f]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Bottom */}
              <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 px-4 text-center">
                <p className="text-[#9a9a9a] text-md sm:text-lg">
                  and much more your favorite food
                </p>
    
                <button className="bg-[#f4b22a] text-white text-xs font-semibold lg:px-8 lg:py-3 px-4 py-3 rounded-full
                          hover:bg-[#e3a51f]">
                  MORE CATEGORIES
                </button>
              </div>
    
            </div>
          </section>
      
    </>
  );
}

export default Menu;
