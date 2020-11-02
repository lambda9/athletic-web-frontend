import React, { Fragment } from "react";

const SelectOptions = React.memo(({ options }) => {
	console.log("oprions", options);
	return (
		<Fragment>
			{options.map((value, index) => {
				return (
					<option key={index} value={value[0]}>
						{value[1]}
					</option>
				);
			})}
		</Fragment>
	);
});

export default SelectOptions;
