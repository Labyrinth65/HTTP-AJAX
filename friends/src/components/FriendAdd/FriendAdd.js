import React from "react";
import { Link } from "react-router-dom";

const FriendAdd = props => {
	return (
		<div>
			<Link exact to={`/`} className="toHome">
				<button>Back to List</button>
			</Link>
			<form onSubmit={props.addFriend} className="friendAdd">
				<label htmlFor="name">Name</label>
				<input
					onChange={props.handleChange}
					name="name"
					id="name"
					placeholder="Enter Name"
					value={props.name}
					type="text"
					className="addElement"
				/>
				<label htmlFor="age">Age</label>
				<input
					onChange={props.handleChange}
					name="age"
					id="age"
					placeholder="Enter Age"
					value={props.age}
					type="number"
					className="addElement"
				/>
				<label htmlFor="email">Email</label>
				<input
					onChange={props.handleChange}
					name="email"
					id="email"
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
