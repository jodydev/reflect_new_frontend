import Header from "./Header";
import Hero from "./Hero";
import BackgroundImg from "../assets/images/bg_image.png";
import AssetCarousel from "./AssetCarousel";

export default function Main() {
  return (
    <div className="relative bg-gray-600 h-screen">
      {/* Background Image */}
      <img
        src={BackgroundImg}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      />

      {/* Content */}
      <div className="relative z-20 p-0 rounded-xl shadow-lg">
        <Header />
        <Hero />
        <AssetCarousel />
      </div>
      
    </div>
  );
}
