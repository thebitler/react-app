import React from 'react';
import logo from './../assets/logo.svg';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container h-flex">
					<a href="#" className="logo">
						<img alt="logo" src={logo} />
					</a>
					<nav className="links">
						<ul>
							<li>
								<a className="menu__links">Лента</a>
							</li>
							<li>
								<a className="menu__links">Профиль</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
