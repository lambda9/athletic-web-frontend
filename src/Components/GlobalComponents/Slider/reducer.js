export const actionTypes = {
	dragStart: "DRAG_START",
	dragMove: "DRAG_MOVE",
	dragEnd: "DRAG_END",
	resize: "RESIZE",
	transitionEnd: "TRANSITION_END",
	init: "INIT",
	select: "SELECT",
};

export const sliderReducer = (state, action) => {
	let translateThresold = 10;
	let interactionDurationThresold = 250;

	switch (action.type) {
		case actionTypes.dragStart: {
			const { timeStamp, x } = action.payload;
			return {
				...state,
				startTime: timeStamp,
				startX: x,
				isDragging: true,
			};
		}

		case actionTypes.dragMove: {
			return {
				...state,
				translate: action.x - state.startX,
			};
		}

		case actionTypes.dragEnd: {
			let endTime = action.timeStamp;
			let nextIndex = state.index;
			let absTranslate = Math.abs(state.translate);
			if (state.translate < 0 && state.index < state.bars - 1) {
				if (
					(absTranslate > translateThresold &&
						endTime - state.startTime < interactionDurationThresold) ||
					absTranslate > action.width / 3
				) {
					nextIndex = state.index + 1;
				}
			} else if (state.translate >= 0 && state.index > 0) {
				if (
					(absTranslate > translateThresold &&
						endTime - state.startTime < interactionDurationThresold) ||
					absTranslate > action.width / 3
				) {
					nextIndex = state.index - 1;
				}
			}
			return {
				...state,
				startX: 0,
				startTime: 0,
				translate: 0,
				transitionDuration: 0.2,
				index: nextIndex,
				isDragging: false,
			};
		}

		case actionTypes.resize: {
			let bars = 0;
			if (action.windowWidth < 600) {
				bars = Math.ceil(state.cardCount / state.smallScreenCardCount);
			} else if (action.windowWidth < 900) {
				bars = Math.ceil(state.cardCount / state.mediumScreenCardCount);
			} else {
				bars = Math.ceil(state.cardCount / state.largeScreenCardCount);
			}
			return {
				...state,
				width: action.width,
				bars: bars,
				index: 0,
			};
		}

		case actionTypes.init: {
			let bars = 0;
			if (action.windowWidth < 600) {
				bars = Math.ceil(action.cardCount / action.smallScreenCardCount);
			} else if (action.windowWidth < 900) {
				bars = Math.ceil(action.cardCount / action.mediumScreenCardCount);
			} else {
				bars = Math.ceil(action.cardCount / action.largeScreenCardCount);
			}
			return {
				...state,
				bars: bars,
				width: action.width,
				smallScreenCardCount: action.smallScreenCardCount,
				mediumScreenCardCount: action.mediumScreenCardCount,
				largeScreenCardCount: action.largeScreenCardCount,
				cardCount: action.cardCount,
			};
		}

		case actionTypes.transitionEnd: {
			return {
				...state,
				transitionDuration: 0,
			};
		}

		case actionTypes.select: {
			return {
				...state,
				index: action.index,
			};
		}
		default: {
			throw new Error(`unhandled action type ${action.type}`);
		}
	}
};

export const defaultSliderState = {
	startX: 0,
	startTime: 0,
	translate: 0,
	transitionDuration: 0,
	index: 0,
	isDragging: false,
	smallScreenCardCount: 1,
	mediumScreenCardCount: 2,
	largeScreenCardCount: 3,
	cardCount: 6,
	bars: 0,
};
