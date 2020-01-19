import React from 'react';
import Threads from './Threads';

class Search extends React.Component {
	state = { dmc: '' };
	onFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};
	onChange = (e) => {
		this.setState({ text: e.target.value });
		console.log(this.state.text);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Thread.."
						value={this.state.text}
						onChange={this.onThreadChange}
					/>
				</form>
			</div>
		);
	}
}
export default Search;
