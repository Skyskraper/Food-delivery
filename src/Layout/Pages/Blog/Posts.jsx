import React from 'react';
import orange from "../../../assets/orange.jpg";
import sushi from "../../../assets/sushi.jpg";
import blog3 from "../../../assets/blog3.jpg";
import blog4 from "../../../assets/blog4.jpg";

const Posts = () => {
    return (
        <section className="py-10 sm:py-14 md:py-20">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-14 sm:gap-16 md:gap-20">

                        {/* STANDARD POST */}
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#414549]">
                                STANDARD POST
                            </h1>

                            <p className="text-sm sm:text-base mt-6 sm:mt-8">
                                <span className="text-[#ecb132]">Jan 10, 2017</span> by Cindy Jefferson
                            </p>

                            <div className="mt-6 sm:mt-8">
                                <img
                                    src={orange}
                                    alt="image"
                                    className="rounded-2xl w-full"
                                />
                            </div>

                            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9a9a9a]">
                                Lorem ipsum dolor sit amet, ea veri albucius vis...
                            </p>

                            <button className="px-4 py-2 rounded-full font-semibold bg-[#ffbd2f] text-white mt-4 sm:mt-6">
                                READ MORE
                            </button>
                        </div>

                        {/* GALLERY POST */}
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#414549]">
                                GALLERY POST
                            </h1>

                            <p className="text-sm sm:text-base mt-6 sm:mt-8">
                                <span className="text-[#ecb132]">Jan 10, 2017</span> by Cindy Jefferson
                            </p>

                            <div className="mt-6 sm:mt-8">
                                <img
                                    src={sushi}
                                    alt="image"
                                    className="rounded-2xl w-full"
                                />
                            </div>

                            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9a9a9a]">
                                Images below are linked to their attachment page...
                            </p>

                            <button className="px-4 py-2 rounded-full font-semibold bg-[#ffbd2f] text-white mt-4 sm:mt-6">
                                READ MORE
                            </button>
                        </div>

                        {/* PIZZA POST */}
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#414549]">
                                ALL THE CHEESY RECEPIES YOU COULD EVER NEED IN YOUR LIFE
                            </h1>

                            <p className="text-sm sm:text-base mt-6 sm:mt-8">
                                <span className="text-[#ecb132]">Jan 10, 2017</span> by Cindy Jefferson
                            </p>

                            <div className="mt-6 sm:mt-8">
                                <img
                                    src={blog3}
                                    alt="image"
                                    className="rounded-2xl w-full"
                                />
                            </div>

                            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9a9a9a]">
                                Lorem ipsum dolor sit amet, ligula cras laoreet...
                            </p>

                            <button className="px-4 py-2 rounded-full font-semibold bg-[#ffbd2f] text-white mt-4 sm:mt-6">
                                READ MORE
                            </button>
                        </div>

                        {/* COFFEE POST */}
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#414549]">
                                MAKE LIFE EASIER
                            </h1>

                            <p className="text-sm sm:text-base mt-6 sm:mt-8">
                                <span className="text-[#ecb132]">Jan 10, 2017</span> by Cindy Jefferson
                            </p>

                            <div className="mt-6 sm:mt-8">
                                <img
                                    src={blog4}
                                    alt="image"
                                    className="rounded-2xl w-full"
                                />
                            </div>

                            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9a9a9a]">
                                A in, wisi convallis et per iaculis...
                            </p>

                            <button className="px-4 py-2 rounded-full font-semibold bg-[#ffbd2f] text-white mt-4 sm:mt-6">
                                READ MORE
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
