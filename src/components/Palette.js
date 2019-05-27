import React from 'react';
import InstaService from '../service/instaservice';
import ErrorMessage from './ErrorMessage';
import Loading from './LoadingSpinner';

export default class extends React.Component {
	state = {
		user: {},
		imgs: [],
		error: false,
		loading: true
	};

	componentDidMount() {
		new InstaService()
			.getAllImages()
			.then(imgs => this.setState({ imgs }))
			.catch(err => this.setState({ error: true }));
		this.setState({ loading: false });
	}

	render() {
		const { error, imgs, loading } = this.state;
		if (error) return <ErrorMessage />;
		else if (loading || !imgs) return <Loading />;

		return (
			<div className="palette">
				{imgs.map(({ src, alt, id }) => (
					<img key={id} alt={alt} src={src} />
				))}
			</div>
		);
	}
}
