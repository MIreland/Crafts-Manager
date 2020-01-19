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
		</div>
	);
};

export default ThreadItem;
