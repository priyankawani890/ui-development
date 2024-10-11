import React from "react";
import Navbar from "../components/Navbar";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";
import BuildFor from "../components/BuildFor";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import ClientsSection from "../components/ClientSection/ClientsSection";




const HomePage = () => {
  return (

    
    <>
    <section className="">
    <Navbar/>
      <main className="bg-[#03121e] w-screen h-screen m-0 p-0">
     
        <section className="bg-[#03121e] relative w-full flex flex-col items-center text-center">
          <img
            className="lg:w-full  lg:h-full h-96 relative object-contain bg-center bg-cover bg-no-repeat transform scale-150 overflow-hidden "
            alt=""
            src="/bg1.png" 
          />



{/* Mobile */}
<div className="flex ">
      {/* Rectangle container for mobile and desktop */}
      <div className="relative flex my-8 right-0">
        {/* Rounded Rectangle with text */}
        <div className="w-full h-16 bg-[#ff793b] rounded-lg flex items-center justify-center -mt-10 md:w-full md:h-30 lg:w-screen lg:h-24 bg-opacity-90">
          <p className="text-center text-white text-base font-semibold font-['Poppins'] uppercase leading-tight md:text-lg lg:text-xl">
          Empowering Businesses through Digital Transformation
          </p>
        </div>
      </div>
    </div>



          
        </section>
        <section className="bg-[#03121e] -mt-8 flex flex-col relative">
  
  <div className="absolute inset-7 flex flex-col items-center justify-center space-y-4">
    <p className="text-xl w-full md:text-2xl lg:text-3xl font-bold text-white bg-[#03121e1a]  opacity-100 z-10 md:w-screen lg:w-full lg:px-0 text-xs, text-sm,">
      Driving business agility <br /> with custom software solutions.
    </p>
    <p className="bg-[#03121e7c] w-2/3 text-white text-center opacity-100 z-10 md:w-screen lg:w-full md:text-lg lg:text-xl text-xs, text-sm, text-xs  ">
      Clearvue Solutions delivers customised IT services, from cloud migration to agile frameworks. <br />
      We ensure seamless digital transformation that modernises & scales your business without disruptions.
    </p>
  </div>
  <img
    className="lg:w-3/5 h-auto relative object-contain bg-center bg-cover bg-no-repeat transform  lg:left-64 "
    alt=""
    src="/frame4.svg"
  />
</section>

{/* Clients */}
<section className="bg-white w-full min-h-72">
       <ClientsSection/>

       </section>
        {/* Build for */}
        <BuildFor />

        {/* Case Studies */}
        <CaseStudies />

         

        {/* Testimonials */}
        <Testimonials />

     
          {/* Ready to Start */}
          <ReadyToStart />

     

        {/* Footer */}
        <Footer />
      </main>
      </section>
    </>
  );
};

export default HomePage;
