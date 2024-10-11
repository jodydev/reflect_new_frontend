import { useState, useEffect } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "../utils/icons";
import { Squircle } from "react-ios-corners";
import { headerOptions, headerDropdownOptions } from "../data/headerData";
import Logo from "../assets/images/logo.webp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenDropdown = () => setOpenDropdown((cur) => !cur);
  
  const openDapp = () => {
    window.location.href = "https://www.google.com";
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="border-0 relative z-10 bg-transparent"
    >
      <div className="container mx-auto flex items-start justify-between relative my-2">
        {/* Logo */}
        <div className="flex items-center justify-start ml-2 md:ml-0">
          <img src={Logo} alt="logo" className="h-10 w-7 md:h-12 md:w-full" />
          <p className="text-dark text-xl md:text-2xl font-bold ml-3">
            Reflect
          </p>
        </div>

        {/* Menu per desktop */}
        <Squircle
          className="hidden md:block absolute left-1/2 -translate-x-1/2 bg-white bg-opacity-40 text-dark shadow-lg w-[370px] h-[50px]"
          radius={90}
        >
          <div className="hidden lg:flex w-full items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2 py-4 px-8">
            <div className="flex space-x-8">
              {headerOptions.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-sm xl:text-md text-gray-800 
                    hover:text-primary transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:cursor-pointer text-nowrap"
                  >
                    {item.name}
                  </a>
              ))}
            </div>
          </div>
        </Squircle>

        {/* Dropdown Altro a destra */}
        <Menu as="div" className="hidden lg:flex items-center relative">
          <Squircle className="md:w-[180px] md:h-[50px]" radius={90}>
            <MenuButton
              onClick={openDapp}
              // onMouseEnter={handleOpenDropdown}
              className="inline-flex w-full justify-center items-center gap-x-1.5 p-2 md:p-3 text-sm text-gray-900 bg-primary py-2 md:py-4 px-6 md:px-8 hover:cursor-pointer"
            >
              <p className="text-sm xl:text-md">Launch App</p>
              {/* <ChevronDownIcon
                aria-hidden="true"
                className={`h-4 w-4 md:h-5 md:w-5 text-dark hover:cursor-pointer transition-transform duration-300 ${
                  openDropdown ? "rotate-180" : ""
                }`}
              /> */}
            </MenuButton>
          </Squircle>

          {/* <MenuItems transition>
            <Squircle
              className="md:h-[130px] absolute top-12 right-0 z-10 mt-2 2xl:mt-4 w-full origin-top-right bg-clip-padding backdrop-filter backdrop-blur-md bg-white bg-opacity-40 transition focus:outline-none"
              radius={30}
            >
              <div className="py-3 px-1 text-dark">
                {headerDropdownOptions.map((option, index) => (
                  <MenuItem key={index}>
                    <Squircle radius={90}>
                      <a
                        href="#"
                        className="block text-center px-4 py-2 text-xs md:text-sm rounded-xl hover:bg-primary hover:text-white mx-2 transition-all duration-300 ease-in-out"
                      >
                        {option}
                      </a>
                    </Squircle>
                  </MenuItem>
                ))}
              </div>
            </Squircle>
          </MenuItems> */}
        </Menu>
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
  );
}
