"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "Gallery", url: "https://gallery.smgoi.com/" },
    { label: "Notifications", url: "https://info.smgoi.com/" },
    { label: "Results", url: "https://results.smgoi.com/" },
    { label: "Faculty", url: "/faculty" },
    { label: "About", url: "/about" },
    { label: "Developer", url: "/developer" },
    { label: "FAQs", url: "/faq" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <nav className="bg-opacity-70 backdrop-blur-lg p-2 w-full z-10 fixed">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/icons/smgoilogo.webp" alt="SMGOI Logo" width={45} height={45} loading="lazy" />
          <p className="font-bold text-yellow-500 hidden sm:block">Sankat Mochan Group Of Institutions</p>
          <p className="font-bold text-yellow-500 sm:hidden">SMGOI</p>
        </div>

        <ul className="hidden sm:flex items-center gap-4 list-none p-0 m-0">
          {menuItems.map((item, index) => (
            <li key={`${item.label}-${index}`} className="cursor-pointer">
              <Link href={item.url} className={`text-white font-medium ${pathname === item.url ? 'text-yellow-500' : ''}`}>
                  {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="sm:hidden mt-2 list-none p-0 m-0">
          {menuItems.map((item, index) => (
            <li key={`${item.label}-${index}`} className="cursor-pointer">
              <Link href={item.url} className={`block px-4 py-2 text-white font-medium ${pathname === item.url ? 'text-yellow-500' : ''}`}>
                  {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
