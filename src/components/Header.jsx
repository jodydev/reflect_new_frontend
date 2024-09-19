import React, { useState, useEffect, useRef } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo_min.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const dropdownRef = useRef(null);
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
          {/* Logo a sinistra */}
          <div className="flex items-center py-4 px-6">
            <img src={Logo} alt="logo" className="h-10 w-10" />
            <p className="text-white font-bold ml-2">Reflect</p>
          </div>

          {/* Menu centrato */}
          <ul className="hidden lg:flex items-center gap-16 absolute left-1/2 -translate-x-1/2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full py-4 xl:py-5 px-8 xl:px-10 shadow-md shadow-primary">
            <li className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-gray-300 hover:-translate-y-0.5 hover:cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-gray-300 hover:-translate-y-0.5 hover:cursor-pointer transition-colors duration-300">
              News
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-gray-300 hover:-translate-y-0.5 hover:cursor-pointer transition-colors duration-300">
              About
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-gray-300 hover:-translate-y-0.5 hover:cursor-pointer transition-colors duration-300">
              Contact
            </li>
          </ul>

          {/* Dropdown Altro a destra */}
          <Menu as="div" className="flex items-center relative">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 p-3 text-sm font-semibold text-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full shadow-md shadow-primary">
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-white"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute top-12 right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl g-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-md shadow-primary transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-primary rounded-2xl my-2 mx-2"
                  >
                    Lorem
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-primary rounded-2xl mb-2 mx-2"
                  >
                    Lorem
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-primary rounded-2xl mb-2 mx-2"
                  >
                    Lorem
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* Icona per il menu mobile a destra */}
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </Navbar>
    </>
  );
}
