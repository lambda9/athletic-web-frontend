import React, { useState } from "react";

import Image from "./Image";
import "./Gallery.css";

import img1 from "../../Images/im1.jpg";
import img2 from "../../Images/im2.jpg";
import img3 from "../../Images/im3.jpg";
import img4 from "../../Images/im4.jpg";
import img5 from "../../Images/im5.jpg";
import img6 from "../../Images/im6.jpg";

const images = [img1, img4, img5, img1, img4, img5];

const GalleryCard = () => {
	// return <div>hello</div>;

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className={"gallery-main-container"}>
			<h3>Equipments</h3>
			<div className={"images-container"}>
				<div className={"main-img-window"}>
					<div
						className={"main-img-slides"}
						style={{
							// backgroundColor: "black",
							transform: `translateX(${-currentIndex * 40}vw)`,
						}}
					>
						{images.map((value, index) => {
							return (
								<Image key={index} width={"40vw"} height={"30vw"} src={value} />
							);
						})}
					</div>
				</div>
				<div className="thumbnail-window">
					<div className={"thumbnail-slides"}>
						{images.map((value, index) => {
							return (
								<Image
									onClick={() => {
										console.log("yes cliked");
										setCurrentIndex(index);
									}}
									active={currentIndex === index}
									key={index}
									width={"10vw"}
									height={"7.5vw"}
									src={value}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div>Controls</div>
		</div>
	);
};

export default GalleryCard;
