import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { css } from 'glamor';
import ReactGA from 'react-ga';
import Page from './page';
import Navigation from './navigation';

import { firebaseConnect, dataToJS } from 'react-redux-firebase';

export const logPageView = () => {
	console.log('logPageView', window.location.pathname);
	ReactGA.set({ page: window.location.pathname + window.location.search });
	ReactGA.pageview(window.location.pathname + window.location.search);
};

const baseStyle = { textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' };

const logoWrapperStyle = css({
	display: 'block',
});
const logoStyle = css({
	marginTop: '20px',
	marginBottom: '10px',
	maxWidth: '300px',
});

class App extends Component {
	constructor(props) {
		super(props);
		// console.log('App constructor', ReactGA);
		//ReactGA.initialize('UA-105223473-1');
	}
	render() {
		const { pages } = this.props;
		return (
			<div style={baseStyle}>
				<Link to="/" {...logoWrapperStyle}>
					<img {...logoStyle} src={'/logo.png'} alt="Gino Stuart, Flatland BMX rider from Amsterdam, Logo" />
				</Link>
				<Navigation pages={pages} />
				<Route path="/" component={Page} />
			</div>
		);
	}
}

export default compose(
	firebaseConnect(['pages']),
	connect(({ firebase }) => ({
		// state.firebase
		pages: dataToJS(firebase, 'pages'),
	}))
)(App);
