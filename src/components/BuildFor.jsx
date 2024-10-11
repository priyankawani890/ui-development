import { React, useState } from "react";


export default function BuildFor() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, image: "/path-to-image-1.jpg", alt: "First slide" },
    { id: 2, image: "/path-to-image-2.jpg", alt: "Second slide" },
    { id: 3, image: "/path-to-image-3.jpg", alt: "Third slide" },
  ];

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <>
      {/* <section className="relative flex flex-col items-center w-full h-full">
        <div className="absolute top-[2535px] left-1/2 transform -translate-x-1/2 w-[1440px] h-[705px] font-lg text-gray-800" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1440px] h-[705px] bg-[#e0f7fa]" />
        <div className="relative w-96 h-96 top-[350px] left-[1px] bottom-[66.8px] bg-white shadow-md rounded-lg lg:w-96 overflow-hidden pb-52 items-start inline-flex">
          <div className="After w-96 h-2 bg-[#ff6347]" />
        </div>
        <div className="absolute left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2 text-[#ff6347] text-3xl font-semibold tracking-tight">
          Build for any business type
        </div>

        <div className="absolute left-[10px] top-[150px] max-w-[680px] text-center  text-[#274060] lg:left-96">
          <p>
            Millions of successful startups are powered by Stripe. Let’s build
            the right foundation for yours.
          </p>
        </div>
        <a
          href="#buildForAny"
          className="absolute right-[229px] left-[1183px] top-[150px] bottom-[526px] flex items-center justify-center py-2 px-4 border border-[#ff6347] rounded-md"
        >
          <img src="/svg6.svg" alt="" className="w-4 h-4" />
        </a>
        <a
          href="#buildForAny"
          className="absolute right-[185px] left-[1227px] top-[150px] bottom-[526px] flex items-center justify-center py-2 px-4 bg-[#ff6347] text-white rounded-md"
        >
          <img src="/svg7.svg" alt="" className="w-4 h-4" />
        </a>
        <div className="relative w-[calc(100%-900px)] h-[calc(100%-100.8px)] bottom-[1.8px] bg-white right-72 shadow-md rounded-lg ">
          <div className="w-full h-2 bg-[#ff6347]" />
        </div>
        <div className="absolute top-[350.5px] right-[5px] left-[-80px] bottom-[267.5px] max-w-[8Z0px] flex flex-col">
        <div className=" text-[#0a1f30] text-xs font-normal font-['Roboto'] leading-3 tracking-tight">Quickly launch and grow recurring revenue with<br/>a unified platform for payments, subscriptions,<br/>invoicing, tax, accounting, and more.</div>
</div>

        <div className="absolute top-[280.5px] left-[50px] bottom-[368.5px] flex flex-col text-[34px] font-semibold">
          Corporate Travel
        </div>
        <a
          href=""
          className="absolute top-[120px] right-[75px] left-[55px] bottom-[236px] flex items-center text-[#ff6347]"
        >
          <span className="">Learn more</span>
          <img src="/svg8.svg" alt="" className=" mx-2 mt-1 w-2.5 h-2.5" />
        </a>
        <div className="absolute top-[578px] right-[1106px] left-[198px] flex flex-col items-start justify-start">
          <img src="/svg9.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="absolute top-[578px] right-[946px] left-[358px] flex flex-col items-start justify-start">
          <img src="/vector.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="absolute top-[578px] right-[786px] left-[518px] flex flex-col items-start justify-start">
          <img src="/svg10.svg" alt="" className="w-6 h-6" />
        </div>
       
        <div className="absolute top-[546px] right-[796px] left-[208px] h-px bg-[#f0f8ff]" />
        <div className="absolute left-[786px] right-[249px] top-[353px] space-y-2">
          <p>
            Get everything you need to onboard service providers, manage
            multiparty payments, and send payouts, all in one place.
          </p>
        </div>
        <div className="absolute top-[302.5px] right-[242px] left-[786px] bottom-[366.5px] text-2xl font-semibold">
          Marketplace
        </div>
        <a
          href=""
          className="absolute top-[454px] right-[218px] left-[786px] bottom-[226px] flex items-center text-[#ff6347]"
        >
          <span className="mr-2 ">Learn more</span>
          <img src="/svg11.svg" alt="" className="w-2.5 h-2.5" />
        </a>
        <div className="absolute top-[578px] right-[528px] left-[776px] flex flex-col items-start justify-start">
          <img src="/svg12.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="absolute top-[578px] right-[368px] left-[936px] flex flex-col items-start justify-start">
          <img src="/svg13.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="absolute top-[578px] right-[208px] left-[1096px] flex flex-col items-start justify-start">
          <img src="/vector1.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="absolute top-[546px] right-[218px] left-[786px] h-px bg-[#f0f8ff]" />
      </section> */}


    <section className="h-72 mt-72">
<div className="relative w-full  max-w-4xl  mx-auto overflow-hidden">
      <div className=" rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
      >
        <span className="sr-only">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
      >
        <span className="sr-only">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    </section>
    
    </>
  );
}
