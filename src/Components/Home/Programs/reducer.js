import { useEffect, useRef } from "react";
import { act } from "react-dom/test-utils";

const getWindow = (arr, middleIndex, offset) => {
	let startIndex = middleIndex - offset + 1;
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

export const init = (data) => {
	console.log("init called", data);
	return {
		currentIndex: 0,
		data: getWindow(data, 0, 2),
		transition: 0,
		activeIndex: 1,
		len: data.length,
		imageWidth: window.innerWidth < 900 ? 60 : 30,
		height: window.innerWidth < 900 ? 60 : 30,
	};
};

export const reducer = (state, action) => {
	console.log("action", action);
	switch (action.type) {
		case "next":
			return {
				...state,
				currentIndex: (state.currentIndex + 1) % state.len,
				transition: action.transitionDuration,
				activeIndex: state.activeIndex + 1,
			};

		case "prev":
			return {
				...state,
				currentIndex:
					state.currentIndex - 1 < 0 ? state.len - 1 : state.currentIndex - 1,
				transition: action.transitionDuration,
				activeIndex: state.activeIndex - 1,
			};

		case "update":
			return {
				...state,
				transition: 0,
				data: getWindow(action.data, state.currentIndex, 2),
				activeIndex: 1,
			};

		case "resize":
			return {
				...state,
				imageWidth: action.imageWidth,
				height: action.height,
			};

		default:
			throw new Error(`got unhandled action type "${action.type}"`);
	}
};

export const defaultState = {};

const useTimeout = (reset, duration, callback) => {
	const refTimer = useRef(null);
	useEffect(() => {
		refTimer.current = setTimeout(callback, duration);
		return () => {
			clearTimeout(refTimer.current);
		};
	}, [reset, duration, callback]);
};
