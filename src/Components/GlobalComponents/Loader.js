import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

const Loader = (api, Content, props) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		axios
			.get(api, { timeout: 1000 })
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
				console.log(err.request, err.message);
			});
	}, [api]);
	return isLoading ? (
		<LoadingSpinner />
	) : (
		<Content data={data} error={error} {...props} />
	);
};

export default Loader;

export const getLoadable = (api, content) => {
	return Loader(api, content);
};
