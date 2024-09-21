export default function PrimaryButton({ text, action }) {
  return (
    <button onClick={action} className="w-full relative px-6 py-2 xl:py-4 text-xs xl:text-base rounded-full bg-tertiary backdrop-blur-md shadow-primary shadow-md hover:bg-opacity-80 hover:cursor-pointer text-white transition duration-300 ease-in-out">
      {text}
    </button>
  );
}
