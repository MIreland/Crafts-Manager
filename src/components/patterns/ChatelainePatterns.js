import React from 'react';
import PatternItem from './PatternItem';

import dragonfly2 from './images/dragonfly2.jpg';
import gothic from './images/gothic.jpg';
import granada2 from './images/granada2.jpg';
import herbularus2 from './images/herbularus2.jpg';
import hortager from './images/hortager.jpg';
import hummingbird2 from './images/hummingbird2.jpg';
import hydrangea2 from './images/hydrangea2.jpg';
import miniTuscany from './images/miniTuscany.jpg';
import mossGarden2 from './images/mossGarden2.jpg';
import portager2 from './images/portager2.jpg';
// import rainforest from './images/rainforest.jpg';
import watergarden2 from './images/watergarden2.jpg';

const ChatelainePatterns = (props) => {
	let patterns = [
		{ image: dragonfly2, name: 'Dragonfly', by: 'Chatelaine' },
		{ image: granada2, name: 'Granada', by: 'Chatelaine' },
		{ image: gothic, name: 'Gothic', by: 'Chatelaine' },
		{ image: herbularus2, name: 'Herbularus', by: 'Chatelaine' },
		{ image: hummingbird2, name: 'Hummingbird', by: 'Chatelaine' },
		{ image: miniTuscany, name: 'Mini Tuscany', by: 'Chatelaine' },
		{ image: mossGarden2, name: 'Moss Garden', by: 'Chatelaine' },
		{ image: portager2, name: 'Portager', by: 'Chatelaine' },
		{ image: watergarden2, name: 'Watergarden', by: 'Chatelaine' },
		{ image: hortager, name: 'Hortager', by: 'Chatelaine' },
		{ image: hydrangea2, name: 'Hydrangea', by: 'Chatelaine' }
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
export default ChatelainePatterns;

// {
// 	/* <img src={mossGarden2} style={{ height: '70%', width: '70%' }} alt="Moss Garden" />; //{' '}
// 		<img src={watergarden2} style={{ height: '70%', width: '70%' }} alt="Water Garden" />; //{' '}
// 		<img src={portager2} style={{ height: '70%', width: '70%' }} alt="Portager" />; //{' '}
// 		<img src={hummingbird2} style={{ height: '70%', width: '70%' }} alt="Hummingbird" />; //{' '}
// 		<img src={miniTuscany} style={{ height: '70%', width: '70%' }} alt="Mini Tuscany" />; //{' '}
// 		<img src={granada2} style={{ height: '70%', width: '70%' }} alt="Granada" />; */
// }
