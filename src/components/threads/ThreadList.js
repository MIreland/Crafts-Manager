import React from 'react';
import ThreadItem from './ThreadItem';

const ThreadList = ({ threads }) => {
	return (
		<div>
			{threads.map((thread, i) => {
				return <ThreadItem key={i} dmc={threads[i].dmc} color={threads[i].color} rgb={threads[i].rgb} />;
			})}
		</div>
	);
};

export default ThreadList;
