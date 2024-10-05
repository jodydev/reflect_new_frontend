import { useState, useEffect } from "react";
import axios from "axios"; // Importa Axios

export const getDataFromMedium = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const xmlText = response.data.contents; // Accedi ai dati direttamente da response.data

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const items = Array.from(xmlDoc.querySelectorAll("item"));

        const posts = items.slice(0, 3).map((item) => {
          const contentEncoded = item.getElementsByTagNameNS(
            "http://purl.org/rss/1.0/modules/content/",
            "encoded"
          )[0]?.textContent;
          let imgSrc = null;
          let content = ""; 
          if (contentEncoded) {
            const contentDoc = new DOMParser().parseFromString(
              contentEncoded,
              "text/html"
            );
            const imgElement = contentDoc.querySelector("img");
            if (imgElement) {
              imgSrc = imgElement.getAttribute("src");
            }
            const pElements = contentDoc.querySelectorAll("p");
            const paragraphs = Array.from(pElements)
              .map((p) => p.innerText)
              .join(" ");
            content = paragraphs;
          }

          return {
            title: item.querySelector("title").textContent,
            link: item.querySelector("link").textContent,
            categories: Array.from(item.querySelectorAll("category")).map(
              (cat) => cat.textContent
            ),
            pubDate: item.querySelector("pubDate").textContent,
            img: imgSrc,
            content: content,
          };
        });

        setPosts(posts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [url]);

  return { posts, loading, error };
};
