import React, { useEffect, useState } from "react";
import FreeTrialForm from "./FreeTrialForm";
import { useFetch } from "./hooks";

const FreeTrialFormContainer = ({ days_offered, data, error }) => {
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

	return (
		<FreeTrialForm
			state={state}
			days_offered={days_offered}
			is_service_active={6}
			onChange={handleChange}
			onSubmit={handleSubmit}
			choices={data.choices}
			isLoading={false}
		/>
	);
};

export default FreeTrialFormContainer;
