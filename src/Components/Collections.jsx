import React from 'react'
import collectionimage1 from "./../Images/2a156904cda371b72971082272da3d847f007342.png"
import collectionimage3 from "./../Images/ad83fadc4115acf66e304aefc918e9e0805fd2bd.png"
import collectionimage4 from "./../Images/1eb36002c2fafbb99edefbce51b71ecf9b2c5235.png"
import collectionimage5 from "./../Images/16dd7473c560e16af6fde2c43cc1b326cee14083.png"
import collectionimage2 from "./../Images/cc0bbf5c9462a0aef38fdbb4f5ead3eeb250ca75.png"
import collectionimage6 from "./../Images/56301576b524d6eaa63f063829ccf80e1604989d.png"


const Collections = () => {
  return (
    <>
 
    <div className="w-full mt-12 px-4 flex flex-col items-center">

      {/* Title */}
      <h2 className="text-[18px] font-semibold text-gray-700 tracking-wide">
        COLLECTIONS
      </h2>

      {/* Subtitle */}
      <p className="text-[12px] text-[#0BB89E] tracking-[3px] mt-1 uppercase">
        DISCOVER YOUR WORLD OF JEWELLERY
      </p>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-15xl">

        {/* CARD 1 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage1}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* CARD 2 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage2}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* CARD 3 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage3}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* CARD 4 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage4}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* CARD 5 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage5}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* CARD 6 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-[1.03] transition">
          <img
            src={collectionimage6}
            className="w-full h-[200px] object-cover"
          />
        </div>

      </div>

      {/* DISCOVER ALL */}
      <button className="mt-8 text-[#0BB89E] text-sm font-semibold border-b border-[#0BB89E]">
        DISCOVER ALL
      </button>
    </div>
 

    </>
  )
}

export default Collections