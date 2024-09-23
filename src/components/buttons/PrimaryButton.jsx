export default function PrimaryButton({ text, action }) {
  return (
    <button
      onClick={action}
      className="title-animation w-full relative px-6 py-2 xl:py-6 text-xs xl:text-lg rounded-full border-2 border-dark bg-primary backdrop-blur-md hover:bg-opacity-80 hover:scale-105 hover:cursor-pointer text-dark transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}
