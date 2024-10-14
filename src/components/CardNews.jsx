import { getDataFromMedium } from "../hooks/getDataFromMedium";
import { ArrowRightIcon } from "../utils/icons";
import { Squircle } from "react-ios-corners";
import Image from "../assets/images/yellow_1.webp";
import ScrollAnimation from "react-animate-on-scroll";
import SquircleBox from "../assets/images/squircle_box.png";

export default function CardNews() {
  const isMobile = window.innerWidth < 768;

  const { posts, loading, error } = getDataFromMedium(
    "https://medium.com/feed/@RFLOnBase"
  );

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
            <div className="w-[320px] h-[400px] md:w-[350px] md:h-[450px] 2xl:w-[400px]  2xl:h-[500px] bg-white bg-opacity-40">
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
                    src={post.img || Image}
                    alt="Image Post"
                    className="relative h-1/2 w-full object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </a>
              </div>

              <div className="absolute bottom-0 py-5 px-7 2xl:py-5 2xl:px-10 w-full">
                <ScrollAnimation duration={1} animateIn="fadeInRight">
                  <div className="separator h-1 w-1/2 px-20 bg-primary mb-3"></div>
                </ScrollAnimation>
                <div className="flex justify-between items-center space-x-10">
                  <div className="w-1/2 text-dark text-xs font-semibold ">
                    <Squircle
                      className="w-full h-full bg-primary text-white text-xs font-semibold"
                      radius={90}
                    >
                      <p className="px-3 py-1 text-center">
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
                      <p className="px-3 py-1 text-center text-white">
                        {post.categories[0] || "News"}
                      </p>
                    </Squircle>
                  </div>
                </div>

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
