import React from 'react';

// Here's an example of destructuring props
const PatternItem = ({name, image, by}) => {
	return (
		<div style={{ border: '1px solid grey' }}>
			<h2>
				{name}
				<span style={{ fontSize: '18px' }}>{`  -  ${by}`}</span>
			</h2>
			<img src={image} style={{ height: '90%', width: '90%' }} alt="pattern" />
		</div>
	);
};

export default PatternItem;
