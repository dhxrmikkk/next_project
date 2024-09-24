"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Loader from "@/utils/Loader";

const images = [
  {
    id: 1,
    src: "https://images.saymedia-content.com/.image/MTc2MjY3NjM4NTk3OTUyNjg1/best-nike-running-shoes-for-flat-feet.webp",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "/shoes2.png",
    alt: "Slide 2",
  },
  // { id: 3, src: "/slide-1.png", alt: "Slide 3" },
];

const HeroBanner = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/shop");
    }, 100);
  };

  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-[1px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          > 
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-[1px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {images.map((image) => (
          <div key={image.id} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover slider_img bg-center h-[1080px] max-h-[1080px]"
            />

            <div className="absolute xl:bottom-24 bottom-10">
              {loading ? (
                <div className="bg-white text-black md:px-6 md:py-3 p-2 text-[16px] w-[150px] min-w-[150px] h-[52px] min-h-[52px]">
                  <Loader size={25} color={"#101010"} />
                </div>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="bg-white text-black md:px-6 md:py-3 p-2 text-xl w-[150px] flex justify-center items-center"
                >
                  <span className="text-[16px]"> View More</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
