/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const FeatureCard = React.memo(
	({ src, title, desc, children, className, refs }) => {
		return (
			<div ref={refs} className={className}>
				<img width={"100%"} src={src} alt={title}></img>
				<section
					css={css`
						padding: 1rem;
					`}
				>
					{children}
					<h4
						css={css`
							text-transform: capitalize;
						`}
					>
						{title}
					</h4>
					<p>{desc}</p>
				</section>
			</div>
		);
	}
);

export default FeatureCard;
