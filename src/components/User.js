import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<a href="#" className={this.props.big ? 'user' : 'user min'}>
				<img src={this.props.src} alt={this.props.name} />
				<div>{this.props.name}</div>
			</a>
		);
	}
}
