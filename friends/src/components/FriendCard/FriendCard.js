import React from "react";

const FriendCard = props => {
	console.log(props);
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.age}</div>
			<div>{props.email}</div>
		</div>
	);
};

export default FriendCard;
