export default function SecondaryButton({ text }) {
  return (
    <button className="relative px-6 py-3 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 text-gray-900 font-semibold transition duration-300 ease-in-out">
    {text}
  </button>
  );
}
