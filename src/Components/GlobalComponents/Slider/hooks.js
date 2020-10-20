const { useRef, useEffect } = require("react");

export const useTouch = () => {
	const ref = useRef(null);
	useEffect(() => {}, []);
	return ref;
};
