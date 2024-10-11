import React from 'react';

export default function Testimonials() {
  return (
    <>
    <section className=''>
    
      <div className=" w-full h-[800px] relative ">
      
        {/* w-screen h-[800px] */}
        <div className="absolute inset-0 bg-[#0a1f30]" />

        <h2 className=" w-94 h-6 text-[#ff793b] text-2xl font-bold font-['Poppins']">Testimonials </h2>
        
        <div className="relative mt-56 mx-auto bg-white shadow-lg rounded-lg p-8 w-[90%] md:w-[80%] lg:w-[70%]">
          <div className="w-full h-2 bg-[#ff6347]" />
          <div className="mt-4 p-4">
            <span className="block text-lg font-semibold">
              <p className="text-gray-700">Jane Smith, CEO,</p>
              <p className="text-gray-700">ABC Enterprises</p>
            </span>
          </div>
          <p className="mt-4 text-gray-600">
            As a small business owner, finding a reliable software development
            partner was crucial for our digital transformation. The team at
            ClearVue exceeded our expectations. They not only delivered a
            top-notch product but also provided invaluable guidance throughout
            the development process. Their expertise and dedication truly set
            them apart. Our new system is more efficient, user-friendly, and has
            significantly improved our operations. I highly recommend ClearVue
            to anyone in need of professional and innovative software solutions.
          </p>
        </div>
      </div>
      </section>
    </>
  );
}
