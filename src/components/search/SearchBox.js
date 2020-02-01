import React from 'react';

const SearchBox = ({ searchfield, onSearchChange }) => {
	return (
		<div>
			<input onChange={onSearchChange} type="search" placeholder="search threads" />
		</div>
	);
};
export default SearchBox;
