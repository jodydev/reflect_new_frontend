export default function PrimaryButton({ text, action }) {
  return (
    <button onClick={action} className="w-full relative px-6 py-2 text-xs rounded-lg bg-tertiary backdrop-blur-md shadow-primary shadow-md hover:bg-opacity-80 text-white transition duration-300 ease-in-out">
      {text}
    </button>
  );
}
