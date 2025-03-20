"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "About", "Contact Us"];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold tracking-tight">
          <a href="#" className="flex items-center gap-2">
            <span className="text-white">
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </span>
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex gap-8 absolute md:static bg-blue-600 w-full left-0 md:w-auto p-6 md:p-0 transition-all duration-300 ease-in-out z-10 ${
            isOpen ? "top-14 shadow-lg" : "top-[-300px] md:top-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className="py-3 md:py-0 relative">
              <a
                href="#"
                className="relative text-white hover:text-blue-100 font-medium transition-colors duration-200 block md:inline-block px-2 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item);
                }}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform duration-300 ${
                    activeItem === item ? "scale-x-100" : ""
                  }`}
                  style={{
                    transformOrigin: "center",
                  }}
                ></span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform duration-300 hover:scale-x-100`}
                  style={{
                    transformOrigin: "center",
                  }}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
