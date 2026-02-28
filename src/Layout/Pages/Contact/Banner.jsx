import React from 'react';
import Health from "../../../assets/About1.jpg"

const Banner = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='grid grid-cols-1'>
                        <div className='col-span-1'>
                            <div className='relative'>

                                {/*Image*/}
                                <img src={Health} alt='image' className='w-full h-[300px] object-cover' />


                                {/*Text*/}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                    <h1 className="lg;text-7xl md:text-text-7xl text-4xl font-[400]">CONTACTS </h1>
                                    <p className="mt-2 md:text-lg text-sm font-[600] hover:text-[#ffbd2f]">
                                        HOME / CONTACTS
                                    </p>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}

export default Banner;
