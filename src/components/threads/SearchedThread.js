import React from 'react';
import ThreadItem from './ThreadItem';

const SearchedThread = (props) => {
	let threads = props.filteredThreads.map((thread, i) => {
		return <ThreadItem key={i} dmc={thread.dmc} color={thread.color} rgb={thread.rgb} />;
	});
	return <div>{threads}</div>;
};

export default SearchedThread;
