import React from 'react';

// import cottageFairy from './images/cottageFairy.jpg';
// import fairyFlora from './images/fairyFlora.jpg';
// import midsummerNightsFairy from './images/midsummerNightsFairy.jpg';
// import gypsyQueen from './images/gypsyQueen.jpg';
import gypsy from './images/gypsy2.jpg';
import geranium from './images/geranium.jpg';
import unicorn from './images/unicorn2.png';

const OtherPatterns = (props) => {
	let patterns = [ geranium, unicorn, gypsy ];
	var patternList = patterns.map(function(pattern) {
		return (
			<img
				src={pattern}
				key={pattern}
				style={{ height: '15%', width: '15%', border: '5px solid darkgrey' }}
				alt="pattern"
			/>
		);
	});
	return patternList;
};
export default OtherPatterns;
