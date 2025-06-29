import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d213d] text-white px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">🏢 Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
          <p className="mb-2">
            📞{' '}
            <a href="tel:+971044503306" className="hover:underline text-blue-300">
              +971 04 450 3306
            </a>
          </p>
          <p>
            📧{' '}
            <a href="mailto:info@speedhousedesign.com" className="hover:underline text-blue-300">
              info@speedhousedesign.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition duration-200"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 transition duration-200"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-6" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Left: Credit */}
        <p className="mb-2 md:mb-0 font-medium">
          Designed by{' '}
          <a
            href="https://luminatewebsol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            Luminate Web Solutions
          </a>
        </p>

        {/* Right: Copyright */}
        <p className="text-xs text-gray-300">&copy; 2025 Speed House Engineering Consultant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
