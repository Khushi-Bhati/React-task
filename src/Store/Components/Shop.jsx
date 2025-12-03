import React from 'react'
import womenImg from "./../Images/81595e1320280bcff0a86409d7c551898fa250ed.png"
import menImg from "./../Images/34134217b4f7c9c209c495eafd9163fa29b6bec5.png"
import kidsImg from "./../Images/b1c8d305edc9daefba5965a86302cb0e5d58139f.png"
import unisexImg from "./../Images/83d47519503f5abe50e3c7ae650581a581b850af.png"

const Shop = () => {
  return (
   <section className="w-full px-4 lg:px-20 py-12">

  {/* Heading */}
  <div className="text-center mb-10">
    <p className="text-sm tracking-wide text-gray-500">
      DISCOVER YOUR WORLD OF JEWELLERY
    </p>
    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
      SHOP BY GENDER
    </h2>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center">

    {/* Card 1 */}
    <div className="bg-[#F4E8D7] w-full max-w-[300px] aspect-square flex items-center justify-center rounded-xl shadow">
      <img src={womenImg} alt="Women" className="w-70" />
    </div>

    {/* Card 2 */}
    <div className="bg-[#E8E3DA] w-full max-w-[300px] aspect-square flex items-center justify-center rounded-xl shadow">
      <img src={menImg} alt="Men" className="w-70" />
    </div>

    {/* Card 3 */}
    <div className="bg-[#EFE7DA] w-full max-w-[300px] aspect-square flex items-center justify-center rounded-xl shadow">
      <img src={kidsImg} alt="Kids" className="w-70" />
    </div>

    {/* Card 4 */}
    <div className="bg-[#F5EDE1] w-full max-w-[300px] aspect-square flex items-center justify-center rounded-xl shadow">
      <img src={unisexImg} alt="Unisex" className="w-70" />
    </div>

  </div>

</section>

  )
}

export default Shop