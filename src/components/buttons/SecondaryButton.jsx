import { Squircle } from "react-ios-corners";

export default function SecondaryButton({ text, action }) {
  return (
    <Squircle radius={90}>
      <button
        onClick={action}
        className=" title-animation w-full relative px-6 py-2 xl:py-3 2xl:py-4 text-xs xl:text-lg shadow-md bg-white bg-opacity-40 backdrop-blur-md hover:scale-105 hover:cursor-pointer text-dark transition duration-300 ease-in-out"
      >
        {text}
      </button>
    </Squircle>
  );
}
