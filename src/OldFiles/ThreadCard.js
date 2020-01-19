import React from 'react';

const ThreadCard = (props) => {
	return (
		<div className="ui card">
			<div className="content">
				<h3>{props.thread.color}</h3>
				<h5>{props.thread.dmc}</h5>
				<h5>{props.thread.rgb}</h5>
			</div>
		</div>
	);
};
$('.autumn.leaf').transition('horizontal flip');
export default ThreadCard;
