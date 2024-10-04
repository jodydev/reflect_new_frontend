import React, { useEffect, useState } from "react";
import Image from "../assets/images/yellow_1.png";
import { Squircle } from "react-ios-corners";
import ScrollAnimation from "react-animate-on-scroll";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function CardNews() {
  const isMobile = window.innerWidth < 768;

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.allorigins.win/get?url=https://medium.com/feed/@RFLOnBase"
    )
      .then((res) => res.json())
      .then((data) => {
        const xmlText = data.contents;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const items = Array.from(xmlDoc.querySelectorAll("item"));

        const posts = items.slice(0, 3).map((item) => {
          const contentEncoded = item.getElementsByTagNameNS(
            "http://purl.org/rss/1.0/modules/content/",
            "encoded"
          )[0]?.textContent;
          let imgSrc = null;
          let content = ""; // Variabile per il contenuto del post
          if (contentEncoded) {
            // Crea un nuovo documento HTML dal contenuto
            const contentDoc = new DOMParser().parseFromString(
              contentEncoded,
              "text/html"
            );
            // Trova l'immagine
            const imgElement = contentDoc.querySelector("img");
            if (imgElement) {
              imgSrc = imgElement.getAttribute("src");
            }
            // Estrai solo il testo all'interno dei tag <p>
            const pElements = contentDoc.querySelectorAll("p");
            const paragraphs = Array.from(pElements)
              .map((p) => p.innerText)
              .join(" "); // Unisci i paragrafi con un <br> tra di loro
            content = paragraphs; // Assegna il contenuto
          }

          return {
            title: item.querySelector("title").textContent,
            link: item.querySelector("link").textContent,
            categories: Array.from(item.querySelectorAll("category")).map(
              (cat) => cat.textContent
            ),
            pubDate: item.querySelector("pubDate").textContent,
            img: imgSrc,
            content: content, // Aggiungi il contenuto del post
          };
        });

        console.log(posts);
        setPosts(posts);
      })
      .catch((err) => console.error("Errore nel recupero dei dati:", err));
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-20 mx-10 mt-0 md:mt-0 2xl:mt-20 md:mx-0">
      {posts.map((post, index) => (
        <ScrollAnimation
          key={index}
          duration={2}
          animateIn={
            index === 0
              ? "fadeInLeft"
              : index === 1
              ? isMobile
                ? "fadeInRight"
                : "fadeInUp"
              : index === 2 && isMobile
              ? "fadeInLeft"
              : "fadeInRight"
          }
        >
          <Squircle radius={90}>
            <div className="w-[320px] h-[400px] md:w-[350px] md:h-[450px] 2xl:w-[400px]  2xl:h-[500px] bg-white bg-opacity-40">
              <Squircle radius={90}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:cursor-pointer"
                >
                  <img
                    src={post.img || Image}
                    alt="Image Post"
                    className="relative w-96 h-full md:w-full md:2xl-h-52 object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </a>
                <div className="absolute top-5 right-8">
                  <Squircle radius={90}>
                    <span className="bg-primary w-[5000px] h-[500px] p-3 text-white text-xs font-semibold ">
                      {new Date(post.pubDate)
                        .toUTCString()
                        .split(" ")
                        .slice(0, 4)
                        .join(" ")}
                    </span>
                  </Squircle>
                </div>
              </Squircle>
              <div className="py-5 px-8 md:py-5 md:px-10">
                <ScrollAnimation duration={1} animateIn="fadeInRight">
                  <div className="separator h-1 w-1/2 px-20 bg-primary mb-3"></div>
                </ScrollAnimation>
                <Squircle className="bg-primary w-[25%] md:w-[20%]" radius={90}>
                  <span className="w-10 p-1 text-white ms-2 text-xs font-semibold line-clamp-1">
                    {post.categories[0] || "News"}
                  </span>
                </Squircle>

                <h3 className="title-animation text-2xl 2xl:text-3xl font-bold text-gray-900 mt-2 md:mt-5 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-700 md:mt-2 line-clamp-3">
                  {post.content}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Read more <ArrowRightIcon className="w-4 h-4 inline-block" />
                </a>
              </div>
            </div>
          </Squircle>
        </ScrollAnimation>
      ))}
    </div>
  );
}
