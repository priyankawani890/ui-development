import React, {useState} from 'react';

export default function Navbar() {
  
    const [isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
  <>
  <nav className="flex h-20 px-4 z-10 bg-[#03121e] md:hidden">

   
     {/* Left Icon (menu) */}
<button onClick={toggleMenu} className="z-10">
  <img src="menu-icon.svg" alt="Menu" className="w-10 h-10 m-5 mt-7 z-10" />
</button>

{/* Center Logo */}
<div className="cursor-pointer z-10 flex ">
  <img className="w-35 h-6 mx-2 mt-9" src="logo.png" alt="Logo" />

  <img src="call-icon.svg" alt="Call" className="mt-8 md:left-0 w-10 h-10 relative animate-vibrate transition-transform duration-100 ease-in-out transform hover:scale-150 " /> 
</div>



      {/* Mobile Menu */}
      { isOpen && (
        <div className=" absolute top-16 left-10 w-430 h-600 bg-[#03121e] transition-transform duration-300  z-10 opacity-70 justify-center items-center">
          <ul className="flex flex-col items-center py-4 opacity-100 ">
            <li className="py-2 w-full hover:hover:bg-[#FF793B] justify-center items-center">
              <a href="#we-are-hiring" className="text-white text-lg hover:hover:text-white font-bold">We’re Hiring</a>
            </li>
            <li className="py-2 w-full hover:hover:bg-[#FF793B]">
              <a href="#contact-us" className="text-white text-lg font-bold">Contact Us</a>
            </li>
            <li className="py-2 w-full hover:hover:bg-[#FF793B]">
              <a href="#blogs" className="text-white text-lg font-bold">Blogs</a>
            </li>
            <li className="py-2  w-full hover:hover:bg-[#FF793B]">
              <a href="#clearvueata" className="text-white text-lg font-bold">Clearvue at a Glance</a>
            </li>
            <li className="py-2 w-full hover:hover:bg-[#FF793B]">
              <a href="#insights" className="text-white text-lg">Insights</a>
            </li>
            <li className="py-2  w-full hover:hover:bg-[#FF793B]">
              <a href="#life-at" className="text-white text-lg font-bold">Life at Clearvue</a>
            </li>
            <li className="py-2  w-full hover:hover:bg-[#FF793B]">
              <a href="#services" className="text-white text-lg font-bold">Services</a>
            </li>
            <li className="py-2  w-full hover:hover:bg-[#FF793B] font-bold ">
              <a href="#industries" className="text-white text-lg  ">Industries</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
    

    <nav className="hidden sm:hidden md:hidden lg:block m-0 p-0 -left-6 relative w-[150%] h-[120px] items-center border border-black border-solid md:w-full z-10 top-8">
  <a href='#we-are-hiring' className=" hover:hover:bg-[#FF793B]  cursor-pointer absolute left-[1160px] top-0 mt-2 text-white text-[16px] font-medium uppercase break-words rounded-lg whitespace-nowrap">
    We’re Hiring
  </a>
  <a href='#contact-us' className="cursor-pointer absolute w-[150px] h-[38px] left-[1123px] top-[60px]">
    <div className="absolute w-[150px] h-[38px] bg-[#FF793B] rounded-[10px]"></div>
    <div className="absolute left-[27px] top-[7px] text-white text-[16px] font-medium uppercase break-words hover:hover:bg-[#FF793B] rounded-lg">
      Contact US
    </div>
  </a>
  <a href="#blogs" className="cursor-pointer absolute left-[1075px] top-0 mt-2 text-white text-[16px] font-medium uppercase break-words hover:hover:bg-[#FF793B] rounded-lg">
    Blogs
  </a>
  <a href='#clearvueata' className="cursor-pointer absolute left-[860px] top-0 mt-2 text-white text-[16px] font-medium uppercase break-words hover:hover:bg-[#FF793B] rounded-lg">
    Clearvue at a glance
  </a>
  <div className="absolute left-[997px] top-[66px] flex items-center justify-center gap-2">
    <a href="#company" className="cursor-pointer text-center text-[#F7F8F8] text-[14px] font-semibold uppercase leading-[24.48px] break-words hover:hover:bg-[#FF793B] rounded-lg">
      Company
    </a>
    <a href="#company">
      <div className="flex justify-center items-center">
        <div className="relative w-[14px] h-[14px]">
          <div className="absolute w-[8.29px] h-[4.80px] left-[2.86px] top-[4.61px] bg-[#D0D6E0]"></div>
        </div>
      </div>
    </a>
  </div>
  <a href='#insights' className="cursor-pointer absolute left-[903px] top-[66px] text-center text-[#F7F8F8] text-[14px] font-semibold uppercase leading-[24.48px] break-words hover:hover:bg-[#FF793B] rounded-lg">
    INSIGHTS
  </a>
  <a href='#life-at' className="cursor-pointer absolute left-[751px] top-[66px] text-center text-[#F7F8F8] text-[14px] font-semibold uppercase leading-[24.48px] break-words hover:hover:bg-[#FF793B] rounded-lg">
    LIFE at Clearvue
  </a>
  <a href='#services' className=" cursor-pointer absolute left-[656px] top-[66px] text-center text-[#F7F8F8] text-[14px] font-semibold uppercase leading-[24.48px] break-words hover:hover:bg-[#FF793B] rounded-lg">
    SERVICES
  </a>
  <a href='#insdutries' className="hover:hover:bg-[#FF793B] rounded-lg cursor-pointer absolute left-[549px] top-[66px] text-center text-[#F7F8F8] text-[14px] font-semibold uppercase leading-[24px] break-words">
    INDUSTRIES
  </a>
  <div className=" absolute w-[1366px] h-0 left-0 top-[46.02px] border border-[rgba(212,212,212,0.50)] "></div>
  <img
    className="cursor-pointer absolute w-[275px] h-[37px] left-[98px] top-[60px]"
    src="logo.png"
    alt="Asset"
  />
</nav>

    </>
  );
};


