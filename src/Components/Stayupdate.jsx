import React from 'react'
import brand11 from "./../Images/95a46be52a178ae0c2524ae1d22efcf56da6d116.png"
import brand12 from "./../Images/c8e29c82e422016178063cfa952158b816db2168.png"
import brand13 from "./../Images/c4481536ae335abac3e6fe094d52d8b2a2b0aa99.png"


const Stayupdate = () => {
   const categories = [
  { id: 1,  image: brand11 },
  { id: 2, image: brand12 },
  { id: 3,  image: brand13 },
  { id: 4,  image: brand11 },
   ]
  return (
   <section className="w-full px-6 lg:px-16 py-12">

  {/* Heading */}
  <div className="text-center mb-10">
    <p className="text-sm tracking-wide text-gray-500">
      STAY UPDATED WITH US
    </p>
    <h2 className="text-xl font-semibold text-gray-700 mt-1">
      KNOW ABOUT WHAT OTHERS THINK
    </h2>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Card */}
    {categories.map((item, index) => (
      <div 
        key={item.id}
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center"
      >
        <img 
          src={item.image}
          alt="brand" 
          className="h-10 mb-4 object-contain"
        />

        <p className="text-center text-gray-500 text-sm mb-6">
          Return Taba-backed BlissDiamondvaluation<br />  
          App $3,456 latest count
        </p>

        <button className="px-6 py-2 bg-[#DEF4ED] text-gray-700 rounded-full text-sm font-medium hover:bg-[#c5ece1]">
          READ MORE
        </button>
      </div>
    ))}

  </div>

  {/* Discover All */}
  <div className="flex justify-center mt-10">
    <button className="text-sm font-medium text-[#0F4F49] border-b border-[#0F4F49] pb-1">
      DISCOVER ALL
    </button>
  </div>

</section>

  )
}

export default Stayupdate