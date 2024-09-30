import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import PrimaryButton from "../components/buttons/PrimaryButton";

import Logo from "../assets/images/logo.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Footer() {
  return (
    <footer className="bg-dark text-white h-full pt-96 pb-10 -mt-96 z-50 flex items-center justify-center">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col mt-20">
        <div className="w-full text-7xl font-bold">
          <h3 className="title-animation w-full md:w-2/3">
            How can we help you. get in touch
          </h3>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim. If your work has been tagged
          </p>
          <div classNameName="w-1/4">
            <PrimaryButton to="#hero" text="Contattaci" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex my-20 flex-row justify-between items-center">
            <ScrollAnimation duration={2} animateIn="fadeInLeft">
              <div className="rounded-full bg-white py-3 px-6">
                <img src={Logo} alt="Reflect Logo" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <Link
                to={"#hero"}
                className="hidden md:block cursor-pointer text-gray-600 transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:text-white"
              >
                About
              </Link>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <Link
                to={"#hero"}
                className="hidden md:block cursor-pointer text-gray-600 transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:text-white"
              >
                Services
              </Link>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <Link
                to={"#hero"}
                className="hidden md:block cursor-pointer text-gray-600 transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:text-white"
              >
                Why us
              </Link>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <Link
                to={"#hero"}
                className="hidden md:block cursor-pointer text-gray-600 transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105 hover:text-white"
              >
                Contact
              </Link>
            </ScrollAnimation>

            {/* Social Buttons */}
            <div className="flex flex-row space-x-8 items-center justify-between">
              <Link
                to={"#hero"}
                className="transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105"
              >
                <ScrollAnimation duration={2} animateIn="fadeInRight">
                  <FaFacebookF size={20} color="white" />
                </ScrollAnimation>
              </Link>

              <Link
                to={"#hero"}
                className="transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105"
              >
                {" "}
                <ScrollAnimation duration={2} animateIn="fadeInRight">
                  <FaInstagram size={20} color="white" />{" "}
                </ScrollAnimation>
              </Link>
              <Link
                to={"#hero"}
                className="transition-all 
                    duration-300 ease-in-out hover:translate-y-0.5 
                    hover:scale-105"
              >
                {" "}
                <ScrollAnimation duration={2} animateIn="fadeInRight">
                  <FaYoutube size={20} color="white" />{" "}
                </ScrollAnimation>
              </Link>
            </div>
          </div>
          <hr className="border-gray-600 animate-fadeInRight" />

          <p className="w-full text-center my-12 text-gray-600 title-animation">
            © {new Date().getFullYear()} Reflect. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
