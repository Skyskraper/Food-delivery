import React from "react";
import background from "../../../assets/bg-4.jpg";
import mobile from "../../../assets/phone_img (1).png";

const People = () => {
    const data = {
        left: [
            {
                id: 1,
                about: "30,000 Restaurants Menus",
                description:
                    "We’re working with many restaurants in your city to put food all in one place.",
            },
            {
                id: 2,
                about: "Easy Ordering by Phone",
                description:
                    "This allows you to order quickly and easily. Accessible at any time.",
            },
            {
                id: 3,
                about: "Free Mobile Application",
                description:
                    "Mobile App allows you to choose restaurant, view price and check order.",
            },
        ],
        right: [
            {
                id: 4,
                about: "Easy Online Ordering",
                description:
                    "Once logged in, you can easily navigate around the site to complete your order.",
            },
            {
                id: 5,
                about: "100% positive feedbacks",
                description:
                    "We care about our customers, that is why we get 100% positive feedbacks.",
            },
            {
                id: 6,
                about: "Fast Guaranteed Delivery",
                description:
                    "We take responsibility for making sure that order are delivered to you safely.",
            },
        ],
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <img
                src={background}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover "
            />

            <div className="container mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="md:text-5xl text-3xl font-serif text-white">
                        WHY PEOPLE CHOOSE US
                    </h1>
                    <p className="text-gray-300 md:mt-3 mt-1">
                        Clients’ Most Popular Choice
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                    {/* LEFT */}
                    <div className="space-y-10 px-10">
                        {data.left.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black font-bold leading-none shrink-0">
                                    {item.id}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{item.about}</h3>
                                    <p className="text-gray-300 mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={mobile}
                            alt="phone"
                            className="md:h-[520px] h-[400px] w-auto object-contain"
                        />
                    </div>


                    {/* RIGHT */}
                    <div className="space-y-10 px-10">
                        {data.right.map((item) => (
                            <div key={item.id} className="flex items-start gap-5 text-white">
                                <div className=" w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center text-lg font-bold shrink-0 leading-none
">
                                    {item.id}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{item.about}</h3>
                                    <p className="text-gray-300 mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default People;
