import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import bgImg from "../../Images/im4.jpg";
import GalleryCard from "../Gallery/GalleryCard";

class Gallery extends Component {
	render() {
		return (
			<div>
				<Hero bgImg={bgImg}>
					<Banner
						title="gallery"
						description="checkout our latest pics and moments"
					></Banner>
				</Hero>
				<GalleryCard images={[]} />
				<GalleryCard images={[]} />
				<GalleryCard images={[]} />
			</div>
		);
	}
}

export default Gallery;
