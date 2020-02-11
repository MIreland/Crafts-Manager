import React from 'react';
import ThreadItem from './ThreadItem';

// I highly recommend using destructuring in your props for readability
const SearchedThread = ({filteredThreads}) => {
	let threads = filteredThreads.map((thread, i) => {
		return <ThreadItem key={i} dmc={thread.dmc} color={thread.color} rgb={thread.rgb} />;
	});
	return <div>{threads}</div>;
};

export default SearchedThread;
