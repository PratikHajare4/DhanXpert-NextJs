import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import profile from '../../../../public/profile.png'
import Image from 'next/image';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Profile Image */}
      <button onClick={toggleDropdown}>
        <Image
          src={profile} // Placeholder image for the profile
          alt="Profile"
          width="50"
          height="50"
          className="rounded-full hover:border hover:border-gray-800 "
        />
      </button>

      {/* Dropdown Menu */}
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute z-10 text-base overflow-hidden w-40 mt-2 md:mr-5 bg-white rounded-lg shadow-lg ">
          <ul className="">
          <li>
              <Link href="#">
                <button onClick={toggleDropdown} className="block px-2 py-2 text-gray-800 hover:font-bold  hover:bg-gray-200">
                  My Profile
                </button>
              </Link>
            </li>
            <li className=''>
              <Link href="/pages/login">
                <button onClick={toggleDropdown} className="block px-2 py-2  text-gray-800 hover:font-bold  hover:bg-gray-200 ">
                  Login  
                </button>
              </Link>
            </li>
            <li>
              <Link href="/pages/register">
                <button onClick={toggleDropdown} className="block px-2 py-2 text-gray-800 hover:font-bold hover:bg-gray-200">
                  Register
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button onClick={toggleDropdown} className="block px-2 py-2 text-gray-800 hover:font-bold  hover:bg-gray-200">
                  Settings
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default ProfileDropdown;
