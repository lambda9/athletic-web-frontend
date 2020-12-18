/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const anim = keyframes`
  0% { transform:  rotate(0deg); }
  100% { transform:  rotate(360deg); }
`;

const OuterDiv = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;
`;

const Spinner = styled.div`
	border: 0.5em solid #f3f3f3;
	border-top: 0.5em solid var(--primaryColor);
	border-radius: 50%;
	width: 5em;
	height: 5em;
	animation: ${anim} 1.5s cubic-bezier(0.47, 0.02, 0.62, 0.97) infinite; ;
`;

const LoadingSpinner = () => {
	return (
		<OuterDiv>
			<Spinner />
		</OuterDiv>
	);
};

export default LoadingSpinner;
