import React from "react";
import Image from "./Image";

const ImageSlides = ({ images, onClick, currentIndex }) => {
  return (
    <div className="gallery-slides-main-div">
      <div className="gallery-slides-div">
        {images.map((value, index) => {
          return (
            <Image
              src={value}
              active={currentIndex === index}
              onClick={() => onClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlides;
