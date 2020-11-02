import React, { useEffect, useState } from "react";
import FreeTrialForm from "./FreeTrialForm";
import { useFetch } from "./hooks";

const FreeTrialFormContainer = () => {
	const { response, error, isLoading } = useFetch(
		"http://localhost:8000/free-trials/form/",
		null
	);

	const [state, setState] = useState({
		name: "",
		email: "",
		phone_number: "",
		age: 0,
		proposed_date: "2020-12-10",
		program: "",
		timing: "",
		gender: "",
	});

	const handleChange = (event) => {
		// console.log("handle cahnge", event);
		// const name = event.target.name;
		// const value = event.target.value;
		// setState((prevState) => ({
		// 	...prevState,
		// 	[name]: value,
		// }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", state);
	};

	return (
		<FreeTrialForm
			state={state}
			days_offered={4}
			is_service_active={6}
			onChange={handleChange}
			onSubmit={handleSubmit}
			choices={response}
		/>
	);
};

export default FreeTrialFormContainer;
