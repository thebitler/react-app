import React from 'react';
import User from './User';
import InstaService from '../service/instaservice';
import ErrorMessage from './ErrorMessage';
import Loading from './LoadingSpinner';

export default class extends React.Component {
	state = {
		posts: [],
		error: false,
		loading: true
	};

	componentDidMount() {
		new InstaService()
			.getAllPosts()
			.then(posts => this.setState({ posts }))
			.catch(err => this.setState({ error: true }));
		this.setState({ loading: false });
	}

	render() {
		const { error, posts, loading } = this.state;
		if (error) return <ErrorMessage />;
		else if (loading || !posts) return <Loading />;

		return (
			<div className="left">
				{posts.map(({ name, altname, photo, src, alt, descr, id }) => (
					<div key={id} className="post">
						<User src={photo} name={altname} />
						<img src={src} alt={alt} />
						<div className="post__name">{name}</div>
						<div className="post__descr">{descr}</div>
					</div>
				))}
			</div>
		);
	}
}
