import React, { useEffect, useRef, useState } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";
import Slider from "./Slider";

const dt = [
	{
		id: 0,
		img: img1,
		title: "Cardio",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
	},
	{
		id: 1,
		img: img2,
		title: "Zumba",
		desc: "Are you increased weight and below bottom high five",
	},
	{
		id: 2,
		img: img3,
		title: "Yoga",
		desc: "Are you increased weight and below bottom high five",
	},
	{
		id: 3,
		img: img4,
		title: "Weight Loss",
		desc: "increase you weight loss in less than hour",
	},
	{
		id: 4,
		img: img5,
		title: "Weight Gain",
		desc: "did weight stop you from getting gf get here and we'll share",
	},
	{
		id: 5,
		img: img6,
		title: "Strength",
		desc: "increase stamina strength to by building a weight",
	},
];

const ProgramCarousel = ({
	data = dt,
	autoStart = true,
	transitionDelay,
	transitionDuration,
}) => {
	const currentIndex = useRef(0);

	const [state, setState] = useState({
		data: [],
		transition: 0,
		activeIndex: 2,
		direction: 0,
	});
	const [size, setSize] = useState({
		width: window.innerWidth < 900 ? 60 : 33,
		offset: window.innerWidth < 900 ? -40.5 : 0,
	});

	const handleResize = () => {
		if (window.innerWidth < 900) {
			setSize({
				width: 60,
				offset: -40.5,
			});
		} else {
			setSize({
				width: 33,
				offset: 0,
			});
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	useEffect(() => {
		if (autoStart && state.transition === 0) {
			const timeout = setTimeout(nextImg, transitionDelay);
			return () => {
				clearTimeout(timeout);
			};
		}
	}, [state.transition, autoStart, transitionDelay]);

	useEffect(() => {
		setState((state) => ({
			...state,
			data: getWindow(data, currentIndex.current, 2),
		}));
	}, [data]);

	useEffect(() => {
		if (state.direction === 1) {
			currentIndex.current = (currentIndex.current + 1) % data.length;
		} else if (state.direction === -1) {
			currentIndex.current = currentIndex.current - 1;
			if (currentIndex.current < 0) {
				currentIndex.current = data.length - 1;
			}
		}
	}, [state.direction, data]);

	const nextImg = () => {
		setState((state) => {
			return {
				...state,
				transition: transitionDuration,
				activeIndex: state.activeIndex + 1,
				direction: 1,
			};
		});
	};

	const prevImg = () => {
		setState((state) => {
			return {
				...state,
				activeIndex: state.activeIndex - 1,
				transition: transitionDuration,
				direction: -1,
			};
		});
	};

	const getWindow = (arr, middleIndex, offset) => {
		let startIndex = middleIndex - 2;
		if (startIndex < 0) {
			startIndex += arr.length;
		}
		let newArr = [];
		for (let i = 0; i < offset * 2 + 1; i++) {
			newArr.push(arr[startIndex]);
			startIndex = (startIndex + 1) % arr.length;
		}
		return newArr;
	};

	const onTransitionEnd = () => {
		setState({
			...state,
			transition: 0,
			data: getWindow(data, currentIndex.current, 2),
			activeIndex: 2,
			direction: 0,
		});
	};

	return (
		<div className="pro-car-main-div">
			<Slider
				images={state.data}
				transition={`transform ease-in-out ${state.transition / 1000}s`}
				activeIndex={state.activeIndex}
				translate={-(state.activeIndex - 1) * size.width + size.offset}
				width={size.width}
				onTransitionEnd={onTransitionEnd}
			/>
			<div
				className="pro-car-nextBtn"
				style={{
					display: autoStart ? "none" : "block",
				}}
				onClick={nextImg}
			>
				&#8250;
			</div>
			<div
				className="pro-car-prevBtn"
				style={{
					display: autoStart ? "none" : "block",
				}}
				onClick={prevImg}
			>
				&#8249;
			</div>
		</div>
	);
};

export default ProgramCarousel;
