import React from 'react'
 import { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdVerified, MdLocalOffer } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import gemlaylogo from "./../Images/image.png"

const Header = () => {
      const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-teal-700 text-white text-sm py-1 text-center">
        Refer and earn extra discount — Click here
      </div>

      {/* MAIN HEADER */}
      <div className="flex items-center justify-between px-4 lg:px-10 py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 min-w-max">
          <img
            src={gemlaylogo}
            alt="logo"
            className="h-30 w-30 object-contain"
          />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search Products…"
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiOutlineBarChart size={20} /> GSP
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <MdLocalOffer size={20} /> Offers
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FiHeart size={20} /> Wishlist
          </div>

          <div className="relative cursor-pointer">
            <FiShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <MdVerified size={20} /> Verify Report
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FiUser size={20} /> Hi, Ashish Sood
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiOutlineMenu size={28} />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search Products…"
          className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <AiOutlineBarChart size={20} /> GSP
          </div>
          <div className="flex items-center gap-2">
            <MdLocalOffer size={20} /> Offers
          </div>
          <div className="flex items-center gap-2">
            <FiHeart size={20} /> Wishlist
          </div>
          <div className="flex items-center gap-2">
            <FiShoppingCart size={20} /> Cart
          </div>
          <div className="flex items-center gap-2">
            <MdVerified size={20} /> Verify Report
          </div>
          <div className="flex items-center gap-2">
            <FiUser size={20} /> Hi, Ashish Sood
          </div>
        </div>
      )}

      {/* CATEGORY MENU */}
      <nav className="hidden md:flex justify-center gap-10 py-4 border-t text-gray-700 font-medium">
        <span className="cursor-pointer">NEW ARRIVAL</span>
        <span className="cursor-pointer">RINGS</span>
        <span className="cursor-pointer">EARRINGS</span>
        <span className="cursor-pointer">PENDANTS</span>
        <span className="cursor-pointer">BRACELETS & BANGLES</span>
        <span className="cursor-pointer">SOLITAIRES</span>
        <span className="cursor-pointer">GOLD COINS</span>
        <span className="cursor-pointer">ALL JEWELLERY</span>
      </nav>
    </header>


  )
}

export default Header