import React from 'react';
import SearchBar from './search/SearchBar';
// import Search from './Search';
import DmcList from './threads/DmcList';
import { threads } from './threads/threads';
import ThreadList from './threads/ThreadList';
// import OtherPatterns from './patterns/OtherPatterns';
// import ChatelainePatterns from './patterns/ChatelainePatterns';
import SearchBox from './search/SearchBox';
// import SearchedThread from './threads/SearchedThread';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			threads: [],
			searchfield: ''
		};
	}
	componentDidMount() {
		console.log('check');
	}
	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });
		console.log(e.target.value);
	};
	render() {
		const { threads, searchfield } = this.state;
		const filteredThreads = threads.filter((thread) => {
			return threads.color.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div style={{ margin: '10px' }}>
				<SearchBar />
				<div style={{ textAlign: 'center', padding: '20px' }}>
					<SearchBox onSearchChange={this.onSearchChange} />
					<span> Your thread is: {this.state.searchfield}</span>
				</div>
				{/* <SearchedThread filteredThreads={filteredThreads} />
				<ChatelainePatterns />
				<OtherPatterns /> */}
				<ThreadList threads={filteredThreads} />
				<DmcList />
			</div>
		);
	}
}
export default App;
