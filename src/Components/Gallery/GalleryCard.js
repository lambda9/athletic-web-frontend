import React from "react";

import Image from "./Image";
import "./Gallery.css";

const GalleryCard = ({ images }) => {
	// return <div>hello</div>;
	return (
		<div className={"gallery-main-container"}>
			<h3>Equipments</h3>
			<div className={"images-container"}>
				<div className={"main-img-window"}>
					<div className={"main-img-slides"}>
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
						<Image width={"100%"} height={"100%"} />
					</div>
				</div>
				<div className="thumbnail-window">
					<div className={"thumbnail-slides"}>
						<Image width={"10em"} height={"7.5em"} />
						<Image width={"10em"} height={"7.5em"} />
						<Image width={"10em"} height={"7.5em"} />
						<Image width={"10em"} height={"7.5em"} />
						<Image width={"10em"} height={"7.5em"} />
						<Image width={"10em"} height={"7.5em"} />
					</div>
				</div>
			</div>
			<div>Controls</div>
		</div>
	);
};

export default GalleryCard;
