/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";

const BMITableRow = (props) => {
	console.log(props);
	const { bmiLable, weightLable, active, activeColor } = props;
	const style = css`
		color: ${active ? activeColor : "black"};
		transform: scale(${active ? 1.3 : 1});
	`;
	return (
		<tr>
			<td css={style}>{bmiLable}</td>
			<td css={style} id="no-right-border">
				{weightLable}
			</td>
		</tr>
	);
};

export default BMITableRow;
