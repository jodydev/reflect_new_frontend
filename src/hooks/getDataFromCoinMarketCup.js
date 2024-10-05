import { useEffect, useState } from "react";

const getDataFromCoinMarketCup = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1";

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Encoding": "deflate, gzip",
          },
        });

        const data = await response.json();

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

  return assets;
};

export default getDataFromCoinMarketCup;
