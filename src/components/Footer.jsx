import PrimaryButton from "../components/buttons/PrimaryButton";
import Logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white h-full py-40">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-8">
          <h2 className="title-animation text-4xl lg:text-6xl font-bold mb-4">Footer Section</h2>
          <p className="title-aniamtion text-gray-400 mb-6">
            © {new Date().getFullYear()} Reflect. Tutti i diritti riservati.
          </p>
        </div>
        <div className="w-1/3 "> 
        <PrimaryButton text="Contattaci" />

        </div>
      </div>
    </footer>
  );
}
