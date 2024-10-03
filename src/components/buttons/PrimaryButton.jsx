import { Squircle } from "react-ios-corners";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function PrimaryButton({ text, to, bol }) {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <Squircle radius={90}>
        <button
          className={`${
            bol ? "cursor-not-allowed" : "cursor-pointer"
          } title-animation w-full relative px-6 py-2 xl:py-3 2xl:py-4 text-xs xl:text-lg shadow-md bg-primary hover:scale-105 text-white transition duration-300 ease-in-out`}
        >
          <Link to={to}>{text}</Link>
        </button>
      </Squircle>
    </ScrollAnimation>
  );
}
