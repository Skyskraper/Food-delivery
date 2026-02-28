import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Testimonials = () => {
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
        adaptiveHeight: false,
    };

    const testimonials = [
        {
            text:
                "Fooddy 24/7 has the best application for online ordering. Fantastic choices of restaurants, low delivery price and great customer service.",
            name: "Nate Wilson",
            time: "2 days ago",
            image:
                "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-58-150x150.jpg",
        },
        {
            text:
                "We are a very busy restaurant and Fooddy 24/7 gives our customers a really easy way to order, pay and get their food so they can beat the line and beat that lunch rush.",
            name: "Mary Linkoln",
            time: "2 days ago",
            image:
                "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-59-150x150.jpg",
        },
        {
            text:
                "Your website was very easy to navigate, service was prompt and staff was very pleasant. I will definitely use your service again, and I have already recommended it to friends.",
            name: "Lesley Parker",
            time: "2 days ago",
            image:
                "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-60-150x150.jpg",
        },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center ">
            <div className="z-10 flex flex-col items-center text-center px-6 w-full">

                {/* HEADER */}
                <h2 className="text-[#414549] md:text-5xl text-3xl font-semibold tracking-wide">
                    CLIENTS ABOUT US
                </h2>
                <p className="text-[#9a9a9a] md:mt-2 mt-1 md:text-md text-sm font-semibold">
                    Testimonials
                </p>

                {/* SLIDER */}
                <Slider
                    ref={testimonialRef}
                    {...settings}
                    className="w-full max-w-5xl md:mt-10 mt-4"
                >
                    {testimonials.map((item, i) => (
                        <div key={i}>
                            <div className="flex flex-col items-center justify-center min-h-[420px]">

                                <p className="text-[#414549] md:text-2xl text-xl max-w-3xl mx-auto leading-relaxed">
                                    “{item.text}”
                                </p>

                                <div className="flex flex-col items-center mt-8">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full border-2 border-white"
                                    />

                                    <p className="text-yellow-400 font-semibold mt-3">
                                        {item.name}
                                    </p>
                                    <p className="text-yellow-400 text-sm">
                                        {item.time}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>

                {/* LEFT ARROW */}
                <button
                    onClick={testimonialPrevious}
                    className="absolute md:left-6 left-6 md:top-1/2 top-2/3 -translate-y-1/2 
             bg-[#9a9a9a59] rounded-full md:p-1 
             text-[#9a9a9a] hover:bg-[#b0b0b0] transition"
                >
                    <MdKeyboardArrowLeft size={55} />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={testimonialNext}
                    className="absolute md:right-6 right-6 top-2/3 md:top-1/2 -translate-y-1/2 
             bg-[#9a9a9a59] rounded-full md:p-1 
             text-[#9a9a9a] hover:bg-[#b0b0b0] transition"
                >
                    <MdOutlineKeyboardArrowRight size={55} />
                </button>


            </div>
        </section>
    );
};

export default Testimonials;
