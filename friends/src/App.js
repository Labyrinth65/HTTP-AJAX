import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import FriendList from "./components/FriendList/FriendList";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then(response => {
				console.log(response);
				this.setState({ friends: response.data });
			})
			.catch(err => {
				this.setState({ error: err.response.message });
			});
	}

	render() {
		return (
			<div>
				<FriendList {...this.state} />
			</div>
		);
	}
}

export default App;
