import React, { useEffect, useState } from "react";

const BlenderImage = ({ newImage }) => {
  const [classes, setClasses] = useState(["", ""]);
  const [prevImage, setPrevImage] = useState(null);
  const [transition, setTransition] = useState("none");
  setClasses(["gallery-card-hidden", "gallery-card-visible"]);
  setTransition("none");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClasses(["gallery-card-visible", "gallery-card-hidden"]);
      setTransition("opacity ease-in-out 1s");
    });
    return () => {
      clearTimeout(timeout);
    };
  }, [newImage]);

  const getPrevContainer = (prevImage) => {
    if (prevImage !== null) {
      return (
        <div
          className={classes[1]}
          style={{
            transition: transition,
          }}
        >
          <img src={prevImage} alt={"equipemt"} width={"60%"} />
          <div className="gallery-card-img-overlay">
            <h4>Title</h4>
            <p>This is description of image</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="blender-image">
      <div
        className={classes[0]}
        style={{
          transition: transition,
        }}
        onTransitionEnd={() => {
          setPrevImage(newImage);
        }}
      >
        <img src={newImage} alt={"equipemt"} width={"60%"} />
        <div className="gallery-card-img-overlay">
          <h4>Title</h4>
          <p>This is description of image</p>
        </div>
      </div>
      {getPrevContainer(prevImage)}
    </div>
  );
};

export default BlenderImage;
