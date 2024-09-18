import React, { useEffect, useState } from "react";

export default function AssetCarousel() {
  const [assets, setAssets] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Costruzione dell'URL con parametri query
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1";

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Encoding": "deflate, gzip",
          },
        });

        const data = await response.json();

        // Mappare i dati in base alla tua struttura
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

  // Funzione per l'animazione dello scorrimento
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 20); // Modifica la velocità cambiando il numero

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollPosition >= assets.length * 200) {
      setScrollPosition(0); // Resetta la posizione quando finisce la lista
    }
  }, [scrollPosition, assets.length]);

  return (
    <div className="absolute top-[105%] left-0 w-full h-28 rounded-t-[40px] bg-white bg-opacity-20 border border-white/30 shadow-lg backdrop-filter backdrop-blur-[5px]">
      {" "}
      <div className="px-28">
        {" "}
        {/* Maggior padding orizzontale */}
        <div
          className="flex my-12"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {assets.map((asset, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-full flex items-center justify-center mx-5"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-white italic">{asset.name}</h3>
                <div
                  className={`${
                    asset.trend === "up" ? "bg-green-600" : "bg-red-600"
                  } rounded-md shadow-md px-3 py-1`}
                >
                  <p className="text-white text-sm whitespace-nowrap">
                    {asset.price}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicare per scorrimento infinito */}
          {assets.map((asset, index) => (
            <div
              key={index + assets.length}
              className="flex-shrink-0 w-48 h-full flex items-center justify-center mx-5"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-white italic">{asset.name}</h3>
                <div
                  className={`${
                    asset.trend === "up" ? "bg-green-600" : "bg-red-600"
                  } rounded-md shadow-md px-3 py-1`}
                >
                  <p className="text-white text-sm whitespace-nowrap">
                    {asset.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
