import React from 'react';

const PatternItem = (props) => {
	return (
		<div style={{ border: '1px solid grey' }}>
			<h2>
				{props.name}
				<span style={{ fontSize: '18px' }}>{`  -  ${props.by}`}</span>
			</h2>
			<img src={props.image} style={{ height: '75%', width: '75%' }} alt="pattern" />
		</div>
	);
};

export default PatternItem;
