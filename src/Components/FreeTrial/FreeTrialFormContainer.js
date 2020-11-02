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
		const name = event.target.name;
		const value = event.target.value;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		};
		fetch("http://localhost:8000/free-trials/requests/", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	if (!response) {
		return null;
	}

	return (
		<FreeTrialForm
			state={state}
			days_offered={4}
			is_service_active={6}
			onChange={handleChange}
			onSubmit={handleSubmit}
			choices={response.choices}
		/>
	);
};

export default FreeTrialFormContainer;
