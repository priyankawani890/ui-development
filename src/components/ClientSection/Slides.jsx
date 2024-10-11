import React, { useState } from 'react';

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Corrected image paths
  const slides = [
    {
      img: '/c1.png', // Use leading slash for images in public folder
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
    },
    {
      img: '/c2.png',
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.',
    },
    {
      img: '/c3.png',
      title: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.',
    },
    {
      img: '/c4.png',
      title: 'Fourth slide label',
      description: 'Some representative placeholder content for the fourth slide.',
    },
    {
      img: '/c5.png',
      title: 'Fifth slide label',
      description: 'Some representative placeholder content for the fifth slide.',
    },
    {
      img: '/c6.png',
      title: 'Sixth slide label',
      description: 'Some representative placeholder content for the sixth slide.',
    },
    {
      img: '/c7.png',
      title: 'Seventh slide label',
      description: 'Some representative placeholder content for the seventh slide.',
    },
    {
      img: '/c8.png',
      title: 'Eighth slide label',
      description: 'Some representative placeholder content for the eighth slide.',
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
        
      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2  mb-4">
        
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-[#FF793B]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 md:p-8">
              <h5 className="text-xl font-bold">{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FF793B] text-white p-2 rounded-full hidden"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <span className="material-icons hidden">left</span>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FF793B] text-white p-2 rounded-full hidden"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <span className="material-icons hidden">right</span>
      </button>
    </div>
  );
};

export default Slides;
