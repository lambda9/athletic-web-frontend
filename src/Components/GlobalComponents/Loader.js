import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Loader = (api, Content) => {
	const [isLoading, setLoading] = useState(false);
	return isLoading ? <LoadingSpinner /> : <Content />;
};

export default Loader;
