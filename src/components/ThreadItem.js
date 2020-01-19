import React from 'react';

const ThreadItem = (props) => {
	const { dmc, color, rgb } = props.thread;

	return (
		<div>
			<div className="ui cards">
				<div className="card" style={{ backgroundColor: `rgb(${rgb})` }}>
					<div className="content">
						<br />
						<div className="header">{dmc}</div>
						<div className="meta" style={{ fontFamily: 'Calibri', fontSize: '20px' }}>
							{color}
						</div>
					</div>
				</div>
			</div>
			{/* <h2>{dmc}</h2>
			<h3>{color}</h3>
			<h5>{rgb}</h5>
			{/* <a href={html_url} className="btn btn-dark btn=sm my-1">
					More
				</a> */}
		</div>
	);
};

export default ThreadItem;
