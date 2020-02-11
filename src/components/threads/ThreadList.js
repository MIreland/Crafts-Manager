import React from 'react';
import ThreadItem from './ThreadItem';

const ThreadList = ({ threads }) => {
	return (
		// We can use React.Fragment to reduce the amount of stray `divs` floating around
		<React.Fragment>
			{threads.map((thread, i) => {
				return <ThreadItem key={i} dmc={threads[i].dmc} color={threads[i].color} rgb={threads[i].rgb} />;
			})}
		</React.Fragment>
	);
};

export default ThreadList;
