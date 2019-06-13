import React from "react";

const FriendAdd = props => {
	return (
		<form onSubmit={props.addFriend} className="friendAdd">
			Name:{" "}
			<input
				onChange={props.handleChange}
				name="name"
				placeholder="Enter Name"
				value={props.name}
				type="text"
				className="addElement"
			/>
			Age:{" "}
			<input
				onChange={props.handleChange}
				name="age"
				placeholder="Enter Age"
				value={props.age}
				type="number"
				className="addElement"
			/>
			Email:{" "}
			<input
				onChange={props.handleChange}
				name="email"
				placeholder="Enter Email"
				value={props.email}
				type="email"
				className="addElement"
			/>
			<button>Add Friend</button>
		</form>
	);
};

export default FriendAdd;
