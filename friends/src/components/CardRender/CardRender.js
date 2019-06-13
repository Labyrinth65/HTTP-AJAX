import React, { Component } from "react";

export class CardRender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardName: this.props.name,
			cardAge: this.props.age,
			cardEmail: this.props.email
		};
	}

	handleUpdate = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	formSubmit = e => {
		const updatedFriend = {
			name: this.state.cardName,
			age: parseInt(this.state.cardAge),
			email: this.state.cardEmail
		};
		this.props.updateFriend(e, this.props.id, updatedFriend);
		this.props.updateState();
	};

	render() {
		console.log(this.props);
		if (this.props.updating === false) {
			return (
				<div>
					<div className="cardElement">{this.props.name}</div>
					<div className="cardElement">{this.props.age}</div>
					<div className="cardElement">{this.props.email}</div>
				</div>
			);
		} else
			return (
				<div className="updateForm">
					<form>
						<input
							onChange={this.handleUpdate}
							name="cardName"
							placeholder="Enter Name"
							value={this.state.cardName}
							type="text"
							className="cardElement"
						/>
						<input
							onChange={this.handleUpdate}
							name="cardAge"
							placeholder="Enter Age"
							value={this.state.cardAge}
							type="number"
							className="cardElement"
						/>
						<input
							onChange={this.handleUpdate}
							name="cardEmail"
							placeholder="Enter Email"
							value={this.state.cardEmail}
							type="email"
							className="cardElement"
						/>
					</form>
					<button onClick={this.formSubmit}>Submit Update</button>
				</div>
			);
	}
}

export default CardRender;
