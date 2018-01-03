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
	' img': {
		border: '1px solid #ddd',
		marginBottom: '1em',
		marginTop: '1em',
		maxWidth: '100%',
	},
});

const titleStyle = css({
	marginTop: '2em',
});

class Page extends Component {
	render() {
		const { pages } = this.props;
		const data = getCurrentData(pages);
		return (
			<div style={{ textAlign: 'left' }}>
				{data &&
					data.content && (
						<div>
							<h1 {...titleStyle}>{data.content.title}</h1>
							<p
								{...style}
								dangerouslySetInnerHTML={{
									__html: data.content.body.replace(/\[\[at\]\]/g, '@').replace(/\[\[dot\]\]/g, '.'),
								}}
							/>
							<Images data={data} />
						</div>
					)}
				{data && <Posts data={data.posts} />}
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
