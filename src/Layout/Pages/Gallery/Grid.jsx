import React from 'react';

const Grid = () => {
  const gallery = [
    { id: 1, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-7.jpg" },
    { id: 2, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-12-scaled.jpg" },
    { id: 3, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-10.jpg" },
    { id: 4, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-8.jpg" },
    { id: 5, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-4.jpg" },
    { id: 6, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-11.jpg" },
    { id: 7, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-3.jpg" },
    { id: 8, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-13.jpg" },
    { id: 9, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-5.jpg" },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16">
      {/* Outer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#414549]">
            OUR GALLERY
          </h1>
          <p className="text-sm sm:text-base text-[#9a9a9a] mt-2">
            Grid
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {gallery.map((itm) => (
            <div key={itm.id} className="overflow-hidden rounded-lg">
              
              {/* Responsive image container */}
              <div className="aspect-[4/3] w-full">
                <img
                  src={itm.image}
                  alt="food"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Grid;
