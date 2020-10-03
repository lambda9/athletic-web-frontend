import React, { Component } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";
import Slide from "./Slide";
import Slider from "./Slider";

const dt = [
	{
		id: 0,
		img: img1,
		title: "title",
	},
	{
		id: 1,
		img: img2,
		title: "title",
	},
	{
		id: 2,
		img: img3,
		title: "title",
	},
	{
		id: 3,
		img: img4,
		title: "title",
	},
	{
		id: 4,
		img: img5,
		title: "title",
	},
	{
		id: 5,
		img: img6,
		title: "title",
	},
];

class ProgramCarousel extends Component {
	constructor(props) {
		super();
		let windowWidth = window.innerWidth;
		this.state = {
			currentIndex: 1,
			indexOffset: windowWidth < 900 ? 0 : 1,
			direction: 0,
			temp: this.rotateRight(dt, 2),
			transition: "transform ease-in-out 0.5s",
			width: windowWidth < 900 ? 60 : 33,
			offset: windowWidth < 900 ? -40.5 : 0,
		};
	}

	handleWindowResize = () => {
		if (window.innerWidth < 900) {
			this.setState({
				width: 60,
				offset: -40.5,
				indexOffset: 0,
			});
		} else {
			this.setState({
				width: 33,
				offset: 0,
				indexOffset: 1,
			});
		}
	};

	nextImg = () => {
		this.setState((state) => ({
			currentIndex: state.currentIndex + 1,
			direction: 1,
		}));
	};

	prevImg = () => {
		this.setState((state) => ({
			currentIndex: state.currentIndex - 1,
			direction: -1,
		}));
	};

	componentDidMount() {
		window.addEventListener("resize", this.handleWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowResize);
	}

	rotateLeft = (arr) => {
		let tempArr = [...arr];
		let first = tempArr[0];
		tempArr.push(first);
		tempArr.shift();
		return tempArr;
	};

	rotateRight = (arr, n = 1) => {
		let tempArr = [...arr];
		for (let i = 0; i < n; i++) {
			tempArr.unshift(tempArr.pop());
		}
		return tempArr;
	};

	onTransitionEnd = () => {
		let newTemp;
		if (this.state.direction === 1) {
			newTemp = this.rotateLeft(this.state.temp);
		} else if (this.state.direction === -1) {
			newTemp = this.rotateRight(this.state.temp);
		}
		this.setState({
			temp: newTemp,
			direction: 0,
			currentIndex: 1,
		});
	};

	render() {
		return (
			<div className="pro-car-main-div">
				<Slider
					images={this.state.temp}
					animate={this.state.currentIndex !== 1}
					activeIndex={this.state.currentIndex + 1}
					translate={
						-this.state.currentIndex * this.state.width + this.state.offset
					}
					width={this.state.width}
					onTransitionEnd={this.onTransitionEnd}
				/>
				<div className="pro-car-nextBtn" onClick={this.nextImg}>
					&#8250;
				</div>
				<div className="pro-car-prevBtn" onClick={this.prevImg}>
					&#8249;
				</div>
			</div>
		);
	}
}

export default ProgramCarousel;
