import React from "react";

const Information = () => {
  return (
    <section className="md:py-16 lg:py-16 py-20">
      <div className="container mx-auto md:px-4 lg:px-4 px-8">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-20">
          
          {/* Address */}
          <div className="md:p-10 lg:p-10 p-12 rounded-2xl shadow bg-[#41454933] text-center">
            <h1 className="text-3xl text-[#414549] mb-3">Address</h1>
            <p className="lg:text-md md:text-md text-sm text-[#9a9a9a]">
              123, Neville Street New York, NY 60606
            </p>
          </div>

          {/* Phone */}
          <div className="md:p-10 lg:p-10 p-12 rounded-2xl shadow bg-[#41454933] text-center">
            <h1 className="text-3xl text-[#414549] mb-3">Phone</h1>
            <p className="lg:text-md md:text-md text-sm text-[#f9a825]">
              123-456-7890
            </p>
          </div>

          {/* Email */}
          <div className="md:p-10 lg:p-10 p-12 rounded-2xl shadow bg-[#41454933] text-center">
            <h1 className="text-3xl text-[#414549] mb-3">Email</h1>
            <p className="lg:text-md md:text-md text-sm text-[#f9a825]">
              info@yoursite.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Information;
