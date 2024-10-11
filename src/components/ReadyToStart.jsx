import React from 'react';

export default function ReadyToStart() {
  return (
    <>
    <section className="" >
    <div className=" absolute lg:top-[4230px] left-1/2 transform -translate-x-1/2 w-[1440px] h-[400px] text-gray-800 font-roboto">
      <div className="hidden sm:block relative w-full h-full">
        <div className="hidden sm:block absolute inset-0 bg-[#e0f7fa]" />
        <img className="absolute lg:top-[67.6px] lg:left-1/2 transform -translate-x-1/2 lg:h-[62.2px] lg:object-cover" alt="" src="/svg@2x.png" />
        <img className="hidden sm:block absolute top-[300.4px] left-1/2 transform -translate-x-1/2 h-[62.2px] object-cover" alt="" src="/svg1@2x.png" />

        <div className="absolute lg:top-[100.2px] left-[149px] right-[828px] flex flex-col items-start justify-start text-[40px] font-semibold leading-[36px]">
         Ready to elevate your business ? 
        </div> 

        <div className="absolute top-[66.3px] left-[149px] right-[842px] bottom-[177.6px] max-w-[810px] flex flex-col items-start justify-start ">
          <div className="relative lg:top-[120px] text-lg leading-[28px] max-w-[752px]">
           Reach out to discover innovative solutions tailored to your needs.
          </div>
        </div>
        
        <button className=" absolute top-[261.6px] left-[185px] w-[111.6px] h-[29.3px] bg-[#ff6347] rounded-[4px] text-xs text-white flex items-center justify-center">
          <a href="#heading12" className="relative">
            <span className="absolute -top-3 -left-6 leading-[24px] font-bold whitespace-nowrap">Start now</span>
          </a>
          <img className=" absolute top-[10.5px] left-[91px] w-[10px] h-[10px] object-cover" alt="" src="/svg2.svg" />
        </button>
      </div>
      {/* for lg */}
     <img 
  className="hidden sm:block top- lg:absolute object-fill lg:top-[33.45%] lg:right-[8.96%] lg:w-[40.42%] lg:max-w-[600px] lg:h-auto lg:object-cover" 
  alt="" 
  src="/mask-group3@2x.png" 
/>


{/* sm */}
<img 
  className="absolute w-full sm:h-auto object-cover sm:w-[40.42%] sm:right-[10.96%] sm:top-[45%] sm:overflow-hidden lg:hidden" 
  alt="" 
  src="/mask-group3@2x.png" 
/>


    </div>
    </section>

    </>
  );
}
