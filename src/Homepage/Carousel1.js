import React, { useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";

import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from "reactstrap";

const items = [
	{
		src: img1,
		altText: "Slide 1",
		caption: "Slide 1",
	},
	{
		src: img2,
		altText: "Slide 2",
		caption: "Slide 2",
	},
	{
		src: img3,
		altText: "Slide 3",
		caption: "Slide 3",
	},
];

const Carousel1 = (props) => {
	return <Carousel />;
};

export default Carousel1;
