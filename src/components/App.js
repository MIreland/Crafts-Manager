import React from 'react';
import DmcList from './threads/DmcList';
import Patterns from './patterns/Patterns';
import SearchBox from './search/SearchBox';
import Counter from './Counter';

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
		// const { threads, searchfield } = this.state;
		// const filteredThreads = threads.filter((thread) => {
		// 	return threads.color.toLowerCase().includes(searchfield.toLowerCase());
		// });

		return (
			<div style={{ margin: '10px' }}>
				<Counter />
				<div style={{ textAlign: 'center', padding: '20px' }}>
					<SearchBox onSearchChange={this.onSearchChange} />
					<span> Your thread is: {this.state.searchfield}</span>
				</div>
				{/* <ThreadList threads={filteredThreads} /> */}
				<DmcList />
				<br />
				<Patterns />
			</div>
		);
	}
}
export default App;
