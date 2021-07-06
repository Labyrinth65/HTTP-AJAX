import React from "react";
import FriendCard from "../FriendCard/FriendCard";
import { Link } from "react-router-dom";

const FriendList = props => {
	if (props.friends.length === 0) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="friendListWrap">
			<div className="friendList">
				{props.friends.map(friend => (
					<FriendCard
						key={friend.id}
						{...friend}
						deleteFriend={props.deleteFriend}
						updateFriend={props.updateFriend}
					/>
				))}
			</div>
			<div className="addNavigate">
				<Link to={`/add`} className="addNavButton">
					<button>Add New Friend</button>
				</Link>
			</div>
		</div>
	);
};

export default FriendList;
