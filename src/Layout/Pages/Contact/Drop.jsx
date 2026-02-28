import React from "react";

export default function Drop() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto md:px-4 lg:px-4 px-6 ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="lg:text-5xl md:text-5xl text-4xl text-[#414549] tracking-wide mb-3">
            DROP A LINE
          </h1>
          <p className="text-[#9a9a9a] lg:text-md md:text-md text-sm  uppercase">
            Get In Touch
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full rounded-full border border-gray-200 px-6 py-4 outline-none focus:border-gray-400 transition"
            />
            <input
              type="email"
              placeholder="Your e-mail*"
              className="w-full rounded-full border border-gray-200 px-6 py-4 outline-none focus:border-gray-400 transition"
            />
          </div>

          <textarea
            placeholder="Your message*"
            rows={8}
            className="w-full rounded-3xl border border-gray-200 px-6 py-5 outline-none resize-none focus:border-gray-400 transition"
          />

          <div className="text-center pt-6">
            <button
              type="submit"
              className="inline-block rounded-full px-10 py-4 bg-[#ffc73b] text-white tracking-wide hover:bg-[#ffc73b]-800 transition"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
