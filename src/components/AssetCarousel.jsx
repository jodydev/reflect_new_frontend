import { useEffect, useState } from "react";
import axios from "axios";
import { Squircle } from "react-ios-corners";

export default function AssetCarousel() {
  const [assets, setAssets] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    //? Function to fetch market data from CoinGecko API

    const fetchMarketData = async () => {
      try {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1";
        
        const response = await axios.get(url, {
          headers: {
            Accept: "application/json",
          },
        });

        const data = response.data;

        const mappedAssets = data.map((asset) => ({
          name: asset.name,
          price: `$${asset.current_price} ${
            asset.price_change_percentage_24h > 0 ? "+" : "-"
          } ${Math.abs(asset.price_change_percentage_24h).toFixed(2)}%`,
          trend: asset.price_change_percentage_24h > 0 ? "up" : "down",
        }));

        setAssets(mappedAssets);
      } catch (error) {
        console.error("Errore nel recupero dei dati di mercato:", error);
      }
    };

    fetchMarketData();
  }, []);

  useEffect(() => {
    //? Function to scroll the carousel

    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //? Function to reset the scroll position when it reaches the end

    if (scrollPosition >= assets.length * 200) {
      setScrollPosition(0);
    }
  }, [scrollPosition, assets.length]);

  return (
    <div className="mx-4 md:mt-20 lg:mt-0 md:mx-20 overflow-hidden animate-fadeInBottom">
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