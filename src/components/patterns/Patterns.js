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
import watergarden2 from './images/watergarden2.jpg';
import cottageFairy from './images/cottageFairy.jpg';
import gypsy from './images/gypsy2.jpg';
import geranium from './images/geranium.jpg';
import unicorn from './images/unicorn2.png';

// moving it here means it isn't redeclared on each render.
// It also tends to make components easier to read.
const patterns = [
	{ image: dragonfly2, name: 'Dragonfly', by: 'Chatelaine' },
	{ image: portager2, name: 'Portager', by: 'Chatelaine' },
	{ image: hydrangea2, name: 'Hydrangea', by: 'Chatelaine' },
	{ image: hortager, name: 'Hortager', by: 'Chatelaine' },
	{ image: unicorn, name: 'Unicorn', by: 'other' },
	{ image: granada2, name: 'Granada', by: 'Chatelaine' },
	{ image: gothic, name: 'Gothic', by: 'Chatelaine' },
	{ image: herbularus2, name: 'Herbularus', by: 'Chatelaine' },
	{ image: hummingbird2, name: 'Hummingbird', by: 'Chatelaine' },
	{ image: miniTuscany, name: 'Mini Tuscany', by: 'Chatelaine' },
	{ image: mossGarden2, name: 'Moss Garden', by: 'Chatelaine' },
	{ image: watergarden2, name: 'Watergarden', by: 'Chatelaine' },
	{ image: geranium, name: 'Geranium', by: 'Mirabilia' },

	{ image: gypsy, name: 'Gypsy', by: 'Mirabilia' },
	{ image: cottageFairy, name: 'CottageFairy', by: 'Mirabilia' }
];

const Patterns = (props) => {

	return (
		<div style={threadCardStyle}>
			{patterns.map((pattern) => {
				// Oh you handled key properly here, great!
				return <PatternItem key={pattern.name} name={pattern.name} by={pattern.by} image={pattern.image} />;
			})}
		</div>
	);
};
const threadCardStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridGap: '1rem'
};
export default Patterns;
