import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
// import { Route } from "react-router-dom";
import FriendList from "./components/FriendList/FriendList";
import FriendAdd from "./components/FriendAdd/FriendAdd";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			name: "",
			age: "",
			email: ""
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then(response => {
				this.setState({ friends: response.data });
			})
			.catch(err => {
				this.setState({ error: err.message });
			});
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addFriend = e => {
		e.preventDefault();
		const newFriend = {
			// id: Date.now(),
			name: this.state.name,
			age: parseInt(this.state.age),
			email: this.state.email
		};
		// this.setState(prevState => ({
		// 	friends: [...prevState.friends, newFriend],
		// 	name: "",
		// 	age: "",
		// 	email: ""
		// }));
		axios
			.post(`http://localhost:5000/friends`, newFriend)
			.then(res => {
				this.setState({ friends: res.data });
			})
			.catch(err => {
				this.setState({ error: err.message });
			});
	};

	deleteFriend = (e, id) => {
		// this.setState(prevState => ({
		// 	friends: prevState.friends.filter(friend => friend.id !== id)
		// }));
		e.preventDefault();
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then(res => {
				this.setState({ friends: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ error: err.message });
			});
	};

	updateFriend = (e, id, updatedFriend) => {
		// this.setState(prevState => ({
		// 	friends: prevState.friends.filter(friend => friend.id !== id)
		// }));
		e.preventDefault();
		axios
			.put(`http://localhost:5000/friends/${id}`, updatedFriend)
			.then(res => {
				this.setState({ friends: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ error: err.message });
			});
	};

	render() {
		return (
			<div>
				<FriendList
					{...this.state}
					deleteFriend={this.deleteFriend}
					updateFriend={this.updateFriend}
					handleChange={this.handleChange}
				/>
				<FriendAdd
					{...this.state}
					handleChange={this.handleChange}
					addFriend={this.addFriend}
				/>
			</div>
		);
	}
}

export default App;
