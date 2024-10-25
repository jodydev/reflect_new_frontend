import { getDataFromMedium } from "../hooks/getDataFromMedium";
import { useMemo, useState, useEffect } from "react";
import { ArrowRightIcon } from "../utils/icons";
import { Squircle } from "react-ios-corners";
import ScrollAnimation from "react-animate-on-scroll";
import SquircleBox from "../assets/images/squircle_box.png";
import axios from "axios";

export default function CardNews() {
  const isMobile = window.innerWidth < 768;

  const urls = useMemo(
    () => [
      "https://medium.com/feed/@RFLOnBase",
    ],
    []
  );

  const { posts, loading, error } = getDataFromMedium(urls);

//   const [postMirror, setPostMirror] = useState(null);
//   const [loadingMirror, setLoadingMirror] = useState(true);
//   const [errorMirror, setErrorMirror] = useState(null);
//   const digest = "TpAyBWKURrmafsXjANR1Gjn9Xqs_K2nV69xVT-XvLdA";

//   useEffect(() => {
//     const fetchLatestPost = async () => {
//         try {
//             const response = await axios.post('https://arweave.net/graphql', {
//                 query: `
//                 query GetMirrorTransactions($digest: String!) {
//                     transactions(tags: [
//                         { name: "App-Name", values: ["MirrorXYZ"] },
//                         { name: "Original-Content-Digest", values: [$digest] }
//                     ], sort: HEIGHT_DESC, first: 1) {
//                         edges {
//                             node {
//                                 id
//                             }
//                         }
//                     }
//                 }`,
//                 variables: {
//                     digest: digest, // Usa il digest qui
//                 },
//             });

//             console.log('Response:', response.data);

//             const latestTransaction = response.data.data.transactions.edges[0]?.node;

//             console.log('Latest transaction:', latestTransaction);  

//             if (latestTransaction) {
//                 const { id } = latestTransaction;
//                 const postDataResponse = await axios.get(`https://arweave.net/${id}`);
//                 console.log('Post data:', postDataResponse.data);
//                 setPostMirror(postDataResponse.data);
//             } else {
//                 setErrorMirror('Nessun post trovato.');
//             }
//         } catch (err) {
//             console.error('Error details:', err.response ? err.response.data : err.message);
//             setErrorMirror(err.message);
//         } finally {
//           setLoadingMirror(false);
//         }
//     };

//     fetchLatestPost();
// }, [digest]);

//   if (loadingMirror) return <div>Loading...</div>;
//   if (errorMirror) return <div>Errore: {errorMirror}</div>;

  return (
    <div
      id="card_news"
      className="flex flex-col md:flex-row gap-20 xl:gap-32 mx-10 mt-0 md:mt-0 2xl:mt-20 md:mx-0"
    >
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
            <div className="w-[320px] h-[420px] md:w-[350px] md:h-[450px] 2xl:w-[500px] 2xl:h-[600px] bg-white bg-opacity-40">
              <div
                className="news"
                style={{
                  maskImage: `url(${SquircleBox})`,
                }}
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:cursor-pointer p-0 m-0"
                >
                  <img
                    src={post.img}
                    alt="Image Post"
                    className="relative h-1/2 w-full object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </a>
              </div>

              <div className="absolute bottom-0 2xl:bottom-[10px] py-5 xl:py-8 px-7 2xl:px-10 w-full">
                <ScrollAnimation duration={1} animateIn="fadeInRight">
                  <div className="separator h-1 w-1/2 px-20 bg-primary mb-3"></div>
                </ScrollAnimation>
                <div className="flex justify-between items-center space-x-10">
                  <div className="w-1/2 text-dark text-xs font-semibold ">
                    <Squircle
                      className="w-full h-full bg-primary text-white text-xs font-semibold"
                      radius={90}
                    >
                      <p className="px-1 md:px-3 2xl:text-lg py-1 text-center">
                        {new Date(post.pubDate)
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                    </Squircle>
                  </div>

                  <div className="w-1/2 text-dark text-xs font-semibold ">
                    <Squircle
                      className="w-full h-full bg-dark text-xs font-semibold"
                      radius={90}
                    >
                      <p className="px-3 py-1 2xl:text-lg text-center text-white">
                        {post.categories[0] || "News"}
                      </p>
                    </Squircle>
                  </div>
                </div>

                <h3 className="text-2xl 2xl:text-3xl font-bold text-gray-900 mt-3 2xl:mt-5 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-700 md:my-2 2xl:text-lg line-clamp-3">
                  {post.content}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs 2xl:text-base text-primary"
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

// az43s8PjcZW5tEfhrYOXkVVJQ4uA4GeA7UTFPf5vUn8