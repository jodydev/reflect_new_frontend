import { getDataFromMedium } from "../hooks/getDataFromMedium";
import { ArrowRightIcon } from "../utils/icons";
import { Squircle } from "react-ios-corners";
import Image from "../assets/images/yellow_1.webp";
import ScrollAnimation from "react-animate-on-scroll";

export default function CardNews() {
  const isMobile = window.innerWidth < 768;

  const { posts, loading, error } = getDataFromMedium("https://medium.com/feed/@RFLOnBase");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

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
            <div className=" w-[320px] h-[400px] md:w-[350px] md:h-[450px] 2xl:w-[400px]  2xl:h-[500px] bg-white bg-opacity-40">
              <div className="news">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:cursor-pointer"
                >
                  <img
                    src={post.img || Image}
                    alt="Image Post"
                    className="relative w-96 h-1/2 md:w-full md:2xl-h-52 object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
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
              </div>

              <div className="absolute bottom-0 py-5 px-7 2xl:py-5 2xl:px-10 w-full">
                <ScrollAnimation duration={1} animateIn="fadeInRight">
                  <div className="separator h-1 w-1/2 px-20 bg-primary mb-3"></div>
                </ScrollAnimation>
                <Squircle className="bg-primary w-[25%] md:w-[20%]" radius={90}>
                  <span className="w-10 p-1 text-white ms-2 text-xs font-semibold line-clamp-1">
                    {post.categories[0] || "News"}
                  </span>
                </Squircle>

                <h3 className="title-animation text-2xl 2xl:text-3xl font-bold text-gray-900 mt-3 2xl:mt-5 line-clamp-1">
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
