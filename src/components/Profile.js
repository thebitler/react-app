import React from 'react';
import User from './User';
import Palette from './Palette';

export default class extends React.Component {
	render() {
		return (
			<div className="container profile">
				<User
					src="https://thequestion.s3.eu-central-1.amazonaws.com/802/599888-be29eb9b.jpeg"
					alt="man"
					name="Рикардо Милос"
					big
				/>

				<Palette />
			</div>
		);
	}
}
