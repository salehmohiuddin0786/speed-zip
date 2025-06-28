import React from 'react'
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d213d] text-white px-6 py-10">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Address: Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
          <p>Phone: <a href="tel:+971044503306" className="hover:underline">+971 04 450 3306</a></p>
          <p>Email: <a href="mailto:info@speedhousedesign.com" className="hover:underline">info@speedhousedesign.com</a></p>
        </div>
        <div className=" ">   
              <a href="#" className='m-5'><Linkedin /></a>
              <a href="#" className='m-5' ><Facebook  /></a>
              <a href="#"><Instagram /></a>

          
        </div>

        {/* Designer Credit */}
        
      </div>

      <hr className="my-6 border-gray-400" />

      {/* Footer Bottom */}
      <div className="text-center text-sm">
        © 2025 Speed House Engineering Consultant. All Rights Reserved.
      </div>
      <div className="text-center mt-5">
          <p className="mt-4 md:mt-0 font-bold">
            Designed by{' '}
            <a
              href="https://luminatewebsol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Luminate Web Solutions
            </a>
          </p>
        </div>
        
    </footer>
  );
};

export default Footer;