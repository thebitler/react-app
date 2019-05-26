import React from 'react';
import User from './User';
// let users = [
// 	{
// 		src: 'https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg',
// 		name: 'Виктор Россия'
// 	},
// 	{
// 		src: 'https://steamuserimages-a.akamaihd.net/ugc/955223864095212196/5E51E3F97ACB5D0419C65329BA942434BF81DA6E/',
// 		name: 'Ольга Вадим'
// 	},
// 	{
// 		src: 'https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg',
// 		name: 'Виктор Россия'
// 	},
// 	{
// 		src: 'https://steamuserimages-a.akamaihd.net/ugc/955223864095212196/5E51E3F97ACB5D0419C65329BA942434BF81DA6E/',
// 		name: 'Ольга Вадим'
// 	},
// 	{
// 		src: 'https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg',
// 		name: 'Виктор Россия'
// 	}
// ];

// function RenederUser(name, src) {
// 	return <User src={name} name={src} big="false"/>;
// }

export default class Header extends React.Component {
	render() {
		return (
			<div className="right">
				<User
					src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
					name="Виктор Россия"
					big
				/>
				<div className="users__block">
					<User
						src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
						name="Виктор Россия"
					/>
					<User
						src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
						name="Виктор Россия"
					/>
					<User
						src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
						name="Виктор Россия"
					/>
					<User
						src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
						name="Виктор Россия"
					/>
					<User
						src="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
						name="Виктор Россия"
					/>
				</div>
			</div>
		);
	}
}
