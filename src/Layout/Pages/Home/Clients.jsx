import React, { useRef } from 'react';
import pizza from "../../../assets/bg-13.jpg";
import phone from "../../../assets/phone_img.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Clients = () => {
    const testimonialRef = useRef(null);

    const testimonialNext = () => {
        testimonialRef.current?.slickNext();
    };

    const testimonialPrevious = () => {
        testimonialRef.current?.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const testimonials = [
        {
            text: "Fooddy 24/7 has the best application for online ordering. Fantastic choices of restaurants, low delivery price and great customer service.",
            name: "Nate Wilson",
            time: "2 days ago",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-58-150x150.jpg",
        },
        {
            text: "We are a very busy restaurant and Fooddy 24/7 gives our customers a really easy way to order, pay and get their food so they can beat the line and beat that lunch rush.",
            name: "Mary Linkoln",
            time: "2 days ago",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-59-150x150.jpg",
        },
        {
            text: "Your website was very easy to navigate, service was prompt and staff was very pleasant. I will definitely use your service again.",
            name: "Lesley Parker",
            time: "2 days ago",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-60-150x150.jpg",
        },
    ];

    const features = {
        left: [
            {
                id: 1,
                title: "30,000 Restaurants Menus",
                description:
                    "We're working with many restaurants in your city to put food all in one place."
            },
            {
                id: 2,
                title: "Easy Ordering by Phone",
                description:
                    "This allows you to order quickly and easily. Accessible at any time."
            },
            {
                id: 3,
                title: "Free Mobile Application",
                description:
                    "Mobile App allows you to choose restaurant, view price and check order."
            }
        ],
        right: [
            {
                id: 4,
                title: "Easy Online Ordering",
                description:
                    "Once logged in, you can easily navigate around the site to complete your order."
            },
            {
                id: 5,
                title: "100% Positive Feedbacks",
                description:
                    "We care about our customers, that is why we get 100% positive feedbacks."
            },
            {
                id: 6,
                title: "Fast Guaranteed Delivery",
                description:
                    "We take responsibility for making sure that orders are delivered safely."
            }
        ]
    };

    return (
        <>
            {/* Testimonials Section */}
            <section className="relative min-h-[520px] w-full">
                <img
                    src={pizza}
                    alt="Testimonials"
                    className="absolute w-full h-full object-cover"
                />

                <div className="relative z-10 flex flex-col items-center justify-center min-h-[520px] text-center px-4 sm:px-6">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
                        CLIENTS ABOUT US
                    </h2>
                    <p className="text-[#b7b7b7] mt-2 text-sm sm:text-md font-semibold">
                        Testimonials
                    </p>

                    <Slider ref={testimonialRef} {...settings} className="w-full mt-8 px-2">
                        {testimonials.map((item, i) => (
                            <div key={i}>
                                <p className="text-white max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl px-4">
                                    “{item.text}”
                                </p>

                                <div className="flex flex-col items-center mt-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white"
                                    />
                                    <p className="text-yellow-400 font-semibold mt-2 text-sm sm:text-base">
                                        {item.name}
                                    </p>
                                    <p className="text-yellow-400 text-xs sm:text-sm">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Arrows (Hidden on small screens) */}
                    <button
                        onClick={testimonialPrevious}
                        className="hidden md:flex rounded-full text-white p-1 absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md"
                    >
                        <MdKeyboardArrowLeft size={40} />
                    </button>

                    <button
                        onClick={testimonialNext}
                        className="hidden md:flex rounded-full text-white p-1 absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md"
                    >
                        <MdOutlineKeyboardArrowRight size={40} />
                    </button>
                </div>
            </section>

            {/* Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#414549]">
                            WHY PEOPLE CHOOSE US
                        </h2>
                        <p className="mt-3 text-sm text-[#9a9a9a]">
                            Clients’ Most Popular Choice
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                        {/* LEFT */}
                        <div className="space-y-10 sm:space-y-16">
                            {features.left.map((item) => (
                                <div key={item.id} className="flex items-start gap-4 sm:gap-6 text-right">
                                    <div className="flex-1">
                                        <h4 className="text-lg sm:text-xl md:text-2xl text-[#414549] hover:text-[#ffbd2f]">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-sm sm:text-base text-[#9a9a9a]">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-lg sm:text-xl text-[#414549]">
                                        {item.id}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src={phone}
                                alt="Mobile App"
                                className="w-52 sm:w-64 md:w-72 lg:w-auto"
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-10 sm:space-y-16">
                            {features.right.map((item) => (
                                <div key={item.id} className="flex items-start gap-4 sm:gap-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-lg sm:text-xl text-[#414549]">
                                        {item.id}
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl md:text-2xl text-[#414549] hover:text-[#ffbd2f]">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-sm sm:text-base text-[#9a9a9a]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;
