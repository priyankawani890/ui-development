import React, { useState } from "react";

export default function CaseStudies() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      id: 1,
      image: "/654b031fa2fcfc932eaf3630-ui20inspirationp500jpg@2x.png",
      title: "Top 20 UI Inspiration Sites",
      description: "We've collated the top 20 UI inspiration sites, all with links in one handy spot! Find your inspiration for your next project.",
    },
    {
      id: 2,
      image: "/6470284e041bb767ea8d82ea-blog20thumbnail2020countdownp500png@2x.png",
      title: "How to add a countdown timer",
      description: "Learn how to add a beautiful countdown to your Framer project. Add it to your project in seconds.",
    },
    {
      id: 3,
      image: "/647028888fa4e53b4286df39-framer20instagram20thumbnailp500png@2x.png",
      title: "How to add an Instagram Feed",
      description: "In this article, we will spotlight the best way to build a beautiful Instagram feed in your Framer sites. Built specifically for Framer and 100% free for small and personal sites.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };


  return (
    <>

  
    <section className='hidden sm:block h-full lg:w-full'>
    <div className=" absolute lg:top-[3000px] left-[82px] w-[1136.3px] h-[423px] text-xs text-blue-zodiac font-roboto">
      <div className="relative">
        {/* Case Studies Heading and Browse Link */}
        <div className="absolute top-5 left-0 text-3xl font-medium tracking-tight text-coral">Case Studies</div>
        <a href="#heading5" className="absolute top-[7.3px] left-[17px] text-white text-lg font-medium">
          <div className="inline-block leading-[24.36px]">Browse all</div>
        </a>

        {/* First Image */}
        <img
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[328px] h-[205px] object-cover rounded-[9.74px]"
          alt=""
          src="/654b031fa2fcfc932eaf3630-ui20inspirationp500jpg@2x.png"
        />

        {/* Top 20 UI Inspiration Section */}
        <div className="absolute top-[150px] left-0 text-sm font-medium leading-[21.73px]">
          <span>
            <p>Top 20 UI Inspiration Sites </p>
            <p className="">(2023) </p>
          </span>
        </div>



        {/* Collated Text Section */}
        <div className="w-72  h-12 text-[#183654] absolute top-[201px] -left-3 text-xs leading-[16.24px] tracking-tight font-normal font-['Roboto']">
            We've collated the top 20 UI inspiration sites, all with<br/>links in one handy spot! Find your inspiration for your<br/>next project.
        </div>

        {/* Second Image */}
        <img
          className="absolute top-1/2 left-[397px] transform -translate-y-1/2 w-[308.5px] h-[205.5px] object-cover rounded-[9.74px]"
          alt=""
          src="/6470284e041bb767ea8d82ea-blog20thumbnail2020countdownp500png@2x.png"
        />

        {/* Countdown Timer Section */}
        <div className="absolute top-[150px] left-[420px] text-sm font-medium leading-[22.73px]">
          <span>
            <p>How to add a countdown timer</p>
            <p>to Framer</p>
          </span>
        </div>

        {/* Countdown Timer Description */}
        <div className="absolute top-[201px] left-[420px] text-xs leading-[16.24px] tracking-tight">
          <span>
            <p>Learn how to add a beautiful countdown to your</p>
            <p>Framer project. Add it to your project in seconds</p>
          </span>
        </div>

        {/* Third Image */}
        <img
          className="absolute top-1/2 left-[786px] transform -translate-y-1/2 w-[308.5px] h-[205.5px] object-cover rounded-[9.74px]"
          alt=""
          src="/647028888fa4e53b4286df39-framer20instagram20thumbnailp500png@2x.png"
        />

        {/* Instagram Feed Section */}
        <div className="absolute top-[150px] left-[809px] text-sm font-medium leading-[22.73px]">
          <span>
            <p>How to add an Instagram Feed</p>
            <p>to Framer (2023)</p>
          </span>
        </div>

        {/* Instagram Feed Description */}
        <div className="absolute top-[201px] left-[809px] text-xs leading-[16.24px] tracking-tight">
          <span>
            <p>In this article we will spotlight the best way to build a</p>
            <p>beautiful Instagram feed in your Framer sites. Built</p>
            <p>specifically for Framer and 100% free for small and</p>
            <p>personal sites.</p>
          </span>
        </div>
      </div>
    </div>
    </section>

   


    <section className="lg:hidden h-full w-full">
  <div className="relative w-[250.3px] h-[423px] text-xs text-blue-zodiac font-roboto mx-auto">
    
    {/* Case Studies Heading */}
    <div className="text-center text-[#ff793b] text-xl font-bold font-['Poppins'] mb-4">
      Case Studies
    </div>

    {/* Slide Display */}
    <div className="relative overflow-hidden h-[200px] w-full rounded-[9.74px] mb-4">
      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <img src={study.image} alt="" className="w-full h-full object-cover rounded-[9.74px]" />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 rounded-b-[9.74px]">
            <h3 className="text-sm font-medium">{study.title}</h3>
            <p className="text-xs">{study.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between items-center mb-4">
      <button onClick={handlePrev} className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none">
        <span className="sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button onClick={handleNext} className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none">
        <span className="sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* Browse All Link */}
    <div className="text-center">
      <a href="#heading5" className="bg-[#ff793b] text-white rounded py-2 px-4 text-lg font-medium">
        Browse all
      </a>
    </div>

  </div>
</section>

  
    </>
  );
}
