"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import Logo from './Logo';
import ProfileDropdown from './ProfileDropdown';
import { Transition } from '@headlessui/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#1b2036] text-white h-[70px] flex flex-row justify-between items-center shadow-lg w-full ">
      {/* Left side with Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Right side with Hamburger and ProfileDropdown */}
      <div className="flex ">
  
      {/* Mobile menu (visible on smaller screens) */}
      <div>
        <div className=" md:hidden p-4 ml-5 ">
            <ProfileDropdown />
        </div>
      <Transition
        show={isMobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute p-4  top-20 z-10 justify-end ml-5 bg-white text-black shadow-lg rounded-lg  "
        >
          <ul className="flex flex-col ">
            <li onClick={toggleMobileMenu}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link href="/findexpert">Find Expert</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </Transition>
      </div>
       {/* Mobile menu toggle (Hamburger icon) */}
       <button className="md:hidden " onClick={toggleMobileMenu}>
          <FaBars size={24} />
        </button>
      </div>


       {/* Regular menu (visible on larger screens) */}
      <div className='flex flex-row items-center  justify-center'>
  
      <ul className="hidden md:flex items-center flex-row gap-7 text-xl mr-3">
        <li className="hover:text-gray-900 transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-900 transition">
          <Link href="/findexpert">Find Expert</Link>
        </li>
        <li className="hover:text-gray-900 transition">
          <Link href="/about">About Us</Link>
        </li>
        <li className="hover:text-gray-900 transition">
          <Link href="/contact">Contact Us</Link>
        </li>
        <div className=" ">
          <ProfileDropdown />
        </div>
      </ul>
      </div>
    </div>
  );
}
