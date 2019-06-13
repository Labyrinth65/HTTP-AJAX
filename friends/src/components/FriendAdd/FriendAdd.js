import React from "react";
import { Link } from "react-router-dom";

const FriendAdd = props => {
	return (
		<div>
			<Link exact to={`/`} className="toHome">
				<button>Back to List</button>
			</Link>
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
		</div>
	);
};

export default FriendAdd;
