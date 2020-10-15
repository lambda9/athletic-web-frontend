/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";

const BMITableRow = ({
	bmiLable,
	weightLable,
	active,
	activeColor = "red",
	className,
}) => {
	const style = css`
		color: ${active ? activeColor : "black"};
		transform: scale(${active ? 1.3 : 1});
	`;
	return (
		<tr className={className}>
			<td css={style}>{bmiLable}</td>
			<td css={style}>{weightLable}</td>
		</tr>
	);
};

export default BMITableRow;
