import React from 'react'
import Slides from './Slides'

export default function ClientsSection() {
  return (
    <>
    <section className='h-96'>
      <div className=" text-[#ff793b] text-xs font-bold font-['Poppins'] uppercase leading-none justify-center items-center lg:mt-20 mt-32 lg:w-3/4 lg:mx-40 md:w-full lg:text-lg md:px-6 px-4 ">
  <p className='flex'>
    Trusted by Industry pioneers, we deliver transformative IT solutions that drive innovation & business growth.
    Our expertise drives success across diverse sectors.
  </p>
  <div className="justify-center mt-96 flex items-baseline">
  <Slides/>
  </div>
 

       </div>
       </section>
    </>
  )
}
