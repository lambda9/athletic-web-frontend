const getWindow = (arr, middleIndex, offset) => {
	let startIndex = middleIndex - offset;
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

export const reducer = (state, action) => {
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
				activeIndex: 2,
			};

		case "resize":
			return {
				...state,
				imageWidth: action.imageWidth,
				height: action.height,
			};

		default:
			throw new Error();
	}
};
