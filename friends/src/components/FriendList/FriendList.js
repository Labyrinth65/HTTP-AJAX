import React from "react";
import FriendCard from "../FriendCard/FriendCard";

const FriendList = props => {
	if (props.friends.length === 0) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="friendList">
			{props.friends.map(friend => (
				<FriendCard key={friend.id} {...friend} />
			))}
		</div>
	);
};

export default FriendList;
