/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const FeatureCard = React.memo(({ photo, title, description, children }) => {
	return (
		<div
			css={css`
				box-shadow: 0px 4px 4px #00000045;
				height: 100%;
				width: 90%;
				margin: auto;
				@media screen and (max-width: 500px) {
					width: 100%;
				}
			`}
		>
			<div>
				<img draggable={false} width={"100%"} src={photo} alt={title}></img>
				<section
					css={css`
						padding: 0.5rem;
						& * {
							margin-bottom: 0.5rem;
						}
					`}
				>
					<h4
						css={css`
							text-transform: capitalize;
						`}
					>
						{title}
					</h4>
					<p>{description}</p>
				</section>
			</div>
		</div>
	);
});

export default FeatureCard;
