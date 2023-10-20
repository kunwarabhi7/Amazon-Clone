"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CarouselComponents = () => {
  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        <div>
          <Image priority src={image1} alt="Carousel" />
        </div>
        <div>
          <Image src={image2} alt="Carousel" />
        </div>
        <div>
          <Image src={image3} alt="Carousel" />
        </div>
        <div>
          <Image src={image4} alt="Carousel" />
        </div>
        <div>
          <Image src={image5} alt="Carousel" />
        </div>
        <div>
          <Image src={image6} alt="Carousel" />
        </div>
        <div>
          <Image src={image7} alt="Carousel" />
        </div>
      </Carousel>
      <div className="absolute top-40 right-0">
        <AiOutlineRight size={70} />
      </div>
      <div className="absolute top-40 left-0">
        <AiOutlineLeft size={70} />
      </div>
      <div className="w-full h-40 bg-gradient-to-t from-gray-200 to-transparent absolute bottom-0 z-20" />
    </div>
  );
};

export default CarouselComponents;
