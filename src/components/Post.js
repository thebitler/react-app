import React from 'react';
import User from './User';

export default class Header extends React.Component {
	render() {
		return (
			<div className="post">
				<User src={this.props.usersrc} name={this.props.username} big />
				<img src={this.props.src} alt={this.props.alt} />
				<div className="post__name">{this.props.name}</div>
				<div className="post__descr">{this.props.desc}</div>
			</div>
		);
	}
}
