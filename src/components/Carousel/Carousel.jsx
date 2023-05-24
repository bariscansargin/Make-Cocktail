import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ coctailPhotos }) => {
  return (
    <div className="items-center justify-center p-12">
      <Slider {...carouselSettings}>
        {coctailPhotos.map((photosUrl) => {
          return (
            <div>
              <img src={photosUrl} className="m-auto" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
