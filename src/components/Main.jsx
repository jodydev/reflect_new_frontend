import Header from "./Header";
import Hero from "./Hero";
import BackgroundImg from "../assets/images/bg_image.png";
import AssetCarousel from "./AssetCarousel";
import BackgroundAnimation from "./HeroBgAnimation";

export default function Main() {
  return (
    <div className="relative bg-gray-900 h-screen bg-img">
      <BackgroundAnimation />

      <div className="relative z-20 p-0 rounded-xl shadow-lg">
        <Header />
        <Hero />
        <AssetCarousel />
      </div>
      
    </div>
  );
}
