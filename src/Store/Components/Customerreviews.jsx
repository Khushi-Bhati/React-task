import React from 'react'

const Customerreviews = () => {
  return (
 <section className="w-full px-4 lg:px-20 py-14">

  {/* Heading */}
  <div className="text-center mb-10">
    <p className="text-sm tracking-wide text-gray-500">
      KNOW ABOUT WHAT OTHERS THINK
    </p>
    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
      CUSTOMER REVIEWS
    </h2>
  </div>

  {/* Review Cards */}
  <div className="grid md:grid-cols-3 gap-8">

    {[1,2,3].map((item) => (
      <div
        key={item}
        className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700">Himesh</p>
          <span className="text-teal-500 text-3xl">“</span>
        </div>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          Talk about a range of elements, including customer service,
          site checkout, specific order, shipment, and personal information.
        </p>

        <p className="text-xs text-gray-400 mt-4">July 20, 2022</p>

        {/* Stars */}
        <div className="flex mt-3 text-yellow-400">
          ⭐⭐⭐⭐⭐
        </div>
      </div>
    ))}

  </div>

</section>

  )
}

export default Customerreviews