import React from 'react';

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
	let images = [
		dragonfly2,
		granada2,
		gothic,
		herbularus2,
		hortager,
		hummingbird2,
		hydrangea2,
		miniTuscany,
		mossGarden2,
		portager2,
		watergarden2
	];

	var imageList = images.map(function(image) {
		return (
			<img
				src={image}
				key={image}
				style={{ height: '20%', width: '20%', border: '1px solid darkgrey' }}
				alt="pattern"
			/>
		);
	});
	return imageList;
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
