import { useState, useEffect } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Menu, MenuButton } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "../utils/icons";
import { Squircle } from "react-ios-corners";
import { headerOptions } from "../data/headerData";
import Logo from "../assets/images/logo.webp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

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
        <div className="flex items-center justify-start ml-2 md:ml-0 animate-fadeInLeft">
          <img src={Logo} alt="logo" className="h-10 w-7 md:h-12 md:w-full 2xl:h-14 2xl:w-full" />
          <p className="text-dark text-xl md:text-2xl xl:text-3xl font-bold ml-3 xl:ml-5">
            Reflect
          </p>
        </div>

        {/* Menu per desktop */}
        <Squircle
          className="hidden md:block bg-white bg-opacity-40 text-dark shadow-lg w-[370px] h-[50px] 2xl:w-[500px] 2xl:h-[70px] animate-fadeInTop"
          radius={90}
        >
          <div className="hidden lg:flex w-full items-center justify-center gap-6 py-4 px-8 2xl:py-6">
            <div className="flex space-x-8">
              {headerOptions.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm 2xl:text-lg text-gray-800 
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

        {/* Button a destra */}
        <div className="hidden lg:flex items-center relative animate-fadeInRight">
          <Squircle className="md:w-[200px] md:h-[50px] 2xl:h-[70px]" radius={90}>
            <button
              onClick={openDapp}
              className="inline-flex w-full 2xl:h-[70px] justify-center items-center gap-x-1.5 p-2 md:p-3 text-sm text-gray-900 bg-primary py-2 md:py-4 px-6 md:px-8 hover:cursor-pointer"
            >
              <p className="text-sm 2xl:text-lg ">Launch dApp</p>
            </button>
          </Squircle>
        </div>
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
              {headerOptions.map((item) => (
                <li
                  onClick={() => setOpen(false)}
                  key={item.name}
                  className="text-sm xl:text-md text-gray-800 hover:text-primary transition-all duration-300 ease-in-out hover:translate-y-0.5 hover:scale-105 hover:cursor-pointer"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </Squircle>
        </div>
      </div>
    </Navbar>
  );
}
