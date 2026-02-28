import React from 'react';
import zoom from "../../../assets/Screenshot 2026-01-09 133120.png";

const Articles = () => {

  const blogPosts = [
    {
      id: 1,
      date: "JAN 10, 2016",
      author: "Cindy Jefferson",
      title: "Most Popular Dishes This Week",
      description: "From Ravioli with spinach and ricotta cheese to Farfalle with mushrooms",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-7-1170x658.jpg"
    },
    {
      id: 2,
      date: "SEP 10, 2016",
      author: "Cindy Jefferson",
      title: "How To Cook Italian Pasta at Home",
      description: "Made with flour, pasta can be formed into sheets, strips or any other shape.",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2016/09/image-14-1170x658.jpg"
    },
    {
      id: 3,
      date: "OCT 10, 2016",
      author: "Cindy Jefferson",
      title: "Best 10 Burgers Recipes",
      description: "Fire up the grill and try one of these burger ideas.",
      image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-12-scaled-1170x658.jpg"
    }
  ];

  const foodMenu = [
    { id: 1, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-7.jpg" },
    { id: 2, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2016/09/image-14.jpg" },
    { id: 3, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-12-scaled.jpg" },
    { id: 4, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-9.jpg" },
    { id: 5, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-10.jpg" },
    { id: 6, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-8.jpg" },
    { id: 7, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-4.jpg" },
    { id: 8, image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-11.jpg" }
  ];

  return (
    <>

      {/* NEWS & ARTICLES */}
      <section className="py-12 sm:py-16 bg-[#9a9a9a1f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#414549]">
              News & Articles
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#9a9a9a]">
              From the Blog
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden text-center shadow-sm hover:shadow-md transition "
              >
                {/* Smaller Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 sm:h-36 object-cover"
                />

                <div className="p-4">
                  <p className="text-[11px] text-[#9a9a9a]">
                    {post.date} • {post.author}
                  </p>

                  <h3 className="text-sm sm:text-base font-semibold text-[#414549] mt-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#666] mt-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className="text-center mt-8 sm:mt-10">
            <button className="text-sm sm:text-base text-[#9a9a9a] hover:text-[#ffbd2f] transition">
              View More Posts
            </button>
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="relative py-16 sm:py-20">

        <img
          src={zoom}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
            VIEW THE DISHES
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-300">
            From the Gallery
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodMenu.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={item.image}
                  alt="food"
                  className="w-full h-56 sm:h-60 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-[#ffba00] py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">

          <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif max-w-4xl mx-auto">
            Want Coupons or Deep Thoughts About Food? Get Our Weekly Email:
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <input
              type="email"
              placeholder="Enter Your Address"
              className="w-full sm:w-[380px] md:w-[420px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#ffd36a] text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-white"
            />

            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
              SUBMIT
            </button>

          </div>

        </div>
      </section>

    </>
  );
};

export default Articles;
