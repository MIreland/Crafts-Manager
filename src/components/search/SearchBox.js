import React from 'react';

const SearchBox = ({ searchfield, onSearchChange }) => {
	return (
		<div>
			<input onChange={onSearchChange} type="searcy" placeholder="search threads" />
		</div>
	);
};
export default SearchBox;
