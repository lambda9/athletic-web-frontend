export const sliderReducer = (state, dispatch) => {
	let translateThresold = 10;
	let interactionDurationThresold = 250;

	switch (dispatch.type) {
		case "dragstart": {
			return {
				...state,
				startTime: dispatch.timeStamp,
				startX: dispatch.x,
				isDragging: true,
			};
		}

		case "dragmove": {
			return {
				...state,
				translate: dispatch.x - state.startX,
			};
		}

		case "dragend": {
			let endTime = dispatch.timeStamp;
			let nextIndex = state.index;
			let absTranslate = Math.abs(state.translate);
			if (state.translate < 0 && state.index < state.bars - 1) {
				if (
					(absTranslate > translateThresold &&
						endTime - state.startTime < interactionDurationThresold) ||
					absTranslate > dispatch.width / 3
				) {
					nextIndex = state.index + 1;
				}
			} else if (state.translate >= 0 && state.index > 0) {
				if (
					(absTranslate > translateThresold &&
						endTime - state.startTime < interactionDurationThresold) ||
					absTranslate > dispatch.width / 3
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

		case "resize": {
			let bars = 0;
			if (dispatch.windowWidth < 600) {
				bars = Math.ceil(state.cardCount / state.smallScreenCardCount);
			} else if (dispatch.windowWidth < 900) {
				bars = Math.ceil(state.cardCount / state.mediumScreenCardCount);
			} else {
				bars = Math.ceil(state.cardCount / state.largeScreenCardCount);
			}
			return {
				...state,
				width: dispatch.width,
				bars: bars,
				index: 0,
			};
		}

		case "init": {
			console.log("init");
			let bars = 0;
			if (dispatch.windowWidth < 600) {
				bars = Math.ceil(dispatch.cardCount / dispatch.smallScreenCardCount);
			} else if (dispatch.windowWidth < 900) {
				bars = Math.ceil(dispatch.cardCount / dispatch.mediumScreenCardCount);
			} else {
				bars = Math.ceil(dispatch.cardCount / dispatch.largeScreenCardCount);
			}
			return {
				...state,
				bars: bars,
				width: dispatch.width,
				smallScreenCardCount: dispatch.smallScreenCardCount,
				mediumScreenCardCount: dispatch.mediumScreenCardCount,
				largeScreenCardCount: dispatch.largeScreenCardCount,
				cardCount: dispatch.cardCount,
			};
		}

		case "transitionend": {
			console.log("trans emd");
			return {
				...state,
				transitionDuration: 0,
			};
		}

		case "select": {
			return {
				...state,
				index: dispatch.index,
			};
		}
		default: {
			throw new Error();
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
