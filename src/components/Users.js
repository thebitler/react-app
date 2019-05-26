import React from 'react';
import User from './User';
import InstaService from '../service/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Header extends React.Component {
	InstaService = new InstaService();
	state = {
		posts: [],
		error: false
	};

	componentDidMount() {
		this.InstaService.getAllPosts()
			.then(posts => this.setState({ posts }))
			.catch(err => this.setState({ error: true }));
	}

	renderItems(arr) {
		return arr.map(e => {
			const { photo, altname, id } = e;
			return (
				<div key={id}>
					<User src={photo} name={altname} />
				</div>
			);
		});
	}

	render() {
		const { error, posts } = this.state;
		if (error) return <ErrorMessage />;
		return (
			<div className="right">
				{this.renderItems(posts.reverse().slice(-1))}
				<div className="users__block">{this.renderItems(posts.reverse().slice(1))}</div>
			</div>
		);
	}
}
