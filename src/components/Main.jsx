import Header from "./Header";
import Hero from "./Hero";
import BackgroundImg from "../assets/images/bg_image.png";
import AssetCarousel from "./AssetCarousel";
import BackgroundAnimation from "./HeroBgAnimation";

export default function Main() {
  return (
    <div className="relative bg-img">
      <BackgroundAnimation />
      <div className="relative z-20 rounded-xl shadow-lg">
        <Header />
        <Hero />
        <AssetCarousel />
      </div>
    </div>
  );
}
