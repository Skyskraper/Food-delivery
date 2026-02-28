import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GrFacebookOption } from 'react-icons/gr';

const Team = () => {

    const teamMember = [

        {
            id: 1,
            name: "Richard Veber",
            description: "Driving the financial planning of the company by analyzing its performance and risks. ",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-33-370x351.jpg",
        },
        {
            id: 2,
            name: "Mark Pritson",
            description: "Developing the marketing strategy for new and existing services.",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-34-370x351.jpg",

        },
        {
            id: 3,
            name: "Lory Grand",
            description: "Responsible for the successful leadership and management of the company.",
            image: "https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/image-35-370x351.jpg",
        },

    ]


    return (
        <>
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h1 className="text-[#414549] text-5xl md:text-7xl lg:text-7xl font-serif">
                            Our Team
                        </h1>
                        <p className="text-[#9a9a9a] lg:text-md md:text-md text-sm mt-3">
                            The Best of Professionals
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:px-35 place-items-center">
                        {teamMember.map((member) => (
                            <div
                                key={member.id}
                                className="md:max-w-[370px] w-full  overflow-hidden rounded-[36px] shadow-md bg-white"
                            >
                                {/* Image */}
                                <div className="md:h-[400px] overflow-hidden rounded-t-[36px]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>


                                {/* Content */}
                                <div className="bg-[#f3f3f3] px-5 py-6 text-center">
                                    <h3 className="text-xl text-[#414549]  hover:text-[#ffbd2f] transition">
                                        {member.name}
                                    </h3>

                                    <p className="text-[#9a9a9a] text-sm mt-3 leading-relaxed">
                                        {member.description}
                                    </p>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-3 mt-5">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffbd2f] text-white text-sm hover:bg-[#414549] transition">
                                            <GrFacebookOption />
                                        </div>
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffbd2f] text-white text-sm hover:bg-[#414549] transition">
                                            <FaXTwitter />
                                        </div>
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffbd2f] text-white text-sm hover:bg-[#414549] transition">
                                            <FaInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    );
}

export default Team;
