import React from 'react';

const ThreadItem = (props) => {
	return (
		<div>
			<div className="ui cards">
				<div className="card" style={{ backgroundColor: `rgb(${props.rgb})` }}>
					<div className="content">
						<br />
						<button style={{ width: '70px', height: '50px' }} onClick={() => console.log('this selected')}>
							Select
						</button>
						<h1 style={{ color: 'black' }}>{props.dmc}</h1>

						<h2 style={{ fontFamily: 'Calibri', fontSize: '20px' }}>{props.color}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreadItem;
