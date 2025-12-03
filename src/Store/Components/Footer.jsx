import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (



    <footer className="w-full bg-[#EDFFF8] pt-14 border-t">

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* OUR SERVICES */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Store Locator</li>
            <li>Book Gold</li>
            <li>International Services</li>
            <li>Jewellery Services</li>
            <li>Smart Buy</li>
            <li>Gifting</li>
            <li>Marriage Diary</li>
          </ul>
        </div>

        {/* OUR POLICIES */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">OUR POLICIES</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Ship & Returns</li>
            <li>Easy Exchange</li>
            <li>Lifetime Exchange Policy</li>
            <li>Return / Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* JEWELLERY KNOWLEDGE */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">JEWELLERY KNOWLEDGE</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Gold Guide</li>
            <li>Diamond Guide</li>
            <li>Gemstone Guide</li>
            <li>Ring Size Guide</li>
            <li>Certification Guide</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Why Garnet?</li>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>FAQ</li>
            <li>Our Stores</li>
            <li>Press Release</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Mon to Sun: 10AM - 7PM</li>
            <li>+91 99999 88888</li>
            <li>support@garnet.com</li>
            <li>Mumbai, India</li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 text-gray-600 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>

          {/* App Buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <img
              src="/google-play.png"
              alt="Google Play"
              className="w-32 cursor-pointer"
            />
            <img
              src="/app-store.png"
              alt="App Store"
              className="w-32 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-[#0D4833] bg-[#0D4833] text-white py-4">
        <p className="text-center text-sm tracking-wide">
          COPYRIGHT © GARNET 2025
        </p>
      </div>
    </footer>
  

  )
}

export default Footer