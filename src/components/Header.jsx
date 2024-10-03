import React, { useState, useEffect, useRef } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Squircle } from "react-ios-corners";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenDropdown = () => setOpenDropdown((cur) => !cur);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className="border-0 relative z-10 bg-transparent"
      >
        <div className="container mx-auto flex items-start justify-between relative my-2">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img src={Logo} alt="logo" className="h-10 md:h-12 w-full" />
            <p className="text-dark text-xl md:text-2xl font-bold ml-3">Reflect</p>
          </div>

          {/* Menu per desktop */}
          <Squircle
            className="hidden md:block absolute left-1/2 -translate-x-1/2 bg-white bg-opacity-40 text-dark shadow-lg w-[370px] h-[50px]"
            radius={90}
          >
            <div className="hidden lg:flex w-full items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2 py-4 px-8">
              <ul className="flex space-x-8">
                {["Home", "News", "About", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="text-sm xl:text-md text-gray-800 
                    hover:text-gray-600 transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Squircle>

          {/* Dropdown Altro a destra */}
          <Menu as="div" className="hidden lg:flex items-center relative">
            <Squircle className="md:w-[180px] md:h-[50px]" radius={90}>
              <MenuButton
                onClick={handleOpenDropdown}
                className="inline-flex w-full justify-center items-center gap-x-1.5 p-2 md:p-3 text-sm text-gray-900 bg-primary py-2 md:py-4 px-6 md:px-8 hover:cursor-pointer"
              >
                <p className="text-sm xl:text-md">Launch App</p>
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`h-4 w-4 md:h-5 md:w-5 text-dark hover:cursor-pointer transition-transform duration-300 ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </MenuButton>
            </Squircle>

            <MenuItems transition>
              <Squircle
                className="md:h-[130px] absolute top-12 right-0 z-10 mt-2 2xl:mt-4 w-40 md:w-56 origin-top-right bg-clip-padding backdrop-filter backdrop-blur-md bg-white bg-opacity-40 transition focus:outline-none"
                radius={90}
              >
                <div className="p-3 text-dark">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs md:text-sm rounded-xl hover:bg-primary mx-2"
                    >
                      Option 1
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs md:text-sm hover:bg-primary rounded-xl mx-2"
                    >
                      Option 2
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs md:text-sm hover:bg-primary rounded-xl mx-2"
                    >
                      Option 3
                    </a>
                  </MenuItem>
                </div>
              </Squircle>
            </MenuItems>
          </Menu>

          {/* Icona per il menu mobile */}
          <Squircle
            className="block lg:hidden origin-top-right bg-clip-padding backdrop-filter backdrop-blur-md bg-white bg-opacity-40 transition focus:outline-none"
            radius={90}
          >
            <IconButton
              variant="text"
              color="black"
              onClick={handleOpen}
              className="lg:hidden flex items-center justify-center"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </Squircle>

          {/* Menu mobile */}
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:hidden absolute top-full right-0 w-full z-50 my-5`}
          >
            <Squircle radius={90}>
              <ul className="bg-white bg-opacity-100 flex flex-col items-center py-10 gap-6 text-dark">
                <li className="hover:underline hover:text-primary">Home</li>
                <li className="hover:underline hover:text-primary">News</li>
                <li className="hover:underline hover:text-primary">About</li>
                <li className="hover:underline hover:text-primary">Contact</li>
              </ul>
            </Squircle>
          </div>
        </div>
      </Navbar>
    </>
  );
}
