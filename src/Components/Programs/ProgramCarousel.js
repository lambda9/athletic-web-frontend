import React, { Component } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";
import Slide from "./Slide";

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
		let width = window.innerWidth;
		console.log(width);
		this.state = {
			count: width < 900 ? 1 : 2,
			currentIndex: width < 550 ? 1 : 2,
			direction: 0,
			temp: dt,
			transition: "none",
			width: width < 900 ? 90 : 30,
		};
	}

	handleWindowResize = () => {
		if (window.innerWidth < 900) {
			this.setState({
				count: 1,
				width: 90,
			});
		} else {
			this.setState({
				count: 2,
				width: 30,
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
		this.setState((state) => {
			return {
				temp: this.rotateRight(state.temp, 2),
			};
		});
		setTimeout(this.updateTransition);
	}

	updateTransition = () => {
		this.setState({
			transition: "transform ease-in-out 0.5s",
		});
	};

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
			currentIndex: 2,
			transition: "none",
		});
		setTimeout(this.updateTransition);
	};

	render() {
		return (
			<div className="pro-car-main-div">
				<div
					className="pro-car-img-div"
					style={{
						transition: this.state.transition,
						transform: `translateX(${
							-this.state.currentIndex * this.state.width
						}vw)`,
					}}
					onTransitionEnd={this.onTransitionEnd}
				>
					{this.state.temp.map((item, index) => {
						return (
							<Slide
								key={item.img}
								item={item}
								width={`${this.state.width}vw`}
								active={
									index === this.state.currentIndex + (this.state.count - 1)
								}
							/>
						);
					})}
				</div>
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
