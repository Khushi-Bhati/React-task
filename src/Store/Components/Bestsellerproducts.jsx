import React from 'react'

import ring1 from "./../Images/3f89b2e733190b67461dea553842fbc3f6b3b80a.png";
import ring2 from "./../Images/7dbac3e3c20660b80b7e5f9a22081481e75e2cdb.png";
import ring3 from "./../Images/87a94dcd3b0db145e48b204b6953bbe9757b1a19.png";
import ring4 from "./../Images/7201366a2f134762f23fbe0a628e53651143d8ed.png";
import ring5 from "./../Images/5000affa8cd0250841e292c5e2e7fc91d67be4b3.png"
const Bestsellerproducts = () => {
    const bestSellerProducts = [
  {
    id: 1,
    badge: "BESTSELLER",
    image: ring1,
    title: "Gold Diamond Ring...",
    price: "₹22,323",
    cutPrice: "₹28,320",
    offer: "15% Off + No Making Charges",
  },
  {
    id: 2,
    badge: "TRENDING",
    image: ring2,
    title: "Wedding Ring...",
    price: "₹22,323",
    cutPrice: "₹26,500",
    offer: "12% Off + No Making Charges",
  },
  {
    id: 3,
    badge: "NEW",
    image: ring3,
    title: "Elegant Ring...",
    price: "₹22,323",
    cutPrice: "₹28,320",
    offer: "10% Off + No Making Charges",
  },
  {
    id: 4,
    badge: "BESTSELLER",
    image: ring4,
    title: "Classic Diamond Ring...",
    price: "₹22,323",
    cutPrice: "₹28,320",
    offer: "20% Off + No Making Charges",
  },
  {
    id: 5,
    badge: "TRENDING",
    image: ring5,
    title: "Royal Gold Ring...",
    price: "₹22,323",
    cutPrice: "₹28,320",
    offer: "25% Off + No Making Charges",
  },
];
  return (




    <section className="w-full bg-white py-14 border-t">
      
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-sm tracking-widest text-green-500">
          BEST SELLERS
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
          DISCOVER YOUR WORLD OF JEWELLERY
        </h3>

        <div className="w-24 mx-auto h-[2px] bg-green-500 mt-2"></div>
      </div>

      {/* Cards */}
      <div className="px-4 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {bestSellerProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
            >
              {/* Badge */}
              <div className="flex justify-between">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {item.badge}
                </span>
                <span className="text-gray-400 text-lg">♡</span>
              </div>

              {/* Image */}
              <div className="flex justify-center mt-3">
                <img src={item.image} alt="ring" className="h-28" />
              </div>

              {/* Title */}
              <p className="text-gray-700 mt-3 text-sm">{item.title}</p>

              {/* Price */}
              <div className="mt-2">
                <span className="text-lg font-semibold text-gray-800">
                  {item.price}
                </span>
                <span className="text-gray-400 line-through text-sm ml-2">
                  {item.cutPrice}
                </span>
              </div>

              {/* Offer */}
              <p className="text-green-600 text-xs mt-1">{item.offer}</p>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <button className="text-gray-600 text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
                  View Similar
                </button>
                <button className="text-white bg-green-600 text-sm px-3 py-1 rounded-md hover:bg-green-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Discover All */}
      <div className="flex justify-center mt-8">
        <button className="text-green-600 border border-green-500 px-6 py-2 rounded-full text-sm hover:bg-green-50">
          DISCOVER ALL
        </button>
      </div>

    </section>
 

  )
}

export default Bestsellerproducts