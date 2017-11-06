import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { css } from 'glamor';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { getCurrentData } from './utils';
import Posts from './posts';
import Images from './images';

const style = css({
	' hr': {
		borderColor: '#eee',
		marginTop: '2em',
		marginBottom: '1em',
		borderStyle: 'solid',
	},
});

class Page extends Component {
	render() {
		const { pages } = this.props;
		const data = getCurrentData(pages);
		return (
			<div style={{ textAlign: 'center' }}>
				{data &&
					data.content &&
					<div>
						<h1>
							{data.content.title}
						</h1>
						<p {...style} dangerouslySetInnerHTML={{ __html: data.content.body }} />
					</div>}
				{data && <Posts data={data.posts} />}
				<Images data={data} />
			</div>
		);
	}
}

export default compose(
	firebaseConnect([
		'pages', // { path: 'todos' } // object notation
	]),
	connect(({ firebase }) => ({
		// state.firebase
		pages: dataToJS(firebase, 'pages'),
	}))
)(Page);
