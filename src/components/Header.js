import React from 'react';
import logo from './../assets/logo.svg';
import { Link } from 'react-router-dom';

class LinkElem extends React.Component {
	render() {
		const { lto, name } = this.props;
		return (
			<li>
				<Link to={lto} className="menu__links">
					{name}
				</Link>
			</li>
		);
	}
}

export default class extends React.Component {
	render() {
		return (
			<header>
				<div className="container h-flex">
					<Link to="/" className="logo">
						<img alt="logo" src={logo} />
					</Link>
					<nav className="links">
						<ul>
							<LinkElem lto="/" name="Лента" />
							<LinkElem lto="/profile" name="Профиль" />
							<LinkElem lto="/spinner" name="Спинер" />
							{/* <LinkElem lto="/users" name="Пользователи" /> */}
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
