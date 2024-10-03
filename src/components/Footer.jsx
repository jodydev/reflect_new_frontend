import { Link } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Logo from "../assets/images/logo_white.png";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowUpRight } from "react-icons/fi";
import { BsTwitterX, BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white h-full py-10 md:py-20 z-50 flex items-center justify-center">
      <div className="w-full px-8 md:px-40 text-white flex flex-col mt-10 md:mt-20">
        <div className="w-full md:w-2/4">
          <h3 className="title-animation w-full text-3xl md:text-5xl 2xl:text-7xl font-bold">
            Empowering everyone with maximum assets on Base with Reflect
          </h3>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="title-animation w-full text-gray-400 text-lg md:text-xl 2xl:text-2xl">
            The first decentralized synthetic market built on Base.
          </p>
          {/* <div className="w-1/4">
        <PrimaryButton to="#hero" text="Contact us" />
      </div> */}
        </div>
        <div className="flex flex-col">
          <div className="flex my-10 md:my-20 flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <img
                src={Logo}
                alt="Reflect Logo"
                className="h-8 md:h-10 2xl:w-3/4 2xl:h-14"
              />
              <p className="w-full text-center mt-4 md:mt-10 text-gray-600">
                © {new Date().getFullYear()} Reflect. All rights reserved.
              </p>
            </ScrollAnimation>

            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <div className="flex flex-col space-y-4 items-start">
                <h2 className="text-lg md:text-xl 2xl:text-3xl">Info</h2>
                <Link
                  to={"#hero"}
                  className="text-md flex cursor-pointer text-gray-600 transition-all 
                duration-300 ease-in-out hover:translate-y-0.5 
                hover:scale-105 hover:text-white"
                >
                  Gitbook <FiArrowUpRight className="h-6 w-6" />
                </Link>
                <Link
                  to={"#hero"}
                  className="text-md flex cursor-pointer text-gray-600 transition-all 
                duration-300 ease-in-out hover:translate-y-0.5 
                hover:scale-105 hover:text-white"
                >
                  Medium <FiArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
            </ScrollAnimation>

            {/* Social Buttons */}
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <div className="flex flex-col space-y-4 items-start md:items-center">
                <h2 className="text-lg md:text-xl 2xl:text-3xl">
                  Social & Community
                </h2>
                <div className="flex flex-row space-x-6 md:space-x-10">
                  <Link
                    to={"https://x.com/?lang=it"}
                    className="text-md flex cursor-pointer text-gray-600 transition-all 
                duration-300 ease-in-out hover:translate-y-0.5 
                hover:scale-105 hover:text-white"
                  >
                    <BsTwitterX className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link
                    to={"https://discord.com/"}
                    className="text-md flex cursor-pointer text-gray-600 transition-all 
                duration-300 ease-in-out hover:translate-y-0.5 
                hover:scale-105 hover:text-white"
                  >
                    <BsDiscord className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link
                    to={"https://web.telegram.org/k/"}
                    className="text-md flex cursor-pointer text-gray-600 transition-all 
                duration-300 ease-in-out hover:translate-y-0.5 
                hover:scale-105 hover:text-white"
                  >
                    <FaTelegramPlane className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-gray-600 animate-fadeInRight" />
        </div>
      </div>
    </footer>
  );
}
