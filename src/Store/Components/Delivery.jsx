import React from 'react'
 
import truck from "./../Images/f66212d8bbad99dfbbba979571350f4fe93f5452.png"
import delivery from "./../Images/51f4e560738fc8c9a500bd375c89cb3e5c939cb3.png"

const Delivery = () => {
  return (



    <div className="w-full px-5 md:px-8 lg:px-16 py-6">
      <div className="w-full bg-white rounded-[120px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-around gap-4 py-6 px-6">

        {/* EXPRESS DELIVERY BOX */}
        <div className="w-full w-700px h-196px bg-gradient-to-br from-[#F2F2F2] to-[#F8F8F6] rounded-[30px] border border-[#D5E7FF] p-9 flex items-center justify-around">
          <div>
            <h3 className="text-lg font-semibold text-[#008C55]">EXPRESS</h3>
            <p className="text-lg font-semibold text-[#008C55] -mt-1">DELIVERY</p>
          </div>

          <img
            src={truck}
            alt="delivery truck"
             style={{ width: "200px", height: "auto" }}
          />
        </div>

        {/* SPECIAL DISCOUNT BOX */}
        <div className="w-full w-700px h-200 bg-gradient-to-br from-[#F2F2F2] to-[#F8F8F6] rounded-[30px] border border-[#FFD9D9] p-12 flex items-center justify-around">
          <img
            src={delivery}
            alt="special discount"
            style={{ width: "150px", height: "auto" }}
          />

          <div className="text-right">
            <h3 className="text-lg font-semibold text-[#008C55]">SPECIAL</h3>
            <p className="text-lg font-semibold text-[#008C55] -mt-1">DISCOUNT</p>
          </div>
        </div>

      </div>
    </div>




  )
}

export default Delivery