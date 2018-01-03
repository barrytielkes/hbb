import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { css } from 'glamor';
import Page from './page';
import Navigation from './navigation';

import { firebaseConnect, dataToJS } from 'react-redux-firebase';

export const logPageView = () => {
	console.log('logPageView', window.location.pathname);
};

const topStyle = css({
	label: 'topStyle',
	height: '150px',
	textAlign: 'center',
	margin: '0 auto',
	marginTop: '20px',
	marginBottom: '10px',
});
const baseStyle = { textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' };

const logoWrapperStyle = css({
	display: 'block',
});
const logoStyle = css({
	margin: 0,
	// marginTop: '20px',
	// marginBottom: '10px',
	// maxWidth: '300px',
});

class App extends Component {
	render() {
		const { pages } = this.props;
		return (
			<div>
				<div {...topStyle}>
					<Link to="/" {...logoWrapperStyle}>
						<img {...logoStyle} src={'/logo.png'} alt="Heart based behaviour, Logo" />
					</Link>
					<Navigation pages={pages} />
				</div>
				<div style={baseStyle}>
					<Route path="/" component={Page} />
				</div>
			</div>
		);
	}
}

export default compose(
	firebaseConnect(['pages']),
	connect(({ firebase }) => {
		console.log('firebase', firebase, dataToJS(firebase, 'pages'));
		return {
			// state.firebase
			pages: dataToJS(firebase, 'pages'),
		};
	})
)(App);
