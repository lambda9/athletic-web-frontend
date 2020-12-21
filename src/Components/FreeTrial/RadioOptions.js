import { FormControlLabel, Radio } from "@material-ui/core";
import React, { Fragment } from "react";

const RadioOptions = ({ options, className }) => {
	return (
		<Fragment>
			{options.map((value, index) => {
				return (
					<FormControlLabel
						key={index}
						value={value[0]}
						control={<Radio />}
						label={value[1]}
						className={className}
					/>
				);
			})}
		</Fragment>
	);
};

export default RadioOptions;
