/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Bar = styled.p`
	cursor: pointer;
	background-color: ${(props) =>
		props.index === props.activeIndex ? "black" : "#d0d0d0"};
`;

const ActiveBars = ({ count, activeIndex, className, onClick }) => {
	const bars = [];
	for (let i = 0; i < count; i++) {
		bars.push(
			<Bar
				onClick={() => onClick(i)}
				key={i}
				index={i}
				activeIndex={activeIndex}
			/>
		);
	}
	return (
		<div
			className={className}
			css={css`
				display: flex;
				width: ${2.5 * count}rem;
				justify-content: space-between;
				padding: 1rem 0rem;
				margin: auto;
				& p {
					width: ${90 / count}%;
					margin: 0px;
					height: 0.35rem;
					border-radius: 1rem;
					transition: background-color ease-in-out 0.3s;
					/* border: 1px solid white; */
				}
			`}
		>
			{bars}
		</div>
	);
};

export default ActiveBars;
