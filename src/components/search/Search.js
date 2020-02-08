import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}
	onFormSubmit = (event) => {
		event.preventDefault(); //Will prevent form from being submitted automatically and thus refresh page
		console.log(this.state.term);
		this.props.onSubmit(this.state.term);
	};
	//Using state makes this a controlled element

	render() {
		return (
			<div>
				<form>					
					<input
						type="text"
						name="text"
						placeholder="Search Thread.."
						value={this.state.term}
						onChange={(event) => this.setState({ term: event.target.value })}
					/>
				</form>
			</div>
		);
	}
}
export default Search;
