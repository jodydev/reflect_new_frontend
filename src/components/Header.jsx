import React, { useState, useEffect, useRef } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

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
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center mt-5 md:mt-0 md:py-4 px-6">
            <img src={Logo} alt="logo" className="h-8 w-8 md:h-10 md:w-10" />
            <p className="text-dark font-bold ml-3 mt-1 text-sm md:text-lg">
              Reflect
            </p>
          </div>

          {/* Menu per desktop */}
          <ul className="hidden lg:flex items-center gap-8 md:gap-16 absolute left-1/2 -translate-x-1/2 bg-white bg-opacity-20 text-dark rounded-full py-2 md:py-4 px-6 md:px-8 border-2 border-dark">
            {["Home", "News", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="text-xs md:text-sm 2xl:text-base 
                 hover:text-gray-600 
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1 
                  hover:scale-110
                  hover:cursor-pointer
                 "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Dropdown Altro a destra */}
          <Menu as="div" className="hidden lg:flex items-center relative">
            <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 p-2 md:p-3 text-sm text-gray-900 bg-primary rounded-full py-2 md:py-4 px-6 md:px-8 hover:cursor-pointer">
              <p>Launch App</p>
              <ChevronDownIcon
                aria-hidden="true"
                className="h-4 w-4 md:h-5 md:w-5 text-dark"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute top-12 right-0 z-10 mt-2 2xl:mt-4 w-40 md:w-56 origin-top-right rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-dark transition focus:outline-none"
            >
              <div className="py-1 text-dark">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs md:text-sm hover:bg-primary rounded-2xl mx-2"
                  >
                    Option 1
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs md:text-sm hover:bg-primary rounded-2xl mx-2"
                  >
                    Option 2
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs md:text-sm hover:bg-primary rounded-2xl mx-2"
                  >
                    Option 3
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
            <ul className="flex flex-col items-center py-4 gap-6 text-dark">
              <li>Home</li>
              <li>News</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
