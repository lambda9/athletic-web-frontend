/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const ErrorDiv = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Error = ({ name, desc }) => {
	return (
		<ErrorDiv>
			<div css={{ textTransform: "capitalize" }}>{name}</div>
			<div css={{ textTransform: "capitalize" }}>{desc}</div>
		</ErrorDiv>
	);
};

export default Error;
