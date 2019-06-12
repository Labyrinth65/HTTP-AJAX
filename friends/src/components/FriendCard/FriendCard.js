import React from "react";

const FriendCard = props => {
	console.log(props);
	return (
		<div className="friendCard">
			<div className="cardElement">{props.name}</div>
			<div className="cardElement">{props.age}</div>
			<div className="cardElement">{props.email}</div>
		</div>
	);
};

export default FriendCard;
