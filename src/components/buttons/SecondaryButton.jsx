import { Squircle } from "react-ios-corners";

export default function SecondaryButton({ bol, text, action }) {
  console.log(bol);
  return (
    <Squircle radius={90}>
      <button
        onClick={action}
        className={`${bol ? "cursor-not-allowed" : "cursor-pointer"} title-animation w-full relative px-6 py-2 xl:py-3 2xl:py-4 text-xs xl:text-lg shadow-md bg-white bg-opacity-40 backdrop-blur-md hover:scale-105 text-dark transition duration-300 ease-in-out`}
      >
        {text}
      </button>
    </Squircle>
  );
}
