import React, { useRef } from 'react'
import Header from './Header';
import Delivery from './Delivery';
import Collections from './Collections';
import heroimage from "./../Images/e0a218bafd81773f8d4f2d09d0f0d13729ef217b.png"
import ring1 from "./../Images/c4558e0addeed3c1f913728ea44ec8332ab0a123 (1).png"
import pendant from "./../Images/f69b695934c8dfa114b83748a85c806cd870abcf.png"
import ring2 from "./../Images/c451d313445233f94d60041b5e177bc73dd45491.png"
import bracelet from "./../Images/08dfe1f4964a3e8b0e1c88a5ae06f71a886465c8.png"
import bangles from "./../Images/5be1042b19f9116845dbccd81bb521f126f42494.png"
import tanmaniya from "./../Images/c4558e0addeed3c1f913728ea44ec8332ab0a123.png"
import earings from "./../Images/97f2b10d54934d3e9f4bdaff801df4472a5ece90.png"
import Trendingproducts from './Trendingproducts';
import Bestsellerproducts from './Bestsellerproducts';
import Category from './Category';
import Shop from './Shop';
import Customerreviews from './Customerreviews';
import Stayupdate from './Stayupdate';
import Newletter from './Newletter';
import Footer from './Footer';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <>
      <Header />
    <div className="w-full bg-[#01131F]">

  {/* HERO SECTION */}
  <div className="w-full max-w-[1602px] mx-auto  rounded-lg overflow-hidden">
        <img
          src={heroimage}
          alt="Hero Banner"
          className="w-full h-480 object-cover"
        />
      </div>

  {/* CATEGORY SECTION */}


  




    <section className="w-full bg-white py-10 px-4 relative">

      {/* LEFT ARROW (visible on all screens) */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded-full z-20"
      >
        <FaChevronLeft className="text-gray-900 text-lg" />
      </button>

      {/* RIGHT ARROW (visible on all screens) */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-xl p-2 rounded-full z-20"
      >
        <FaChevronRight className="text-gray-900 text-lg" />
      </button>

      {/* SCROLL AREA — no manual scroll allowed */}
      <div
        ref={scrollRef}
        className="
          flex gap-8 px-19 justify-center 
          overflow-x-hidden select-none 
          pointer-events-none 
        "
      >
        {[
          { name: "Rings", img: ring1 },
          { name: "Earrings", img: earings },
          { name: "Tanmaniya", img: tanmaniya },
          { name: "Bangles", img: bangles },
          { name: "Bracelets", img: bracelet },
          { name: "Pendants", img: pendant },
          { name: "Rings", img: ring2 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px] pointer-events-auto">

            {/* Round Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[4px] border-teal-600 flex items-center justify-center bg-white">
              <img
                src={item.img}
                className="w-full h-full object-contain"
                alt={item.name}
              />
            </div>

            {/* Name */}
            <p className="mt-3 text-sm sm:text-md text-black font-medium">
              {item.name}
            </p>

            {/* Underline */}
            <div className="w-6 sm:w-8 h-1 bg-teal-600 rounded-full mt-1"></div>

          </div>
        ))}
      </div>
    </section>
 




</div>

      <Delivery />
      <Collections />
      <Trendingproducts />
      <Bestsellerproducts />
      <Category />
      <Shop />
      <Customerreviews />
      <Stayupdate />
      <Newletter />
      <Footer />
    </>
  );
}



export default Hero