const { useRef, useEffect } = require("react");

export const useTouchMouse = ({ onDragStart, onDragMove, onDragEnd }) => {
	const ref = useRef(null);
	useEffect(() => {
		let component = ref.current;
		const handleTouchStart = (e) => {
			let xCord = e.changedTouches[0].screenX;
			let timeStamp = e.timeStamp;
			onDragStart(xCord, timeStamp);
		};

		const handleTouchMove = (e) => {
			let xCord = e.changedTouches[0].screenX;
			onDragMove(xCord);
		};

		const handleTouchEnd = (e) => {
			let xCord = e.changedTouches[0].screenX;
			let timeStamp = e.timeStamp;
			onDragEnd(xCord, timeStamp);
		};
		component.addEventListener("touchstart", handleTouchStart, {
			passive: true,
		});
		component.addEventListener("touchmove", handleTouchMove, {
			passive: true,
		});
		component.addEventListener("touchend", handleTouchEnd, {
			passive: true,
		});
		return () => {
			component.removeEventListener("touchstart", handleTouchStart);
			component.removeEventListener("touchmove", handleTouchMove);
			component.removeEventListener("touchend", handleTouchEnd);
		};
	});
	return ref;
};
