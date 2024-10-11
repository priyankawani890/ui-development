import React from 'react';

export default function Footer() {
  return (
    <div className="my-96 -bottom-28 relative bg-coral w-screen h-screen bg-[#FF793B]">
      {/* Container Div */}
      <div className="absolute inset-x-0 top-0 h-[539px] bg-coral flex justify-around items-center">
        {/* Industries Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Industries</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-black hover:text-blue-500">Retail</a></li>
            <li><a href="" className="text-black hover:text-blue-500">CPG</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Industrials</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Healthcare</a></li>
            <li><a href="" className="text-black hover:text-blue-500">TMT</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Financial Services</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Travel and Hospitality</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-black hover:text-blue-500">AI Consulting</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Data Engineering</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Supply Chain</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Customer Analytics</a></li>
            <li><a href="" className="text-black hover:text-blue-500">CX Management</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Industry X.0</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Support Solutions</a></li>
          </ul>
        </div>

        {/* Supply Chain Control Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Supply Chain Solutions</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-black hover:text-blue-500">Supply Chain Control Tower</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Test and Learn Platform (TALP)</a></li>
            <li><a href="" className="text-black hover:text-blue-500">On-shelf Availability (OSA)</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Customer Cosmos</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Sancus – AI-led Data Quality Management</a></li>
            <li><a href="" className="text-black hover:text-blue-500">Revenue Growth Management (RGM)</a></li>
            <li><a href="" className="text-black hover:text-blue-500">MLWorks</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-[397px] left-12 flex space-x-4">
        <a href="">
          <img className="w-8 h-8 object-cover" src="/footer--link--footertwittersvg@2x.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/clearvuesolutions/posts/?feedView=all" target="_blank">
          <img className="w-8 h-8 object-cover" src="/footer--link--footerlinkedinsvg.svg" alt="LinkedIn" />
        </a>
        <a href="">
          <img className="w-8 h-8 object-cover" src="/footer--link--footerdiscordsvg4@2x.png" alt="Discord" />
        </a>
      </div>

      {/* Terms of Use */}
      <div className="absolute top-[490px] left-32 text-white flex flex-col">
        <p className="white-space-pre-wrap">
          Terms of Use Privacy Policy Cookies Policy © Copyright 2024. Clearvue Solutions. All rights reserved.
        </p>
      </div>

      {/* Footer Labels */}
      <div className="absolute flex justify-around items-center w-full top-0">
        <p className="text-xl font-semibold">Follow Us On</p>
        <p className="text-xl font-semibold">Industries</p>
        <p className="text-xl font-semibold">Services</p>
      </div>
    </div>
  );
}
