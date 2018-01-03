//@flow
import React, { Component } from 'react';
import { css } from 'glamor';

type Props = {
	data: array,
};

const postsStyle = css({
	marginBottom: '4em',
});
const innerContentWrapper = css({
	position: 'relative',
});

const postStyle = css({
	position: 'relative',
	textAlign: 'left',
	paddingBottom: '1.8em',
	' + div': {
		borderTop: '1px solid #eee',
		paddingTop: '3em',
		marginTop: '1em',
	},
});

const scrollToStyle = css({
	cursor: 'pointer',
	position: 'absolute',
	right: 0,
	bottom: 0,
	fontSize: '.9em',
	':after': {
		content: ' ',
		display: 'inline-block',
		width: '0.5em',
		height: '0.5em',
		transform: 'rotate(-45deg)',
		border: '0 solid #555',
		borderWidth: '3px 3px 0 0',
		position: 'relative',
		top: '0.2em',
		marginLeft: '.7em',
	},
	':hover': {
		textDecoration: 'underline',
		opacity: '.8',
	},
});

const titleStyle = css({
	marginTop: '2em',
});

const bodyStyle = css({
	' img': {
		border: '1px solid #ddd',
		maxWidth: '100%',
	},
});
const imageStyle = css({
	marginTop: '1em',
	' img': {
		maxWidth: '100%',
		border: '1px solid #ddd',
	},
});

const dateStyle = css({
	position: 'absolute',
	right: '0',
	top: '0',
});

const scrollToTop = () => {
	window.scrollTo(0, 0);
};

export default class Posts extends Component {
	props: Props;
	render() {
		const { data } = this.props;
		console.log('data', data);
		return (
			<div {...postsStyle}>
				{data &&
					Object.keys(data)
						// .reverse()
						.map(key => {
							const post = data[key];
							return (
								<div {...postStyle} key={key}>
									<div {...innerContentWrapper}>
										<h2 {...titleStyle}>{post.title}</h2>
										<p {...bodyStyle} dangerouslySetInnerHTML={{ __html: post.body }} />
										{post.date && <div {...dateStyle}>{post.date}</div>}
									</div>
									{post.image && (
										<div {...imageStyle}>
											<img src={post.image} />
										</div>
									)}
									<a onClick={scrollToTop} {...scrollToStyle}>
										terug naar boven
									</a>
								</div>
							);
						})}
			</div>
		);
	}
}
