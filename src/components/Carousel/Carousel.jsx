import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ photoArray }) => {
  return (
    <div className="flex justify-center items-center w-2/3 h-72 h-auto mt-32 mb-16 rounded-md">
      <Carousel
        showArrows={true}
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        showStatus={false}
      >
        {photoArray.map((photoUrl, idx) => {
          return (
            <div key={idx} className="flex">
              <img
                src={photoUrl[0]}
                alt="Carousel 1"
                className="w-auto h-72 rounded-lg ml-2 mr-2"
              />
              <img
                src={photoUrl[1]}
                alt="Carousel 1"
                className="w-auto h-72 rounded-lg ml-2 mr-2"
              />
              <img
                src={photoUrl[2]}
                alt="Carousel 1"
                className="w-auto h-72 rounded-lg ml-2 mr-2"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
