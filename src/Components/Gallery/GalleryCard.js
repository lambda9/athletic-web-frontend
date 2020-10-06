import React, { useState } from "react";
import ImageSlides from "./ImageSlides";
import img1 from "../../Images/im1.jpg";
import img2 from "../../Images/im2.jpg";
import img3 from "../../Images/im3.jpg";
import img4 from "../../Images/im4.jpg";
import img5 from "../../Images/im5.jpg";
import img6 from "../../Images/im6.jpg";
import "./Gallery.css";

const images = [img1, img4, img5, img1, img4, img5];

const GalleryCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const onImageSelected = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  return (
    <div className={"gallery-card-main-div"}>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <div className={"gallery-card-main-img-div"}>
        <div className={"gallery-card-hidden"}>
          <img src={images[currentIndex]} alt={"equipemt"} />
          <div className="gallery-card-img-overlay">
            <h4>Title</h4>
            <p>This is description of image</p>
          </div>
        </div>
        <div className={"gallery-card-visible"}>
          <img src={images[currentIndex]} alt={"equipemt"} />
          <div className="gallery-card-img-overlay">
            <h4>Title</h4>
            <p>This is description of image</p>
          </div>
        </div>
      </div>

      <ImageSlides
        images={images}
        currentIndex={currentIndex}
        onClick={onImageSelected}
      />
    </div>
  );
};

export default GalleryCard;
