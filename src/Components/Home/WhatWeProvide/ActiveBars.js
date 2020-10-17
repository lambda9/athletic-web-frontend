/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Bar = styled.p`
	background-color: ${(props) =>
		props.index === props.activeIndex ? "black" : "#d4d4d4"};
`;

const ActiveBars = ({ count, activeIndex, className }) => {
	const bars = [];
	for (let i = 0; i < count; i++) {
		bars.push(<Bar key={i} index={i} activeIndex={activeIndex} />);
	}
	return (
		<div
			className={className}
			css={css`
				display: flex;
				width: ${2 * count}rem;
				justify-content: space-between;
				padding: 1rem 0rem;
				margin: auto;
				& p {
					width: ${90 / count}%;
					margin: 0px;
					height: 0.3rem;
					border-radius: 1rem;
					transition: background-color ease-in-out 0.1s;
				}
			`}
		>
			{bars}
		</div>
	);
};

export default ActiveBars;
