import React from 'react'
import ringImg from "./../Images/a3522e6d468809025305c228daf59feab9f2b976.png";
import earringImg from "./../Images/043c309145b78efee63dfe79c71516bda74eb109.png";
import braceletImg from "./../Images/b94d084eb67c239fa6dd0b3b03821ec5278b7d56.png";
import pendantImg from "./../Images/e884ab18f1b2c673e83281a1c3f1fc37495470d5.png";
import banglesImg from "./../Images/f9dd2eb6a332e9aa4fac46e159352ece03dd9fb8.png";
import mangalsutraImg from "./../Images/c91c27a593e88471db48cf67b036acc1494a6431.png";

const Category = () => {
    const categories = [
  { id: 1, label: "BRACELET", image: braceletImg },
  { id: 2, label: "PENDANT", image: pendantImg },
  { id: 3, label: "BANGLES", image: banglesImg },
  { id: 4, label: "MANGALSUTRA", image: mangalsutraImg },
];
  return (



    <section className="w-full bg-white py-14">

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-sm tracking-widest text-green-500">CATEGORY</h2>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
          DISCOVER YOUR WORLD OF JEWELLERY
        </h3>
        <div className="w-24 mx-auto h-[3px] bg-green-500 mt-2"></div>
      </div>

      {/* Top Big Categories */}
      <div className="px-4 md:px-15 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Rings */}
        <div className="rounded-xl  bg-gradient-to-br from-[#FFE7D3] to-[#FCE1CC] shadow-md flex flex-col justify-between">
          <img src={ringImg} alt="Rings" className="w-full h-full object-contain" />
         
        </div>

        {/* Earrings */}
        <div className="rounded-xl  bg-gradient-to-br from-[#F9DCDC] to-[#F7C8C8] shadow-md flex flex-col justify-between">
          <img src={earringImg} alt="Earrings" className="w-full h-full object-contain" />
         
        </div>

      </div>

      {/* Small Categories */}
      <div className="px-5 md:px-10 lg:px-16 mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {categories.map((item) => (
          <div
            key={item.id}
            className="rounded-xl  bg-[#0C0C0C] text-white shadow-md flex flex-col items-center hover:scale-105 transition"
          >
            <img src={item.image} alt={item.label} className="h-full object-contain" />
          
          </div>
        ))}

      </div>

      {/* Discover All Button */}
      <div className="flex justify-center mt-12">
        <button className="text-green-600 border border-green-500 px-6 py-2 rounded-full text-sm hover:bg-green-50">
          DISCOVER ALL
        </button>
      </div>

    </section>


  )
}

export default Category