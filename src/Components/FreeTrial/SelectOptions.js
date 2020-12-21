import React, { Fragment } from "react";

const SelectOptions = React.memo(({ options }) => {
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
