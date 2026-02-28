import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import middle from "../src/assets/logo-7.png";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-gray-600 py-16">
      {/*  footer */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
        {/* Address */}
        <div className="text-sm text-[#9a9a9a]">
          <p className="font-medium">Chicago, IL</p>
          <p>60606 123, New Lenox</p>
        </div>

        {/* Logo & socials */}
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img
            src={middle}
            alt="Fooddy logo"
            className="h-14 object-contain"
          />

          {/* Social icons */}
          <div className="flex gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer hover:scale-105 transition">
              <FaXTwitter />
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer hover:scale-105 transition">
              <FaFacebookF />
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow cursor-pointer hover:scale-105 transition">
              <FaInstagram />
            </span>
          </div>
        </div>

        {/* Call */}
        <div className="text-sm md:text-right">
          <p className="md:text-md lg:text:text-md text-sm  text-[#9a9a9a]">Call us 24/7</p>
          <p className="font-semibold md:text-lg lg:text-lg text-md text-gray-800">094 711 80 58</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        Abhimanyukharwar © 2026. All rights reserved.
      </div>
    </footer>
  );
}
