import React, { Component, useEffect, useRef, useState } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";
import Slide from "./Slide";
import Slider from "./Slider";
import userEvent from "@testing-library/user-event";

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
	// {
	// 	id: 3,
	// 	img: img4,
	// 	title: "title",
	// },
	// {
	// 	id: 4,
	// 	img: img5,
	// 	title: "title",
	// },
	// {
	// 	id: 5,
	// 	img: img6,
	// 	title: "title",
	// },
];

const ProgramCarousel = () => {
	const data = useRef(dt);
	const activeIndex = useRef(0);
	const id = useRef(0);

	const [state, setState] = useState({
		temp: [],
		transition: "none",
		activeIndex: 0,
		translate: 0,
		direction: 0,
	});
	const [width, setWidth] = useState(33);

	useEffect(() => {
		let len = data.current.length;
		let newTemp = [];
		let ind = len;
		for (let i = 0; i < 2; i++) {
			ind -= 1;
			if (Math.abs(ind) < 0) {
				ind = len - 1;
			}
			newTemp.push({ ...data.current[ind], id: id.current });
			id.current = id.current + 1;
		}
		for (let i = 0; i < 3; i++) {
			newTemp.push({ ...data.current[i % len], id: id.current });
			id.current = id.current + 1;
		}
		setState((state) => ({
			...state,
			temp: newTemp,
			transition: "transform ease-in-out 0.5s",
		}));
	}, []);

	useEffect(() => {
		if (state.transition === "none") {
			setState((state) => ({
				...state,
				transition: "transform ease-in-out 0.5s",
			}));
		}
	}, [state.transition]);

	// useEffect(() => {
	// 	setState({
	// 		...state,
	// 		transition: "transform ease-in-out 0.5s",
	// 	});
	// }, [state]);

	// this.state = {
	// 	currentIndex: 1,
	// 	indexOffset: windowWidth < 900 ? 0 : 1,
	// 	direction: 0,
	// 	temp: this.rotateRight(dt, 2),
	// 	transition: "transform ease-in-out 0.5s",
	// 	width: windowWidth < 900 ? 60 : 33,
	// 	offset: windowWidth < 900 ? -40.5 : 0,
	// };

	// handleWindowResize = () => {
	// 	if (window.innerWidth < 900) {
	// 		this.setState({
	// 			width: 60,
	// 			offset: -40.5,
	// 			indexOffset: 0,
	// 		});
	// 	} else {
	// 		this.setState({
	// 			width: 33,
	// 			offset: 0,
	// 			indexOffset: 1,
	// 		});
	// 	}
	// };

	const nextImg = () => {
		setState((state) => {
			return {
				...state,
				translate: 33,
				activeIndex: state.activeIndex + 1,
				direction: 1,
			};
		});
		// this.setState((state) => ({
		// currentIndex: state.currentIndex + 1,
		// direction: 1,
		// }));
	};

	const prevImg = () => {
		setState((state) => {
			return {
				...state,
				translate: -33,
				activeIndex: state.activeIndex - 1,
				direction: -1,
			};
		});
	};

	// componentDidMount() {
	// 	window.addEventListener("resize", this.handleWindowResize);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener("resize", this.handleWindowResize);
	// }

	const rotateLeft = (arr) => {
		let tempArr = [...arr];
		tempArr.shift();
		let newItem = data.current[(activeIndex.current + 3) % data.current.length];
		tempArr.push({ ...newItem, id: id.current });
		id.current = id.current + 1;
		if (id.current > 15) {
			id.current = 0;
		}
		activeIndex.current = activeIndex.current + 1;
		return tempArr;
	};

	const rotateRight = (arr, n = 1) => {
		let tempArr = [...arr];
		tempArr.pop();
		let ind = activeIndex.current - 3;
		if (ind < 0) {
			ind += data.current.length;
		}
		console.log(activeIndex.current, "ind ", ind);
		tempArr.unshift({ ...data.current[ind], id: id.current });
		id.current = id.current + 1;
		if (id.current > 15) {
			id.current = 0;
		}
		activeIndex.current = activeIndex.current - 1;
		if (activeIndex.current < 0) {
			activeIndex.current = data.current.length - 1;
		}
		return tempArr;
	};

	const onTransitionEnd = () => {
		if (state.direction === 1) {
			setState({
				...state,
				transition: "none",
				temp: rotateLeft(state.temp),
				activeIndex: 0,
				translate: 0,
				direction: 0,
			});
		} else if (state.direction === -1) {
			setState({
				...state,
				transition: "none",
				temp: rotateRight(state.temp),
				activeIndex: 0,
				translate: 0,
				direction: 0,
			});
		}
	};

	return (
		<div className="pro-car-main-div">
			<Slider
				images={state.temp}
				transition={state.transition}
				activeIndex={state.activeIndex + 1}
				translate={-state.translate}
				width={width}
				onTransitionEnd={onTransitionEnd}
			/>
			<div className="pro-car-nextBtn" onClick={nextImg}>
				&#8250;
			</div>
			<div className="pro-car-prevBtn" onClick={prevImg}>
				&#8249;
			</div>
		</div>
	);
};

export default ProgramCarousel;
