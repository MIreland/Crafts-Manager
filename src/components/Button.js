import React from 'react';
import ThreadContext from '../context/ThreadContext';

class Button extends React.Component {
	static contextType = ThreadContext;

	render() {
		console.log(this.context);
		return <button className="ui button primary">Submit</button>;
	}
}

export default Button;
