import React from 'react'
import facebook from "./../Images/116c6b43191933492117800efa60e4bb42cc885f.png"
import instagram from "./../Images/a3ed093af208986a1c645b7c81a8448f39f796c5.png"
import pinterest from "./../Images/985998191118cde460e1689484f28cea20b43765.png"

const Newletter = () => {
  return (
    <>
    <section className="w-full bg-[#F9F7F3] py-10 lg:py-16 px-6 lg:px-20">

  {/* TOP HEADING */}
  <div className="mb-8">
    <h2 className="text-sm tracking-widest text-gray-600">SIGN UP TO BE A GARNET LANE INSIDER</h2>
    <p className="text-gray-500 text-xs mt-1">
      Get promotions, inspirations and the latest news about brands and jewellery items directly to your inbox.
    </p>
  </div>

  {/* EMAIL + GENDER FORM */}
  <div className="flex flex-col lg:flex-row items-center gap-4 mb-10">

    {/* Email Input */}
    <input
      type="email"
      placeholder="Email Address"
      className="w-full lg:w-[300px] bg-white border border-gray-300 rounded-md px-4 py-2 text-sm outline-none"
    />

    {/* Gender Radio */}
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" className="accent-[#004D40]" />
        Female
      </label>

      <label className="flex items-center gap-1">
        <input type="radio" name="gender" className="accent-[#004D40]" />
        Male
      </label>
    </div>

    {/* Submit Btn */}
    <button className="px-6 py-2 bg-[#004D40] text-white text-sm rounded-md">
      SUBMIT
    </button>
  </div>

  {/* INFORMATION BOXES */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left Points */}
    <div className="space-y-4 text-sm text-gray-700">
      <p>✔ Buy Gold Jewellery Online in India</p>
      <p>✔ Variety of options</p>
      <p>✔ Pay as per your convenience</p>
      <p>✔ Customise as you like</p>
      <p>✔ Crowd-free Buying (Diamond Jewellery Online in India)</p>
    </div>

    {/* Right Paragraph */}
    <div className="text-sm text-gray-600 leading-relaxed">
      <h3 className="font-semibold text-gray-800 mb-3">Buy Gold Jewellery Online in India</h3>
      <p>
        Buying jewellery online is becoming common these days. Though many people are still
        skeptical of doing so. Yet, the trend of shopping online for anything and everything is
        growing exponentially. Garnet Lane is one among the many reputed brands that deliver
        all kinds of diamond and gold jewellery directly to your home - Rings, Necklaces,
        Bracelets, Pendants, etc.
      </p>
      <p className="mt-4">
        History tells the folktales of the importance of jewellery in making lives. Running
        down through decades, trends and styles may have changed, but emotions attached
        remain constant.
      </p>
    </div>

  </div>

  {/* SOCIAL ICONS */}
  <div className="flex items-center justify-center gap-4 mt-12">
    <img src={facebook} className="w-5" />
    <img src={instagram} className="w-5" />
    <img src={pinterest} className="w-5" />
  </div>

</section>
</>
  )
}

export default Newletter