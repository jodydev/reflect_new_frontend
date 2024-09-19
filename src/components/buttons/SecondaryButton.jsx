export default function SecondaryButton({ text }) {
  return (
    <button className="relative px-8 py-4 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 text-white transition duration-300 ease-in-out">
      {text}
    </button>
  );
}
