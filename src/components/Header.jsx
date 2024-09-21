import React, { useState, useEffect, useRef } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo_min.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const timeoutDuration = 3000;

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownTimeout(
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, timeoutDuration)
    );
  };

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className="border-0 relative z-10 bg-transparent"
      >
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center mt-5 md:mt-0 md:py-4 px-6">
            <img src={Logo} alt="logo" className="h-8 w-8 md:h-10 md:w-10" />
            <p className="text-white font-bold ml-2 text-sm md:text-lg">Reflect</p>
          </div>

          {/* Menu per desktop */}
          <ul className="hidden lg:flex items-center gap-8 md:gap-16 absolute left-1/2 -translate-x-1/2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full py-2 md:py-4 px-6 md:px-8 shadow-md shadow-primary hover:cursor-pointer">
            <li className="text-xs md:text-sm text-white hover:text-gray-300 transition-transform duration-300 hover:-translate-y-0.5">
              Home
            </li>
            <li className="text-xs md:text-sm text-white hover:text-gray-300 transition-transform duration-300 hover:-translate-y-0.5">
              News
            </li>
            <li className="text-xs md:text-sm text-white hover:text-gray-300 transition-transform duration-300 hover:-translate-y-0.5">
              About
            </li>
            <li className="text-xs md:text-sm text-white hover:text-gray-300 transition-transform duration-300 hover:-translate-y-0.5">
              Contact
            </li>
          </ul>

          {/* Dropdown Altro a destra */}
          <Menu as="div" className="hidden lg:flex items-center relative">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 p-2 md:p-3 text-sm font-semibold text-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full shadow-md shadow-primary">
              <ChevronDownIcon
                aria-hidden="true"
                className="h-4 w-4 md:h-5 md:w-5 text-white"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute top-12 right-0 z-10 mt-2 w-40 md:w-56 origin-top-right rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-md shadow-primary transition focus:outline-none"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs md:text-sm text-white hover:bg-primary rounded-2xl mx-2"
                  >
                    Option 1
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs md:text-sm text-white hover:bg-primary rounded-2xl mx-2"
                  >
                    Option 2
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* Icona per il menu mobile */}
          <IconButton
            variant="text"
            color="white"
            onClick={handleOpen}
            className="lg:hidden me-5"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>

          {/* Menu mobile */}
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:hidden absolute top-full right-0 w-full bg-primary`}
          >
            <ul className="flex flex-col items-center py-4 gap-6">
              <li className="text-white">Home</li>
              <li className="text-white">News</li>
              <li className="text-white">About</li>
              <li className="text-white">Contact</li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
