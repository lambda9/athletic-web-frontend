/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "../../GlobalComponents/Slider/Slider";
import ResultCard from "./ResultCard";

const Results = () => {
	return (
		<div
			css={css`
				padding: 2rem 0rem;
			`}
		>
			<h2>Results</h2>
			<p>Transformations peoples gone through after joining athletic</p>
			<Slider smallScreen={1} mediumScreen={2} largeScreen={2}>
				<ResultCard />
				<ResultCard />
			</Slider>
		</div>
	);
};

export default Results;
