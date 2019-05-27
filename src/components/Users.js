import React from 'react';
import User from './User';
import InstaService from '../service/instaservice';
import ErrorMessage from './ErrorMessage';

export default class extends React.Component {
	state = {
		posts: [],
		error: false
	};

	componentDidMount() {
		new InstaService()
			.getAllUsers()
			.then(posts => this.setState({ posts }))
			.catch(err => this.setState({ error: true }));
	}

	render() {
		const { error, posts } = this.state;
		if (error) return <ErrorMessage />;
		return (
			<div className="right">
				{[posts[0] || []].map(({ photo, altname, id }) => (
					<User key={id} src={photo} name={altname} big />
				))}
				<div className="users__block">
					{posts.slice(1).map(({ photo, altname, id }) => (
						<User key={id} src={photo} name={altname} />
					))}
				</div>
			</div>
		);
	}
}
