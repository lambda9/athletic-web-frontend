/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FeatureCard = ({ src, title, desc, children, className }) => {
	return (
		<div className={className}>
			<img width={"100%"} src={src} alt={title}></img>
			<section
				css={css`
					padding: 1rem;
				`}
			>
				{children}
				<h4>{title}</h4>
				<p>{desc}</p>
			</section>
		</div>
	);
};

export default FeatureCard;
