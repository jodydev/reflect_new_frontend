import { Squircle } from "react-ios-corners";

export default function PrimaryButton({ text, action, bol }) {
  return (
    <Squircle radius={90}>
    <button
        onClick={action}
        className={`${bol ? "cursor-not-allowed" : "cursor-pointer"} title-animation w-full relative px-6 py-2 xl:py-3 2xl:py-4 text-xs xl:text-lg shadow-md bg-primary hover:scale-105 text-white transition duration-300 ease-in-out`}
      >
        {text}
      </button>
    </Squircle>
  );
}
