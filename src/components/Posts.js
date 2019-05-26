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

	render() {
		const { error, posts } = this.state;
		if (error) return <ErrorMessage />;
		return (
			<div className="left">
				{posts.map(e => {
					const { name, altname, photo, src, alt, descr, id } = e;
					return (
						<div key={id} className="post">
							<User src={photo} name={altname} />
							<img src={src} alt={alt} />
							<div className="post__name">{name}</div>
							<div className="post__descr">{descr}</div>
						</div>
					);
				})}
			</div>
		);
	}
}
