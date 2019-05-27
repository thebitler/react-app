import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Profile from './Profile';
import Loading from './LoadingSpinner';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route path="/" component={Feed} exact />
				<Route path="/profile" component={Profile} exact />
				<Route path="/spinner" component={Loading} exact />
			</div>
		</Router>
	);
}
