import React from 'react';
import PatternItem from './PatternItem';
import cottageFairy from './images/cottageFairy.jpg';
import gypsy from './images/gypsy2.jpg';
import geranium from './images/geranium.jpg';
import unicorn from './images/unicorn2.png';

const OtherPatterns = (props) => {
	let patterns = [
		{ image: geranium, name: 'Geranium', by: 'Mirabilia' },
		{ image: unicorn, name: 'Unicorn', by: 'other' },
		{ image: gypsy, name: 'Gypsy', by: 'Mirabilia' },
		{ image: cottageFairy, name: 'CottageFairy', by: 'Mirabilia' }
	];
	return (
		<div style={threadCardStyle}>
			{patterns.map((pattern) => {
				return <PatternItem key={pattern.name} name={pattern.name} by={pattern.by} image={pattern.image} />;
			})}
		</div>
	);
};

const threadCardStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 5fr)',
	gridGap: '1rem'
};
export default OtherPatterns;
