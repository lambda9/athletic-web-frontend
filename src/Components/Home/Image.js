/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Image = React.memo(({ src, className, id }) => {
  console.log("image render", id);
	return <img src={src} className={className} />;
});

export default Image;
