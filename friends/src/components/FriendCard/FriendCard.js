import React, { Component } from "react";
import CardRender from "../CardRender/CardRender";

export class FriendCard extends Component {
	constructor() {
		super();
		this.state = {
			updating: false
		};
	}

	updateState = e => {
		if (this.state.updating === false) {
			this.setState({
				updating: true
			});
		} else {
			this.setState({
				updating: false
			});
		}
	};

	render() {
		return (
			<div className="friendCard">
				<div className="cardElement buttonDiv">
					<div onClick={this.updateState} className="updateButton">
						<i className="far fa-edit" />
					</div>
					<div
						onClick={e => this.props.deleteFriend(e, this.props.id)}
						className="deleteButton"
					>
						<i className="far fa-trash-alt" />
					</div>
				</div>
				{/* <div className="cardElement">{this.props.name}</div>
				<div className="cardElement">{this.props.age}</div>
				<div className="cardElement">{this.props.email}</div> */}
				<CardRender
					{...this.props}
					{...this.state}
					updateFriend={this.props.updateFriend}
					updateState={this.updateState}
				/>
			</div>
		);
	}
}

export default FriendCard;
