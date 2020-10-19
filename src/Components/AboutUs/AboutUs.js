import React from "react";
import "./AboutUs.css";
import Hero from "../GlobalComponents/Hero";
import AboutUsBg from "./AboutUsBg";
import OurStoryCard from "./OurStoryCard";
import img1 from "../../Images/im20.jpg";
import img2 from "../../Images/im21.jpg";
import img3 from "../../Images/im10.jpg";
import backDropImg from "../../Images/im5.jpg";
import OurValues from "./OurValues";
import Title from "../GlobalComponents/Title/Title";
import OurTeam from "./OurTeam";

const desc =
	" We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind.";

function AboutUs() {
	const ourStoryCard = [
		{
			id: 1,
			img: img1,
			title: "Our Story",
			descrition: desc,
			inverted: false,
			right: "fade-right",
		},
		{
			id: 2,
			img: img2,
			title: "What we do",
			descrition: desc,
			inverted: true,
			right: "fade-left",
		},
		{
			id: 3,
			img: img3,
			title: "our culture",
			descrition: desc,
			inverted: false,
			right: "fade-right",
		},
	];

	return (
		<div className="about-page">
			<Hero bgImg={backDropImg} title="About Us" />

			<div className="about-bg">
				<AboutUsBg />
			</div>

			<div className="about-content">
				{ourStoryCard.map((item) => {
					return (
						<OurStoryCard
							key={item.id}
							img={item.img}
							title={item.title}
							description={item.descrition}
							inverted={item.inverted}
							right={item.right}
						/>
					);
				})}
			</div>
			<OurValues />
			<div
				className="about-our-team-title"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Title>our team</Title>
			</div>

			<OurTeam />
		</div>
	);
}

export default AboutUs;
