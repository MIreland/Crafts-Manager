import React from 'react';
import SearchBar from './components/SearchBar';
import Threads from './components/Threads';
import Search from './components/Search';
import './thread.css';
// import ChatelainePatterns from './components/ChatelainePatterns';
// import OtherPatterns from './components/OtherPatterns';

class App extends React.Component {
	render() {
		return (
			<div style={{ margin: '10px' }}>
				<SearchBar />
				<Search />
				<Threads />
			</div>
		);
	}
}

export default App;
