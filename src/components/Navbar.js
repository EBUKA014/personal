"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dlobssaht/image/upload/v1772925405/Computer_repair_service_logo_design-removebg-preview_as7lfn.png"
                alt="smartech logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">smartech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-200">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200">Contact</Link>
            
            {/* Optional Call to Action Button */}
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link 
              href="/" 
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            <button className="mt-4 w-full bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition font-medium">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
