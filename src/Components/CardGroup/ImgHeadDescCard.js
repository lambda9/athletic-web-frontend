import React from "react";
import HeadDescBorderCard from "./HeadDescBorderCard";

function ImgHeadDescCard(props) {
  const { ptImg, heading, description } = props;
  return (
    <div className="img-head-card" style={props.styleProp}>
      <div className="img-head-card-img-div" style={props.styleImgDiv}>
        <img src={ptImg}></img>
      </div>
      <HeadDescBorderCard
        heading={heading}
        description={description}
        styleProp={{ border: "none", margin: "0 auto", maxWidth: "96%" }}
      />
    </div>
  );
}

export default ImgHeadDescCard;
