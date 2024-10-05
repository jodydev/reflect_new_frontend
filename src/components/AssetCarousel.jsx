import { useEffect, useState } from "react";
import { Squircle } from "react-ios-corners";
import getDataFromCoinMarketCup from "../hooks/getDataFromCoinMarketCup";

export default function AssetCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const assets = getDataFromCoinMarketCup();

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollPosition >= assets.length * 200) {
      setScrollPosition(0);
    }
  }, [scrollPosition, assets.length]);

  return (
    <div className="mx-4 md:mx-20 overflow-hidden animate-fadeInBottom">
      <Squircle radius={90}>
        <div className="w-full h-28 xl:h-30 2xl:h-32  bg-white bg-opacity-40  relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div
              className="flex items-center h-full"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {assets.concat(assets).map((asset, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-full flex items-center justify-center mx-5 xl:mx-16"
                >
                  <div className="flex items-center gap-3 xl:gap-5">
                    <h3 className="text-dark italic xl:text-xl">
                      {asset.name}
                    </h3>
                    <div
                      className={`${
                        asset.trend === "up" ? "bg-primary" : "bg-dark"
                      } rounded-md shadow-md px-3 py-1`}
                    >
                      <p className="text-white text-sm xl:text-lg whitespace-nowrap">
                        {asset.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Squircle>
    </div>
  );
}
